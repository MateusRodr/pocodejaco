// import React, { useState } from 'react';
// import '../styles/oracoes.css';

// interface OracoesProps {
//   scrollToContato: () => void;
// }

// function Oracoes({ scrollToContato }: OracoesProps) {
//   const [oracaoSelecionada, setOracaoSelecionada] = useState('pai-nosso');

//   const oracoes = {
//     'pai-nosso': {
//       titulo: 'Pai Nosso',
//       texto: `Pai nosso que estais no céu,
// santificado seja o Vosso Nome.
// Venha a nós o Vosso Reino.
// Seja feita a Vossa vontade
// assim na terra como no céu.
// O pão nosso de cada dia nos dai hoje.
// Perdoai-nos as nossas ofensas
// assim como nós perdoamos
// a quem nos tem ofendido.
// E não nos deixeis cair em tentação,
// mas livrai-nos do mal.
// Amém.`
//     },
//     'ave-maria': {
//       titulo: 'Ave Maria',
//       texto: `Ave Maria, cheia de graça,
// o Senhor é convosco,
// bendita sois Vós entre as mulheres,
// e bendito é o fruto do vosso ventre, Jesus.
// Santa Maria, Mãe de Deus,
// rogai por nós, pecadores,
// agora e na hora da nossa morte.
// Amém.`
//     },
//     'credo': {
//       titulo: 'Creio (Credo)',
//       texto: `Creio em Deus Pai todo-poderoso,
// criador do céu e da terra.
// E em Jesus Cristo, seu único Filho, nosso Senhor,
// que foi concebido pelo poder do Espírito Santo;
// nasceu da Virgem Maria,
// padeceu sob Pôncio Pilatos,
// foi crucificado, morto e sepultado;
// desceu à mansão dos mortos;
// ressuscitou ao terceiro dia;
// subiu aos céus,
// está sentado à direita de Deus Pai todo-poderoso,
// donde há de vir a julgar os vivos e os mortos.
// Creio no Espírito Santo,
// na Santa Igreja Católica,
// na comunhão dos santos,
// na remissão dos pecados,
// na ressurreição da carne,
// na vida eterna.
// Amém.`
//   },
//   'gloria': {
//     titulo: 'Glória',
//     texto: `Glória ao Pai, e ao Filho e ao Espírito Santo.
// Como era no princípio, agora e sempre.
// Amém.`
//   },
//   'sinal-cruz': {
//     titulo: 'Em Nome do Pai (Sinal da Cruz)',
//     texto: `Em nome do Pai, e do Filho e do Espírito Santo.
// Amém.`
//   },
//   'anjus-deus': {
//     titulo: 'Anjo da Guarda',
//     texto: `Santo Anjo do Senhor,
// meu zeloso guardador,
// se a ti me confiou a piedade divina,
// sempre me rege, me guarde, me governe, me ilumine.
// Amém.`
//   }
// };

// function Oracoes({ scrollToContato }: OracoesProps) {
//   const [oracaoSelecionada, setOracaoSelecionada] = useState<OracaoKey>('pai-nosso');

//   return (
//     <section id="oracoes" className="oracoes-section py-5">
//       <div className="container">
//         <h2 className="text-center fw-bold mb-5">Orações Católicas</h2>
        
//         <div className="row">
//           <div className="col-lg-4 mb-4">
//             <div className="list-group">
//               {Object.entries(oracoes).map(([key, oracao]) => (
//                 <button
//                   key={key}
//                   className={`list-group-item list-group-item-action ${oracaoSelecionada === key ? 'active' : ''}`}
//                   onClick={() => setOracaoSelecionada(key)}
//                 >
//                   {oracao.titulo}
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           <div className="col-lg-8">
//             <div className="card oracao-card shadow-sm">
//               <div className="card-body">
//                 <h3 className="card-title text-primary mb-4">{oracoes[oracaoSelecionada].titulo}</h3>
//                 <div className="oracao-texto">
//                   {oracoes[oracaoSelecionada].texto.split('\n').map((line, i) => (
//                     <p key={i}>{line}</p>
//                   ))}
//                 </div>
//               </div>
//             </div>
            
//             <div className="mt-4 text-center">
//               <p className="lead">Tem alguma intenção de oração?</p>
//               <button className="btn btn-primary btn-lg" onClick={scrollToContato}>
//                 Enviar Pedido de Oração
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Oracoes;