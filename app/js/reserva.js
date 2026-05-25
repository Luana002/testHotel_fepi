const quarto = localStorage.getItem("quartoSelecionado");
    const valorQuarto = Number(localStorage.getItem("valorQuarto"));

    const checkin = localStorage.getItem("checkin");
    const checkout = localStorage.getItem("checkout");
    const hospedes = localStorage.getItem("hospedes");

    document.getElementById("quartoSelecionado").textContent = quarto || "--";
    document.getElementById("checkin").textContent = checkin || "--";
    document.getElementById("checkout").textContent = checkout || "--";
    document.getElementById("hospedes").textContent = hospedes || "--";

    function calcularDiarias(dataInicial, dataFinal) {
      const inicio = new Date(dataInicial);
      const fim = new Date(dataFinal);

      const diferenca = fim - inicio;

      return diferenca / (1000 * 60 * 60 * 24);
    }

    const totalDiarias = calcularDiarias(checkin, checkout);

    document.getElementById("diarias").textContent = totalDiarias;

    const valorTotal = totalDiarias * valorQuarto;

    document.getElementById(
      "valorTotal"
    ).textContent = `R$ ${valorTotal}`;

    const form = document.getElementById("formReserva");

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const telefone = document.getElementById("telefone");

    const msgErro = document.getElementById("msgErro");
    const msgSucesso = document.getElementById("msgSucesso");

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

    function validarEmail(emailValor) {
      return emailValor.includes("@") && emailValor.includes(".");
    }

    form.addEventListener("submit", function(event) {

      event.preventDefault();

      if (
        nome.value.trim() === "" ||
        email.value.trim() === "" ||
        telefone.value.trim() === ""
      ) {
        mostrarErro("Preencha todos os campos.");
        return;
      }

      if (!validarEmail(email.value)) {
        mostrarErro("Digite um email válido.");
        return;
      }

      if (telefone.value.length < 8) {
        mostrarErro("Telefone inválido.");
        return;
      }

      mostrarSucesso("Reserva realizada com sucesso!");

      localStorage.setItem("nomeHospede", nome.value);

      setTimeout(() => {
        window.location.href = "confirmacao.html";
      }, 1500);

    });