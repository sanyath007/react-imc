import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
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
          <PageTitle sm="4" title="การลงทะเบียนผู้ป่วย" subtitle="Registration" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
                <h6 className="m-0">รายละเอียดผู้ป่วย</h6>
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
