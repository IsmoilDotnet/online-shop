import { Routes } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from '../home/home.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { CallCenterComponent } from '../call-center/call-center.component';

export const routes: Routes = [
    {path:"Navbar",title:"navbar",component:NavbarComponent},
    {path:"home", title:"home", component:HomeComponent},
    {path:"footer", title:"footer", component:FooterComponent},
    {path:"about",title:"about",component:AboutUsComponent},
    {path:"call-center",title:"call-center",component:CallCenterComponent},
    {path:"**",title:"NotFound",component:NotFoundComponent}
];
