var debounce = require("lodash.debounce");
//console.log(debounce);
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response.json());
    return response.json();
  })
  .then((data) => {
    // Data handling
    console.log(data);
  })
  .catch((error) => {
    // Error handling
  });
