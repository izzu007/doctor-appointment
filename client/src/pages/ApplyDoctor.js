import React from 'react';
import Layout from '../components/Layout';
import { Col, Form, Row, Input, TimePicker } from 'antd';

const ApplyDoctor = () => {
    //
    const handleFinish = (values) => {
        console.log(values)
    }
  return (
    <Layout>
        <h1 className='text-center'>ApplyDoctor</h1>
        <Form layout="vertical" onFinish={handleFinish} className='m-3'>
            <h4>Personal Details: </h4>
            <Row gutter={20}>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="First Name" name="firstname" required rules={[{required: true}]}>
                        <Input type="text" placeholder="Enter Your Firstname" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Last Name" name="lastname" required rules={[{required: true}]}>
                        <Input type="text" placeholder="Enter Your Lastname" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Phone No" name="phone" required rules={[{required: true}]}>
                        <Input type="text" placeholder="Enter Your Phone Number" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Email" name="email" required rules={[{required: true}]}>
                        <Input type="email" placeholder="Enter Your Email" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Website" name="website" >
                        <Input type="text" placeholder="Enter Your Website" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Address" name="address" required rules={[{required: true}]}>
                        <Input type="text" placeholder="Enter Your Address" />
                    </Form.Item>
                </Col>
            </Row>
            <h4>Professional Details: </h4>
            <Row gutter={20}>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Specialization" name="specialization" required rules={[{required: true}]}>
                        <Input type="text" placeholder="Enter Your specialization" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Experience" name="experience" required rules={[{required: true}]}>
                        <Input type="text" placeholder="Enter Your Experience" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Fee Per Consultation" name="feesPerConsultation" required rules={[{required: true}]}>
                        <Input type="text" placeholder="Enter Your Consultation Fee" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item label="Timings" name="timings" required rules={[{required: true}]}>
                        <TimePicker.RangePicker />
                    </Form.Item>
                </Col>
            </Row>
            <div className='d-flex justify-content-end'>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </div>
        </Form>
       
    </Layout>
  )
}

export default ApplyDoctor