import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../core/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
    declarations: [NavbarComponent, SliderComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        MaterialModule
    ],
    exports: [NavbarComponent, SliderComponent],
    providers: [],
})
export class SharedModule {}