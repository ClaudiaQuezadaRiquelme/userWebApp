import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { InfoComponent } from './components/info/info.component';
import { CardComponent } from './components/card/card.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { InitComponent } from './components/init/init.component';
import { HeaderComponent } from './components/header/header.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

// Auth service
import { AuthService } from './services/auth.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    CardComponent,
    UserComponent,
    LoginComponent,
    InitComponent,
    HeaderComponent,
    CardContainerComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
