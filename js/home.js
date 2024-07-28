import { creatCart } from "./function.js";
function getData() {
  let data = [];
  if (localStorage.getItem("tovar")) {
    data = JSON.parse(localStorage.getItem("tovar"));
  }
  return data;
}
const wrapper = document.querySelector("#box");
const img = document.querySelector("#box_img");
const name = document.querySelector("#name");
const info = document.querySelector("#info");
const newPrice = document.querySelector("#newPrice");
const old = document.querySelector("#oldrice");
const button = document.querySelector("#button");
const arava = document.querySelector("#arave");
// console.log(arava);

document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let id = url.split("id=")[1];
  // console.log(id);
  if (id) {
    fetch(`https://cars-pagination.onrender.com/products/${id}`)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        if (id) {
          img.setAttribute("src", data.image);
          name.innerHTML = data.name;
          newPrice.innerHTML = data.newPrice;
          old.innerHTML = data.oldPrice;

       
          arava.addEventListener("click", function (el) {
            el.preventDefault();
            window.location.assign(`http://127.0.0.1:5500/page/cart.html`);
          });
          button.addEventListener("click", function (event) {
            event.preventDefault();
            //  window.location.assign(`http://127.0.0.1:5500/page/cart.html`)

            let tovar = {
              id: id,
              name:data.name,
              price: data.newPrice,
              image: data.image,
              oldPrice: data.oldPrice
            };
            
            // localStorage.setItem("tovar", JSON.stringify(tovar));
            let stor = getData()
            stor.push("tovar")
            localStorage.setItem("tovar", JSON.stringify(stor))


            // console.log(kub);
          
          });
        } else {
          window.location("http://127.0.0.1:5500/index.html");
        }
        // let carts = document.querySelectorAll('#eshik1')
        // carts.length && carts.forEach(function(el){
        //     el.addEventListener('click', function(){
        //         let id = this.getAttribute('data-id')

        //         window.location.assign(`http://127.0.0.1:5500/page/home.html?id=${id}`)
        //     })
        // })
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
