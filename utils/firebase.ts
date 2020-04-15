// import database from '@react-native-firebase/database';
import firebaseDB from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDvpFgIz8PnkalQ5_ddGZKZP2arug3g-Qw',
  authDomain: 'customerrecordbook-23287.firebaseapp.com',
  databaseURL: 'https://customerrecordbook-23287.firebaseio.com',
  projectId: 'customerrecordbook-23287',
  storageBucket: 'customerrecordbook-23287.appspot.com',
  messagingSenderId: '556793974049',
  appId: '1:556793974049:web:026ccd71a0dd0787808260',
  measurementId: 'G-ZXRQEM2MJR',
};

firebaseDB.initializeApp(firebaseConfig);

export const fbDatabase = firebaseDB.database();
export const fbStorage = firebaseDB.storage();
export const firebaseMatches = fbDatabase.ref('customers');
