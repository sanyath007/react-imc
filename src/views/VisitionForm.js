import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Dispatcher, Constants } from '../flux';

import PageTitle from "../components/common/PageTitle";
import NewForm from '../components/visition/NewForm';

class PatientForm extends Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.addVisition = this.addVisition.bind(this);
  }

  addVisition (data) {
    console.log(data);
    Dispatcher.dispatch({
      actionType: Constants.ADD_NEW_VISITION,
      payload: data
    });
    this.setState({ patient: data });
  }

  render () {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="เพิ่มการเยี่ยมบ้าน" subtitle="New Visition" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">รายละเอียดการเยี่ยมบ้าน</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <NewForm onSubmit={this.addVisition} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PatientForm;
