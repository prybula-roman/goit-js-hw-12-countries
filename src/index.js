const debounce = require("lodash.debounce");
console.log(debounce);

let i = 0;
//const arr = new Array();

const setCountry = document.querySelector(".country");
//console.log(cntry);
setCountry.addEventListener(
  "input",
  debounce((e) => {
    i = 0;
    console.log("---------", e.target.value);
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        //  console.log(response.json());
        return response.json();
      })
      .then((resp) => {
        console.log("~~~~~~~~~", resp);
        console.log("~~~~~~~~~", e.target.value);
        // console.log(data);
        resp.forEach((el) => {
          if (el.name.indexOf(e.target.value) != -1) {
            console.log("el.name=", el.name);
          }
        });

        return resp;
      })
      .catch((error) => {
        //console.log(Error.Error);
      });
  }, 500)
);
