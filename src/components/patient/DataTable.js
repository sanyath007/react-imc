import React from 'react';
import PropTypes from 'prop-types';

const DataTable = ({ patients, pager }) => {
  return (
    <div style={{ height: '400px' }}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col" className="border-0 text-center" style={{ width: '3%' }}>#</th>
            <th scope="col" className="border-0 text-center" style={{ width: '8%' }}>PID</th>
            <th scope="col" className="border-0 text-center" style={{ width: '8%' }}>HN</th>
            <th scope="col" className="border-0" style={{ width: '20%' }}>ชื่อ-สกุล</th>
            <th scope="col" className="border-0 text-center" style={{ width: '5%' }}>อายุ</th>
            <th scope="col" className="border-0 text-center" style={{ width: '12%' }}>เลขบัตรประชาชน</th>
            <th scope="col" className="border-0 text-center" style={{ width: '10%' }}>เบอร์โทรติดต่อ</th>
            <th scope="col" className="border-0">ที่อยู่</th>
            <th scope="col" className="border-0 text-center" style={{ width: '6%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients && patients.map(patient => (
            <tr key={patient.id}>
              <td className="text-center">{patient.id}</td>
              <td className="text-center">{patient.pid}</td>
              <td className="text-center">{patient.hn}</td>
              <td>{patient.fname + ' ' + patient.lname}</td>
              <td className="text-center">{patient.ageY}</td>
              <td className="text-center">{patient.cid}</td>
              <td className="text-center">{patient.tel}</td>
              <td>{patient.address}</td>
              <td className="text-center">
                <a style={{ cursor: 'pointer' }}>
                  <i className="material-icons text-warning">edit</i>
                </a>
                <a style={{ cursor: 'pointer' }}>
                  <i className="material-icons text-danger">delete</i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div>
        <ul className="pagination justify-content-end m-2">
          <li className="page-item">
            <a className="page-link" href={pager.prev_page_url} aria-label="Previous">
              Previous
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={pager.first_page_url} aria-label="First">
              First
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#" aria-label="1">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="2">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="3">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="...">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={pager.next_page_url} aria-label="Next">
              Next
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={pager.last_page_url} aria-label="Last">
              Last
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DataTable;
