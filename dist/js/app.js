(function() {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    let productsContainer = document.getElementById("products");
    getProducts();
    async function getProducts() {
        let response = await fetch("./files/products.json");
        let data = await response.json();
        for (let product of data.products) {
            let mouses;
            product.productNumberMices <= 1 ? mouses = `` : mouses = product.productNumberMices;
            let happyText;
            product.isCustomerHappy ? happyText = `<br>заказчик доволен` : happyText = ``;
            let hoverText = "Котэ не одобряет?";
            let paramsDisabledClass;
            product.isDisabled ? paramsDisabledClass = "description__wrapper_disabled" : "";
            let weightDisabledClass;
            product.isDisabled ? weightDisabledClass = "description__weight_disabled" : weightDisabledClass = "description__weight_default";
            let borderDisabledClass;
            product.isDisabled ? borderDisabledClass = "description_disabled" : borderDisabledClass = "description_default";
            let firstSpanClass;
            product.isDisabled ? firstSpanClass = "class='display-none'" : firstSpanClass = " ";
            let thirdSpanDisabledClass;
            product.isDisabled ? thirdSpanDisabledClass = " " : thirdSpanDisabledClass = "class='display-none'";
            let linkTextDisabled;
            product.isDisabled ? linkTextDisabled = "body__product-card__link_disabled" : linkTextDisabled = "";
            let template = `<div class="body__product-card">\n<div class="body__product-card__description description ${borderDisabledClass}">\n  <div class="description__wrapper">\n  <img src="${product.productPhoto}" alt="">\n  <div class="description__subtitle ${paramsDisabledClass}"><span>${product.productSubtitle}</span><span class="display-none description__subtitle_selected">${hoverText}</span></div>\n  <div class="description__title ${paramsDisabledClass}">${product.productTitle}</div>\n  <div class="description__taste ${paramsDisabledClass}">${product.productTaste}</div>\n  <div class="description__comment ${paramsDisabledClass}"><span>${product.productNumberPortions}</span> порций<br>${mouses} мышь в подарок${happyText}</div>\n  <div class="description__weight ${weightDisabledClass}">\n    <div class="description__weight__number">${product.productWeight}</div>\n    <div class="description__weight__units">кг</div>\n  </div>\n</div>\n</div>\n<div class="body__product-card__link link ${linkTextDisabled}">\n<span ${firstSpanClass}>Чего сидишь? Порадуй котэ, <a class="link__a" href="${product.productLink}">купи.</a></span>\n<span class="display-none" >${product.selectedText}</span>\n<span  ${thirdSpanDisabledClass}>Печалька, ${product.productTaste} закончился.</span>\n</div>\n</div>`;
            productsContainer.innerHTML += template;
        }
    }
    let showSelected_productsContainer = document.getElementById("products");
    let flagLeave = false;
    let flagEnter = false;
    showSelected_productsContainer.addEventListener("click", (function(e) {
        if (!e.target.classList.contains("link__a") && e.target.closest(".body__product-card__link")) return;
        if (e.target.closest(".body__product-card") && e.target.closest(".body__product-card").querySelectorAll(".description_disabled")[0]) return; else {
            e.preventDefault();
            if (e.target.closest(".body__product-card")) {
                e.target.closest(".body__product-card").querySelectorAll(".body__product-card__description")[0].classList.toggle("description_selected");
                e.target.closest(".body__product-card").querySelectorAll(".body__product-card__description")[0].classList.toggle("description_default");
                e.target.closest(".body__product-card").querySelectorAll(".body__product-card__description")[0].querySelectorAll(".description__weight")[0].classList.toggle("description__weight_selected");
                e.target.closest(".body__product-card").querySelectorAll(".body__product-card__description")[0].querySelectorAll(".description__weight")[0].classList.toggle("description__weight_default");
            }
        }
        if (e.target.closest(".body__product-card")) {
            let linkContainer = e.target.closest(".body__product-card").querySelectorAll(".body__product-card__link")[0];
            let spans = linkContainer.querySelectorAll("span");
            for (let span of [ ...spans ]) {
                span.classList.toggle("display-none");
                spans[2].classList.toggle("display-none");
            }
        }
        showHoverState();
        flagLeave = false;
        flagEnter = false;
        function showHoverState() {
            let productCards = document.querySelectorAll(".body__product-card");
            for (let productCard of [ ...productCards ]) {
                productCard.addEventListener("mouseleave", (function(e) {
                    if (e.target.querySelectorAll(".body__product-card__description")[0].classList.contains("description_selected")) {
                        if (!flagLeave) toggleSubtitle(e);
                        flagLeave = true;
                        flagEnter = false;
                    }
                }));
                productCard.addEventListener("mouseenter", (function(e) {
                    if (e.target.querySelectorAll(".body__product-card__description")[0].classList.contains("description_selected")) {
                        if (!flagEnter) toggleSubtitle(e);
                        flagEnter = true;
                        flagLeave = false;
                    }
                }));
                function toggleSubtitle(e) {
                    let subTitle = e.target.querySelectorAll(".description__subtitle")[0];
                    let spans = subTitle.querySelectorAll("span");
                    for (let span of [ ...spans ]) span.classList.toggle("display-none");
                }
            }
        }
    }));
    window["FLS"] = true;
    isWebp();
})();