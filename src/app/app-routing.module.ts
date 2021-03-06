import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { CardContainerComponent } from './components/card-container/card-container.component';

import { AuthGuardGuard } from './services/auth-guard.guard';
import { from } from 'rxjs';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./components/sign-in/sign-in.module').then(m => m.SignInModule),
  data: { preload: true }
},
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'card-container', component: CardContainerComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
