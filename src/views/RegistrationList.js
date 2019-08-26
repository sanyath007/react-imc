import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Link } from 'react-router-dom';

import { Store } from "../flux";

import PageTitle from "../components/common/PageTitle";
import DataTable from '../components/registration/DataTable';

class RegistrationList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      registrations: Store.getAllRegistrations()
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
      registrations: Store.getAllRegistrations()
    })
  }

  render () {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="รายการลงทะเบียนผู้ป่วย" subtitle="Registration" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <Col md="6" className="float-left">
                  <h6 className="m-0">รายละเอียดการลงทะเบียนผู้ป่วย</h6>
                </Col>
                <Col md="6" className="float-right">
                  <Link to="new-registration" className="btn btn-primary m-0 float-right">
                    ลงทะเบียนผู้ป่วย
                  </Link>
                </Col>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <DataTable registrations={ this.state.registrations } />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RegistrationList;
