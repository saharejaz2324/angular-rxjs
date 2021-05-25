import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { MouseEventComponent } from './observable/mouse-event/mouse-event.component';
import { ObservableComponent } from './observable/observable.component';
import { OperatorComponent } from './observable/operator/operator.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {
    path: 'promise',
    component: PromiseComponent
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'fromEventComponent',
        component: FromEventComponent
      },
      {
        path: 'interval',
        component: IntervalComponent
      },
      {
        path: 'operator',
        component: OperatorComponent
      },
      {
        path: 'mouseEvent',
        component: MouseEventComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
