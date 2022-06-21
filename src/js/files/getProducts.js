let productsContainer = document.getElementById("products");

getProducts();
async function getProducts() {
  let response = await fetch("./files/products.json");
  let data = await response.json();

  for (let product of data.products) {
    let mouses;
    product.productNumberMices <= 1
      ? (mouses = ``)
      : (mouses = product.productNumberMices);
    let happyText;
    product.isCustomerHappy
      ? (happyText = `<br>заказчик доволен`)
      : (happyText = ``);
    let hoverText = "Котэ не одобряет?";
    let template = `<div class="body__product-card">
<div class="body__product-card__description description">
  <div class="description__wrapper">
  <img src="${product.productPhoto}" alt="">
  <div class="description__subtitle"><span>${product.productSubtitle}</span><span class="display-none description__subtitle_selected">${hoverText}</span></div>
  <div class="description__title">${product.productTitle}</div>
  <div class="description__taste">${product.productTaste}</div>
  <div class="description__comment"><span>${product.productNumberPortions}</span> порций<br>${mouses} мышь в подарок${happyText}</div>
  <div class="description__weight">
    <div class="description__weight__number">${product.productWeight}</div>
    <div class="description__weight__units">кг</div>
  </div>
</div>
</div>
<div class="body__product-card__link link">
<span>Чего сидишь? Порадуй котэ, <a class="link__a" href="${product.productLink}">купи.</a></span>
<span class="display-none" >${product.selectedText}</span>
</div>
</div>`;
    productsContainer.innerHTML += template;
  }
}
