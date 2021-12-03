import template from "../template/owntmpl.hbs";
const debounce = require("lodash.debounce");

const inp = document.querySelector(".country");

const setCountry = document.querySelector(".country");

setCountry.addEventListener(
  "input",
  debounce((e) => {
    console.log("---------e.target.value=", e.target.value);
    // fetch("https://restcountries.com/v2/all")
    fetch(`https://restcountries.com/v2/name/${e.target.value}`)
      .then((response) => {
        return response.json();
      })
      .then((resp) => {
        console.log("~~~~~~~~~resp=", resp);
        // console.log("~~~~~~~~~e.target.value=", e.target.value);
        const items = resp.reduce(
          (acc, elem) =>
            (acc += `<li><img src="${elem.flags.png}"> <p>${elem.name}</p></li>`),
          ""
        );
        console.log(items);
        const list = document.querySelector(".list");
        list.innerHTML = items;
      })
      .catch((error) => {
        console.log("@@@@@@@@@@@@@@@@@@@@", Error());
      });
  }, 500)
);
