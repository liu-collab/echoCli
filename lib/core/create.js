const program = require("commander");

const {
  createProjectAction,
  addCpnAction,
  addCpnAndRouterAction,
  addStore,
} = require("./action");

const createCommands = () => {
  program
    .command("create <project> [others...]")
    .description("clone a repository into a folder")
    .action(createProjectAction);

  program
    .command("addcpn <name>")
    .description(
      "create cpn into a folder for example:echoCli CpnName -d src/components"
    )
    .action((name) => {
      //获取组件名的写入的文件路径,默认src/components文件下
      addCpnAction(
        name,
        program.dest ||
          program._optionValues.dest ||
          `src/components/${name.toLowerCase()}`
      );
      //program.rawArgs[5]
    });
  program
    .command("addpage <name>")
    .description(
      "create cpn and router into a folder for example:echoCli name -d src/views"
    )
    .action((name) => {
      addCpnAndRouterAction(
        name,
        program.dest ||
          program._optionValues.dest ||
          `src/views/${name.toLowerCase()}`
      );
    });
  program
    .command("addstore <name>")
    .description(
      "create vuex into a folder for example:echoCli  name -d src/store/modules"
    )
    .action((name) => {
      addStore(
        name,
        program.dest ||
          program._optionValues.dest ||
          `src/store/modules/${name.toLowerCase()}`
      );
    });
};

module.exports = createCommands;
