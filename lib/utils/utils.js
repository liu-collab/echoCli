const ejs = require("ejs");
const path = require("path");
const fs = require("fs");
const compile = (templatePath, data, option = {}) => {
  return new Promise((resolve, reject) => {
    //写入模板内容
    ejs.renderFile(templatePath, { data }, option, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};
const createDirSync = (pathName) => {
  if (fs.existsSync(pathName)) {
    return true;
  } else {
    if (createDirSync(path.dirname(pathName))) {
      fs.mkdirSync(pathName);

      return true;
    }
  }
};

//写入文件
const writeToFile = (path, content) => {
  if (fs.existsSync(path)) {
    console.error("the file already exits ");
  }
  return fs.promises.writeFile(path, content);
};

module.exports = {
  compile,
  writeToFile,
  createDirSync,
};
