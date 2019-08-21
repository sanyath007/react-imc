import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import DataTable from '../components/patient/DataTable';

const patients = [
  { 
    id: 1,
    name: 'Ali Kerry',
    age: 21,
    cid: '1300100001001',
    dx: 'I60',
    dxDate: '01/01/2562',
    dchHosp: '10666-รพ.มหาราชนครราชสีมา',
    dchDate: '01/01/2562',
    pcu: '14834-ศูนย์แพทย์ชุมชนเมือง 1 หัวทะเล',
    tel: '080-00099999',
    regDate: '01/01/2562'
  }
]
const Patients = () => (
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
            <h6 className="m-0">รายละเอียดผู้ป่วย</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <DataTable patients={ patients } />
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Patients;
