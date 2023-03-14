import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagesService {
  private images = [
    {
      id: 1,
      src: 'assets/image1.jpg',
      title: 'image1',
    },
    {
      id: 2,
      src: 'assets/image2.jpg',
      title: 'image2',
    },
    {
      id: 3,
      src: 'assets/image3.jpg',
      title: 'image3',
    },
    {
      id: 4,
      src: 'assets/image4.jpg',
      title: 'image4',
    },
    {
      id: 5,
      src: 'assets/image5.jpg',
      title: 'image5',
    },
    {
      id: 6,
      src: 'assets/image6.jpg',
      title: 'image6',
    },
    {
      id: 7,
      src: 'assets/image7.jpg',
      title: 'image7',
    },
    {
      id: 8,
      src: 'assets/image8.jpg',
      title: 'image8',
    },
  ];

  constructor() {}

  getImages() {
    return this.images;
  }
}
