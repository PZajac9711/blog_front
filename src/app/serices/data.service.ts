import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getAll() {
    return this.http.get(this.url);
  }

  // tslint:disable-next-line:typedef
  getSpecific(title) {
    return this.http.get(this.url + '/specific?title=' + title);
  }
}
