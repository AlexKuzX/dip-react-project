import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

export default function Nav() {

    return <>
        <Container>
            <Row>
                <Col xl={6}>
                    <div>
                        <img src="/images/logo/logo.png" alt="" />
                    </div>
                </Col>
                <Col xl={6}>
                    <nav >
                        <ul 
                        className="nav_links"
                        style={{ listStyleType: "none", display: "flex", margin: "2" }}>
                            <Link to="/" style={{ margin: "0 20px 0 20px" }}><li>home</li></Link>
                            <Link to="/components/gallery/gallery" style={{ margin: "0 20px 0 20px" }}><li>gallery</li></Link>
                            <Link to="/components/blog/blog" style={{ margin: "0 20px 0 20px" }}><li>blog</li></Link>
                            <Link to="/components/about/about" style={{ margin: "0 20px 0 20px" }}><li>about</li></Link>
                            <Link to="/components/contacts/contacts" style={{ margin: "0 20px 0 20px" }}><li>contacts</li></Link>
                            </ul>
                    </nav>
                </Col>
            </Row>
        </Container>
    </>
}