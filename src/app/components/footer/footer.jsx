import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer() {

    return <>
        <Container style={{backgroundColor: '#010103'}}>
            <Row>
                <Col xl={12}>
                    <Card className="text-center">
                        <Card.Footer className="text-muted" style={{backgroundColor: '#010103'}}>
                            <p>Events &copy; 2020 Alex Kuz</p>
                            <p>Folow me: <FacebookIcon/> <InstagramIcon/></p>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
}