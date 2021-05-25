import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponentComponent } from './includes/header/header-component/header-component.component';
import { PromiseComponent } from './promise/promise.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponentComponent,
    PromiseComponent,
    ObservableComponent,
    ListComponent,
    FromEventComponent
  ],
  bootstrap: [AppComponent, HeaderComponentComponent]
})
export class AppModule {}
