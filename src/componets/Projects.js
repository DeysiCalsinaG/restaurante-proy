import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../food/chicha de maiz.jpg';
import meter2 from '../food/garapiña.jpg';
import meter3 from '../food/guarapo.jpg';
import fondo from '../food/fondo.jpg';


export const Projects= ()=>{
    const responsive = {
        superLargeDesktop: {
      
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
        <section className="projects" id ="creditos">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>Bebidas de Cochabamba</h2>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt="image"/>
                                <h5>Chicha de Maiz</h5>
                            
                            </div>
                            <div className="item">
                                <img src={meter2} alt="image"/>
                                <h5>Garapina</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="image"/>
                                <h5>Guarapo</h5>
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