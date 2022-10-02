import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Photo } from './intefaces/photo';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';

function buildPhotoList(): Photo[] {
  const photos: Photo[] = [];
  for (let index = 0; index < 8; index++) {
    photos.push(
      {
        id: index + 1,
        url: '',
        description: ''
      });
  }
  return photos;
}

describe(PhotoBoardComponent.name, () => {
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let component: PhotoBoardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
  })

  it(`Should display rows and columns when (@Input photos) has value`, () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)//mesmo nome da input property
    }
    component.ngOnChanges(change);
    expect(component.rows.length)
      .withContext('Number of rows')
      .toBe(2);
    expect(component.rows[1].length)
      .withContext('Number of columns from the secound row')
      .toBe(4);
  })
})
