/* Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const divContent = new Vue(
  {
    el: "#htmlElement",
    data: {
      text: "Team Bunny",
      img: {
        src: "img/polletto.jpg",
        widthSize: "50%",
        altName: "Il coniglietto più bello del mondo"
      },

    }
  });
