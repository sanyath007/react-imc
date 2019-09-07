import axios from 'axios';

import { Dispatcher, Constants } from '../';

class PatientActions {
  addNewPatient (patient) {
    Dispatcher.dispatch({
      actionType: Constants.ADD_NEW_PATIENT,
      payload: patient
    });

    axios.post('http://localhost/laravel-mnrhweb/public/imc/patient', patient)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAllPatients () {    
    axios.get('http://localhost/laravel-mnrhweb/public/imc/patients')
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
    axios.get('http://localhost/laravel-mnrhweb/public/imc/changwats')
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
    axios.get('http://localhost/laravel-mnrhweb/public/imc/amphurs')
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
    axios.get('http://localhost/laravel-mnrhweb/public/imc/tambons')
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
}

export default new PatientActions;
