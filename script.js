function validateForm() {
    let nameField = document.getElementById("name");
    let emailField = document.getElementById("email");
    let telephoneField = document.getElementById("telephone");
  
    if (nameField.value === "" || emailField.value === "" || telephoneField.value === "") {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
  }