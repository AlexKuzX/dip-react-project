import React, { useState } from 'react';
import { RenderDates } from './render_dates';
import { Container, Row, Col } from 'react-bootstrap'


export function RenderCalendar({ id, type }) {

    const date = new Date();
    const currentYear = date.getFullYear();
    const [year, setYear] = useState(currentYear);

    const increment = () => {
        setYear(year + 1);
    };

    const decrement = () => {
        setYear(year - 1);
    };

    return <>
        <Container>
            <Row>
                <Col xl={12}>
                    <h2 className="cl_title">Lets pick a date:</h2>
                </Col>
                <Col xl={12}>
                    <div style={{ display: "flex", justifyContent: 'space-around' }}>
                        <div className="cl_arrow" onClick={decrement}>
                            <img src="/images/elements/ll_arrow.png" alt="" />
                        </div>
                        <h5 className="cl_title">{year}</h5>
                        <div className="cl_arrow" onClick={increment}>
                            <img src="/images/elements/rl_arrow.png" alt="" />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <RenderDates id={id} year={year} type={type} />
                </Col>
            </Row>
        </Container>
    </>
};