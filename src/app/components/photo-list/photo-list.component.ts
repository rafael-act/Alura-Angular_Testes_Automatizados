import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/shared/components/photo-board/intefaces/photo';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  public photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) { }
  public fa = { faCircleNotch };
  ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
