import { useEffect,useState } from "react";

import styles from "./ListaPersonagens.module.css";

import CardPersonagem from "./CardPersonagem";

import { MdArrowLeft, MdArrowRight } from "react-icons/md";




function ListaPersonagens() {
    const [paginaAtual,setPaginaAtual] = useState(1)
    const [totalDePaginas,setTotalDePaginas] = useState()
    const [dadosParaCards,setDadosParaCards]=useState()

    useEffect(()=>{
        fetch('https://dragonball-api.com/api/characters')
        .then(response => response.json())
        .then(data => {
            const totalItems = data.meta.totalItems;
            setTotalDePaginas(Math.ceil(totalItems/12))
        })
        .catch(error => console.error('Erro ao obter personagens:', error));

    },[])

    useEffect(()=>{
      
            
            fetch(`https://dragonball-api.com/api/characters?page=${paginaAtual}&limit=12`)
            .then(resp=>resp.json())
            .then(dados=>{
              
                setDadosParaCards(dados)
                
                
            })
            .catch(error => {
                console.error('Erro ao buscar dados:', error);
            })
        
    },[paginaAtual])
    
   
    
    return (
        <div>
            <div className={styles.caixaDaLista}>
                {dadosParaCards ? dadosParaCards.items.map(c=>(
                    <CardPersonagem key={c.id} nome={c.name} raca={c.race} identificacao={c.id} imagem={c.image} />
                )) : ""}
            </div>
            <div className={styles.passarPaginas}>
                <MdArrowLeft className={styles.setas}/>
                
                {[...Array(totalDePaginas)].map((_,index)=>{
                        return <span key={index+1}>{index+1}</span>
                })}
              
               
                
                <MdArrowRight className={styles.setas}/>
                
            </div>
        </div>
    )
}

export default ListaPersonagens;