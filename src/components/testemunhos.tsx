import React, { useState } from 'react';
import '../styles/testemunhos.css';

interface TestemunhosProps {
  scrollToContato: () => void;
}

interface Testemunho {
  id: number;
  nome: string;
  texto: string;
  data: string;
}

function Testemunhos({ scrollToContato }: TestemunhosProps) {
  const [nome, setNome] = useState('');
  const [testemunho, setTestemunho] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [testemunhos, setTestemunhos] = useState<Testemunho[]>([
    {
      id: 1,
      nome: 'Maria Silva',
      texto: 'Encontrei forças para superar uma doença difícil através das orações do grupo. A comunidade me sustentou nos momentos mais desafiadores.',
      data: '15/08/2023'
    },
    {
      id: 2,
      nome: 'João Santos',
      texto: 'Minha vida mudou completamente após participar do retiro. Finalmente entendi o verdadeiro significado do Batismo no Espírito Santo.',
      data: '22/09/2023'
    },
    {
      id: 3,
      nome: 'Ana Costa',
      texto: 'O grupo me acolheu em um momento de grande tristeza. Através da partilha e da oração, encontrei consolo e nova esperança.',
      data: '05/10/2023'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (nome && testemunho) {
      const novoTestemunho: Testemunho = {
        id: testemunhos.length + 1,
        nome,
        texto: testemunho,
        data: new Date().toLocaleDateString('pt-BR')
      };
      
      setTestemunhos([novoTestemunho, ...testemunhos]);
      setNome('');
      setTestemunho('');
      setEnviado(true);
      
      // Reset do estado de enviado após 3 segundos
      setTimeout(() => setEnviado(false), 3000);
    }
  };

  return (
    <section id="testemunhos" className="testemunhos-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Testemunhos</h2>
        
        <div className="row">
          <div className="col-lg-8 mb-5">
            <h3 className="mb-4">Compartilhe sua experiência</h3>
            
            <div className="card shadow-sm">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Seu nome (opcional)</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      placeholder="Como gostaria de ser chamado?"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="testemunho" className="form-label">Seu testemunho</label>
                    <textarea
                      className="form-control"
                      id="testemunho"
                      rows={5}
                      value={testemunho}
                      onChange={(e) => setTestemunho(e.target.value)}
                      placeholder="Compartilhe como Deus tem agido em sua vida através do grupo..."
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg">
                    Enviar Testemunho
                  </button>
                  
                  {enviado && (
                    <div className="alert alert-success mt-3" role="alert">
                      Obrigado por compartilhar seu testemunho! Ele será publicado após aprovação.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
          
          <div className="col-lg-4">
            <h3 className="mb-4">Testemunhos da Comunidade</h3>
            
            {testemunhos.length > 0 ? (
              testemunhos.map((testemunho) => (
                <div key={testemunho.id} className="card testemunho-card mb-3 shadow-sm">
                  <div className="card-body">
                    <p className="testemunho-texto">"{testemunho.texto}"</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="testemunho-autor">{testemunho.nome}</span>
                      <small className="text-muted">{testemunho.data}</small>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Seja o primeiro a compartilhar um testemunho!</p>
            )}
          </div>
        </div>
        
        <div className="text-center mt-5">
          <p className="lead">Quer compartilhar algo mais pessoal?</p>
          <button className="btn btn-outline-primary btn-lg" onClick={scrollToContato}>
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testemunhos;