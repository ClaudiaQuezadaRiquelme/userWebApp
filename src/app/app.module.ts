import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Components
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

// Services
import { AuthService } from './services/auth.service';
import { RandomUserService } from './services/random-user.service';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HTTP
import { HttpClientModule } from '@angular/common/http';

// Modal
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    UserComponent,
    HeaderComponent,
    CardContainerComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [
    AuthService,
    RandomUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
