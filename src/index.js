const login = async () => {
  //   console.log(payloads);

  const response = await fetch("https://52.77.30.160:8000/items");
  // console.log(response);
  const result = await response.json();

  console.log("res", result);
};

// const form = document.getElementById("form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   const payloads = {
//     email,
//     password,
//   };

//   login(payloads);
// });

login();
