var padre = document.getElementsByClassName("shop-container")[0];

for (i = 0; i < 5; i++) {
    var link = document.createElement("a");
    link.setAttribute("href", "shop-item.html");
    var element = document.createElement("div");
    element.setAttribute("class", "shop-item");
    var image = document.createElement("img");
    image.setAttribute("src", "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12225358/Pug-On-White-01.jpg");
    image.setAttribute("class", "img-responsive");
    var price = document.createElement("h1");
    var priceNumber = document.createTextNode("precio: ");
    price.appendChild(priceNumber);
    var nombre = document.createElement("h2");
    nombre.appendChild(document.createTextNode("nombre"));
    var description = document.createElement("p");
    description.appendChild(document.createTextNode("Algo muy importante va aqui"));
    element.appendChild(image);
    element.appendChild(price);
    element.appendChild(nombre);
    element.appendChild(description);
    link.appendChild(element);
    padre.appendChild(link);
}