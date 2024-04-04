import { Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    {path:"Navbar",title:"navbar",component:NavbarComponent},
    {path:"home", title:"home", component:HomeComponent},
    {path:"footer", title:"footer", component:FooterComponent},
    {path:"**",title:"NotFound",component:NotFoundComponent}
];
