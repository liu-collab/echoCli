const { spawn } = require('child_process')

const commandSpawn = (...argus) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...argus)
    //输出下载信息
    childProcess.stdout.pipe(process.stdout)
    //输出错误信息
    childProcess.stderr.pipe(process.stderr)
    //监听关闭
    childProcess.on('close', () => {
      resolve()
    })

  }).catch(() => { })
}
module.exports = {
  commandSpawn
}