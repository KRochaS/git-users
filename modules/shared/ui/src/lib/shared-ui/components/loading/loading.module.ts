import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxLoadingModule } from 'ngx-loading';
import { LoadingComponent } from './loading.component';



@NgModule({
    declarations: [LoadingComponent],
    exports: [LoadingComponent],
    imports: [
        CommonModule,
        NgxLoadingModule.forRoot({})
    ],
})
export class LoadingModule { }
