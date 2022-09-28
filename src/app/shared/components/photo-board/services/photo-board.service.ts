import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../intefaces/photo';

@Injectable()
export class PhotoBoardService {
  constructor(private http: HttpClient) {

  }

  public getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>('http://localhost:300/photos');
  }
}
