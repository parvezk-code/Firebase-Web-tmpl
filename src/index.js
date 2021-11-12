import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCjqDjpbiCVuS3vENQnvkdrrOZmuKytuFs",
    authDomain: "parvez-code-001.firebaseapp.com",
    projectId: "parvez-code-001",
    storageBucket: "parvez-code-001.appspot.com",
    messagingSenderId: "341234092290",
    appId: "1:341234092290:web:fa0a81adcaef435eed9a1b"
  };

// fetch documents from a books collection
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const booksColRef = collection(db, 'books');
const books = await getDocs(booksColRef)
books.forEach( book => {
    console.log(book.data(), book.id);
})
console.log(books.docs);

//add a document
const book =  await addDoc(booksColRef, {title:"AWT", author:"Amit"});
console.log(book.id);

// delete document create above
const docRef = doc(db, 'books', book.id )
await deleteDoc(docRef);
