import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PropertyCardComponent } from './components/property/property-card/property-card.component';
import { PropertyListComponent } from './components/property/property-list/property-list.component';
import{HttpClientModule} from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddPropertyComponent } from './components/property/add-property/add-property.component'
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { PropertyDetailComponent } from './components/property/property-detail/property-detail.component';
import { RegisterComponent } from './components/user/register/register.component';
import { LoginComponent } from './components/user/login/login.component';
import { ToastNoAnimationModule, ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { GalleryModule } from  'ng-gallery';
import { GALLERY_CONFIG } from 'ng-gallery';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPropPipe } from './pipes/filter-prop.pipe';
// import {PropertyDetailResolverService} from './components/property/property-detail/property-detail-resolver.service';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PropertyCardComponent,
    PropertyListComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    LoginComponent,
    RegisterComponent,
    SortPipe,
    FilterPropPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    GalleryModule.withConfig({
      //loop: true,
     // thumbnails: top,

    }),

    ],
  providers: [
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover',
        slidingDirections:'vertical',
        loading:'preload',
        autoPlay:true,
        showNavigation:true,
        thumbnails: top,
        counter:false,
        //counter:'bottom'





      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
