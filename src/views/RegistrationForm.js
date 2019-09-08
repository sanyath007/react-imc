import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Dispatcher, Constants } from '../flux';

import PageTitle from "../components/common/PageTitle";
import NewForm from '../components/registration/NewForm';
import BasicModal from '../components/modal/BasicModal';

class PatientForm extends Component {
  constructor (props) {
    super(props);

    this.state = {};

    this.addRegistration = this.addRegistration.bind(this);
  }

  addRegistration (data) {
    console.log(data);
    Dispatcher.dispatch({
      actionType: Constants.ADD_NEW_REGISTRATION,
      payload: data
    });
    this.setState({ data });
  }

  render () {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="ลงทะเบียนผู้ป่วย" subtitle="Register" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">แบบฟอร์มลงทะเบียนผู้ป่วย</h6>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <NewForm onSubmit={this.addRegistration} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <BasicModal show={true} title={'เลือกผู้ป่วย'} content={'Content are here !!'} />

      </Container>
    )
  }
}

export default PatientForm;
