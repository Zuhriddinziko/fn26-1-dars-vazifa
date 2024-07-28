function creatCart(data) {
  return `<div class="eshig" id="eshik1" title='${data.category}' data-id="${data.id}">
    <img class="dver" id="eshik_imag" src='${data.image}' width="288" height="320" alt="eshig">
    <div class="yell">
        <div class="str">
            <img src="./image/yellov-st.svg" width="16" height="16" alt="star">
            <img src="./image/yellov-st.svg" width="16" height="16" alt="star">
            <img src="./image/yellov-st.svg" width="16" height="16" alt="star">
            <img src="./image/blu-str.svg" width="16" height="16" alt="star">
            <img src="./image/blu-str.svg" width="16" height="16" alt="star">
            <p>
               <span id="comment">(${data.comments})</span> отзывов 
            </p>
        </div>
        <p id="zamok" class="zamok">
           ${data.name}
        </p>
        <h3 class="narx" id="new_price">
            ${data.newPrice}₽ <span class="oldnarx" id="old_price">${data.oldPrice}₽</span>
        </h3>
        <p class="net">
            <img src="./image/gali.svg" width="20" height="20" alt="exx"> Нет в наличии
        </p>
        <p class="sale">
            SALE
        </p>
        <p class="padark">
            <img src="./image/padark.svg" width="12" height="12" alt="padark">
            Подарок
        </p>
    </div>
</div>`;
  function creatCartHome(data) {
    return ` <div class="box continer" id="box">
    <img src="${data.image}" width="400"
    height="550" alt="" id="box_img">
    <div class="info" id="box_info">
        <h2 id="name">${data.name}</h2>
        <p id="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur fugit earum laboriosam fugiat voluptatem, quis excepturi aliquam nulla voluptatibus accusantium.</p>
       <p>Цена</p>
        <h3 class="narx" id="newPrice">
            ${data.newPrice}₽ <span class="oldnarx" id="oldPrice">${data.oldPrice}₽</span>
        </h3>
        <button id="button">carzina</button>
    </div>
</div>`;
  }
}
export { creatCart };
