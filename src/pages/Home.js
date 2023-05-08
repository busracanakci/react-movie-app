import { Container, Row, Col } from 'react-grid-system';
import {  useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const navigateBilet = (event) => {
        navigate("/bilet");
    };

    return(
        
        <Container>
            <h2>Vizyondaki Filmler</h2>
  <Row>
    <Col sm={3}>
    <img onClick={navigateBilet}  src={process.env.PUBLIC_URL + '/images/film1.jpg'} />
    </Col>
    <Col sm={3}>
    <img onClick={navigateBilet}  src={process.env.PUBLIC_URL + '/images/film2.jpg'} />
    </Col>
    <Col sm={3}>
    <img onClick={navigateBilet}  src={process.env.PUBLIC_URL + '/images/film3.jpg'} />
    </Col>
    <Col sm={3}>
    <img onClick={navigateBilet}  src={process.env.PUBLIC_URL + '/images/film4.jpg'} />
    </Col>
  </Row>
  <Row>
    <Col sm={3}>
    <img onClick={navigateBilet}  src={process.env.PUBLIC_URL + '/images/film1.jpg'} />
    </Col>
    <Col sm={3}>
    <img onClick={navigateBilet}  src={process.env.PUBLIC_URL + '/images/film2.jpg'} />
    </Col>
    <Col sm={3}>
    <img onClick={navigateBilet}  src={process.env.PUBLIC_URL + '/images/film3.jpg'} />
    </Col>
    <Col sm={3}>
    <img onClick={navigateBilet}  src={process.env.PUBLIC_URL + '/images/film4.jpg'} />
    </Col>
  </Row>
</Container>
    )
}