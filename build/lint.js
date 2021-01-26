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

const modifyContext = (fullPath, ctxArr, key) => {
  let ctxOrigin = fs.readFileSync(fullPath, { encoding: 'utf8' });
  const map = {
    '/skills/': '# 前端技术\n\n本版块主要记录前端相关知识的分类, 以下是目录\n\n ## 目录\n\n',
    '/algorithm/': '# 计算机基础\n\n本篇记录`设计模式`和`数据结构算法`相关知识,以下是所有目录\n\n ## 目录\n\n',
    '/life/': '# 其他记录\n\n此处空空如也\n\n ## 目录\n\n'
  };
  ctxOrigin = ctxArr.reduce((content, [title, ctx]) => `${content}###${title}\n\r${ctx}\n\r`, map[key]);
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
      modifyContext(filePath, ctxArr, key);
    }
    execSync('yarn lint', { stdio: 'inherit' });
    console.log('💚 ReadMe内容已完成排序!'.green.bold);
  } catch (e) {
    console.log('💔 ReadMe内容排序失败!'.red.bold);
  }
};

main();
