

import  { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./FiltroNome.module.css";

import CardPersonagem from "./CardPersonagem";

function FiltroNome() {
    const [searchParams] = useSearchParams();
    const nome = searchParams.get("nome"); // Captura o parâmetro 'nome' da query string

    const [resultados, setResultados] = useState([]);

    // Função para buscar os dados
    useEffect(() => {
        const fetchResults = ()=> {
        if (nome) {
            try {
             fetch(`https://dragonball-api.com/api/characters?name=${nome}`)
            .then(dados => dados.json())
            .then(dados=> setResultados(dados))
            // const data = await response.json();
            
            } catch (error) {
            console.error("Erro ao buscar dados:", error);
            }
        }
        };

        fetchResults();
    }, [nome]); 
    return (
        <div>
            <div className={styles.caixaDaLista}>
                {resultados ? (
                    resultados.map((resultado, index) => (
                        <CardPersonagem 
                            key={index} 
                            nome={resultado.name} 
                            raca={resultado.race} 
                            identificacao={resultado.id} 
                            imagem={resultado.image} />
                    ))
                ) : (
                <p>Nenhum resultado encontrado.</p>
                )}
            </div>
        </div>
    )
}
export default FiltroNome;