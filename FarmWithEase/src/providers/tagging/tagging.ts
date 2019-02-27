import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

/*
  Generated class for the TaggingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class TaggingProvider {

  data: any;

    constructor(public http: Http) {
      this.data = null;
    }

    getTags(){

      if (this.data) {
        return Promise.resolve(this.data);
      }

      return new Promise(resolve => {

        this.http.get('http://localhost:8080/api/tags').map(res => res.json()).subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });

    }

    createTags(tag){

      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://localhost:8080/api/tags', JSON.stringify(tag), {headers: headers})
        .subscribe(res => {
          console.log(res.json());
        });

    }

    deleteTags(id){

      this.http.delete('http://localhost:8080/api/tags/' + id).subscribe((res) => {
        console.log(res.json());
      });

    }

}
