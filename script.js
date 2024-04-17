// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

console.log(Vue);

const { createApp } = Vue;

createApp({
    data() {
        return{
            title: "LUCA VS LORIS",
            description: `
            Nel silenzio teso di una stanza, due menti si preparano a sfidarsi su una scacchiera, dove ogni mossa è un'opportunità e ogni pezzo è un soldato nel campo di battaglia della strategia. Luca e Loris si siedono di fronte, occhi fissi sulla scacchiera, pronti a immergersi in un duello di astuzia e intuizione. Le pedine sono schierate, i cavalieri pronti a galoppare, le torri a difendere i loro domini, e i re a proteggere il proprio regno. È l'inizio di un confronto che va oltre il semplice movimento di pezzi: è una sfida di intelligenza, pazienza e audacia. Tra i ticchettii degli orologi e il respiro concentrato dei giocatori, la partita prende vita, promettendo emozioni, tensioni e colpi di genio.`,
            img: "./images.jpeg",
            colorTitle: "white-title",
            descrStyle: "desc"
        }
    },
}).mount("#vue-container");