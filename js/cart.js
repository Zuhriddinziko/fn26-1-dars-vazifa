const box = document.querySelector(".cart_box");
const boxImg = document.querySelector("#box_img");
const filter = document.querySelector("#selectt");
const delet = document.querySelector("#cart_delet");
const price = document.querySelector("#price");
const narx = document.querySelector("#narx");
 console.log(narx);
delet.addEventListener("click", function () {
  delet.parentNode.parentNode.parentNode.remove();
});

function getData() {
  let data = [];
  if (localStorage.getItem("tovar")) {
    data = JSON.parse(localStorage.getItem("tovar"));
  }
  return data;
}
let sss = getData()
console.log(sss);
boxImg.setAttribute("src", sss.image)
narx.innerHTML=sss.price+'₽'

document.addEventListener("DOMContentLoaded", function () {
  filter.addEventListener("change", function () {
    let son = this.value;
    let son1 = price;
    price.innerHTML = son1;
  });
});
