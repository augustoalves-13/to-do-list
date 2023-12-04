import { useEffect, useState } from "react";
import Storage from 'local-storage';
import './index.scss';
import HeaderLogin from "../../components/LoginComponents/HeaderLogin";

const ProfilePage = () => {
    const [name, setName] = useState('Carregando...');
    const [color, setColor] = useState('');

    useEffect(() => {
        ProfileInfo();
    }, []);

    const ProfileInfo = () => {
        const user = Storage('usuario-logado').data;
        setName(user.nome);
    }

    const SaveColor = () => {
        const temas = Storage('temas') || {}; // Get the current 'temas' object from Storage

        temas.principal = color; // Update the 'principal' property with the new color

        Storage('temas', temas); // Save the updated 'temas' object back to Storage
    }

    return (
        <div className="profile-container">
            <HeaderLogin />
            <p>{name}</p>
            <input type="color" value={color} onChange={e => setColor(e.target.value)} />
            <button onClick={SaveColor}>Salvar</button>
        </div>
    );
}

export default ProfilePage;
