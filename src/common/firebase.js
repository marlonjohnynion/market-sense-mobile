import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: 'AIzaSyAMuR5xI29DYixVL9ttgqHfopzP_F83G_Q',
  authDomain: 'marketsense-b09f8.firebaseapp.com',
  databaseURL: 'https://marketsense-b09f8.firebaseio.com',
  projectId: 'marketsense-b09f8',
  storageBucket: 'marketsense-b09f8.appspot.com',
  messagingSenderId: '150375762248'
}

export default firebase.initializeApp(config)
