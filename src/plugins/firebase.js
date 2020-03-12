import Vue from 'vue'
import * as firebase from "firebase/app"
import firebaseConfig from '../firebaseConfig'

// Add the Firebase products that you want to use
import "firebase/auth"
import "firebase/firestore"

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// firebase.firestore().collection('test').add({
//   test: 'abcd'
// })
//   .then(r => console.log('test', r))
//   .catch(e => console.error('catch', e))

Vue.prototype.$firebase = firebase
