import React, { Component } from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { Link } from 'react-router-dom';

import { Store } from "../flux";

import PageTitle from "../components/common/PageTitle";
import DataTable from '../components/visition/DataTable';

class VisitionList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      visitions: Store.getAllVisitions()
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
      visitions: Store.getAllVisitions()
    })
  }

  render () {
    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="การเยี่ยมบ้าน" subtitle="Home Visition" className="text-sm-left" />
        </Row>

        {/* Default Light Table */}
        <Row>
          <Col>
            <Card small className="mb-4">
              <CardHeader className="border-bottom">
              <Col md="6" className="float-left">
                  <h6 className="m-0">รายละเอียดการเยี่ยมบ้าน</h6>
                </Col>
                <Col md="6" className="float-right">
                  <Link to="new-visition" className="btn btn-primary m-0 float-right">
                    เพิ่มการเยี่ยมบ้าน
                  </Link>
                </Col>
              </CardHeader>
              <CardBody className="p-0 pb-3">
                <DataTable visitions={ this.state.visitions } />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VisitionList;
