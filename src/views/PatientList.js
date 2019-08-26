import React, { Component } from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "shards-react";
import { Link } from 'react-router-dom';

import { Store } from "../flux";

import PageTitle from "../components/common/PageTitle";
import DataTable from '../components/patient/DataTable';

class Patients extends Component {
  constructor (props) {
    super(props);

    this.state = {
      patients: Store.getAllPatients()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount () {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount () {
    Store.removeChangeListener(this.onChange);
  }

  onChange () {
    this.setState({
      ...this.state,
      patients: Store.getAllPatients()
    })
  }

  render () {
    // const borderStyle = { border: '1px solid #000' };

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="ผู้ป่วย" subtitle="Patients" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <Col md="6" className="float-left">
                  <h6 className="m-0">รายละเอียดผู้ป่วย</h6>
                </Col>
                <Col md="6" className="float-right">
                  <Link to="new-patient" className="btn btn-primary m-0 float-right">
                    เพิ่มผู้ป่วย
                  </Link>
                </Col>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <DataTable patients={ this.state.patients } />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Patients;