import React, {Component} from 'react';
import { Jumbotron, Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import "./home.component.css"

export class HomeComponent extends Component{
  
    render(){
        return(
    <div>
            <Jumbotron className="jumbotron_custom">
              <h1>cinemanite</h1>
              <p>
                  Proyecto que busca crear videos que expongan y preserven ideas/sentimientos/causas sociales/tradiciones mexicanas o bien ser la voz audiovisual de jóvenes emprendedores.
              </p>
            </Jumbotron>
            <Container>
                <Row>
                  <Col xs={12} md={6}>
                  <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="assets/images/soneros.JPG" />
                    <Card.Body>
                      <h1>Festivales</h1>
                      <Card.Text className="paragraph">
                        Realizamos cobertura de eventos culturales y musicales.
                      </Card.Text>
                      <Button variant="primary" className="button_custom">
                        <a className="watch_video" target="_blank"  rel="noopener noreferrer" href="https://www.youtube.com/watch?v=-wjTEUIYRRQ">Ver Video</a>
                      </Button>
                    </Card.Body>
                  </Card>
                  </Col>
                  <Col xs={12} md={6}>
                  <Card style={{ width: '100%' }}>
                  <Card.Img variant="top" src="assets/images/documental.JPG" />
                  <Card.Body>
                    <h1>Documentales</h1>
                    <Card.Text className="paragraph">
                      Creemos en el cine y por eso realizamos documentales.
                    </Card.Text>
                    <Button variant="primary" className="button_custom">
                    <a className="watch_video" target="_blank"  rel="noopener noreferrer" href="https://www.youtube.com/watch?v=2EUImS3OFb8">Ver Video</a>
                    </Button>
                  </Card.Body>
                </Card>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={12}>
                    <Image src="assets/images/contact_us_2.png" fluid />
                  </Col>
                </Row>
          </Container>
          <footer></footer>

</div>
        )
    }
}

  