let productsContainer = document.getElementById("products");

//Чтобы переключение классов сработало один раз
let flagLeave = false;
let flagEnter = false;

//Обработчик клика на карточке товара и ссылке
productsContainer.addEventListener("click", function (e) {
  //Обработка клика по ссылке
  //Выбирается ближайший предок по селектору и переключается его класс
  //Рамка и плашка с весом стилизуются отдельно

  if (
    !e.target.classList.contains("link__a") &&
    e.target.closest(".body__product-card__link")
  ) {
    return;
  } else {
    e.preventDefault();
    e.target
      .closest(".body__product-card")
      .querySelectorAll(".body__product-card__description")[0]
      .classList.toggle("description_selected");
    e.target
      .closest(".body__product-card")
      .querySelectorAll(".body__product-card__description")[0]
      .querySelectorAll(".description__weight")[0]
      .classList.toggle("description__weight_selected");
  }
  //Меняем текст под карточкой
  let linkContainer = e.target
    .closest(".body__product-card")
    .querySelectorAll(".body__product-card__link")[0];
  let spans = linkContainer.querySelectorAll("span");

  for (let span of [...spans]) {
    span.classList.toggle("display-none");
  }

  showHoverState();

  flagLeave = false;
  flagEnter = false;
  function showHoverState() {
    let productCards = document.querySelectorAll(".body__product-card");

    for (let productCard of [...productCards]) {
      //Обработчик события при покидании выбранной карточки товара
      productCard.addEventListener("mouseleave", function (e) {
        if (
          e.target
            .querySelectorAll(".body__product-card__description")[0]
            .classList.contains("description_selected")
        ) {
          if (!flagLeave) {
            toggleSubtitle(e);
          }
          flagLeave = true;
          flagEnter = false;
        }
      });

      //Обработчик события при наведении на выбранную карточку товара
      productCard.addEventListener("mouseenter", function (e) {
        if (
          e.target
            .querySelectorAll(".body__product-card__description")[0]
            .classList.contains("description_selected")
        ) {
          if (!flagEnter) {
            console.log("flaEnter сработал");
            toggleSubtitle(e);
          }
          flagEnter = true;
          flagLeave = false;
        }
      });
      function toggleSubtitle(e) {
        let subTitle = e.target.querySelectorAll(".description__subtitle")[0];
        let spans = subTitle.querySelectorAll("span");
        for (let span of [...spans]) {
          span.classList.toggle("display-none");
        }
      }
    }
  }
});
