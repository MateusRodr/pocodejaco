import '../styles/Inicio.css';

interface InicioProps {
  scrollToEncontros: () => void;
}

function Inicio({ scrollToEncontros }: InicioProps) {
  return (
    <section id="inicio" className="inicio-section py-5 text-center d-flex align-items-center justify-content-center text-white">
      <div className="container">
        <h1 className="display-4 fw-bold mb-3">Grupo de Oração Poço de Jacó</h1>
        <p className="lead mb-4">
          Compartilhando a fé, a oração e a sede do Espírito Santo desde 1994.
        </p>
        <p className="mb-5">
          Convidamos você a se juntar a nós em um espaço de comunhão, louvor e aprofundamento da Palavra de Deus. Juntos, somos mais fortes na caminhada da fé.
        </p>
        <button className="btn btn-light btn-lg" onClick={scrollToEncontros}>
          Saiba Mais
        </button>
      </div>
    </section>
  );
}

export default Inicio;