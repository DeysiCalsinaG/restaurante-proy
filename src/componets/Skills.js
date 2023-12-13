import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../food/pique.jpg';
import meter2 from '../food/planchita.jpg';
import meter3 from '../food/silpancho.jpg';
import fondo from '../food/fondo.jpg';


export const Skills= ()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skills" id ="menu">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Gastronomia de Cochabamba</h2>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>Pique Macho</h5>
                            
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image"/>
                                <h5>Planchita</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image"/>
                                <h5>Silpancho</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={fondo}/>
        </section>
      )
}