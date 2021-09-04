const program = require('commander')

const helpOptions = () => {


  //增加options命令
  program.option('-d --dest <dest>', 'a destination folder, for example: -d /src/components')
  program.option('-f --framework <framework>', 'your frameword')

  program.on('--help', function () {
    console.log("")
    console.log("Other")
    console.log("   other options~")
  })
}
module.exports = helpOptions
