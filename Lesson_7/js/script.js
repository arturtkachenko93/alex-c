const date = new Date();
const boxBtn = document.querySelector(".box__button");
const layout = document.querySelector(".layout");
const popup = document.querySelector(".popup");
const popupCurrentTime = document.querySelector(".popup__current");
const open = document.querySelector(".open");

const nameStore = document.querySelector(".input-name");
const nameStoreValue = document.querySelector(".magazine__name");
const nameBudget = document.querySelector(".input-budget");
const nameBudgetValue = document.querySelector(".magazine__budget");
const nameCategory = document.querySelectorAll(".input-category");
const btnCategory = document.querySelector(".btn-category");
const nameCategoryValue = document.querySelector(".magazine__category");

boxBtn.addEventListener("click", function () {
  if (date.getHours() > 8 && date.getHours() < 20) {
    layout.classList.toggle("show");
    open.classList.toggle("open-magazine");

    if (boxBtn.textContent === "Начать торговлю") {
      boxBtn.textContent = "Завершить торговлю";
    } else {
      boxBtn.textContent = "Начать торговлю";
    }
  } else {
    popup.classList.add("show");
    popupCurrentTime.textContent = `${date.getHours()}:${date.getMinutes}`;
  }
});

nameStore.addEventListener("change", function () {
  nameStoreValue.textContent = nameStore.value;
  nameStoreValue.textContent = nameStoreValue.textContent.toUpperCase();
  nameStore.value = "";
});

nameBudget.addEventListener("change", function () {
  if (isNaN(nameBudget.value) || nameBudget.value.length > 10) {
    nameBudget.classList.add("error-input");
  } else {
    nameBudget.classList.remove("error-input");
    nameBudgetValue.textContent = nameBudget.value;
  }

  nameBudget.value = "";
});

btnCategory.addEventListener("click", function () {
  let arr = [];
  nameCategory.forEach((elem) => {
    arr.push(elem.value);
  });

  str = arr.join(" ");
  nameCategoryValue.textContent = str;
});
