import React from 'react';
import { Link } from 'react-router-dom';
import { GetProviders } from '../../items/state';
import { Container, Row, Col, Card } from 'react-bootstrap'


export default function Providers(props) {

    return <>

        <Container>
            <Row>
                <Col xl={12}>
                    <h2 className="sl_title">Lets pick a partner:</h2>
                    <div className="pr_wrap">                     
                        {GetProviders(props.match.params.type).map((item) =>
                        <Link to={`/components/calendar/calendar/${JSON.stringify({ id: item.id, type: props.match.params.type })}`}
                        key={item.id}
                        >
                            <Card                            
                            style={{ width: '330px', margin:'20px 20px 20px 20px', backgroundColor: '#010103', border: '2px solid #FFC107'}}>
                                <Card.Img variant="top" src={item.image} />
                                <hr/>
                                <Card.Body>
                                    <Card.Title className="gn_providers">{item.name}</Card.Title>
                                </Card.Body>
                            </Card >
                            </Link>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}