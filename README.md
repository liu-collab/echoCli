# echoCli

## 一款快速搭建 vue3+ts 脚手架的工具

## 下载

```
npm i create-echo-cli
```

## 使用方法

```
echoCli create projectName
```

## 模块已经配置的东西

- 常用的目录文件
- 模板文件对 axios 进行了封装.并且对拦截器进行了三次封装,可以在不同的需求下使用拦截器
- 引入了 Element plus,可以在 global 文件下进行按需引入
- 引入 husky,对代码进行规范提交
- prettier,一键规范代码格式
- vue.config.js
- vuex
- normalize.css

## 添加组件

```
echoCli addcpn name
```

默认添加到 component 文件下,也可以指定文件夹 echoCli addcpn CpnName -d src/components

## 添加路由

```
echoCli addpage name
```

会同时生成路由文件和相对应的组件,路由文件添加到 router 文件下,组件默认添加到 views 文件下
也可以指定文件夹 echoCli addpage name -d src/views

## 拦截器封装

拦截器进行了三次封装,对所有 instance 封装,对单个 instance 封装,对单个请求封装

## 代码提交规范

```
npm run commit
```

## 一键规范代码

```
npm run prettier
```

## echoCli help you fast build vue3+ts cli

## how to install

```
npm i create-echo-cli
```

## build cli

```
echoCli create projectName
```

### it can help you create cli , and cli default instanlled vue3 + ts , I package axios and

## add single cpn component

```
echoCli addcpn cpnName
```

## add cpn and route

```
echoCli addpage  name
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
