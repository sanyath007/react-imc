import React from 'react';
import PropTypes from 'prop-types';

const PatientList = ({ patients }) => (
  <table className="table mb-0">
    <thead className="bg-light">
      <tr>
        <th scope="col" className="border-0">
          #
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
          วินิจฉัยโรคล่าสุด
        </th>
        <th scope="col" className="border-0">
          วันที่เริ่มวินิจฉัย
        </th>
        <th scope="col" className="border-0">
          รพ.แม่ข่ายที่ D/C
        </th>
        <th scope="col" className="border-0">
          วันที่ D/C
        </th>
        <th scope="col" className="border-0">
          PCU ที่รับดูแล
        </th>
        <th scope="col" className="border-0">
          เบอร์ติดต่อผู้ป่วย
        </th>
        <th scope="col" className="border-0">
          วันที่รับ Case
        </th>
        <th scope="col" className="border-0">
          Actions
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Ali  Kerry</td>
        <td>21</td>
        <td>1300100001001</td>
        <td>I60</td>
        <td>01/01/2562</td>
        <td>10666-รพ.มหาราชนครราชสีมา</td>
        <td>01/01/2562</td>
        <td>14834-ศูนย์แพทย์ชุมชนเมือง 1 หัวทะเล</td>
        <td>080-00099999</td>
        <td>01/01/2562</td>
        <td>Edit | Delete</td>
      </tr>
    </tbody>
  </table>
);

export default PatientList;
