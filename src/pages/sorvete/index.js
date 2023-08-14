import './index.scss';
import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';

export default function Sorvetevenda() {
  const [casca, setCasca] = useState('sorvete');
  const [preco, setPreco] = useState('');
  const [totais, setTotais] = useState([]);
  const [total, setTotal] = useState(0);
  const [Sorvetes, setSorvetes] = useState([]);

  function adicionar() {
    let sorv = {
      sorvete: casca,
      valor: preco,
    };

    setSorvetes([...Sorvetes, sorv]);

    const valorFormatado = preco.replace(',', '.');
    const precoFormatado = Number(valorFormatado);

    setTotais([...totais, precoFormatado]);

    let b = precoFormatado;

    for (let item of totais) {
      b = b + item;
    }

    setTotal(b);
  }

  return (
    <div className="page-ice">
      <div className='cabe'>
        <Cabecalho />
      </div>
      <div className='prin'>
        <div className='cubo'>
          <div className='cima'>
            <h1>Sorveteria</h1>
          </div>
          <div className='baixo'>
            <h1> Novo item </h1>
            <div className='lado'>
              <input type='text' value={casca} onChange={e => setCasca(e.target.value)}></input>
              <div>
                <h1>R$</h1>
                <input type='text' value={preco} onChange={e => setPreco(e.target.value)}></input>
              </div>
              <button onClick={adicionar}> Adicionar</button>
            </div>
            <div className='soma'>
              <h1>Lista de Compras</h1>
              <p> total de:{total} </p>
            </div>
          </div>
          <div className='sla'>

            
            {Sorvetes.map((item, index) =>
              <div className='itens' key={index}>
                <h1>{item.sorvete}</h1>
                <h1>{item.valor}</h1>
              </div>
            )}
            

          </div>
        </div>
      </div>
    </div>
  );
}