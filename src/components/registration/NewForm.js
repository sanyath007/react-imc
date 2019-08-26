import React, { Component } from 'react';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormSelect,
  Button
} from "shards-react";

const initialState = {
  id: '',
  pid: '',
  visitCount: 0,
  visitDate: '',
  visitors: [],
  barthelScore: 0,
  impairment: '',
  complication: '',
  isRehab: false,
  visitStatus: 0,
  attachments: []
};

class NewForm extends Component {
  constructor (props) {
    super(props);

    this.state = initialState;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }
  
  handleSubmit (event) {
    event.preventDefault();
    
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.setState({ ...initialState });
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
                    <label htmlFor="pid">PID ผู้ป่วย</label>
                    <FormInput
                      id="pid"
                      name="pid"
                      type="text"
                      value={this.state.pid}
                      onChange={this.handleChange}
                      placeholder="ผู้ป่วย"
                    />
                  </Col>
                  <Col md="5">
                    <label htmlFor="visitCount">วินิจฉัยโรคล่าสุด</label>
                    <FormInput
                      id="visitCount"
                      name="visitCount"
                      type="text"
                      value={this.state.visitCount}
                      onChange={this.handleChange}
                      placeholder="วินิจฉัยโรคล่าสุด"
                    />
                  </Col>
                  <Col md="3" className="form-group">
                    <label htmlFor="visitDate">วันที่เริ่มวินิจฉัย</label>
                    <FormInput 
                      id="visitDate"
                      name="visitDate"
                      type="text"
                      value={this.state.visitDate}
                      onChange={this.handleChange}
                      placeholder="วันที่เริ่มวินิจฉัย"
                    />
                  </Col>
                </Row>

                <Row form>
                  <Col md="9" className="form-group">
                    <label htmlFor="visitors">รพ.แม่ข่ายที่ D/C</label>
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
                  <Col md="3" className="form-group">
                    <label htmlFor="birthdate">วันที่ D/C</label>
                    <FormInput
                      id="birthdate"
                      name="birthdate"
                      type="text"
                      value={this.state.birthdate}
                      onChange={this.handleChange}
                      placeholder="วันที่ D/C"
                    />
                  </Col>
                </Row>

                <Row form>
                  <Col md="9" className="form-group">
                    <label htmlFor="age">PCU ที่รับดูแล</label>
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
                  <Col md="3">
                    <label htmlFor="sex">วันที่รับ Case</label>
                    <FormInput 
                      id="visitDate"
                      name="visitDate"
                      type="text"
                      value={this.state.visitDate}
                      onChange={this.handleChange}
                      placeholder="วันที่รับ Case"
                    />
                  </Col>
                </Row>
                
                <Button type="submit">บันทึก</Button>
              </Form>
            </Col>
          </Row>
        </ListGroupItem>
      </ListGroup>
    );
  }
}

export default NewForm;
