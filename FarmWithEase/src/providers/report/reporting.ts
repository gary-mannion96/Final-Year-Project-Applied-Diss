import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the TaggingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ReportingProvider {

  data: any;

    constructor(public http: Http) {
      this.data = null;
    }

    getReports(){

      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {

        this.http.get('http://localhost:8080/api/reports').map(res => res.json()).subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });

    }

    createReports(report){

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/reports', JSON.stringify(report), {headers: headers})
        .subscribe(res => {
          console.log(res.json());
        });

    }

    deleteAis(id){

      this.http.delete('http://localhost:8080/api/reports/' + id).subscribe((res) => {
        console.log(res.json());
      });

    }

}
