import React, { Component } from 'react';
import { Row, Col, Button } from 'antd'
import error from '@/assets/404.gif'
import './index.css'
import { useNavigate } from 'react-router-dom'

function Error() {
    const navigate = useNavigate()
    const handleGoMain = () => {
        navigate('/home')
    }
    return (
        <div className='box'>
            <div className="app-container">
                <Row>
                    <Col span={12} className="img404">
                        <img src={error} alt="404" className="img-style" />
                    </Col>
                    <Col span={12}>
                        <div style={{ marginLeft: '100px', marginTop: '60px' }}>
                            <h1 className="color-main">哦！！！</h1>
                            <h2 style={{ color: '#606266' }}>对不起，页面不小心丢失了！</h2>
                            <div style={{ color: '#909399', fontSize: '14px' }}>
                                请检查输入的URL是否正确，请点击下面的按钮返回首页或发送错误报告，谢谢。
                            </div>
                            <Button style={{ marginTop: '20px' }} type="primary" shape="round"
                                onClick={handleGoMain}>返回主页</Button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );

}

export default Error;