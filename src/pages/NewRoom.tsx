import {Link} from 'react-router-dom';

import ilustrationImg from '../assests/images/illustration.svg';
import logoImg from '../assests/images/logo.svg';
import googleIconImg from '../assests/images/google-icon.svg';

import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';

export function NewRoom(){

    const {user} = useAuth();

    return (
        <div id='page-auth'>
            <aside>
                <img src={ilustrationImg} alt="Illustration" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>                    
                    <form>
                        <input 
                            type="text" 
                            placeholder="Nome da sala"
                        />

                        <Button type='submit'>
                            Criar sala
                        </Button>

                    </form>
                    <p>
                        Quer entrar em uma sala existente <Link to='/'>Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}