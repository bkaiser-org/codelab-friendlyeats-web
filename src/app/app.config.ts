import { ApplicationConfig } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-439b4","appId":"1:986698560145:web:435a90a86b694af64c4530","storageBucket":"friendlychat-439b4.firebasestorage.app","apiKey":"AIzaSyDZEMSEoEFip4sBjDqQL--GIC_FvqCNUno","authDomain":"friendlychat-439b4.firebaseapp.com","messagingSenderId":"986698560145","measurementId":"G-P6EMNXYXB9"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};
