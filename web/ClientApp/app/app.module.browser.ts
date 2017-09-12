import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
//import { appSettings, ISettings } from './appSettings';
import { environment } from './enviornment';
import { enviornments } from './../config/enviornment.prod';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl }
    ]
})
export class AppModule {
    
}

export function getBaseUrl() {
    if (environment.production) {
        return enviornments.devapiendpointURL
       // return env. //document.getElementsByTagName('base')[0].href;
    } else {
        return enviornments.prodapiendpointURL
    }
}
