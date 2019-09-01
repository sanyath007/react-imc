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
}

export default new PatientActions;
