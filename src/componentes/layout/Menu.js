import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import styles from "./Menu.module.css";


import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

function Menu() {
    const [isLupaChecked, setIsLupaChecked] = useState(false);

    const handleLupaChange = () => {
        setIsLupaChecked(!isLupaChecked);
    };


    // enviado formulario para back 
    const [texto, setTexto] = useState('');
    const navigate = useNavigate();

    const textoMuda = (evento)=>{
        setTexto(evento.target.value);
    }

    const eventoDeEnter = (event)=>{
        if(event.key ==="Enter"){
            navigate(`/filtro?nome=${texto}`);
            // fetchProcuraResultado();
            
        }
    }
   
    // const fetchProcuraResultado = async () => {
    //     try {
    //       const response = await fetch(`https://dragonball-api.com/api/characters?name=${texto}`);
    //       const data = await response.json();
    //       console.log("Resultados da busca:", data);
    //     } catch (error) {
    //       console.error("Erro ao buscar dados:", error);
    //     }
    //   };



    return (
        <nav className={styles.menu}>
            <label className={styles.menuHamburger} htmlFor="checkHamburger">
                <IoIosMenu />
            </label>
            <input type="checkbox" id="checkHamburger" className={styles.checkHamburger} />
            <div className={styles.opcoesDoMenu}>
                <div>
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <label 
                        className={`${styles.lupaDoMenu} ${isLupaChecked ? styles.lupaChecked : ""}`} 
                        htmlFor="checkLupa"
                    >
                        <FaMagnifyingGlass />
                    </label>
                    <input 
                        type="checkbox" 
                        id="checkLupa" 
                        className={styles.checkLupas} 
                        onChange={handleLupaChange}
                    />
                    <input 
                        type="text" className={styles.barraDeBuscaMenu} 
                        onChange={textoMuda}
                        onKeyDown={eventoDeEnter}
                        placeholder="Digite o nome para buscar"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Menu;
