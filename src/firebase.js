import { initializeApp } from 'firebase/app';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    getAuth,
    signOut,
} from 'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { toast } from 'react-toastify';

const firebaseConfig = {
    apiKey: 'AIzaSyCd-MsWbz9fsbpi8ibby8fymewdQW8HNkc',
    authDomain: 'netflix-clone-ce3c3.firebaseapp.com',
    projectId: 'netflix-clone-ce3c3',
    storageBucket: 'netflix-clone-ce3c3.firebasestorage.app',
    messagingSenderId: '107179040699',
    appId: '1:107179040699:web:9e3bc0f10670a3233e6e9e',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        });
        toast.success('Account created successfully!');
    } catch (error) {
        console.error('Error signing up:', error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
};

const signin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Signed in successfully!');
    } catch (error) {
        console.error('Error signing in:', error);
        toast.error(error.code.split('/')[1].split('-').join(' '));
    }
};

const signout = () => {
    signOut(auth);
    toast.success('Signed out!');
};

export { auth, db, signup, signin, signout };
