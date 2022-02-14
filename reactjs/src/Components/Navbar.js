import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebookSquare, faInstagram, faTwitch } from '@fortawesome/free-brands-svg-icons';
import {  Row, Col, Nav } from 'react-bootstrap';


export default class Navbar extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col className="social-media">
                        <a href="/">
                            <FontAwesomeIcon icon={faTwitch} color="white" className="twitch social" />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faFacebookSquare} color="white" className="facebook social" />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faInstagram} color="white" className="instagramm social" />
                        </a>
                        <a href="/">
                            <FontAwesomeIcon icon={faYoutube} color="white" className="youtube social" />
                        </a>
                       
                      
                    </Col>

                    <Col   className="logo">
                        <img src="images/geeklogoWhite.png" style={{ width: 120, height: 90 }} alt="" />
                    </Col>
                    <Col className="contact">
                        <Nav className="justify-content-end" activeKey="/">
                            <Nav.Item>
                                <Nav.Link href="/" style={{ color: 'white' }}>B2B</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/" style={{ color: 'white' }}>Nous Contacter</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </>
        )
    }
}

