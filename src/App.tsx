import './App.css';
import React, { Fragment } from "react";
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from "./pages/login";
import Commonview from "./pages/commonview";
import Error from "./pages/error";
import AutnToken from "./components/autnToken"
function App() {
  return (
    <HashRouter>
      {/*只匹配一个，匹配成功就不往下匹配，效率高*/}
      <Routes>
        {/* 重定向到home */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/*   react-router-dom v6写法 ：父/根路径需要指定 * 通配符   */}
        <Route path="/*" element={<AutnToken><Commonview /></AutnToken>}></Route>
        {/* 登录页 */}
        <Route path="/login" element={<Login />}></Route>
        {/*配置404页面*/}
        <Route path="/error404" element={<Error />}></Route>
      </Routes>
    </HashRouter>
  );
}
export default App;


