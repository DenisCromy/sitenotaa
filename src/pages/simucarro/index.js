import './index.scss';
import Cabecalho from '../../components/cabecalho';
import React, { useState } from 'react';

export default function Carros() {
    const [valorInicial, setValorInicial] = useState('');
    const [parcelas, setParcelas] = useState('');
    const [juros, setJuros] = useState('');
    const [valorTotal, setValorTotal] = useState(0);
    const [valorParcela, setValorParcela] = useState(0);

    function calcularTudo(valor, parcelas, juros) {
        const valorNum = valor.replace(',', '.');
        const parcelasNum = parcelas;
        const jurosNum = juros.replace(',', '.') / 100;

        let calculosNum = valorNum;

        for (let cont = 1; cont <= parcelasNum; cont++) {
            calculosNum = calculosNum * (1 + jurosNum);
        }

        setValorTotal(calculosNum.toFixed(2));
        setValorParcela((calculosNum / parcelasNum).toFixed(2));
    }

    return (
        <div className="carros-pagina">
            <Cabecalho />
            <div className='conteudo'>
                <div>
                    <h1 className='Titulo'>Simulador de Venda de veiculo</h1>
                </div>
                <div className='VendaBloco'>
                    <div className='blocopng'>
                        <img src='/assets/images/carro2.png' alt="Carro" />
                    </div>
                    <div className='blocoadd'>
                        <div className='vltotal'>
                            <h2> Valor Total </h2>
                            <input type="text" value={valorInicial} onChange={e => setValorInicial(e.target.value)} />
                        </div>
                        <div className='parc-juros'>
                            <div>
                                <h2>Parcelas</h2>
                                <input className='inp1' type="text" value={parcelas} onChange={e => setParcelas(e.target.value)} />
                            </div>
                            <div>
                                <h2>Juros Mensal (%)</h2>
                                <input className='inp2' type="text" value={juros} onChange={e => setJuros(e.target.value)} />
                            </div>
                        </div>
                        <button className='botao' onClick={() => calcularTudo(valorInicial, parcelas, juros)}> Calcular</button>
                        <div className='Parcelas'>
                            Parcelas: {valorParcela}
                        </div>
                        <div className='Valor-Total'>
                            Valor Total: {valorTotal}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
