
/* function creaItemP(id,texto){
    let item = document.createElement("p");
    
    item.setAttribute("id",id);
    item.innerHTML = texto;
    return item;
}

function creaItemImg(texto){
    let item = document.createElement("img");
    
    item.setAttribute("src",texto);
    return item;
}

function creaItemCard(objCard){
    let newCard = objCard;
    let currentNode = document.getElementById("card");
    console.log(newCard);

    let item1 = creaItemP("item1",newCard.titulo);
    currentNode.appendChild(item1);
    let item2 = creaItemImg(newCard.imagen);
    currentNode.appendChild(item2);
    let item3 = creaItemP("item3",newCard.pais);
    currentNode.appendChild(item3);
    let item4 = creaItemP("item4",newCard.ano);
    currentNode.appendChild(item4);
    let item5 = creaItemP("item5",newCard.tipo);
    currentNode.appendChild(item5);
    let item6 = creaItemP("item6",newCard.sinopsis);
    currentNode.appendChild(item6);
}
*/

function newNode(newP1,newImg,newP3,newP4,newP5,newP6){
    let nodoNuevo =
    `
    <p class = "item1">${newP1}</p>
    <img src= ${newImg} class = "item2">
    <p class = "item3">${newP3}</p>
    <p class = "item4">${newP4}</p>
    <p class = "item5">${newP5}</p>
    <p class = "item6">${newP6}</p> `;
    
    return nodoNuevo;
}

function insertNode(nodeInfo){
    let posicion = document.querySelector("#cards");
    posicion.innerHTML = nodeInfo;
}

function concatInsetNodos(arr1){
  let concat= ``;
  let P1, Img1, P2, P3, P4, P5, P6;
  let sizeArr;
  let i = 0;

  sizeArr = arr1.length;
  
  for (i; i < sizeArr; i++ ){
    P1 = arr1[i].titulo;
    Img1 = arr1[i].imagen;
    P2 = arr1[i].pais;
    P3 = arr1[i].ano;
    P4 = arr1[i].tipo;
    P5 = arr1[i].sinopsis;

    concat = concat + newNode(P1, Img1, P2, P3,P4,P5);
  }
insertNode(concat)
}

