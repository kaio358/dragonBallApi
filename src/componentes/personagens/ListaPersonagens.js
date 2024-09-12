import { useEffect,useState } from "react";

import styles from "./ListaPersonagens.module.css";

import CardPersonagem from "./CardPersonagem";


function ListaPersonagens() {
    const [paginaAtual,setPaginaAtual] = useState(1)
    const [dadosParaCards,setDadosParaCards]=useState()

 

    useEffect(()=>{
      
            
            fetch(`https://dragonball-api.com/api/characters?page=${paginaAtual}&limit=12`)
            .then(resp=>resp.json())
            .then(dados=>{
              
                setDadosParaCards(dados)
                
                
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            })
        
    },[])
    
   
    
    return (
        <div className={styles.caixaDaLista}>
            {dadosParaCards ? dadosParaCards.items.map(c=>(
                <CardPersonagem key={c.id} nome={c.name} raca={c.race} identificacao={c.id} imagem={c.image} />
            )) : ""}
        </div>
    )
}

export default ListaPersonagens;