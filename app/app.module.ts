// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LimitlessHeaderComponent } from './limitless-header/limitless-header.component';
// import { PrimNgModule } from 'src/primeNG-module/primeng.module';
import { LimitlessFirstSliderComponent } from './limitless-first-slider/limitless-first-slider.component';
// import { SliderService } from 'src/services/slider.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { WhatWeDoComponent } from './what-we-do/what-we-do.component';
import { TotalWorkComponent } from './total-work/total-work.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { OurTattoosComponent } from './our-tattoos/our-tattoos.component';
import { BannerComponent } from './banner/banner.component';
import { OurFeaturesComponent } from './our-features/our-features.component';


@NgModule({
  declarations: [
    AppComponent,
    LimitlessHeaderComponent,
    LimitlessFirstSliderComponent,
    AboutUsComponent,
    WhatWeDoComponent,
    TotalWorkComponent,
    WhyChooseUsComponent,
    OurTattoosComponent,
    BannerComponent,
    OurFeaturesComponent,
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    // BrowserAnimationsModule,
    // PrimNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function NgModule(arg0: { declarations: (typeof LimitlessFirstSliderComponent | typeof AboutUsComponent)[]; imports: (typeof AppRoutingModule)[]; providers: never[]; bootstrap: (typeof AppComponent)[]; }): (target: typeof AppModule, context: ClassDecoratorContext<typeof AppModule>) => void | typeof AppModule {
  throw new Error('Function not implemented.');
}

