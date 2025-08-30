import { useRef } from 'react';
import Home from './components/home'; // Corrigido o caminho (note a capitalização)
import Inicio from './components/inicio';
import Who from './components/who';
import Encontros from './components/encontros';
import Testemunhos from './components/testemunhos';
import Contato from './components/contato';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './app.css';

function App() {
  const inicioRef = useRef<HTMLDivElement>(null);
  const quemSomosRef = useRef<HTMLDivElement>(null);
  const encontrosRef = useRef<HTMLDivElement>(null);
  const testemunhosRef = useRef<HTMLDivElement>(null);
  const contatoRef = useRef<HTMLDivElement>(null);

  const scrollToInicio = () => {
    inicioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuemSomos = () => {
    quemSomosRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEncontros = () => {
    encontrosRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTestemunhos = () => {
    testemunhosRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContato = () => {
    contatoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Home 
        scrollToInicio={scrollToInicio}
        scrollToQuemSomos={scrollToQuemSomos}
        scrollToEncontros={scrollToEncontros}
        scrollToTestemunhos={scrollToTestemunhos}
        scrollToContato={scrollToContato}
      />
      <div ref={inicioRef}>
        <Inicio scrollToEncontros={scrollToEncontros} />
      </div>
      <div ref={quemSomosRef}>
        <Who />
      </div>
      <div ref={encontrosRef}>
        <Encontros scrollToContato={scrollToContato} />
      </div>
      <div ref={testemunhosRef}>
        <Testemunhos scrollToContato={scrollToContato} />
      </div>
      <div ref={contatoRef}>
        <Contato />
      </div>
    </div>
  );
}

export default App;