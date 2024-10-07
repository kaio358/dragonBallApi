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


    const gerarPaginacao = (totalDePaginas, paginaAtual) => {
        const paginas = [];
      
        for (let i = 1; i <= totalDePaginas; i++) {
          if (i === 1 || i === totalDePaginas || (i >= paginaAtual - 1 && i <= paginaAtual + 1)) {
            paginas.push(<span key={i} onClick={()=>setPaginaAtual(i)}>{i}</span>);
          } else if (i === 2 || i === totalDePaginas - 1) {
            paginas.push(<span key={i}>...</span>);
          }
        }
      
        return paginas;
      };

   
    
    return (
        <div >
            <div className={styles.caixaDaLista}>
                {dadosParaCards ? dadosParaCards.items.map(c=>(
                    <CardPersonagem key={c.id} nome={c.name} raca={c.race} identificacao={c.id} imagem={c.image} />
                )) : ""}
            </div>
            <div className={styles.passarPaginas}>
                <MdArrowLeft className={styles.setas} onClick={()=>{if(paginaAtual>1) setPaginaAtual( paginaAtual-1)}}/>
                
                {/* {[...Array(totalDePaginas)].map((_,index)=>{
                        
                        return <span key={index+1}>{index+1}</span>
                })} */}
                {gerarPaginacao(totalDePaginas,paginaAtual)}
              
               
                
                <MdArrowRight className={styles.setas}  onClick={()=>{if(paginaAtual<totalDePaginas) setPaginaAtual(paginaAtual+1)}}/>
                
            </div>
        </div>
    )
}

export default ListaPersonagens;