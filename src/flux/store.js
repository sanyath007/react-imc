import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  patients: [
    { 
      id: 1,
      pid: '00001',
      hn: '0001992',
      cid: '1300200009261',
      prefix: 'Mr.',
      fname: 'Sanya',
      lname: 'Thammawong',
      birthdate: '17/05/1984',
      age: 35,
      sex: 1,
      tel: '0807390254',
      address: '777/529',
      road: '-',
      moo: '8',
      tambon: '300101',
      amphur: '3001',
      changwat: '30',
      zipcode: '30000'
    }
  ],
  registrations: [
    {
      id: 1,
      cid: '1300200009261',
      name: 'Sanya Thammawong',
      age: 35,
      dx: 'I60',
      dxDate: '01/01/2562',
      dchHosp: '10666-รพ.มหาราชนครราชสีมา',
      dchDate: '01/01/2562',
      pcu: '14834-ศูนย์แพทย์ชุมชนเมือง 1 หัวทะเล',
      tel: '080-7390254',
      regDate: '01/01/2562'
    }
  ],
  visitions: [
    {
      id: 1,
      cid: '1300200009261',
      name: 'Sanya Thammawong',
      age: 35,
      visitCount: 1,
      visitDate: '01/01/2562',
      visitors: [],
      barthelScore: 0,
      impairment: 0,
      complication: 0,
      isRehab: false,
      visitStatus: 0,
      attachments: 1,
    }
  ]
};

class Store extends EventEmitter {
  constructor() {
    super();

    this.registerToActions = this.registerToActions.bind(this);
    this.toggleSidebar = this.toggleSidebar.bind(this);

    Dispatcher.register(this.registerToActions.bind(this));
  }

  registerToActions({ actionType, payload }) {
    switch (actionType) {
      case Constants.TOGGLE_SIDEBAR:
        this.toggleSidebar();
        break;
      case Constants.ADD_NEW_PATIENT:
        this.addNewPatient(payload);
        break;
      default:
    }
  }

  toggleSidebar() {
    _store.menuVisible = !_store.menuVisible;
    this.emit(Constants.CHANGE);
  }

  getMenuState() {
    return _store.menuVisible;
  }

  getSidebarItems() {
    return _store.navItems;
  }

  addNewPatient(patient) {
    _store.patients.push(patient);
    this.emit(Constants.CHANGE);
  }

  getAllPatients() {
    return _store.patients;
  }

  getAllRegistrations() {
    return _store.registrations;
  }

  getAllVisitions() {
    return _store.visitions;
  }

  addChangeListener(callback) {
    this.on(Constants.CHANGE, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE, callback);
  }
}

export default new Store();
