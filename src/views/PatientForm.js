import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import NewForm from '../components/patient/NewForm';

class PatientForm extends Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.addPatient = this.addPatient.bind(this);
  }

  addPatient (data) {
    console.log(data);
    this.setState({ 
      patient: data 
    });
  }

  render () {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="เพิ่มผู้ป่วย" subtitle="New Patient" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">รายละเอียดผู้ป่วย</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <NewForm onSubmit={this.addPatient} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PatientForm;
