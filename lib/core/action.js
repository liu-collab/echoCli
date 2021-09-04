const { promisify } = require("util"); //node自带将不能使用promise函数转成可以使用promise
const path = require("path");

const download = promisify(require("download-git-repo"));
const open = require("open");

const { vue3Repo } = require("../config/repo-config"); //模板仓库地址
const { commandSpawn } = require("../utils/terminal"); //处理 npm install 命令
const { compile, writeToFile, createDirSync } = require("../utils/utils");
//利用async 转成同步代码
//拉取模板并且进行启动
const createProjectAction = async (project) => {
  console.log("create Loading~");
  //1.clone项目
  await download(vue3Repo, project, { clone: true }).catch(() => {});
  //2.执行npm i
  //win系统判断
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpawn(command, ["install"], { cwd: `./${project}` }).catch(
    () => {}
  );
  //3.npm run serve
  commandSpawn(command, ["run", "serve"], { cwd: `./${project}` }).catch(
    () => {}
  );

  //4.打开浏览器
  open("http://localhost:8080/");
};

const handleEjsFile = async (name, dest, template, fileName) => {
  // 1.获取模块引擎的路径
  const templatePath = path.resolve(__dirname, template);
  const cpnPath =
    dest.replace("router", "views").replace("src", "@") + `/${name}.vue`;
  const routePath = dest.replace("/router", "").replace("src", "");
  const result = await compile(templatePath, {
    name,
    lowerName: name.toLowerCase(),
    cpnPath,
    routePath,
  });

  // 2.写入文件中
  // 判断文件不存在,那么就创建文件
  createDirSync(dest);
  const targetPath = path.resolve(dest, fileName);
  writeToFile(targetPath, result);
};

//添加组件
const addCpnAction = async (name, dest) => {
  handleEjsFile(name, dest, "../template/components.ejs", `${name}.vue`);
};
//添加组件和路由
const addCpnAndRouterAction = async (name, dest) => {
  addCpnAction(name, dest);
  let routerDest = dest.replace("views", "router");
  handleEjsFile(
    name,
    routerDest,
    "../template/vue-router4.js.ejs",
    `${name}.ts`
  );
};
//添加vuex
const addStore = async (name, dest) => {
  handleEjsFile(name, dest, "../template/vue-store.js.ejs", "index.ts");
  handleEjsFile(name, dest, "../template/vue-types.js.ejs", "types.ts");
};

module.exports = {
  createProjectAction,
  addCpnAction,
  addCpnAndRouterAction,
  addStore,
};
