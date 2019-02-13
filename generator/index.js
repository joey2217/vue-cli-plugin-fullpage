module.exports = (api, options, rootOptions) => {
  const utils = require('./utils')(api)
  // 修改 `package.json` 里的字段
  api.extendPackage({
    dependencies: {
      "vue-fullpage.js": "^0.1.2",
    }
  })
  // 复制并用 ejs 渲染 `./template` 内所有的文件
  api.injectImports(utils.getMain(), `import './plugins/fullpage.js'`)

  api.render({
    './src/plugins/fullpage.js': './templates/src/plugins/fullpage.js',
    './src/App.vue': './templates/src/App.vue'
  })

}