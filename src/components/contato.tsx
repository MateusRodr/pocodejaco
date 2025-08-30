
import '../styles/Contato.css';

function Contato() {
  return (
    <section id="contato" className="contato-section py-5 text-center">
      <div className="container">
        <h2 className="display-5 fw-bold mb-4">Entre em Contato</h2>
        <p className="lead mb-5">
          Ficou com alguma dúvida ou quer saber mais sobre o nosso grupo? Estamos prontos para te acolher!
        </p>
        
        <div className="row justify-content-center g-4">
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-whatsapp display-4 text-success mb-3"></i>
                <h5 className="card-title fw-bold">WhatsApp</h5>
                <p className="card-text mb-0">(99) 99999-9999</p>
                <a href="https://wa.me/5599999999999" className="btn btn-outline-success mt-3" target="_blank" rel="noopener noreferrer">
                  Enviar Mensagem
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-envelope-fill display-4 text-primary mb-3"></i>
                <h5 className="card-title fw-bold">Email</h5>
                <p className="card-text mb-0">contato@gopocodejaco.com</p>
                <a href="mailto:contato@gopocodejaco.com" className="btn btn-outline-primary mt-3">
                  Enviar Email
                </a>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <i className="bi bi-geo-alt-fill display-4 text-danger mb-3"></i>
                <h5 className="card-title fw-bold">Local</h5>
                <p className="card-text mb-0">Solar Eventos, Imperatriz - MA</p>
                <a href="https://maps.app.goo.gl/u1nfQFkeJQzLqr6f6" className="btn btn-outline-danger mt-3" target="_blank" rel="noopener noreferrer">
                  Ver no Mapa
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-5">
          <p className="lead fw-bold">Siga-nos no Instagram:</p>
          <a href="https://www.instagram.com/gopocodejaco/" className="me-3" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram display-4"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;