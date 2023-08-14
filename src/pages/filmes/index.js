import { useState } from 'react';
import Cabecalho from '../../components/cabecalho';
import './index.scss'
import axios from 'axios';

export default function IMDB() {

    const [filme, setFilme] = useState('');
    const [lista, setLista] = useState([]);


    async function buscar() {

        let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=c8de97bb&s=' + filme

        let response = await axios.get(url);

        setLista(response.data.Search);
    }

    return (

        <div className="pagina-filme">
            <div className='cabe'>
                <Cabecalho />
            </div>

            <section className='secao'>
                <div className='card'>
                    <div className='topo'>
                        <p>IMDB</p>
                    </div>


                    <b>Consulta de filmes</b>
                    <div className='sla'>
                        <label className='caixinha'>

                            <div className='searchbar-1'>
                                <p>nome</p>
                                <input type='text' value={filme} onChange={e => setFilme(e.target.value)} />
                            </div>


                            <button onClick={buscar}>
                                <img src='/assets/images/icon-buscar.svg'></img>
                            </button>
                        </label>
                    </div>


                    <section className='filtro'>
                        <p>Codigo</p>
                        <p>Título</p>
                        <p>Ano</p>
                    </section>

                    <div className='resultado'>

                        <table className='resultnome'>



                            {lista.map(item =>

                                <tr>

                                    <td className='codigo'>

                                        {item.imdbID}

                                    </td>

                                    <td className='titlee'>

                                        {item.Title}

                                    </td>


                                    <td className='anoo'>

                                        {item.Year}

                                    </td>

                                    <td className='hidden'>

                                        <img className='hidima' src= {item.Poster} />

                                    </td>

                                </tr>



                            )}



                        </table>

                    </div>


                </div>
            </section>
        </div>


    );






}