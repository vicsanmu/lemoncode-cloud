import { Component } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImagesService } from 'src/app/services/images/images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent {
  images: Image[];
  imagePositionSelected = 0;
  width = 400;
  isPlayActive = false;
  myInterval: any = null;
  isPlaying = false;
  pageSize = 3;
  startItemPage = 0;
  endItemPage = 3;

  constructor(private imagesService: ImagesService) {
    this.images = this.getImages();
  }

  getImages() {
    return this.imagesService.getImages();
  }

  selectImage(imageId: number) {
    this.imagePositionSelected = this.images.findIndex(
      ({ id }) => imageId === id
    );
  }

  zoomIn() {
    this.width = this.width + 50;
  }

  zoomOut() {
    this.width = this.width - 50;
  }

  nextImage() {
    if (this.imagePositionSelected !== this.images.length - 1)
      this.imagePositionSelected++;
  }

  previousImage() {
    if (this.imagePositionSelected !== 0) this.imagePositionSelected--;
  }

  getWidthImage() {
    return `${this.width}px`;
  }

  playImages() {
    this.imagePositionSelected !== this.images.length - 1
      ? this.nextImage()
      : (this.imagePositionSelected = 0);
  }

  play() {
    this.myInterval = setInterval(this.playImages.bind(this), 2000);
    this.isPlaying = true;
  }

  stop() {
    clearInterval(this.myInterval);
    this.isPlaying = false;
  }

  getClassIfImageIsSelected(imageId: number) {
    return this.images[this.imagePositionSelected].id === imageId
      ? 'image-selected'
      : '';
  }

  nextPage() {
    this.startItemPage = this.startItemPage + this.pageSize;
    this.endItemPage = this.endItemPage + this.pageSize;
  }

  previousPage() {
    this.startItemPage = this.startItemPage - this.pageSize;
    this.endItemPage = this.endItemPage - this.pageSize;
  }
}
