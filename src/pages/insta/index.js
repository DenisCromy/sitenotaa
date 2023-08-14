import './index.scss';
import Cabeca from '../../components/cabeca';
import Icons from '../../components/homeicons';
import { useState } from 'react';



export default function Insta() {

    const [Imagem, setImagem] = useState('');
    const [Avatar, setAvatar] = useState('');
    const [Tempo, setTempo] = useState('');
    const [Desc, setDesc] = useState('');
    const [Like, setLike] = useState(0);
    const [Usuario, setUsuario] = useState('');
    const [Vetor, setVetor] = useState([]);


    function CriarPost(){

        let p = {

            nome: Usuario,
            tempo: Tempo,
            desc: Desc,
            avatar: Avatar,
            foto: Imagem,
            likes: Like

        }


        setVetor([... Vetor, p])

    }


    return (
        <div className="Insta-page">

        <aside>

            <Cabeca />
            <Icons />

        </aside>

        <div className='centro'>

            <div>

                <h1>Novas Publicações</h1>

            </div>
            <div className='fotinhas'>

                <img src='/assets/images/group 75.svg' />
                <img src='/assets/images/group 76.svg' />
                <img src='/assets/images/group 77.svg' />
                <img src='/assets/images/group 78.svg' />
                <img src='/assets/images/group 79.svg' />
                <img src='/assets/images/group 80.svg' />
                <img src='/assets/images/group 81.svg' />
                <img src='/assets/images/group 82.svg' />

            </div>
            <div className='addfuction'>

                <div className='Infor1'>

                    Usuario: <input type='text' value={Usuario} onChange={e => setUsuario(e.target.value)}></input>
                    Tempo: <input type='text' value={Tempo} onChange={e => setTempo(e.target.value)}></input>

                </div>
                <div className='Infor2'>

                    Avatar: <input type='text' value={Avatar} onChange={e => setAvatar(e.target.value)}></input>
                    Descrição: <input type='text' value={Desc} onChange={e => setDesc(e.target.value)}></input>

                </div>
                <div className='Infor3'>

                    Post: <input type='text' value={Imagem} onChange={e => setImagem(e.target.value)}></input>
                    Curtidas: <input type='text' value={Like} onChange={e => setLike(e.target.value)}></input>

                </div>

                <button onClick={CriarPost}>Postar</button>

            </div>

            <div className='functionadded'>

                {Vetor.map(item =>
                    <div className='postp'>

                        <div className='minicab'>

                        <img className='fotinhaperfil' src = {item.avatar}></img>
                        <h2 className='usuname'> {item.nome} </h2>
                        <h2 className='tempoo'>• {item.tempo}</h2>

                        </div>

                        <div className='fotopost'>

                            <img className='fotinhapost' src={item.foto}></img>

                        </div>

                        <div className='curtidesc'>

                        <h2 className='likett'>{item.likes} curtidas </h2>
                        <div className='nomeedesc'>

                        <h2 className='Nomessss'> {item.nome} </h2>
                        <h2 className='descccc'> {item.desc}</h2>

                        </div>

                        </div>



                        



                    </div>

                    
                
                
                )}

            </div>

        </div>


            


        </div>


    )


}