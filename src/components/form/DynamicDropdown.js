import React, { Component } from 'react';
import { Col, FormSelect } from "shards-react";

const DynamicDropdown = ({ data, cSize=4 }) => {

  return (
    <Col md={ cSize }>
      <label htmlFor="sex">Complication</label>
      <FormSelect
        id="sex"
        name="sex"
        value={this.state.sex}
        onChange={this.handleChange}
      >
        <option>Choose...</option>
      </FormSelect>
    </Col>
  );
}

export default DynamicDropdown;
