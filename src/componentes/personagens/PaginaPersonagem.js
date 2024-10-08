import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./PaginaPersonagem.module.css"

function PaginaPersonagem() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id"); 

    const [resultados,setResultados] = useState()
    useEffect(()=>{
        if(id){
            try{
                fetch(`https://dragonball-api.com/api/characters/${id}`)
                .then(dados => dados.json())
                .then(dados=> setResultados(dados))
                console.log(resultados);
                
            }catch(erro){
                console.log(erro);
                
            }
        }
        
    },[id])

    return(
        <div    className={styles.principalCaixaPersonagem}>
            <h1 className={styles.nomePersonagem}>{resultados? resultados.name :""}</h1>
            <div className={styles.caixaDeImagemPersonagem}>
                <img src={resultados ? resultados.image : ""}  className={styles.imagemPersonagem}/>
            </div>
            <div className={styles.descricaoPersonagem}>
                {resultados ? resultados.description:""}
            </div>
        </div>
    )
}
export default PaginaPersonagem;