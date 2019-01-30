//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';

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

    this.data.allDocs(this.remote, options);
  }

  getMedicine(){
    if(this.data){
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.db.allDocs({

        include_docs: true
      }).then((result) => {
        this.data = [];

        result.rows.map((row) => {
          this.data.push(row.doc);
        });

        resolve(this.data);

        this.db.changes({live:true, since: 'now', include_docs: true}).on('change', (change) => {
          this.handleChange(change);
        });
      }).catch((error) => {
        console.log(error);
      });
    });
  }

  handleChange(change){
    let changedDoc = null;
    let changedIndex = null;

    this.data.forEach((doc, index) => {

      if(doc._id === change.id){
        changedDoc = doc;
        changedIndex = index;
      }

    });

    // Delete
    if(change.deleted){
      this.data.splice(changedIndex, 1);
    }
    else {

    // Update
    if(changedDoc){
      this.data[changedIndex] = change.doc;
    }

    // Added
    else {
      this.data.push(change.doc);
    }

    }

  }

  createMedicine(medicine){
    this.db.post(medicine);
  }

  deleteMedicine(medicine){
    this.db.remove(medicine).catch(Error); {
      console.log(Error);
    }
  }

}
