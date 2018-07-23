'use strict'
const path = require('path')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
      // importLoaders:2,
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }
  
  // px自动转rem
  const px2remLoader = {
    loader: 'px2rem-loader',
    options:{
      remUnit:75/2
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader,px2remLoader] : [cssLoader,px2remLoader,postcssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
        publicPath: '../../'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

// glob是webpack安装时依赖的一个第三方模块，还模块允许你使用 *等符号, 例如lib/*.js就是获取lib文件夹下的所有js后缀名的文件
let glob = require('glob')
// 页面模板
let HtmlWebpackPlugin = require('html-webpack-plugin')
// 取得相应的页面路径，src文件夹下的multiple文件夹
let PAGE_PATH = path.resolve(__dirname, '../src/multiple')
// 用于做相应的merge处理
let merge = require('webpack-merge')


//多入口配置
// 通过glob模块读取multiple文件夹下的所有对应文件夹下的js后缀文件，如果该文件存在 , 那么就作为入口处理
exports.entries = function() {
  let entryFiles = glob.sync(PAGE_PATH + '/*.js')
  let map = {}
  entryFiles.forEach((filePath) => {
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    map[filename] = filePath
  })
  return map
}

//多页面输出配置
// 与上面的多页面入口配置相同，读取pages文件夹下的对应的html后缀文件，然后放入数组中
/**
 * @param {string} optional //传 则指定加载某页, 不传则加载所有
*/
exports.htmlPlugin = function(optional) {
    let SRC_PATH = path.resolve(__dirname,'../src')
    let arr = []
    let entryHtml = glob.sync(SRC_PATH + '/index.html')
    let mainfiles = glob.sync(PAGE_PATH + '/*.js')
    mainfiles.forEach((filePath,index)=>{
      let filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
      // console.log(filename)
      if(optional){
        if(filename!==optional) {return}
        let conf = {
          // 模板来源
          template: entryHtml[0],
          // 文件名称
          filename: filename + '.html',
          // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
          chunks: ['manifest', 'vendor', filename],
          inject: true
        }
        if (process.env.NODE_ENV === 'production') {
          conf = merge(conf, {
            minify: {
              removeComments: true,
              collapseWhitespace: true,
              removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
          })
        }
        arr.push(new HtmlWebpackPlugin(conf))
      }else{
        let conf = {
            // 模板来源
            template: entryHtml[0],
            // 文件名称
            filename: filename + '.html',
            // 页面模板需要加对应的js脚本，如果不加这行则每个页面都会引入所有的js脚本
            chunks: ['manifest', 'vendor', filename],
            inject: true
        }
        if (process.env.NODE_ENV === 'production') {
              conf = merge(conf, {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeAttributeQuotes: true
                },
                chunksSortMode: 'dependency'
              })
        }
        arr.push(new HtmlWebpackPlugin(conf))
      }
    })
    return arr
}

