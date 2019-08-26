import { Dispatcher, Constants } from '../flux';

class PatientActions {
  addNewPatient (patient) {
    Dispatcher.dispatch({
      actionType: Constants.ADD_NEW_PATIENT,
      payload: patient
    })
  }
}

export default new PatientActions;
