import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './includes/header/header-component/header-component.component';
import { PromiseComponent } from './promise/promise.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OperatorComponent } from './observable/operator/operator.component';
import { MouseEventComponent } from './observable/mouse-event/mouse-event.component';
import { HttpClientComponent } from './observable/http-client/http-client.component';
import { HttpClient } from '@angular/common/http';
import { ApiCountryCallService } from './services/api-country-call.service';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent,
    IntervalComponent,
    OperatorComponent,
    MouseEventComponent,
    HttpClientComponent
  ],
  bootstrap: [AppComponent, HeaderComponentComponent],
  providers: [ApiCountryCallService]
})
export class AppModule {}
