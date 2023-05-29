const login = async (payloads) => {
  console.log(payloads);

  const response = await fetch(
    "http://ec2-13-229-98-157.ap-southeast-1.compute.amazonaws.com:8000/users/login",
    {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrerPolicy: "no-referrer",
      body: JSON.stringify(payloads),
    }
  );
  console.log(response);
  const result = await response.json();

  console.log(result);
};

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const payloads = {
    email,
    password,
  };

  login(payloads);
});
