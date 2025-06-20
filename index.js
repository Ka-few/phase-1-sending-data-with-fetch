const submitData = function(name, email) {
    const formData = {
      name: 'Steve',
      email: 'steve@steve.com',
    };

    return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((object) => {
      const idDisplay = document.createElement("p");
      idDisplay.innerHTML = `New User ID: <strong>${object.id}</strong>`;
      document.body.appendChild(idDisplay);
    })
    .catch((error) => {
      const errorDisplay = document.createElement("p");
      errorDisplay.innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
      document.body.appendChild(errorDisplay);
    });
}

  




    


  // Add your code here
