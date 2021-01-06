//https://w3collective.com/react-contact-form/
import React, { useState } from "react";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
        name: name.value,
        email: email.value,
        message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
        "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    setName("");
    setEmail("");
    setMessage("");
    alert(result.status);
    };

    return (
        // <div class="formbox">
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <div className="singlebox">
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    required 
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="singlebox">
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    required 
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="singlebox">
                <label htmlFor="message">Message:</label>
                <textarea 
                    id="message" 
                    rows="8" 
                    cols="35" 
                    required 
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>
            <button className="submitcontactbutton" type="submit">{status}</button>
        </form>
        // </div>
    );
};

export default Contact;