import { Container, Row, Col } from 'react-grid-system';
import {  useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    const navigateBilet = (event) => {
        navigate("/bilet");
    };
    const film1 = (event) => {
      navigate("/film1");
  };
  const film2 = (event) => {
    navigate("/film2");
};
const film3 = (event) => {
  navigate("/film3");
};

    return(
        
        <Container>
            <h2>Vizyondaki Filmler</h2>
  <Row>
    <Col sm={4}>
    <img onClick={film2}  src={process.env.PUBLIC_URL + '/images/film1.jpg'} />
    </Col>
    <Col sm={4}>
    <img onClick={film1}  src={process.env.PUBLIC_URL + '/images/film2.jpg'} />
    </Col>
    <Col sm={4}>
    <img onClick={film3}  src={process.env.PUBLIC_URL + '/images/film3.jpg'} />
    </Col>
   
  </Row>
  <Row>
    <Col sm={4}>
    <img onClick={film2}  src={process.env.PUBLIC_URL + '/images/film1.jpg'} />
    </Col>
    <Col sm={4}>
    <img onClick={film1}  src={process.env.PUBLIC_URL + '/images/film2.jpg'} />
    </Col>
    <Col sm={4}>
    <img onClick={film3}  src={process.env.PUBLIC_URL + '/images/film3.jpg'} />
    </Col>
   

  </Row>
</Container>
    )
}