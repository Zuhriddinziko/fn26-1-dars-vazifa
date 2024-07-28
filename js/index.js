import { creatCart } from "./function.js";
const wrapper = document.querySelector("#wrapper");
const eshikImg = document.querySelectorAll("#eshik_imag");
const name = document.querySelectorAll("#zamok");
const oldPrice = document.querySelectorAll("#old_price");
const newPrice = document.querySelectorAll("#new_prise");
const comment = document.querySelectorAll("#comment");
const loader = document.querySelectorAll("#loader");
const filter = document.querySelector("#filter");
const flt = document.querySelector("#flt");
const befo = document.querySelector("#befo");
const findd = document.querySelector("#finish");

console.log(findd);

document.addEventListener("DOMContentLoaded", function () {
  fetch("https://cars-pagination.onrender.com/products")
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      if (data.length) {
        data.forEach(function (pro) {
          let card = creatCart(pro);
          wrapper.innerHTML += card;
          flt.addEventListener("change", function (el) {
            el.preventDefault();
            let narx = this.value;
            let narx1 = +narx + 2000;
            befo.innerHTML = narx + "₽";
            findd.innerHTML = narx1 + "₽";
          });

          filter &&
            filter.addEventListener("change", function (event) {
              event.preventDefault();
              let cco = this.value;

              wrapper.innerHTML = "";
              fetch(`https://cars-pagination.onrender.com/products`)
                .then((res) => {
                  if (res.status == 200) {
                    return res.json();
                  }
                })
                .then((data) => {
                  if (data.length) {
                    data.filter(function (el) {
                      if (el.category == cco) {
                        let sol = creatCart(el);
                        wrapper.innerHTML += sol;
                      }
                    });
                  }
                });
            });
        });
      }

      let carts = document.querySelectorAll("#eshik1");
      carts.length &&
        carts.forEach(function (el) {
          el.addEventListener("click", function () {
            let id = this.getAttribute("data-id");
            let clas = this.getAttribute("class");

            window.location.assign(
              `http://127.0.0.1:5500/page/home.html?id=${id}`
            );
          });
        });
    })
    .catch((err) => {
      console.log(err);
    });

});
