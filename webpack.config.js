const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
//для оптимиации и разделении 
const optimization = () =>{
    const config ={
        // chunks: ['main','secondPage'],
        splitChunks: {
            chunks: 'all'
        }
      }
      if(isProd){
          config.minimizer = [
              new OptimizeCssAssetsPlugin(),
              new TerserPlugin()
          ]
      }
  return  config
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
//оптимизация для избегания дубирования
const cssLoaders = extra => {
    const loaders = [
        {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr:isDev,
            reloadAll: true
        },
      },'css-loader'];

      if(extra){
          loaders.push(extra)
      }
      return loaders
};

const babelOption = preset =>{
    const opts = {
        presets: [
            '@babel/preset-env'
        ],
        plugins:[
            '@babel/plugin-proposal-class-properties'
        ]
    }

    if(preset){
        opts.presets.push(preset)
    }
    return opts
}

const jsLoaders = ()=> {
const loaders = [{
    loader: 'babel-loader',
    options: babelOption()
}]
if(isDev){
    loaders.push('eslint-loader')
}
return loaders
}

module.exports = {
    //указываем webpack папку в которой находится исходный код
    context:path.resolve(__dirname, 'src'),
    mode: 'development',

    //точка входа можно задавать несколько точек входа и подключать несколько скриптов независимых
   // у примеру нужно подключить чужую библиотеку 
    entry: {
    main:['@babel/polyfill','./main.js'],
    index: ['@babel/polyfill','./index/index.js'],
    secondPage: ['@babel/polyfill', './secondPage/secondPage.js']
   },
  //куда все будет сложено
   output: {
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist')
  },
  resolve:{
      //прописуем пути папок и расширение для импортов чтобы не указывать полные пути
    extensions: ['.js', '.json', '.png'],
    alias: {
        '@models':path.resolve(__dirname, 'src/models'),
        '@':path.resolve(__dirname, 'src'),
    }
  },
  //убераем подключения одинаковых библиотек в разных точках входа
  optimization: optimization(),
  devServer:{
      port: 8080,
      hot: isDev
  },
  devtool: isDev? 'source-map' : '',
  plugins:[
      //указываем файл шаблоном которым будет хтмл страница 
      new HTMLWebpackPlugin({
        filename: 'index.html',  
        template: './index/index.html',
        excludeChunks: ['secondPage'],
          minify: {
            collapseWhitespace: isProd
          }
      }),
      //задаем настройки вторую страницу
      new HTMLWebpackPlugin({
        filename: 'secondPage.html',
        template: './secondPage/secondPage.html',
        excludeChunks: ['index'],
        minify: {
          collapseWhitespace: isProd
        }
    }),

      new CleanWebpackPlugin(),
      //плагин копирует что-то откуда то в папку дист, к примеру изображения которые исп. на странице можно указать целую папку
      new CopyWebpackPlugin([
          {
              from:path.resolve(__dirname, 'src/assets/'),
             
              to:path.resolve(__dirname, 'dist')
          },
      ]),
      new MiniCssExtractPlugin({
          filename: filename('css')
      })
  ],
  module:{
      rules:[
          //подключаем css модуль
          {
            test: /\.css$/,
            use: cssLoaders()
          },
          {
            test: /\.s[ac]ss$/,
            use: cssLoaders('sass-loader')
          },
           //подключаем  модуль картинок
          {
              test: /\.(png|jpg|svg|gif)$/,
              use: ['file-loader']
          },
           //подключаем  модуль шрифтов
          {
           test:  /\.(ttf|woff|woff2|eot)$/, 
           use: ['file-loader']
          },
          {
            test:  /\.xml$/, 
            use: ['xml-loader']
           },
           {
            test:  /\.csv$/, 
            use: ['csv-loader']
           },
           { test: /\.js$/, 
            exclude: /node_modules/, 
            use: jsLoaders()
        },
        //typescript add
        { test: /\.ts$/, 
            exclude: /node_modules/, 
            loader:  {
                loader: 'babel-loader',
                options: babelOption('@babel/preset-typescript')
            }
        },
        { test: /\.jsx$/, 
            exclude: /node_modules/, 
            loader:  {
                loader: 'babel-loader',
                options: babelOption('@babel/preset-react')
            }
        }
      ]
  }
}
