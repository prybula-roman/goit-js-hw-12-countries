const debounce = require("lodash.debounce");
console.dir(debounce);

let i = 0;
const arr = new Array();

const searchCountry = (e) => {
  console.log(e.target.value);
};

const setCountry = document.querySelector(".country");
//console.log(cntry);
setCountry.addEventListener(
  "input",
  debounce((e) => {
    i = 0;
    //console.log(e.target.value);
    fetch("https://restcountries.com/v2/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        // console.log(response.json());
        return response.json();
      })
      .then((data) => {
        // Data handling
        // console.log(data);
        data.forEach((element) => {
          i++;
          // console.log(`${i} name = `, element.name);
          if (element.name.indexOf(e.target.value) != -1) {
            arr.push(element.name);
          }
        });
        console.log(arr.length);

        arr.forEach((elem) => console.log(`arr${[i]} =${elem} `));
      })
      .catch((error) => {
        //   console.log(Error.Error);
      });
  }, 500)
);
