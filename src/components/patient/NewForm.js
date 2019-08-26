import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button
} from "shards-react";

class NewForm extends Component {
  constructor (props) {
    super(props);

    this.initialState = {
      id: '',
      pid: '',
      hn: '',
      cid: '',
      prefix: '',
      fname: '',
      lname: '',
      birthdate: '',
      age: 0,
      sex: 1,
      tel: '',
      address: '',
      road: '',
      moo: '',
      tambon: '',
      amphur: '',
      changwat: '',
      zipcode: ''
    }

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });

    console.log(this.state);
  }

  handleSubmit (event) {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState(this.initialState);
  }

  render () {
    return (
      <ListGroup flush>
        <ListGroupItem className="p-3">
          <Row>
            <Col>
              <Form onSubmit={this.handleSubmit}>
                <Row form>
                  <Col md="4" className="form-group">
                    <label htmlFor="pid">PID</label>
                    <FormInput
                      id="pid"
                      name="pid"
                      type="text"
                      value={this.state.pid}
                      onChange={this.handleChange}
                      placeholder="PID"
                    />
                  </Col>
                  <Col md="4">
                    <label htmlFor="hn">HN</label>
                    <FormInput
                      id="hn"
                      name="hn"
                      type="text"
                      value={this.state.hn}
                      onChange={this.handleChange}
                      placeholder="HN"
                    />
                  </Col>
                  <Col md="4" className="form-group">
                    <label htmlFor="cid">เลขบัตรประชาชน</label>
                    <FormInput 
                      id="cid"
                      name="cid"
                      type="text"
                      value={this.state.cid}
                      onChange={this.handleChange}
                      placeholder="เลขบัตรประชาชน"
                    />
                  </Col>
                </Row>

                <Row form>
                  <Col md="2" className="form-group">
                    <label htmlFor="prefix">คำนำหน้า</label>
                    <FormSelect
                      id="prefix"
                      name="prefix"
                      value={this.state.prefix}
                      onChange={this.handleChange}
                    >
                      <option value="">Choose...</option>
                      <option value="1">ด.ช.</option>
                      <option value="2">ด.ญ.</option>
                      <option value="3">นาย</option>
                      <option value="4">นาง</option>
                      <option value="5">นางสาว</option>
                    </FormSelect>
                  </Col>
                  <Col md="5" className="form-group">
                    <label htmlFor="fname">ชื่อ</label>
                    <FormInput
                      id="fname"
                      name="fname"
                      type="text"
                      value={this.state.fname}
                      onChange={this.handleChange}
                      placeholder="ชื่อ"
                    />
                  </Col>
                  <Col md="5">
                    <label htmlFor="lname">สกุล</label>
                    <FormInput
                      id="lname"
                      name="lname"
                      type="text"
                      value={this.state.lname}
                      onChange={this.handleChange}
                      placeholder="สกุล"
                    />
                  </Col>
                </Row>

                <Row form>
                  <Col md="6" className="form-group">
                    <label htmlFor="birthdate">วันเกิด</label>
                    <FormInput
                      id="birthdate"
                      name="birthdate"
                      type="text"
                      value={this.state.birthdate}
                      onChange={this.handleChange}
                      placeholder="วันเกิด"
                    />
                  </Col>
                  <Col md="3" className="form-group">
                    <label htmlFor="age">อายุ</label>
                    <FormInput
                      id="age"
                      name="age"
                      type="text"
                      value={this.state.age}
                      onChange={this.handleChange}
                      placeholder="อายุ"
                    />
                  </Col>
                  <Col md="3">
                    <label htmlFor="sex">เพศ</label>
                    <FormSelect
                      id="sex"
                      name="sex"
                      value={this.state.sex}
                      onChange={this.handleChange}
                    >
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect>
                  </Col>
                </Row>

                <FormGroup>
                  <label htmlFor="address">ที่อยู่</label>
                  <FormInput
                    id="address"
                    name="address"
                    type="text"
                    value={this.state.address}
                    onChange={this.handleChange}
                    placeholder="ที่อยู่"
                  />
                </FormGroup>

                <Row form>
                  <Col md="10" className="form-group">
                    <label htmlFor="road">ถนน</label>
                    <FormInput
                      id="road"
                      name="road"
                      type="text"
                      value={this.state.road}
                      onChange={this.handleChange}
                      placeholder="ถนน"
                    />
                  </Col>
                  <Col md="2">
                    <label htmlFor="moo">หมู่</label>
                    <FormInput
                      id="moo"
                      name="moo"
                      type="text"
                      value={this.state.moo}
                      onChange={this.handleChange}
                      placeholder="หมู่"
                      />
                  </Col>
                </Row>

                <Row form>
                  <Col md="4" className="form-group">
                    <label htmlFor="changwat">จังหวัด</label>
                    <FormSelect
                      id="changwat"
                      name="changwat"
                      value={this.state.changwat}
                      onChange={this.handleChange}
                    >
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect>
                  </Col>
                  <Col md="4" className="form-group">
                    <label htmlFor="amphur">อำเภอ</label>
                    <FormSelect
                      id="amphur"
                      name="amphur"
                      value={this.state.amphur}
                      onChange={this.handleChange}
                    >
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect>
                  </Col>
                  <Col md="4" className="form-group">
                    <label htmlFor="tambon">ตำบล</label>
                    <FormSelect
                      id="tambon"
                      name="tambon"
                      value={this.state.tambon}
                      onChange={this.handleChange}
                    >
                      <option>Choose...</option>
                      <option>...</option>
                    </FormSelect>
                  </Col>
                </Row>

                <Row form>
                  <Col md="3" className="form-group">
                    <label htmlFor="zipcode">ไปรษณีย์</label>
                    <FormInput
                      id="zipcode"
                      name="zipcode"
                      type="text"
                      value={this.state.zipcode}
                      onChange={this.handleChange}
                      placeholder="รหัสไปรษณีย์"
                    />
                  </Col>
                  <Col md="9" className="form-group">
                    <label htmlFor="tel">โทรศัพท์</label>
                    <FormInput
                      id="tel"
                      name="tel"
                      type="text"
                      value={this.state.tel}
                      onChange={this.handleChange}
                      placeholder="โทรศัพท์ติดต่อ"
                    />
                  </Col>
                </Row>
                
                <Button type="submit">เพิ่มผู้ป่วย</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default NewForm;