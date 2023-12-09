/* 
propert = document.querySelectorAll(
  "#containerList > .items > .itemsContent > .bottomItems > .property"
);

propert[0].onclick = function () {
  alert();
}; */

/* localStorage.removeItem("basket"); */

function openCart() {
  modal.className = "show";
  modal.style.display = "flex";
  mainContainer.className = "hide";

  /* Scrolling animations: */
  window.scrollTo({
    top: 50,
    behavior: "smooth",
  });

  let bas = JSON.parse(localStorage.getItem("basket"));

  /* alert(bas.length); */

  itemParent.innerHTML = "";

  Totalprice = 0;
  TotalPriceForPay.innerHTML = Totalprice;

  for (i = 0; i < bas.length; i++) {
    items = document.createElement("div");
    items.className = "item";
    itemParent.appendChild(items);

    img = document.createElement("span");
    img.className = "pic";
    items.appendChild(img);

    onvan = document.createElement("span");
    onvan.className = "name";
    onvan.innerHTML = bas[i].elName;
    items.appendChild(onvan);

    number = document.createElement("div");
    number.className = "number";
    items.appendChild(number);

    button1 = document.createElement("button");
    button1.className = "plus";
    button1.innerHTML = "+";
    number.appendChild(button1);

    button1.id = "Plus_" + i;

    number_text = document.createElement("p");
    number_text.className = "number-text";
    /* alert(bas[i].elQuantity); */
    number_text.innerHTML = bas[i].elQuantity;
    number.appendChild(number_text);

    button2 = document.createElement("button");
    button2.className = "mines";
    button2.innerHTML = "-";
    number.appendChild(button2);

    button2.id = "mines_" + i;

    button1.setAttribute("quan", bas[i].elQuantity);
    button1.setAttribute("product-id-in-cart", i);

    button2.setAttribute("quan", bas[i].elQuantity);
    button2.setAttribute("product-id-in-cart", i);

    button1.onclick = function () {
      bas[this.getAttribute("product-id-in-cart")].elQuantity =
        Number(this.getAttribute("quan")) + 1;

      /* alert(bas[this.getAttribute("product-id-in-cart")].elQuantity); */
      localStorage.setItem("basket", JSON.stringify(bas));
      openCart();
      /* alert(this.getAttribute("product-id")); */
    };
    button2.onclick = function () {
      if (Number(this.getAttribute("quan") > 1)) {
        bas[this.getAttribute("product-id-in-cart")].elQuantity =
          Number(this.getAttribute("quan")) - 1;

        /* alert(bas[this.getAttribute("product-id-in-cart")].elQuantity); */
        localStorage.setItem("basket", JSON.stringify(bas));
        openCart();
        /* number_text.innerHTML = this.getAttribute("quan") - 1; */
      }
    };

    money = document.createElement("div");
    money.className = "money";
    items.appendChild(money);

    off = document.createElement("span");
    off.className = "off";
    off.innerHTML = bas[i].elPrice + "تومان";
    money.appendChild(off);

    price = document.createElement("span");
    price.className = "price";
    price.innerHTML = bas[i].elPriceWithOff;
    money.appendChild(price);

    Totalprice = Totalprice + bas[i].elPriceWithOff * bas[i].elQuantity;
    TotalPriceForPay.innerHTML = Totalprice;

    del = document.createElement("span");
    del.className = "delete";
    items.appendChild(del);

    del.setAttribute("current-procuct-id", bas[i].elId);

    del.onclick = function () {
      /* alert(this.getAttribute("current-game-id")); */

      /* this code is for removing from bascket: */
      for (let [x, procuct] of bas.entries()) {
        if (procuct.elId == this.getAttribute("current-procuct-id")) {
          bas.splice(x, 1);
        }
      }

      localStorage.setItem("basket", JSON.stringify(bas));

      closeCart();
      openCart();
    };
  }
}

function closeCart() {
  modal.className = "hide";
  mainContainer.className = "main-container";
}

closeModal.onclick = function () {
  closeCart();
};
