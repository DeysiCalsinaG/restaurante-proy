import { Col, Container, Row } from "react-bootstrap";
import headerImg from'../food/gif-removebg-preview.png';
import {useEffect, useState} from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Creditos = ()=>{
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
        <section className="creditos" id="creditos">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Bienvenido a esta Web</span>
                    <h1>{'hola soy el programador dissy'}<span className="wrap">{'text'}</span></h1>
                    <p>uuuuuuuuuuuuuuuuuuuffffffffffffffffffffffff</p>
                    <button>mas informacion<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs ={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header"></img>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}