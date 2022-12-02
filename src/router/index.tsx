import React, { ReactNode, lazy } from "react";
import type { MenuProps } from 'antd';


import { UserOutlined, HomeOutlined, MenuUnfoldOutlined, PieChartOutlined, BellOutlined, UsergroupAddOutlined, DesktopOutlined, SlidersOutlined } from '@ant-design/icons';
//导入组件
import Home from "@/pages/home/index";
import Users from "@/pages/system/users";
import DeptNew from "@/pages/system/deptNew"
import Amap from "@/pages/amap"
import Problem from "@/pages/problem"
import RoleUserList from "@/pages/system/roleUserList"
import Statistics from "@/pages/statistics"


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: string,//路由名字
    key: string,//路由 url
    element: ReactNode,//路由组件
    icon?: ReactNode, //icon
    children?: any | null,//子级
    type?: 'group',
    disabled?: boolean,//是否禁用
): any {
    return {
        label,
        key,
        element,
        icon,
        children,
        type,
        disabled
    } as MenuItem;
}

const routes: any = [
    getItem('首页', '/home', <Home />, <HomeOutlined />),
    getItem('高德地图', '/amap', <Amap />, <SlidersOutlined />),
    getItem('监控数据', '/problem', <Problem />, <BellOutlined />),
    getItem('统计管理', '/statistics', <Statistics />, <PieChartOutlined />),
    getItem('系统管理', '/system', null, <MenuUnfoldOutlined />, [
        getItem('用户管理', '/system/users', <Users />, <UserOutlined />),
        getItem('角色管理', '/system/roleUserList', <RoleUserList />, <UsergroupAddOutlined />),
        getItem('机构查询', '/system/deptNew', <DeptNew />, <DesktopOutlined />),
    ]),
]

export { routes }