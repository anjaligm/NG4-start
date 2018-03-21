import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';

const AppRoutes:Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'work',
        component:WorkComponent
    },
    {
        path:'contact',
        component:ContactComponent
    }
];

export const Routing = RouterModule.forRoot(AppRoutes);