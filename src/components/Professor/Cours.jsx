
import React from 'react'
import { Card, Col, Row } from 'antd';


export const Cours = ()=>{

    return(
        <div className="site-card-wrapper">
            <Row gutter={16}>
      <Col span={8} style={{paddingBottom:"20px"}}>
        <Card title="label of cours " bordered={false}>
            content
        </Card>
      </Col>
      <Col span={8} style={{paddingBottom:"20px"}} >
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8} style={{paddingBottom:"20px"}}>
        <Card title="label of cours " bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8} style={{paddingBottom:"20px"}}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8} style={{paddingBottom:"20px"}}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
        </div>
    )
}