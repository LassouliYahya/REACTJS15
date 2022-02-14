import React from 'react'
import { Card,CardDeck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './HeadBody.css';

export default function HeadBody() {
    return (
        <div   style={{ width: "100%", height: "100%" }}>
            <center>
                <h1 style={{ color: "white", fontFamily: "Arial" }}> <strong>Bienvenue Chez GEEK MAROC</strong> </h1>
                <p style={{ color: "white" }}>GEEK Maroc est la plus grande régie 100% marocaine spécialée dans le Gaming/Esport et le divertissemnt GEEK </p>
            </center>
            <CardDeck  >
                <Card className="bg-dark text-white"   
                style={{ width: '20rem', height: "10rem" ,  }}    >
                    <Card.Img src="images/Composant 1 – 1.png" alt="Card image" style={{ width: "100%", height: " 100%" }} />
                    <Card.ImgOverlay >
                        <Card.Title style={{ textAlign: "left", }}><strong>Bornes Arcades</strong></Card.Title>
                    
                        <Card.Text  style={{ textAlign: " justify",fontSize:"0.875em" }} >
                           <p className="fontCard" >Notre équipe de passionnés fabrique dans ses ateliers au Maroc votre borne d'arcades sur mesure
                            personnalisable pour les particuliers et les entreprises.</p> 
                            <a href="/">
                                <FontAwesomeIcon icon={faPlay}   color="white" className="twitch social" />
                            </a>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                
                <Card className="bg-dark text-white" style={{ width: '20rem', height: "10rem" }}>
                    <Card.Img src="images/Composant 2 – 1.png" alt="Card image" style={{ width: "100%", height: " 100%" }} />
                    <Card.ImgOverlay>
                        <Card.Title style={{ textAlign: "justify" }}><strong>Bornes Arcades</strong></Card.Title>
                        <Card.Text style={{ textAlign: " justify" }} >
                            Notre équipe de passionnés fabrique dans ses ateliers au Maroc votre borne d'arcades sur mesure
                            personnalisable pour les particuliers et les entreprises.
                            <a href="/">
                                <FontAwesomeIcon icon={faPlay}   color="white" className="twitch social" />
                            </a>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ width: '20rem', height: "10rem" }}>
                    <Card.Img src="images/Composant 3 – 1.png" alt="Card image" style={{ width: "100%", height: " 100%" }} />
                    <Card.ImgOverlay>
                        <Card.Title style={{ textAlign: "justify" }}><strong>Bornes Arcades</strong></Card.Title>
                        <Card.Text style={{ textAlign: " justify" }} >
                            Notre équipe de passionnés fabrique dans ses ateliers au Maroc votre borne d'arcades sur mesure
                            personnalisable pour les particuliers et les entreprises.
                            <a href="/">
                                <FontAwesomeIcon icon={faPlay}   color="white" className="twitch social" />
                            </a>
                        </Card.Text>
                    </Card.ImgOverlay>
                </Card>
            
            </CardDeck>
        
        </div>
    )
}









{/* <div >
            <div className="groupImage1">
                <div className="image1">
                <strong>Bornes Arcades</strong>
                </div>
                <div className="image2">
                <strong>Bornes Arcades</strong>
                <p>
                Notre équipe de passionnés fabrique dans ses ateliers au Maroc votre borne d'arcades sur mesure
                            personnalisable pour les particuliers et les entreprises.
                            <a href="/">
                                <FontAwesomeIcon icon={faPlay}   color="white" className="twitch social" />
                            </a>
                </p>
                </div>
                <div className="image3">
                <strong>Bornes Arcades</strong>
                Notre équipe de passionnés fabrique dans ses ateliers au Maroc votre borne d'arcades sur mesure
                            personnalisable pour les particuliers et les entreprises.
                            <a href="/">
                                <FontAwesomeIcon icon={faPlay}   color="white" className="twitch social" />
                            </a>
                </div>
            </div>
        </div> */}