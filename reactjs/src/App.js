import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./Components/Navbar"
import HeadBody from "./Components/HeadBody"
import BodyBody from "./Components/BodyBody"
import FooterBody from "./Components/FooterBody"
import Footer from "./Components/Footer"
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Container>
         <Navbar />
        <HeadBody />
        <BodyBody />
        <FooterBody />
        <Footer />
        
        
    </Container>
          
    </div>
  );
}

export default App;
