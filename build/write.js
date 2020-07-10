require('colors');
const fs = require('fs');
const path = require('path');
const fuzzy = require('fuzzy');
const readline = require('readline');
const inquirer = require('inquirer');
const autocomplete = require('inquirer-autocomplete-prompt');

inquirer.registerPrompt('autocomplete', autocomplete);
const conf = require('../docs/.vuepress/config');

const promisify = (fn) => (...args) => new Promise((resolve, reject) => {
  args.push((err, result) => {
    if (err) reject(err);
    resolve(result);
  });
  fn(...args);
});

const renderMap = () => {
  const { themeConfig: { nav, sidebar } } = conf;
  const maps = {
    navList: [],
    navMap: {},
    sideLinks: {}
  };
  maps.navList = nav.map((item) => {
    const { text, link } = item;
    if (text === 'Github') return;
    maps.navMap[text] = link;
    maps.sideLinks[link] = { titles: [], point: {} };
    if (!sidebar[link]) return;
    maps.sideLinks[link].titles = sidebar[link].map(({ title, children }) => {
      const { point } = maps.sideLinks[link];
      if (!point[title]) point[title] = children;
      return title;
    });
    return text;
  });
  return maps;
};

const select = async (options, message = '请选择新建在哪一个分类(可上下选择或者输入关键词)?') => {
  const target = await inquirer.prompt([{
    type: 'autocomplete',
    name: 'name',
    pageSize: 40,
    message,
    source(ans, input = '') {
      return new Promise((resolve) => {
        setTimeout(() => {
          const fuzzyResult = fuzzy.filter(input, options);
          resolve(fuzzyResult.map((el) => el.original));
        }, 100);
      });
    }
  }
  ]);
  return { key: target.name };
};

const readSyncByRl = (tips) => {
  tips = tips || '> ';
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(tips, (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
};

const collectInput = async (prompt, name) => readSyncByRl(prompt).then(async (input) => {
  if (input === '') {
    return collectInput(`===== ${name}为空,请重新输入：=====\n`, name);
  }
  console.log(`你输入的${name}为:${input}`.bold);
  return input;
});

const initAsk = async () => {
  const ques = ['仅开启服务', '新建文章并开启服务'];
  const mesg = '请选择开启服务的方式?';
  const { key } = await select(ques, mesg);
  if (key === ques[0]) return 0;
  return 1;
};

const initName = async () => {
  const name = await collectInput('请输入新文章的文件名:\n', '新文章的文件名');
  return name;
};

const initConf = async (name) => {
  const { navList, navMap, sideLinks } = renderMap();
  const { key: navTitle } = await select(navList.slice(0, -1));
  const navKey = navMap[navTitle];
  const { titles, point } = sideLinks[navKey];
  const { key: sideTitle } = await select(titles);
  point[sideTitle].push(name);
  return navKey;
};

const initCreate = (name, key) => {
  const fullPath = path.resolve(__dirname, `../docs${key}${name}.md`);
  return new Promise((resolve, reject) => {
    fs.writeFile(fullPath, `# ${name}`, 'utf8', (err) => {
      if (err) reject(err);
      resolve(name);
    });
  });
};

const modifyConf = async () => {
  const confPath = path.resolve(__dirname, '../docs/.vuepress/config.js');
  const { themeConfig: { sidebar } } = conf;
  const readFile = promisify(fs.readFile);
  const writeFile = promisify(fs.writeFile);
  const data = await readFile(confPath);
  const content = data.toString().replace(/(?<=,[\n\r\s]+)"?sidebar"?[\s\S]*(?=,[\n\r\s]+lastUpdated)/gmi, `sidebar: ${JSON.stringify(sidebar, null, 4)}`);
  await writeFile(confPath, content, 'utf8');
};

const main = async () => {
  try {
    const act = await initAsk();
    if (!act) return;
    const name = await initName();
    const key = await initConf(name);
    await initCreate(name, key);
    await modifyConf();
    console.log('💚 文章已创建成功!'.green.bold);
  } catch (e) {
    console.log('💔 文章创建失败!'.red.bold);
  }
};

main();
