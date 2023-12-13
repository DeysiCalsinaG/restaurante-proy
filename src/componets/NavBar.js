import { Navbar,Container,Nav } from "react-bootstrap";
import { useState,useEffect } from "react";
import logo from '../food/logo.jpg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
export const NatBar = () =>{

    const[scrolled, setScrolled] = useState(false);
    const[activeLink,setActiveLink]= useState('home');
    useEffect(()=>{
        const onScroll = () =>{
            if(window.scrollY>50){
                setScrolled('True');

            }else{
                setScrolled('True')
            }
        }
        window.addEventListener("scroll",onScroll)
        return()=>window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdateActiveLink = (value)=>{
        setActiveLink(value);
    }
    return(
    <Navbar expand="lg" className={'scrolled' ? "scrolled":""}>
      <Container>
        <Navbar.Brand href="/">
            <img src={logo}alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggler-icon"></span>
        <Navbar.Toggle/>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('home')}>Inicio </Nav.Link>
            <Nav.Link href="#link"className={activeLink==='skills'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('skills')}>Menu </Nav.Link>
            <Nav.Link href="#bebidas" className={activeLink==='bebidas'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('bebidas')}>Bebidas</Nav.Link>
            <Nav.Link href="#Pedidos" className={activeLink==='Pedidos'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('Pedidos')}>Pedidos</Nav.Link>
            <Nav.Link href="#Ubicacion" className={activeLink==='Ubicacion'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('Ubicacion')}>Ubicacion</Nav.Link>
            <Nav.Link href="#Historia" className={activeLink==='Historia'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('Historia')}>Nuestra Historia</Nav.Link>
            <Nav.Link href="#Galeria" className={activeLink==='Galeria'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('Galeria')}>Galeria</Nav.Link>
            <Nav.Link href="#Curiosidades" className={activeLink==='Curiosidades'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('Curiosidades')}>Curiosidades</Nav.Link>
            <Nav.Link href="Recomendaciones" className={activeLink==='Recomendaciones'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('Recomendaciones')}>Recomendaciones</Nav.Link>
            <Nav.Link href="#projects"className={activeLink==='Credito'? 'active navbar-link':'navbar-link'}onClick={()=>onUpdateActiveLink('project')}>Creditos</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="m"><img src={navIcon1} alt=""/></a>
                <a href="m"><img src={navIcon2} alt=""/></a>
                <a href="m"><img src={navIcon3} alt=""/></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
/**            <button className="vvd"onAuxClick={()=>console.log('Conectado')}>
                <span>Iniciar Sesion</span>
            </button> */