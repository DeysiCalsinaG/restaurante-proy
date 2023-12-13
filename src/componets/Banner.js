import { Col, Container, Row } from "react-bootstrap";
import headerImg from'../food/gif-removebg-preview.png';
import {useEffect, useState} from "react";
import { ArrowRightCircle } from 'react-bootstrap-icons';

export const Banner = ()=>{
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
                    <span className="tagline">Bienvenido a esta Web</span>
                    <h1>{'¡Bienvenido a Restaurante Dissy!'}<span className="wrap">{''}</span></h1>
                    <p>


Nos complace darte la más cordial bienvenida a nuestro rincón gastronómico, donde la exquisitez se fusiona con la hospitalidad para ofrecerte una experiencia culinaria inolvidable.

En Restaurante Dissy, nos enorgullece ser tu elección para disfrutar de momentos deliciosos y memorables. Nuestro equipo apasionado está dedicado a brindarte no solo platillos excepcionales, sino también un ambiente acogedor que te hará sentir como en casa.

Explora nuestro menú cuidadosamente elaborado, diseñado para satisfacer los paladares más exigentes. Desde sabores tradicionales hasta creaciones innovadoras, cada platillo es una obra maestra culinaria que refleja nuestra dedicación a la calidad y la frescura de los ingredientes.

Además, te invitamos a sumergirte en la atmósfera única de nuestro espacio. Ya sea que estés aquí para una comida íntima, una celebración especial o simplemente para disfrutar de buena compañía, nos esforzamos por crear un ambiente donde cada visita sea especial.

Agradecemos sinceramente tu elección y esperamos que tu experiencia en Restaurante Dissy sea excepcional en todos los sentidos. ¡Bienvenido a un mundo de sabores exquisitos y momentos memorables!</p>
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