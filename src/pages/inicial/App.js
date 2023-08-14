import { Link } from 'react-router-dom';
import Cabecalho from '../../components/cabecalho';
import './App.scss'

export default function App() {
  return (
    <div className='pagina-home'>

      <Cabecalho />

      <div className='buttlink'>

        <div className='buttss'>

          <Link className='Linkamento' to={'/simucarro'}> Ir Para Compra de carro</Link>
          <Link className='Linkamento' to={'/sorvete'}> Ir Para Compra de sorvete</Link>
          <Link className='Linkamento' to={'/insta'}> Ir Para Instagram</Link>
          <Link className='Linkamento' to={'/filmes'}> Ir Para IMDB</Link>
          <Link className='Linkamento' to={'/netflix'}> Ir Para Netflix</Link>
          <Link className='Linkamento' to={'/sitemarvel'}> Ir Para Marvel</Link>
          

        </div>

      </div>

    </div>
  );
}


