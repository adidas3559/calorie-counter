import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './components/SearchBar';
import MacroBars from './components/MacroBars';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { QuerySnapshot, getFirestore, serverTimestamp, collection, addDoc, getDocs  } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged  } from "firebase/auth";

function App() {

  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState({});

  const firebaseConfig = {
    apiKey: "AIzaSyDUW11MQZP8TkC3zh4oSMerhguWZC19LC4",
    authDomain: "calorie-counter-9a14b.firebaseapp.com",
    projectId: "calorie-counter-9a14b",
    storageBucket: "calorie-counter-9a14b.appspot.com",
    messagingSenderId: "792124932590",
    appId: "1:792124932590:web:f00742302e39400cf58eff",
    measurementId: "G-PSQ7YYM7B7"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth(app);
  
  const provider = new GoogleAuthProvider();

  let thingsRef; // will be used to auto refresh ui based on db changes
  let unsubscribe; // unsubscribes from db refreshes to help with payment and memory leaks

  const db = getFirestore(app);

  const addDocButton = async () => {
    try {
      const docRef = await addDoc(collection(db, "daily-macros"), {
              protein:43,
              fat: 23,
              carbs: 123,
              calories: 1344,
              calorieGoal: 4000
          });
          console.log("docref.id", docRef.id);
      } catch (e) {
          console.log("reeror", e);
      }

      const querySnapShot = await getDocs(collection(db, "daily-macros"));
      querySnapShot.forEach((doc) => {
        console.log(`${doc.id} : ${doc.data()}`);
      });
  }

//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//         first:'alan',
//         last: 'last',
//         born: 1984
//     });
//     console.log("docref.id", docRef.id);
// } catch (e) {
//     console.log("reeror", e);
// }



  const signInHandler = () => {
    console.log("signInHandler");
    signInWithPopup(auth, provider)
      .then((result) => {
        //this gives you a google access token. you can use it to access the google api
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // I'm assuming this is what it means by using the OAuth token to fetch other google apis
        // we currently are not doing this
        const token = credential?.accessToken;
        // the signed-in user info
        const user = result.user;
        console.log("user", user);
        setUser(user);
        setSignedIn(true);
        // IdP data available using getAdditionalUserInfo(result) (optional)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used
        const email = error.customData.email;
        // the AuthCredential type that was used
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  const signOutHandler = () => {
    console.log("signOutHandler");
    signOut(auth).then(() => {
      // Sign-out successful.
      setSignedIn(false);
    }).catch((error) => {
      // An error happened.
      console.log("sign out error", error);
    });
    
  }

  // sets up listener for if a user is signed in. Not really necessary for us
  // since we'll just be using react useState. But useful for vanilla js
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // thingsRef = db.collection('daily-macros');

      // we use this instead of Date.now() to use firebase's built in date object so it can be consistent between users
      const serverTimeStamp  = serverTimestamp();

      // thingsRef.add({
      //   uid: user.uid,
      //   name: "name",
      //   createdAt: serverTimeStamp
      // })


      // we make a query to have ui update automatically with db
      // unsubscribe = thingsRef
      //   .where('uid', '==', user.uid) // only gets docs from our user
      //   .onSnapshot(QuerySnapshot:any => { // onSnapshot is auto updates. .get is one time update
      //     const item = QuerySnapshot.docs.map(doc => {
      //       return `<li>${doc.data()}</li>`
      //     });
      //   })
      
      // ...
    } else {
      // User is signed out
      // ...
      // if(unsubscribe) {
      //   unsubscribe();
      // }
      // unsubscribe && unsubscribe();
    }
  });


  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div>
        <div>
          {/* <iframe src='https://www.youtube.com/embed/zHvj_FFN8kk?autoplay=1&mute=1&playlist=zHvj_FFN8kk&loop=1&controls=0'
            width='100%'
            height='720px'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            className='background-video'
          /> */}
          <h1 className='rickys-sticky'>Rick Bugez kalorie kounter</h1>
        </div>
        
        <div>

          {!signedIn &&
            <section id="whenSignedOut">
              <button id="signInBtn" onClick={signInHandler}>Sign in with Google</button>
            </section>
          }
          {signedIn &&
            <section id="whenSignedIn">
              <div id="userDetails"></div>
              <button id="signOutBtn" onClick={signOutHandler}>Sign Out</button>
              <button onClick={addDocButton}>add calories</button>
            </section>
          }
          

          
          {signedIn && <MacroBars fUser={user} /> }
          {signedIn && <SearchBar fUser={user} /> }
        </div>
      </div>
    </div>
  );
}

export default App;
