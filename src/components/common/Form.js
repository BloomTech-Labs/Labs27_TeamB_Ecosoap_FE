import '../../styles/theme-overrides';
import React from 'react';
import { FormInput, FormButton } from '../common';
import { Form, Input, Button, InputNumber } from 'antd';
import 'antd/dist/antd.css';

export const exampleForm = () => {
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <Input
        placeholder="organizationName*"
        name="organizationName"
        labelId="Organization Name: "
      />
      <Input
        placeholder="organizationWebsite"
        name="organizationWebsite"
        labelId="Website: "
      />
      <Input placeholder="contactName*" name="name" labelId="Name: " />
      <Input
        placeholder="soapNumber*"
        name="soapnumber"
        labelId="Number of Soap drop: "
      />
      <Input placeholder="contactPhone*" name="phone" labelId="Phone: " />
      <Input placeholder="email*" name="email" labelId="Email: " />
      <Input placeholder="address" name="address" labelId="Address: " />
      <Input placeholder="country*" name="country" labelId="Country: " />
      <Input.TextArea placeholder="Comment" />
      <Input.TextArea placeholder="Description of Hygiene Situation in Community:" />
      <Form.Item
        name={['user', 'age']}
        label="Age"
        rules={[{ type: 'number', min: 0, max: 99 }]}
      >
        <InputNumber />
      </Form.Item>
      {/* <textarea placeholder="numberofBeneficiaries" name="numberofBeneficiaries" labelId="Number of Beneficiaries drop: " /> */}

      <Button type="primary">Submit</Button>
    </Form>
  );
};

export const antForm = () => {
  const layout = {
    wrapperCol: { offset: 4, span: 8 },
  };

  return (
    <Form onFinish={this.handleSubmit}>
      <Form.Item label="My Input">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default exampleForm;
