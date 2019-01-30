//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

/*
  Generated class for the MedicineAddProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedicineAddProvider {

  data: any;
  db: any;
  remote: any;

  constructor() {
    this.db = new PouchDB('medicine');

    this.remote = 'http://localhost:5984/medicine';

    let options = {
      live: true,
      retry: true,
      continous: true
    };

    this.data.sync(this.remote, options);
  }

}
