import { EventEmitter } from "events";

import Dispatcher from "./dispatcher";
import Constants from "./constants";
import getSidebarNavItems from "../data/sidebar-nav-items";

let _store = {
  menuVisible: false,
  navItems: getSidebarNavItems(),
  patients: [],
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
      pid: '1300200009261',
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
  ],
  changwats: [],
  amphurs: [],
  tambons: [],
  hosps: [],
  pcus: [],
  icds: [],
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
      case Constants.FETCH_PATIENTS:
        _store.patients = payload;
        this.emit(Constants.CHANGE);
        break;
      case Constants.FETCH_PATIENT:
          this.getPatientById(payload);
          break;
      case Constants.FETCH_CHANGWATS:
          _store.changwats = payload;
          this.emit(Constants.CHANGE);
          break;
      case Constants.FETCH_AMPHURS:
          _store.amphurs = payload;
          this.emit(Constants.CHANGE);
          break;
      case Constants.FETCH_TAMBONS:
          _store.tambons = payload;
          this.emit(Constants.CHANGE);
          break;
      case Constants.FETCH_HOSPS:
          _store.hosps = payload;
          this.emit(Constants.CHANGE);
          break;
      case Constants.FETCH_PCUS:
          _store.pcus = payload;
          this.emit(Constants.CHANGE);
          break;
      case Constants.FETCH_ICDS:
          _store.icds = payload;
          this.emit(Constants.CHANGE);
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
  
  getPatient(pid) {
    return _store.patients[pid];
  }

  getChangwats() {
    console.log(_store.changwats);
    return _store.changwats;
  }

  getAmphurs() {
    console.log(_store.amphurs);
    return _store.amphurs;
  }

  getAmphur(changwat) {
    console.log(_store.amphurs.filter(amp => amp.chw_id === changwat));
    return _store.amphurs.filter(amp => amp.chw_id === changwat);
  }
  
  getTambons() {
    return _store.tambons;
  }
  
  getTambon(amphur) {
    console.log(_store.tambons.filter(tam => tam.amp_id === amphur));
    return _store.tambons.filter(tam => tam.amp_id === amphur);
  }

  getHosps() {
    return _store.hosps;
  }

  getPcus() {
    return _store.pcus;
  }
  
  getIcds() {
    return _store.icds;
  }
  
  getIcds(keyword) {
    console.log(keyword);
    if (keyword === '') return _store.icds;
    return _store.icds.filter(icd => icd.code.indexOf(keyword));
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
