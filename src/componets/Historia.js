import { Col, Container, Row } from "react-bootstrap";
import headerImg from'../food/cris.jpg';
import {useEffect, useState} from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Historia = ()=>{
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
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <h1>{'Nuestra Historia'}<span className="wrap">{''}</span></h1>
                    <p>
El Cristo de la Concordia en Cochabamba, Bolivia, es una monumental estatua de Jesucristo que se erige en la cima del cerro San Pedro, ofreciendo una vista panorámica de la ciudad. Aquí hay una breve historia:

La idea de construir una estatua de Jesucristo en Cochabamba surgió en la década de 1980. La comunidad católica local buscaba un símbolo religioso significativo y un punto de referencia para la ciudad. La construcción del Cristo de la Concordia comenzó en 1987, bajo la dirección del escultor boliviano César Terrazas.

La estatua fue financiada principalmente por donaciones de la comunidad local y se completó en 1994. Con una altura de aproximadamente 34.20 metros, el Cristo de la Concordia es más alto que la famosa estatua del Cristo Redentor en Río de Janeiro, Brasil.

El nombre "Concordia" refleja el deseo de promover la armonía y la unidad en Bolivia. La estatua se ha convertido en un símbolo importante para la ciudad de Cochabamba y atrae a visitantes tanto locales como turistas que buscan disfrutar de las vistas panorámicas desde su ubicación elevada.</p>

                    </Col>
                    <Col xs ={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}