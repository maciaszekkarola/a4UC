// import { LogoutComponent } from './components/auth/logout/logout.component';
// import { SigninComponent } from './components/auth/signin/signin.component';
// import { SignupComponent } from './components/auth/signup/signup.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'app/components/auth/auth-guard.service';

// ważne by wszystkie dynamicznie ładujące się strony były na końcu, bo w przypadku
// new byłoby nieodnalezione przez angulara. czytanie z dołu do góry
const appRoutes: Routes = [
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    // {path: 'signup', component: SignupComponent},
    // {path: 'signin', component: SigninComponent},
    // {path: 'logout', component: LogoutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}