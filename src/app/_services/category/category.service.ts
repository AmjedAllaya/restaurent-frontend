import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Category } from 'src/app/_models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = "http://localhost:8082/api/category";

  constructor(private httpClient: HttpClient) { }


  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.baseUrl}`);
  }

  addCategory(category: FormGroup ): Observable<Category> {
    return this.httpClient.post<Category>(this.baseUrl,category);
  }

  deleteCategory(id : number ): Observable<Category> {
    return this.httpClient.delete<Category>(`${this.baseUrl}/id`);
  }

  updateCategory(id : number, category: FormGroup): Observable<Category> {
    return this.httpClient.put<Category>(`${this.baseUrl}/id`,category);
  }
}
