import React from 'react'

// var firebaseConfig = {
//     apiKey: "AIzaSyChVz5rZxrzseuIZyDJMTBLI5aV01qrOQo",
//     authDomain: "cragssite.firebaseapp.com",
//     projectId: "cragssite",
//     storageBucket: "cragssite.appspot.com",
//     messagingSenderId: "831326924461",
//     appId: "1:831326924461:web:411326f399ebd14d4d2024",
//     measurementId: "G-87WND4FYMH"
//   };

// REACT_APP_FIREBASE_API_KEY=AIzaSyChVz5rZxrzseuIZyDJMTBLI5aV01qrOQo
// REACT_APP_FIREBASE_AUTH_DOMAIN=cragssite.firebaseapp.com
// REACT_APP_FIREBASE_PROJECT_ID=cragssite
// REACT_APP_FIREBASE_STORAGE_BUCKET=cragssite.appspot.com
// REACT_APP_FIREBASE_MESSAGING_SENDER_ID=831326924461
// REACT_APP_FIREBASE_APP_ID=1:831326924461:web:411326f399ebd14d4d2024
// REACT_APP_FIREBASE_MEASUREMENT_ID=G-87WND4FYMH

export default function ContactScreen() {
    return (
        <div>
            <form id="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
