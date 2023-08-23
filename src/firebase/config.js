import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage, uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyAsMo-3sbQKGtOZjLisPh49Fuakoj29lKc",
  authDomain: "buenospintores-23a2b.firebaseapp.com",
  projectId: "buenospintores-23a2b",
  storageBucket: "buenospintores-23a2b.appspot.com",
  messagingSenderId: "411230213668",
  appId: "1:411230213668:web:0ed438548a195504402ab1",
  measurementId: "G-2LGHJFLZBM"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseStorage = getStorage(app);

export async function uploadFile(file) {
  const storageRef = ref(firebaseStorage, v4());
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef);
  return url
}



