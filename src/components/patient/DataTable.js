import React from 'react';
import PropTypes from 'prop-types';

const DataTable = ({ patients }) => (
  <table className="table mb-0">
    <thead className="bg-light">
      <tr>
        <th scope="col" className="border-0">
          #
        </th>
        <th scope="col" className="border-0">
          PID
        </th>
        <th scope="col" className="border-0">
          HN
        </th>
        <th scope="col" className="border-0">
          ชื่อ-สกุล
        </th>
        <th scope="col" className="border-0">
          อายุ
        </th>
        <th scope="col" className="border-0">
          เลขบัตรประชาชน
        </th>
        <th scope="col" className="border-0">
          เบอร์โทรติดต่อ
        </th>
        <th scope="col" className="border-0">
          ที่อยู่
        </th>
        <th scope="col" className="border-0">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      {patients.map(patient => (
        <tr key={patient.id}>
          <td>{patient.id}</td>
          <td>{patient.pid}</td>
          <td>{patient.hn}</td>
          <td>{patient.fname + ' ' + patient.lname}</td>
          <td>{patient.age}</td>
          <td>{patient.cid}</td>
          <td>{patient.tel}</td>
          <td>{patient.address}</td>
          <td className="text-center">
            <i className="material-icons">edit</i>
            <i className="material-icons">delete</i>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
