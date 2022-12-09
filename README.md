# 蚂蚁大数据监控系统

react-ant-admin  蚂蚁大数据监控系统

## 参考图

登录页：

<img src="https://img-blog.csdnimg.cn/9fccb2e3e8c54923ade7cdf4c98091f1.png"/>

首页：

<img src="https://img-blog.csdnimg.cn/e790820af1514b509502ac2168aa4e72.png"/>

用户管理：

<img src="https://img-blog.csdnimg.cn/3941b877867146b394aa5b8b632d771f.png"/>

## 前端技术栈

- react@18
- antd@4.22
- react-dom@18
- react-redux@8.0
- react-router-dom@6.3
- react-scripts@5.0
- react-Hooks
- typescript@4.7
- webpack
- nodejs
- less
- axios
- ES6
- npm/yarn

## 版本
- node v14.3.0    
- npm v6.14.5
- react-scripts v5.0.1

## 目录说明

`api` 请求与接口配置文件

-  config ：请求方式
-  index：接口配置
-  request：请求配置 拦截器

`assets` 静态资源文件

`components` 组件文件

- autnToken：路由拦截 token处理

`pages`  view视图页面

- Commonview 入口组件

`router`  路由菜单

`utils`  工具库

`App.css`  全局主题配色

`App.tsx`  入口根组件

## 运行打包

- git仓库

  ```
  https://gitee.com/jiangsihan/react-admin
  ```

- 安装依赖包

  ```
  npm i  |  cnpm i 
  ```

- 项目启动

  ```
  开发环境：npm start
  测试环境：npm start:test
  生产环境：npm start:pro
  ```

- 项目打包

  ```
  开发环境：npm run build
  测试环境：npm start:test
  生产环境：npm start:pro
  ```

## 全局环境配置

- 根目录

    ` .env`   全局默认配置文件，无论什么环境都会加载合并。 

    `.env.development`   开发环境的配置文件 

    `.env.test`  测试环境的配置文件 

    `.env.production`  生产环境的配置文件







项目构建日期：2022/08/14

18307106535@163.com

ZiChen-Jiang 江子辰