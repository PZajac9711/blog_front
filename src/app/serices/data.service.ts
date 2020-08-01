import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Token} from '../interfaces/token';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:8080/api/posts';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  getAll(pageNumber) {
    return this.http.get(this.url + '?page=' + pageNumber);
  }

  // tslint:disable-next-line:typedef
  getSpecific(title) {
    return this.http.get(this.url + '/specific?title=' + title);
  }

  // tslint:disable-next-line:typedef
  authenticate(loginInput, passwordInput) {
    return this.http.post('http://localhost:8080/api/authenticate', {
      login: loginInput,
      password: passwordInput
    }).pipe(
      map((result: Token) => {
        if (result && result.token) {
          localStorage.setItem('token', result.token);
          return true;
        }
        return false;
      })
    );
  }

  // tslint:disable-next-line:typedef
  addPost(urlInput, titleInput, bodyInput) {
    return this.http.post('http://localhost:8080/api/posts/add', {
      url: urlInput,
      title: titleInput,
      body: bodyInput
    }).pipe(
      map((result: any) => {
        if (result) {
          return true;
        }
        return false;
      })
    );
  }

  // tslint:disable-next-line:typedef
  getAllPost() {
    return this.http.get('http://localhost:8080/api/posts/findAll');
  }

  // tslint:disable-next-line:typedef
  changePostStatus(id) {
    return this.http.get('http://localhost:8080/api/posts/changeStatus?id=' + id);
  }

  // tslint:disable-next-line:typedef
  updatePost(titleInput, urlInput, bodyInput, idInput) {
    return this.http.post('http://localhost:8080/api/posts/editPost', {
      id: idInput,
      url: urlInput,
      title: titleInput,
      body: bodyInput
    });
  }

  // tslint:disable-next-line:typedef
  register(loginI, passwordI, emailI) {
    return this.http.post('http://localhost:8080/api/registration', {
      login: loginI,
      password: passwordI,
      email: emailI
    });
  }

  // tslint:disable-next-line:typedef
  addComment(content, id) {
    console.log(content);
    return this.http.get('http://localhost:8080/api/posts/addComment?content=' + content + '&id=' + id);
  }

  // tslint:disable-next-line:typedef
  findPosts(word) {
    return this.http.get('http://localhost:8080/api/posts/searchForPosts?word=' + word);
  }
}
