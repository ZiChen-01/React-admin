import { useState, useEffect, useRef } from 'react';
import { Button, Form, Input, Col, Row, Select, Table, Modal, Dropdown, Menu, Space, Upload } from 'antd';
import type { UploadProps } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, DownOutlined, UploadOutlined } from '@ant-design/icons';
import './index.css'
import { useNavigate } from 'react-router-dom'
import request from "@/api"
import Addusers from "@/components/users/addusers";


const { Option } = Select;

function Users() {
    let [username, setUsername] = useState<string>('')
    let [sex, setSex] = useState<any>(undefined)
    let [realname, setRealname] = useState<string>('')
    let [phone, setPhone] = useState<string>('')
    let [status, setStatus] = useState<any>(undefined)
    let [pageIndex, setPageIndex] = useState<number>(1)
    const [dataSource, setDataSource] = useState([])
    const [loading, setLoading] = useState<boolean>(false)
    const childRef = useRef<any>(null);

    const columns = [
        {
            title: '用户账号',
            dataIndex: 'username',
            align: "center" as "center",
            key: "username"
        },
        {
            title: '用户姓名',
            align: "center" as "center",
            dataIndex: 'realname',
            key: "realname"
        },
        {
            title: '性别',
            align: "center" as "center",
            dataIndex: 'sex',
            key: "sex",
            render: (data: number) => {
                switch (data) {
                    case 1:
                        return '男'
                    case 2:
                        return '女'
                    default:
                        return data
                }
            }
        },
        {
            title: '生日',
            align: "center" as "center",
            key: "birthday",
            dataIndex: 'birthday'
        },
        {
            title: '手机号码',
            align: "center" as "center",
            dataIndex: 'phone',
            key: "phone",
        },
        {
            title: '机构',
            align: "center" as "center",
            key: "deptName",
            dataIndex: 'deptName'
        },
        {
            title: '状态',
            align: "center" as "center",
            key: "status",
            dataIndex: 'status',
            render: (data: number) => {
                switch (data) {
                    case 1:
                        return '正常'
                    case 2:
                        return '冻结'
                    default:
                        return data
                }
            }
        },
        {
            title: '操作',
            dataIndex: 'action',
            render: (text: any, record: any, index: any) => {
                return (
                    <>
                        <a onClick={() => enti(record)}>编辑</a>
                        <Dropdown overlay={menu}>
                            <a onClick={e => { e.preventDefault() }}>
                                <Space>
                                    更多
                                </Space>
                            </a>
                        </Dropdown>
                    </>
                )
            }
        }

    ];
    const menu = (
        <Menu
            items={[
                {
                    label: (<a> 详情</a>),
                    key: '1',
                },
                {
                    label: (<a> 密码</a>),
                    key: '2',
                },
                {
                    label: (<a> 删除</a>),
                    key: '3',
                },
            ]}
        />
    )
    // 编辑
    const enti = (e: any) => {
        childRef.current.setIsModalVisible(true)
        childRef.current.entiForm(e)
        childRef.current.queryUserRole()
        childRef.current.getDeptTree()
        childRef.current.setShowEle(false)
    }
    // 添加用户
    const onAdduser = () => {
        childRef.current.setIsModalVisible(true)
        childRef.current.queryUserRole()
        childRef.current.getDeptTree()
        childRef.current.setShowEle(true)
    };
    useEffect(() => {
        getUserlist()
    }, [pageIndex])

    // 重置
    const onReset = () => {
        setUsername('')
        setSex('')
        setRealname('')
        setPhone('')
        setStatus('')
        setPageIndex(1)
        username = ''
        sex = undefined
        realname = ''
        phone = ''
        status = undefined
        pageIndex = 1
        getUserlist()
    }
    // 获取列表
    const getUserlist = async () => {
        setLoading(true)
        let params: object = {
            username,
            sex,
            realname,
            phone,
            status,
            pageIndex,
            pageSize: 10
        }
        const res: any = await request.getUserList(params)
        if (res.data.code == 0) {
            setDataSource(res.data.result.records)
        }

        setLoading(false)
    }
    //上传文件
    const props: UploadProps = {
        name: 'file',
        multiple: false,
        showUploadList: false,
        accept: ".xlsx,",
        customRequest: async (file) => {
            const res: any = await request.upLoadFileNew('sys/iseInfo/issueImport', { file })
            if (res?.data?.code == 200) { }
        },
    };
    return (
        <> <Row gutter={16}>
            <Col span={5}>
                <Form.Item label="账号">
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="请输入账号！" />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item label="性别">
                    <Select defaultValue={sex} value={sex} onChange={(e) => {
                        setSex(e)
                    }} placeholder='请选择性别！' >
                        <Option value="1">男</Option>
                        <Option value="2">女</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item label="真实名字">
                    <Input value={realname} placeholder='请输入真实名字！' onChange={(e) => setRealname(e.target.value)} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item label="手机号码">
                    <Input value={phone} placeholder='请输入手机号码！' onChange={(e) => setPhone(e.target.value)} />
                </Form.Item>
            </Col>
            <Col span={5}>
                <Form.Item label="用户状态">
                    <Select defaultValue={status} value={status} onChange={(e) => {
                        setStatus(e)
                    }} placeholder='请选择用户状态！' >
                        <Option value="1">正常</Option>
                        <Option value="2">冻结</Option>
                    </Select>
                </Form.Item>
            </Col>
            <Col span={5}>
                <Button type="primary" icon={<SearchOutlined />} onClick={getUserlist}>
                    查询
                </Button>
                <Button type="primary" icon={<ReloadOutlined />} onClick={onReset} style={{ marginLeft: '10px' }}>
                    重置
                </Button>
            </Col>
        </Row>
            <Row gutter={16} className="buttonbox">
                <Button type="primary" icon={<PlusOutlined />} onClick={onAdduser}>
                    添加用户
                </Button>
                <Upload {...props}>
                    <Button icon={<UploadOutlined />}>上传文件</Button>
                </Upload>
            </Row>
            <Table rowKey={(row: any) => row.id} dataSource={dataSource} columns={columns} loading={loading} />;
            <Addusers ref={childRef} getlist={getUserlist} />
        </>
    );
}

export default Users;

