import { Injectable, ViewContainerRef, ComponentFactoryResolver } from "@angular/core";
import { PopupImageComponent } from './popup-image.component';

@Injectable()
export class PopupImageService {
  private popupImage: PopupImageComponent

  setPlacement(popupImage: PopupImageComponent): void {
    this.popupImage = popupImage;
  }
  openModal(modalSrc: any, index: number) {
    this.popupImage.createPopup(modalSrc, index)
  }
  prevImage() {
    this.popupImage.prevImage();
  }
  nextImage() {
    this.popupImage.nextImage();
  }
  closeGallery() {
    this.popupImage.closeGallery();
  }
}
