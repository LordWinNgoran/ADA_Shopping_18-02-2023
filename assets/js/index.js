// appel API recuperation de la liste de tous les produits
fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())
    .then(response =>
        appendData(response));

// fonction appendData qui permet d'injecter les data dans le html

function appendData(data) {
    var parent = document.getElementById("inserData");
    for (var i = 0; i < data.length; i++) {
        const content = `
      <div class="col mb-3 text-center">
        <div class="card " style="width: 18rem;">
          <img src="${data[i].image}" height="200px" class="card-img-top" alt="...">
          <div class="card-body">
              <h5 class="card-title" id="titleCard">${data[i].title}</h5>
              <p class="card-text" id="desc">${data[i].description}</p>
              <a href="#" class="btn btn-primary ">Buy</a>
          </div>
        </div>
     </div>
  `;
  parent.innerHTML += content;
        
    }
}
        