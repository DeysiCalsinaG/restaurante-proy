
import './App.css';
import {NatBar} from './componets/NavBar';
import {Banner} from'./componets/Banner'
import'bootstrap/dist/css/bootstrap.min.css'
import { Skills } from './componets/Skills';
import { Projects } from './componets/Projects';
import { Historia } from './componets/Historia';
import { Galeria } from './componets/Galeria';
import { Curiosidades } from './componets/Curiosidades';
import { Galeria2 } from './componets/Galeria2';

function App() {
  return (
    <div className="App">
      <NatBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Historia/>
      <Galeria/>
      <Galeria2/>
      <Curiosidades/>

    </div>
  );
}

export default App;
/** */