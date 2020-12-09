import React, { useContext } from 'react';
import Slider from "react-slick";
import { MyContext } from '../../../items/context';
import { Link } from 'react-router-dom';
import { GetProviders } from '../../../items/state';
import { Container, Row, Col } from 'react-bootstrap'

export default function SimpleSlider() {

  const context = useContext(MyContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 1,
    arrows: true
  };

  return <>
    <Container>
      <Row>
        <Col xl={12}>
          <Slider {...settings} className="sl_wrap">
            {context.itemsForSlider.map((item) =>
              <div key={item.title}>
                <div
                  className="sl_item_wrapper"
                  style={{ backgroundImage: `${item.image}` }}
                >
                  <Row>
                    <Col xl={9}>
                      <section>
                        <h2 className="sl_title">{item.title}</h2>
                        <div className="sl_button">
                          <Link to={`/components/providers/providers/${item.type}`}>
                            <button type="button" className="btn btn-outline-warning">go to </button>
                          </Link>
                        </div>
                      </section>
                    </Col>
                    <Col xl={3}>
                      <p className="sl_partners">{item.text}</p>
                      <section className="sl_content">
                        {GetProviders(item.type).map((item) =>
                          <p key={item.id}
                            className="gn_providers"
                          >{item.name}
                          </p>
                        )}
                      </section>
                    </Col>
                  </Row>

                  <Row>
                    <Col xl={6}>
                      <div className="sl_content">
                        <p className="sl_description">{item.description}</p>
                      </div>
                    </Col>
                  </Row>
                  
                </div>
              </div>
            )}
          </Slider>
        </Col>
      </Row>
    </Container>
  </>
} 