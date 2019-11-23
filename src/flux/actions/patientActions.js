import axios from 'axios';

import { Dispatcher, Constants } from '../';

class PatientActions {
  addNewPatient (patient) {
    Dispatcher.dispatch({
      actionType: Constants.ADD_NEW_PATIENT,
      payload: patient
    });

    axios.post('http://mnrhweb.com/api/imc/patient', patient)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAllPatients () {    
    axios.get('http://mnrhweb.com/api/imc/patients')
    .then(res => {
      console.log(res);
      Dispatcher.dispatch({
        actionType: Constants.FETCH_PATIENTS,
        payload: res.data.pager.data
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  getPatientById (pid) {
    Dispatcher.dispatch({
      actionType: Constants.FETCH_PATIENT,
      payload: pid
    });
  }

  getChangwats () {    
    axios.get('http://mnrhweb.com/api/imc/changwats')
    .then(res => {
      console.log(res);
      Dispatcher.dispatch({
        actionType: Constants.FETCH_CHANGWATS,
        payload: res.data.changwats
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  getAmphurs () {    
    axios.get('http://mnrhweb.com/api/imc/amphurs')
    .then(res => {
      console.log(res);
      Dispatcher.dispatch({
        actionType: Constants.FETCH_AMPHURS,
        payload: res.data.amphurs
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  getTambons () {    
    axios.get('http://mnrhweb.com/api/imc/tambons')
    .then(res => {
      console.log(res);
      Dispatcher.dispatch({
        actionType: Constants.FETCH_TAMBONS,
        payload: res.data.tambons
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  getHosps () {    
    axios.get('http://mnrhweb.com/api/imc/hosps')
    .then(res => {
      console.log(res);
      Dispatcher.dispatch({
        actionType: Constants.FETCH_HOSPS,
        payload: res.data.hosps
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  getPcus () {    
    axios.get('http://mnrhweb.com/api/imc/pcus')
    .then(res => {
      console.log(res);
      Dispatcher.dispatch({
        actionType: Constants.FETCH_PCUS,
        payload: res.data.pcus
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  getIcds () {    
    axios.get('http://mnrhweb.com/api/imc/icds')
    .then(res => {
      console.log(res);
      Dispatcher.dispatch({
        actionType: Constants.FETCH_ICDS,
        payload: res.data.icds
      });
    })
    .catch(err => {
      console.log(err);
    })
  }
}

export default new PatientActions;
