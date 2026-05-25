const form = document.getElementById("formCancelamento");

  const codigoInput = document.getElementById("codigo");
  const emailInput = document.getElementById("email");

  const msgErro = document.getElementById("msgErro");
  const msgSucesso = document.getElementById("msgSucesso");

  const codigoSalvo = localStorage.getItem("codigoReserva");

  function mostrarErro(mensagem) {
    msgErro.textContent = mensagem;
    msgErro.style.display = "block";
    msgSucesso.style.display = "none";
  }

  function mostrarSucesso(mensagem) {
    msgSucesso.textContent = mensagem;
    msgSucesso.style.display = "block";
    msgErro.style.display = "none";
  }

  function validarEmail(email) {
    return email.includes("@") && email.includes(".");
  }

  form.addEventListener("submit", function(event) {

    event.preventDefault();

    const codigo = codigoInput.value.trim();
    const email = emailInput.value.trim();

    if (codigo === "" || email === "") {
      mostrarErro("Preencha todos os campos.");
      return;
    }

    if (!validarEmail(email)) {
      mostrarErro("Digite um email válido.");
      return;
    }

    if (codigo !== codigoSalvo) {
      mostrarErro("Código da reserva inválido.");
      return;
    }

    mostrarSucesso("Reserva cancelada com sucesso!");

    localStorage.clear();
  });