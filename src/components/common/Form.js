import '../../styles/theme-overrides';
import React, { useState } from 'react';
import { FormInput, FormButton } from '../common';
import { Form, Input, Button, InputNumber } from 'antd';
import 'antd/dist/antd.css';
import '../pages/Home/home.css';
import { postOrder } from '../../api/index';
import { getPrice } from '../../api/index';

const ExampleForm = props => {
  const [orderform, setOrderForm] = useState({
    organization_name: '',
    contact_name: '',
    contact_email: '',
    country: '',
    bars_requested: '',
    beneficiaries: '',
    hygiene_description: '',
  });

  const formSubmit = e => {
    e.preventDefault();
    getPrice(orderform);
    postOrder(orderform);
  };

  const onChangeHandler = e => {
    setOrderForm({
      ...orderform,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={formSubmit}>
      <h1>Soap Order Form</h1>
      <Input
        placeholder="organizationName*"
        name="organization_name"
        labelId="Organization Name: "
        value={orderform.organization_name}
        onChange={e => onChangeHandler(e)}
      />

      <Input
        placeholder="contactName*"
        name="contact_name"
        labelId="Name: "
        value={orderform.contact_name}
        onChange={e => onChangeHandler(e)}
      />

      <Input
        placeholder="email*"
        name="contact_email"
        labelId="Email: "
        value={orderform.contact_email}
        onChange={e => onChangeHandler(e)}
      />

      <Input
        placeholder="country*"
        name="country"
        labelId="Country: "
        value={orderform.country}
        onChange={e => onChangeHandler(e)}
      />

      <Input
        placeholder="Description of Hygiene Situation in Community"
        name="hygiene_description"
        labelId="Description of Hygienge"
        value={orderform.hygiene_description}
        onChange={e => onChangeHandler(e)}
      />

      <Input
        placeholder="# of Beneficiaries*"
        name="beneficiaries"
        labelId="Beneficiaries: "
        type="number"
        value={orderform.beneficiaries}
        onChange={e => onChangeHandler(e)}
      />

      <Input
        placeholder="# of Bars Requested*"
        name="bars_requested"
        labelId="bars requested: "
        type="number"
        value={orderform.bars_requested}
        onChange={e => onChangeHandler(e)}
      />
      <Button onClick={formSubmit} type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ExampleForm;
