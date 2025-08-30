import { Navbar, Nav, Container } from 'react-bootstrap';
import '../styles/Home.css';

interface HomeProps {
  scrollToInicio: () => void;
  scrollToQuemSomos: () => void;
  scrollToEncontros: () => void;
  scrollToTestemunhos: () => void;
  scrollToContato: () => void;
}

function Home({ 
  scrollToInicio, 
  scrollToQuemSomos, 
  scrollToEncontros, 
  scrollToTestemunhos, 
  scrollToContato 
}: HomeProps) {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm fixed-top" collapseOnSelect>
      <Container>
        <Navbar.Brand 
          href="#" 
          onClick={(e) => { e.preventDefault(); scrollToInicio(); }}
          className="fw-bold"
        >
          Grupo de Oração Poço de Jacó
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); scrollToInicio(); }}
            >
              Início
            </Nav.Link>
            
            <Nav.Link 
              href="#quem-somos" 
              onClick={(e) => { e.preventDefault(); scrollToQuemSomos(); }}
            >
              Quem Somos
            </Nav.Link>
            
            <Nav.Link 
              href="#encontros" 
              onClick={(e) => { e.preventDefault(); scrollToEncontros(); }}
            >
              Encontros
            </Nav.Link>
            
            <Nav.Link 
              href="#testemunhos" 
              onClick={(e) => { e.preventDefault(); scrollToTestemunhos(); }}
            >
              Testemunhos
            </Nav.Link>
            
            <Nav.Link 
              href="#contato" 
              onClick={(e) => { e.preventDefault(); scrollToContato(); }}
            >
              Contato
            </Nav.Link>
            
            <Nav.Link 
              href="https://sedentos.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Retiro
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Home;