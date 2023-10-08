import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroImgComponent } from './hero-img/hero-img.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InspirationComponent } from './inspiration/inspiration.component';
import { IconsComponent } from './icons/icons.component';
import { FeatureCardsComponent } from './feature-cards/feature-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroImgComponent,
    FooterComponent,
    FeaturesComponent,
    NavbarComponent,
    InspirationComponent,
    IconsComponent,
    FeatureCardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
