import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Dispatcher, Constants } from '../flux';

import PageTitle from "../components/common/PageTitle";
import NewForm from '../components/registration/NewForm';
import BasicModal from '../components/modal/BasicModal';
import Icd10Modal from './Icd10Modal';

import { Store, PatientActions } from '../flux';
import store from "../flux/store";

class PatientForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hosps: Store.getHosps(),
      pcus: Store.getPcus(),
      icds: Store.getIcds(),
    };

    this.onChange = this.onChange.bind(this);
    this.addRegistration = this.addRegistration.bind(this);
    this.onSubmitIcdSearch = this.onSubmitIcdSearch.bind(this);
  }

  componentWillMount () {
    Store.addChangeListener(this.onChange);
  }

  componentDidMount () {
    PatientActions.getHosps();
    PatientActions.getPcus();
    PatientActions.getIcds();
  }

  componentWillUnmount () {
    Store.removeChangeListener(this.onChange);
  }

  onChange () {
    this.setState({
      ...this.state,
      hosps: Store.getHosps(),
      pcus: Store.getPcus(),
      icds: Store.getIcds(),
    })
  }

  addRegistration (data) {
    console.log(data);
    Dispatcher.dispatch({
      actionType: Constants.ADD_NEW_REGISTRATION,
      payload: data
    });
  }

  onSubmitIcdSearch (keyword) {
    this.setState({ icds: Store.getIcds(keyword) });
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
                <NewForm 
                  hosps={this.state.hosps}
                  pcus={this.state.pcus}
                  onSubmit={this.addRegistration} 
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <BasicModal props={{ id: 'patients', title: 'เลือกผู้ป่วย', content: 'Content are here !!' }} />

        <Icd10Modal icds={this.state.icds} submitIcdSearch={this.onSubmitIcdSearch} />

      </Container>
    )
  }
}

export default PatientForm;
