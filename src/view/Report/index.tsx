/*
 * @Author: XuYang 
 * @Date: 2021-05-06 10:53:47 
 * @Last Modified by: XuYang
 * @Last Modified time: 2021-05-13 15:57:21
 */
import React from 'react'
import { Card, Col, Row} from 'antd'
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import { Area, Column, Bullet } from '@ant-design/charts';
import './index.scss'

const Report = () => {
    // 销售量曲线图
    const areaConfig = {
        data: [
            {
                year: '1991',
                value: 3,
            },
            {
                year: '1992',
                value: 4,
            },
            {
                year: '1993',
                value: 3.5,
            },
            {
                year: '1994',
                value: 5,
            },
            {
                year: '1995',
                value: 4.9,
            },
            {
                year: '1996',
                value: 6,
            },
            {
                year: '1997',
                value: 7,
            },
            {
                year: '1998',
                value: 9,
            },
            {
                year: '1999',
                value: 13,
            },
        ],
        height: 45,
        padding: [0,-20,0,-20],
        appendPadding: [0,0,0,0],
        xField: 'year',
        yField: 'value',
        legend: false,
        title: null,
        startOnZero: true,
        offsetX: -1,
        alignX: 'left',
        label:{
            style: {
                fill: '#fff'
            }
        },
        xAxis: {
        },
        yAxis:{
            label: null,
            tickLine: null,
            subTickLine: null,
            title: null, 
            grid: null
        }
    }
    // 柱状体
    const columnConfig = {
        data: [
            {
                year: '1991',
                value: 3,
            },
            {
                year: '1992',
                value: 4,
            },
            {
                year: '1993',
                value: 3.5,
            },
            {
                year: '1994',
                value: 5,
            },
            {
                year: '1995',
                value: 4.9,
            },
            {
                year: '1996',
                value: 6,
            },
            {
                year: '1997',
                value: 7,
            },
            {
                year: '1998',
                value: 9,
            },
            {
                year: '1999',
                value: 13,
            },
        ],
        height: 45,
        padding: [0,0,0,0],
        appendPadding: [0,0,0,0],
        xField: 'year',
        yField: 'value',
        legend: false,
        title: null,
        alignX: 'left',
        label:{
            style: {
                fill: '#fff'
            }
        },
        xAxis: {
        },
        yAxis:{
            label: null,
            tickLine: null,
            subTickLine: null,
            title: null, 
            grid: null
        }
    }
    // 子弹图
    const bulletConfig ={
        data: [{
            title: '满意度',
            ranges: [40],
            measures: [80],
            target: 85,
        }],
        measureField: 'measures',
        rangeField: 'ranges',
        targetField: 'target',
        height: 45,
        padding: [0,0,0,0],
        appendPadding: [0,0,0,0],
        xField: 'title',
        legend: false,
        title: null,
        alignX: 'left',
        label:{
            style: {
                fill: '#fff'
            }
        },
        xAxis: {
        },
        yAxis:{
            label: null,
            tickLine: null,
            subTickLine: null,
            title: null, 
            grid: null
        }
    }
    return (
        <div className='report'>
            {/* 第一栏 */}
            <Row gutter={14}>
                {/* 总销售量 */}
                <Col span={6}>
                    <Card
                        bodyStyle={{ padding: '20px 24px 8px' }}
                        hoverable
                    >
                        <Card.Meta title='总销售额' description='¥ 2100000 元'/>
                        <div className='card-content'>
                            <div className='card-content-inner'>
                                <div className='self-item'>
                                    <span>周同比</span>
                                    <span>12%</span>
                                    <CaretUpOutlined style={{color: '#ff0000'}}/>
                                </div>
                                <div className='self-item'>
                                    <span>日同比</span>
                                    <span>11%</span>
                                    <CaretDownOutlined style={{color: '#18ff1f'}}/>
                                </div>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <span>日总销售额</span>
                            <span>￥12,423</span>
                        </div>
                    </Card>
                </Col>
                {/* 访问量 */}
                <Col span={6}>
                    <Card
                        bodyStyle={{ padding: '20px 24px 8px' }}
                        hoverable
                    >
                        <Card.Meta title='访问量' description='8848'/>
                        <div className='card-content'>
                            <div className='card-content-inner'>
                                <Area {...areaConfig}/>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <span>日访问量</span>
                            <span>1,423</span>
                        </div>
                    </Card>
                </Col>
                {/* 支付笔数 */}
                <Col span={6}>
                    <Card
                        bodyStyle={{ padding: '20px 24px 8px' }}
                        hoverable
                    >
                        <Card.Meta title='支付笔数' description='6560'/>
                        <div className='card-content'>
                            <div className='card-content-inner'>
                                <Column {...columnConfig}/>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <span>转化率</span>
                            <span>60%</span>
                        </div>
                    </Card>
                </Col>
                {/* 活动效果 */}
                <Col span={6}>
                    <Card
                        bodyStyle={{ padding: '20px 24px 8px' }}
                        hoverable
                    >
                        <Card.Meta title='运营活动效果' description='78%'/>
                        <div className='card-content'>
                            <div className='card-content-inner'>
                                <Bullet {...bulletConfig}/>
                            </div>
                        </div>
                        <div className='card-footer'>
                            <div className='footer-item'>
                                <div className='self-item'>
                                    <span>周同比</span>
                                    <span>12%</span>
                                    <CaretUpOutlined style={{color: '#ff0000'}}/>
                                </div>
                                <div className='self-item'>
                                    <span>日同比</span>
                                    <span>11%</span>
                                    <CaretDownOutlined style={{color: '#18ff1f'}}/>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            {/* 第二栏 */}
        </div>
    )
}

export default Report;