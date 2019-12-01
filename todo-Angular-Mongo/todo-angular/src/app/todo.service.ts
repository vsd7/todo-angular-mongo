import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'http://localhost:8081';
  constructor(private http: HttpClient) { }


  getTodos():  Promise<Todo[]> {
    return this.http.get(this.baseUrl + '/api/todos/')
      .toPromise()
      .then(response => response as Todo[])
      .catch(this.handleError);
  }

  createTodo(todoData: Todo): Promise<Todo> {
    return this.http.post(this.baseUrl + '/api/todos/', todoData)
      .toPromise().then(response => response as Todo)
      .catch(this.handleError);
  }

  updateTodo(todoData: Todo): Promise<Todo> {
    return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData)
      .toPromise()
      .then(response => response as Todo)
      .catch(this.handleError);
  }

  deleteTodo(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/todos/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }

}
