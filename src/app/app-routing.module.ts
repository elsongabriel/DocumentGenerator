import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {
    // path: '',
    // component: InternLayoutComponent,
    // children: [
    //   {
    //     path: '',
    //     loadChildren: () => import('./modules/intern/intern.module').then(module => module.InternModule)
    //   }
    // ]
    // },
    {path: '**', redirectTo: 'home'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}