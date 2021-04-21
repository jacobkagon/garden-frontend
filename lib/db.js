import firebase from './firebase';

const firestore = firebase.firestore();
const app = firebase.app();

export function createUser(uid, data) {
    return firestore
      .collection('users')
      .doc(uid)
      .set({ uid, ...data }, { merge: true });
  }