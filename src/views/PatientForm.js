import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import { Store, PatientActions } from "../flux";

import PageTitle from "../components/common/PageTitle";
import NewForm from '../components/patient/NewForm';
import BasicModal from '../components/modal/BasicModal';

class PatientForm extends Component {
  constructor (props) {
    super(props);

    this.state = {
      changwats: Store.getChangwats(),
      amphurs: Store.getAmphurs(),
      tambon: Store.getTambons(),
    };

    this.onChange = this.onChange.bind(this);
    this.onSelectedChangwat = this.onSelectedChangwat.bind(this);
    this.onSelectedAmphur = this.onSelectedAmphur.bind(this);
    this.addPatient = this.addPatient.bind(this);
  }

  componentWillMount () {
    Store.addChangeListener(this.onChange);
  }

  componentDidMount () {
    PatientActions.getChangwats();
    PatientActions.getAmphurs();
    PatientActions.getTambons();
  }

  componentWillUnmount () {
    Store.removeChangeListener(this.onChange);
  }

  onChange () {
    this.setState({
      ...this.state,
      changwats: Store.getChangwats(),
      amphurs: Store.getAmphurs(),
      tambon: Store.getTambons(),
    })
  }

  onSelectedChangwat (chw) {
    console.log(chw);
    this.setState({
      ...this.state,
      amphurs: Store.getAmphur(chw)
    })
  }
  
  onSelectedAmphur (amp) {
    console.log(amp);
    this.setState({
      ...this.state,
      tambons: Store.getTambon(amp)
    })
  }

  addPatient (data) {
    console.log(data);
    PatientActions.addNewPatient(data);
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
                <NewForm 
                  onSubmit={this.addPatient}
                  changwats={this.state.changwats}
                  amphurs={this.state.amphurs}
                  tambons={this.state.tambons}
                  onSelectedChangwat={this.onSelectedChangwat}
                  onSelectedAmphur={this.onSelectedAmphur}
                />

              </CardBody>
            </Card>
          </Col>
        </Row>

        <BasicModal show={true} />
        
      </Container>
    )
  }
}

export default PatientForm;
