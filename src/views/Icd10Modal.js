import React, { Component } from "react";
import { Container, Row, Col } from "shards-react";

import BasicModal from '../components/modal/BasicModal';

class Icd10Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };

    this.handleSearchControlChange = this.handleSearchControlChange.bind(this);
  }

  handleSearchControlChange(event) {
    let keyword = event.target.value;
    this.props.submitIcdSearch(keyword);
    this.setState({ keyword: keyword });
  }

  render() {
    const pagination = (
      <nav aria-label="Page navigation example" style={{ margin: '0px' }}>
        <ul className="pagination mb-0">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );

    const content = (
      <div style={{ margin: '0px' }}>
        <Row form>
          <Col md="12" className="form-group">
            <input
              type="text"
              id="keyword"
              name="keyword"
              value={this.state.keyword}
              onChange={this.handleSearchControlChange}
              className="form-control"
              placeholder="Search for ICD10..."
            />
          </Col>
        </Row>
        
        <table className="table table-bordered" style={{ marginBottom: '5px' }}>
          <thead>
            <tr>
              <th className="p-1 text-center">ICD10</th>
              <th className="p-1">Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.icds && this.props.icds.map(icd => (
              <tr key={icd.code}>
                <td className="p-1 text-center">{icd.code}</td>
                <td className="p-1">{icd.name}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {pagination}
      </div>   
    );

    return (
      <BasicModal props={{ id: 'icd10s', title: 'เลือก ICD10', content: content }} />
    );
  }
}

export default Icd10Modal;
