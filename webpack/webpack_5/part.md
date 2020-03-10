# 热更新使用
- 安装 npm install webpack-dev-server --save-dev
## 使用方法
    - 在package.json 添加scripts hmr:webpack-dev-server
    - 在配置文件在的目下运行node_modules/.bin/webpack-dev-server

q1:单纯这样好像没办法满足当前程序结构，修改之后没有reload

# fix
## fix q1
    package.json相关命令里指定配置文件 webpack-dev-server --config config/webpack_5.config.js --hot


