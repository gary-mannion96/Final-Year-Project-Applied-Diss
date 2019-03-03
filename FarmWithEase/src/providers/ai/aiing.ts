import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the TaggingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AiingProvider {

  data: any;

    constructor(public http: Http) {
      this.data = null;
    }

    getAis(){

      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {

        this.http.get('http://localhost:8080/api/ais').map(res => res.json()).subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });

    }

    createAis(ai){

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/ais', JSON.stringify(ai), {headers: headers})
        .subscribe(res => {
          console.log(res.json());
        });

    }

    deleteAis(id){

      this.http.delete('http://localhost:8080/api/ais/' + id).subscribe((res) => {
        console.log(res.json());
      });

    }

}
