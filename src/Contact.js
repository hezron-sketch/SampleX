import React from "react";
import './style.css';
import NavBar from "./NavigationBar";
import { Router } from "react-router-dom";

function Contact() {
    return (
        <>
        <Router>
            <NavBar />
        </Router>
        </>
    );
}

export default Contact;