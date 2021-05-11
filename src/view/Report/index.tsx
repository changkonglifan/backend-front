/*
 * @Author: XuYang 
 * @Date: 2021-05-06 10:53:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-11 16:55:27
 */
import React from 'react'
import { Card, Col, Row, Tooltip } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons'
import './index.scss'

const Report = () => {
    return (
        <div className='report'>
            <Row gutter={14}>
                <Col span={6}>
                    <Card
                        bodyStyle={{ padding: '20px 24px 8px' }}
                        hoverable
                    >
                        <Card.Meta title='总销售额' description='¥ 2100000 元'/>
                        <div className='card-content'>
                            <div className='card-content-inner'>
                                <div className='sell-item'>
                                    <span>周同比</span>
                                    <span>12%</span>
                                    <CaretUpOutlined color='#ff0000'/>
                                </div>
                                <div className='sell-item'>
                                    <span>日同比</span>
                                    <span>11%</span>
                                    <CaretUpOutlined color='#18ff1f'/>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <span>日总销售额</span>
                            <span>￥12,423</span>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default Report;