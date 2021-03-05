//Angular
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule, registerLocaleData} from '@angular/common';
import locale from '@angular/common/locales/pt';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NotifierModule} from 'angular-notifier';
import {notifierOptions} from './consts';
//External
import {MaterialModule} from './mat.module';
import {LOCALE_ID, NgModule} from '@angular/core';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {SnackBarComponent} from './utils/notify.service';
//Routing & Layout
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

registerLocaleData(locale);

@NgModule({
    declarations: [
        AppComponent,
        SnackBarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MaterialModule,
        NgxDropzoneModule,
        NotifierModule.withConfig(notifierOptions)
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'pt-br'},
        {provide: LOCALE_ID, useValue: 'pt-BR'},
    ],
    entryComponents: [
        SnackBarComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
