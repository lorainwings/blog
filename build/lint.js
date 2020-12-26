require('colors');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const conf = require('../docs/.vuepress/config');

const { themeConfig: { sidebar } } = conf;

const generate = (items, dir) => {
  const ctxArr = [];
  items.forEach(({ title, children }) => {
    const ctx = children.map((c) => `- [${c}](/${dir}${c.replace(/[^\u4e00-\u9fa5\w]+/gi, ($0) => encodeURI($0))}/)`).join('\n');
    ctxArr.push([title, ctx]);
  });
  return ctxArr;
};

const modifyContext = (fullPath, ctxArr) => {
  let ctxOrigin = fs.readFileSync(fullPath, { encoding: 'utf8' });
  ctxArr.forEach(([title, ctx]) => {
    const reg = new RegExp(`(?<=\\> ${title})[^#]+(?=(###|$))`, 'gmi');
    ctxOrigin = ctxOrigin.replace(reg, `\n\r${ctx}\n\r`);
  });
  fs.writeFileSync(fullPath, ctxOrigin);
};

const checkDiff = () => {
  const diff = execSync('git diff --name-only HEAD docs/', { encoding: 'utf8' });
  if (diff) return 1;
  return 0;
};

const main = () => {
  delete require.cache[require.resolve('../docs/.vuepress/config')];
  try {
    const signal = checkDiff();
    if (!signal) return;
    for (const key in sidebar) {
      const items = sidebar[key];
      const dir = key.replace(/[\/\\]/, '');
      const filePath = path.resolve(__dirname, `../docs/${dir}/README.md`);
      const ctxArr = generate(items, dir);
      modifyContext(filePath, ctxArr);
    }
    execSync('yarn lint', { stdio: 'inherit' });
    console.log('💚 ReadMe内容已完成排序!'.green.bold);
  } catch (e) {
    console.log('💔 ReadMe内容排序失败!'.red.bold);
  }
};

main();
