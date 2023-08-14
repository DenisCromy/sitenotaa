import './index.scss';
import axios from 'axios';
import { useState } from 'react';

export default function Marvel() {

  const[heroi, setHeroi] = useState('Nome do Personagem')
  const[herois, setHerois] = useState([])


  async function Buscarherois(){
    let url = '';
    if(heroi == '' || heroi == 'Nome do Personagem' ){
      url = 'https://gateway.marvel.com/v1/public/characters?apikey=b47e4228d761ae5ae4d33dd6f72e6f8f&ts=1&hash=c97c042fae1eac251cf83e3d08616166';
    }
    else if (heroi != ''){
      url = 'https://gateway.marvel.com/v1/public/characters?apikey=b47e4228d761ae5ae4d33dd6f72e6f8f&ts=1&hash=c97c042fae1eac251cf83e3d08616166&name=' + heroi;
    }

    let r = await axios.get(url)

    setHerois(r.data.data.results)
  }

  const[cont, setCont] = useState(0);

  async function Proximo(){
    let url = '';
      if(heroi == '' || heroi == 'Nome do Personagem'){
        setCont(cont + 20);
        url = 'https://gateway.marvel.com/v1/public/characters?apikey=b47e4228d761ae5ae4d33dd6f72e6f8f&ts=1&hash=c97c042fae1eac251cf83e3d08616166&offset=' + cont;
      }

    let r = await axios.get(url)

    setHerois(r.data.data.results)
  }


  return (
    <div className="body">
      <div className='cabecalho'>
        
       <div className='img'>
          <img src='/assets/images/image 14.png'/>
        </div> 
        
        <div className='direita'>
          <p>Home</p>
          <p>Personagens</p>
          <p>Quadrinhos</p>
          <p>Eventos</p>
          <p>Contato</p>

          <img src='/assets/images/Rectangle 68.png'/>

        </div>

      </div>

      <div className='centro'>
        
        <div className='card'>
          
          <div className='esq'>
            <p>Personagens da Marvel</p>
          </div>
          
          <div className='direi'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum augue ut ligula malesuada blandit. Quisque tempor ex quis congue malesuada. Pellentesque est eros, aliquam non malesuada et, molestie ut purus.</p>
            <div className='input'>
              <button onClick={Buscarherois}>
                <img src='/assets/images/Union.svg'/>
              </button>
              <input type='text' value={heroi} onChange={e => setHeroi(e.target.value)} />
            </div>

            <button onClick={Proximo}>Proximos herois</button>
          </div>
        
        </div>
      
      </div>
      <div className='dv-cards'>
        {herois.map(item =>
            <div className='card'> 
              <img src={item.thumbnail.path + '.' + item.thumbnail.extension}/>
              <h1>{item.name}</h1>
              <b title={item.description}>{item.description}</b>
            </div>
        )}
      </div>
    </div>
  );
}
