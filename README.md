# 搭建webpack遇到的问题及解决办法

### 1. 添加.gitignore 文件
有些不需要git管理的文件就写到这个文件里，比如说常见的node_modules，.DS_Store文件，在git add的时候我们不需要把他们提交上去，就放到这个文件里，再git status的时候我们就看不到这些文件了

.gitignore

<pre><code>.DS_Store
node_modules
</code></pre>

直接在本地创建这个文件可能会有问题，可以输入命令行 (如下) 来创建这个文件

<pre><code>echo '' > .gitignore</code></pre>

### 2. webpack.config.js里面不可以用import来引webpack

我的解决办法是(前提:环境里配置了babel-core, babel-loader, babel-preser-es2015)
* 修改webpack.config.js文件名为webpack.config.babel.js
* 创建.babelrc文件

  <pre><code>{ "presets": ["es2015"] } //文件内容</code></pre>
  
* 重新启动webpack

### 3. 生产环境和开发环境

  https://segmentfault.com/a/1190000006952432
  
  
### 4. webpack resolve extensions
  在import js或者其他定义好的文件的时候不用写后缀也可以读取到
  <pre><code>
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
  </code></pre>

### 5. 可以让其他人访问自己本地的代码
    webpack.dev.js里 devServer加上disableHostCheck: true
