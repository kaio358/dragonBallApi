import styles from "./CardPersonagem.module.css";

function CardPersonagem(params) {
    // console.log(params);
    
    return(
        <div className={styles.caixaDoCard}>
            <div className={styles.caixaDeImagemCard}>
                <img src={params.imagem} className={styles.imagemDosPersonagens}/>
            </div>
            <div>
                <div className={styles.racaCard}>
                    {params.raca}
                </div>
                <div className={styles.nomeCard}>

                    {params.nome}
                </div>
               
            </div>
        </div>
    )
}
export default CardPersonagem;