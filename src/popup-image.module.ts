import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopupImageComponent } from './popup-image.component';
import { PopupImageService } from './popup-image.service';

const myDirectives = [
    PopupImageComponent,
];

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        myDirectives
    ],
    exports: [
        myDirectives
    ],
    providers: [
        PopupImageService
    ]
})
export class PopupImageModule { }