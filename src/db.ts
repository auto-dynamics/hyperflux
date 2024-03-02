// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { ProcessScheme } from "./lib";
import { QueryResponseStatus } from "./lib/queries/types";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

export async function insertScheme({
  name,
  scheme,
}: {
  name: string;
  scheme: ProcessScheme;
}): Promise<QueryResponseStatus> {
  const document = doc(firestore, `/${name}/${scheme.id}`);
  await setDoc(document, scheme);
  return {
    status: "ok",
  };
}

export const querySchemesCollection = async (name: string) => {
  const coll = collection(firestore, name);
  const docSnaps = await getDocs(coll);
  const docs: ProcessScheme[] = [];
  docSnaps.forEach((doc) => docs.push(doc.data() as ProcessScheme));
  return docs;
};
