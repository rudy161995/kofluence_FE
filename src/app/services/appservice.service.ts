import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  constructor(private http: HttpClient) { }

  private api_end_pt = 'http://localhost:5000/api';

  getMandatoryAndRelatedTag() {
    return this.http.get(this.api_end_pt + '/get-mandatory')
  }

  getRelatedTag(tag) {
    return this.http.post(this.api_end_pt + '/get-related', tag);
  }

  getUserPosts(user){
    return this.http.post(this.api_end_pt + '/post/getuserpost', {user});
  }
  getSimilarPosts(){
    return this.http.get(this.api_end_pt + '/post/getsimilarpost');
  }
  
}
