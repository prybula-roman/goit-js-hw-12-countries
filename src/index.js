import template from "../template/owntmpl.hbs";
console.log(template);
const debounce = require("lodash.debounce");
console.log(debounce);

let i = 0;
//const arr = new Array();
//====================
const countries = {
  name: "",
};
//=======================

let names = new Array();

const inp = document.querySelector(".country");
console.log(inp);

const setCountry = document.querySelector(".country");
//console.log(cntry);
setCountry.addEventListener(
  "input",
  debounce((e) => {
    i = 0;
    console.log("---------e.target.value=", e.target.value);
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        // if (!response.ok) {
        //   throw new Error(response.status);
        // }
        //  console.log(response.json());
        return response.json();
      })
      .then((resp) => {
        console.log("~~~~~~~~~resp=", resp);
        console.log("~~~~~~~~~e.target.value=", e.target.value);
        // console.log(data);
        resp.forEach((el) => {
          if (
            el.name.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1
          ) {
            console.log("el.name=", el.name);
            // console.log("template=", el.name);
            // inp.insertAdjacentHTML("afterbegin", template(el.name));
            // console.log(inp);
            names.push(`"name":"${el.name}"`);
          }
        });
        // return resp;
        return names;
      })
      .then((names) => {
        console.log("######", names);
        inp.insertAdjacentHTML("beforeend", template(el.name));
      })
      .catch((error) => {
        console.log("@@@@@@@@@@@@@@@@@@@@", Error());
      });
  }, 500)
);
