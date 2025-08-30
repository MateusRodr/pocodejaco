import '../styles/Encontros.css';

interface EncontrosProps {
  scrollToContato: () => void;
}

function Encontros({ scrollToContato }: EncontrosProps) {
  return (
    <section id="encontros" className="encontros-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Nossos Encontros</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-calendar-week display-4 text-primary mb-3"></i>
                <h4 className="card-title fw-bold">Quando</h4>
                <p className="card-text">Todos os Domingos</p>
                <p className="card-text">Às 20:00h</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <i className="bi bi-geo-alt display-4 text-danger mb-3"></i>
                <h4 className="card-title fw-bold">Onde</h4>
                <p className="card-text">Solar Eventos</p>
                <p className="card-text">Imperatriz - MA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="lead">Venha fazer parte da nossa comunidade!</p>
          <button className="btn btn-primary btn-lg" onClick={scrollToContato}>
            Mais Informações
          </button>
        </div>
      </div>
    </section>
  );
}

export default Encontros;