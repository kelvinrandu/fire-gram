import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDcfCnesNyqvYCl1SxG8OuA_9wi4b8e4vM",
  authDomain: "fire-gram-c8e77.firebaseapp.com",
  projectId: "fire-gram-c8e77",
  storageBucket: "fire-gram-c8e77.appspot.com",
  messagingSenderId: "997944535030",
  appId: "1:997944535030:web:3360e733badb0e1b9c09d7",
  measurementId: "G-V3BSSK8NL3",
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export {projectStorage, projectFirestore};
