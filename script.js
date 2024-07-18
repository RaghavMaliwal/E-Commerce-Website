document.addEventListener("DOMContentLoaded", () => {
  let currentImage = document.querySelector(".currentImage").childNodes[3];
  let photos = document.querySelectorAll(".p");
  // Function to set the current image and highlight the active thumbnail
  function setActiveThumbnail(index) {
    let newURL = "./images/image-product-" + (index + 1).toString() + ".jpg";
    currentImage.setAttribute("src", newURL);

    photos.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add("active");
      } else {
        thumb.classList.remove("active");
      }
    });
  }

  setActiveThumbnail(0);

  let counter = document.querySelector(".productCount");
  let number = Number(counter.innerHTML);
  let plus = document.querySelector(".counter").childNodes[5];
  let minus = document.querySelector(".counter").childNodes[1];
  let body = document.querySelector("body");
  plus.addEventListener("click", () => {
    number = number + 1;
    counter.innerHTML = number.toString();
  });

  minus.addEventListener("click", () => {
    if (number == 1) {
      counter.innerHTML = 1;
    } else {
      number = number - 1;
      counter.innerHTML = number.toString();
    }
  });

  photos.forEach((element, key) => {
    element.addEventListener("click", () => {
      setActiveThumbnail(key);
    });
  });

  let Cart = document.querySelector(".cart");
  let cartDetails = document.querySelector(".cartDetails");
  let numberOfProduct = document.querySelector(".numberOfProduct");
  let cartProduct = document.querySelector(".cartProduct");

  let emptyNote = document.querySelector(".emptyNote");
  body.addEventListener(
    "click",
    () => {
      cartDetails.style.visibility = "hidden";
    },
    false
  );
  Cart.addEventListener(
    "click",
    (ev) => {
      cartDetails.style.visibility = "visible";
      cartProduct.appendChild(emptyNote);
      product.style.height = "0";
      checkout.style.height = "0";
      ev.stopPropagation();
    },
    false
  );

  let product = document.querySelector(".product");
  let addToCart = document.querySelector(".addToCart");
  let checkout = document.querySelector(".checkout");
  let units = document.querySelector("#units");
  let unitPrice = document.querySelector("#unitPrice");
  let totalAmount = document.querySelector("#totalAmount");
  let deleteButton = document.querySelector(".delete");
  let isShown = false;

  addToCart.addEventListener("click", () => {
    isShown = false;
    setProduct();
    numberOfProduct.style.visibility = "visible";
    numberOfProduct.firstChild.innerHTML = counter.innerHTML;
  });

  function setProduct() {
    body.addEventListener(
      "click",
      () => {
        cartDetails.style.visibility = "hidden";
        product.style.visibility = "hidden";
        checkout.style.visibility = "hidden";
      },
      false
    );
    Cart.addEventListener(
      "click",
      (ev) => {
        if (isShown == false) {
          cartProduct.removeChild(emptyNote);
          product.style.visibility = "visible";
          checkout.style.visibility = "visible";
          product.style.height = "";
          checkout.style.height = "";
          units.innerHTML = counter.innerHTML;
          totalAmount.innerHTML =
            "$" +
            (Number(units.innerHTML) * Number(unitPrice.innerHTML))
              .toFixed(2)
              .toString();

          isShown = true;

          ev.stopPropagation();
        }
      },
      false
    );
    deleteButton.addEventListener(
      "click",
      (ev) => {
        cartProduct.appendChild(emptyNote);
        product.style.height = "0";
        checkout.style.height = "0";
        product.style.visibility = "hidden";
        checkout.style.visibility = "hidden";
        numberOfProduct.style.visibility = "hidden";
        numberOfProduct.firstChild.innerHTML = 0;
        ev.stopPropagation();
      },
      false
    );
  }

  let menu = document.querySelector(".icon");
  let previousImage = document.querySelector(".prev");
  let nextImage = document.querySelector(".next");
  let url = currentImage.getAttribute("src");
  let photoNumber = Number(url.slice(23, 24));
  let cross = document.querySelector(".cross");
  let menubar = document.querySelector(".menubar");

  previousImage.addEventListener("click", () => {
    if (photoNumber === 1) {
      photoNumber = 1;
    } else {
      photoNumber -= 1;
      let prevupdatedurl =
        "./images/image-product-" + photoNumber.toString() + ".jpg";
      currentImage.setAttribute("src", prevupdatedurl);
    }
  });

  nextImage.addEventListener("click", () => {
    if (photoNumber === 4) {
      photoNumber = 4;
    } else {
      photoNumber = photoNumber + 1;
      let nextupdatedurl =
        "./images/image-product-" + photoNumber.toString() + ".jpg";

      currentImage.setAttribute("src", nextupdatedurl);
    }
  });

  menu.addEventListener("click", () => {
    menubar.style.display = "flex";
  });
  cross.addEventListener("click", () => {
    menubar.style.display = "none";
  });
});
