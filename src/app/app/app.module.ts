import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { firebaseConfig } from '../firebase-config'; // Importa o firebaseConfig do arquivo

// Importa a função initializeApp do pacote do Firebase
import { initializeApp } from 'firebase/app';

// Inicializa o Firebase com a configuração
const app = initializeApp(firebaseConfig);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider({
              clientId: 'SUA_CHAVE_DO_GOOGLE_API'
            })
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class AppModule { }
