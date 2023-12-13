import { Col, Container, Row } from "react-bootstrap";
import headerImg from'../food/cochhh.jpg';
import {useEffect, useState} from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Curiosidades = ()=>{
    const[loopnum,setloopnum]=useState(0);
    const[isDeleting, setisDeleting]=useState(false);
    const toRotate =['dissy','estudiante',"gg"];
    const [tex, setText] = useState("");
    const tiempo = 1000;
    const [delta, setDelta]=useState(300 - Math.random()*100);

    useEffect(()=>{
        let ticker= setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)}
    },['text'])
    const tick=()=>{
        let i = loopnum%toRotate.length;
        let fulltext = toRotate[i];
        let updateText = isDeleting ? fulltext.substring(0,'text'.length-1): fulltext.substring(0,fulltext.length+1);

    setText(updateText);
    if(isDeleting){
        setDelta(prevDelta => prevDelta/2);
    }
    if(!isDeleting && updateText === fulltext){
        setisDeleting(true);
        setDelta(tiempo);
    }else{
        if(isDeleting && updateText===''){
            setisDeleting(false);
            setloopnum(loopnum+1);
            setDelta(500);
        }
    }
}

    return(
        <section className="curiosidades" id="curiosidades">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <h1>{'Curiosidades sobre nuestros platos'}<span className="wrap">{''}</span></h1>
                    <p>Pique Macho:

El pique macho es un plato boliviano que generalmente incluye carne de res, salchichas, papas, tomates, cebollas y ají.
La carne de res proporciona proteínas, hierro y zinc.
Las salchichas aportan proteínas y grasas.
Las papas son una buena fuente de carbohidratos, fibra y algunas vitaminas y minerales.
Los tomates y las cebollas pueden contribuir con vitaminas y antioxidantes.
Planchita:

La planchita es un plato típico de algunos países de América Latina, y puede incluir carne (res, pollo o cerdo) cocida a la plancha con diversos acompañamientos.
La carne proporciona proteínas, hierro y otros nutrientes dependiendo del tipo de carne.
Las verduras a la plancha pueden aportar vitaminas y minerales, así como fibra.
El valor nutricional específico dependerá de los ingredientes específicos utilizados en la preparación.
Silpancho:

El silpancho es un plato boliviano que consta de carne de res empanizada, acompañada de arroz, papas, huevo frito y ensalada.
La carne de res aporta proteínas, hierro y zinc.
El huevo frito agrega proteínas y grasas.
Las papas y el arroz son fuentes de carbohidratos, y las verduras de la ensalada pueden proporcionar vitaminas y minerales.</p>

                    </Col>
                    <Col xs ={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}