import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOwSlbumj_iFRc8HzIrpdV7YQlkVRO4Lw",
  authDomain: "mediscan-a8b1e.firebaseapp.com",
  projectId: "mediscan-a8b1e",
  storageBucket: "mediscan-a8b1e.appspot.com",
  messagingSenderId: "362952644231",
  appId: "1:362952644231:android:2f97be15b9074ab8830a22"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { auth, db };
export default app;