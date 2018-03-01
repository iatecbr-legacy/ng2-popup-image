import { Component, Input, Output, ViewChild, ElementRef, EventEmitter, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'popup-image',
  template: `
   <div class="ng-overlay" [hidden]="!openImageValid">
        <div class="ng-gallery-content" >    
                <a class="nav-left" *ngIf="listLenght > 1" (click)="prevImage()"><i class="fa fa-angle-left"></i></a>
                <img #imgpopup class="effect" alt="carregando..." />         
                <a class="nav-right" *ngIf="listLenght > 1" (click)="nextImage()"><i class="fa fa-angle-right"></i></a>
                <a class="close-popup" (click)="closeGallery()"><i class="fa fa-close"></i></a>
        </div>
   </div>` ,
  styleUrls: ['./popup-image.css'],
  encapsulation: ViewEncapsulation.None
})
export class PopupImageComponent {

  private currentImageIndex: number;
  private img_src: string;

  public modalSrc: any;
  public index: number;
  public listLenght: number;
  public openImageValid: boolean = false;

  @ViewChild("imgpopup") private imageElement: ElementRef;

  public createPopup(list: Array<any>, index: number) {
    this.modalSrc = list;
    this.index = index;
    this.listLenght = this.modalSrc.length;
    this.currentImageIndex = this.index;
    this.createFileImage(this.modalSrc[this.index].src);
  }

  private createFileImage(src: string): void {
    this.openImageValid = true;
    document.body.style.overflow = 'hidden';
    // setTimeout(() => {
      this.imageElement.nativeElement.src = src;
    // },500);
  }

  public closeGallery(): void {
    document.body.style.overflow = '';    
    this.openImageValid = false;
  }

  public prevImage(): void {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.modalSrc.length - 1;
    }
    this.createFileImage(this.modalSrc[this.currentImageIndex].src);
  }

  public nextImage(): void {
    this.currentImageIndex++;
    if (this.modalSrc.length === this.currentImageIndex) {
      this.currentImageIndex = 0;
    }
    this.createFileImage(this.modalSrc[this.currentImageIndex].src);
  }

}