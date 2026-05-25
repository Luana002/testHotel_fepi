const form = document.getElementById("formBusca");
    const checkin = document.getElementById("checkin");
    const checkout = document.getElementById("checkout");
    const hospedes = document.getElementById("hospedes");
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

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const dataCheckin = checkin.value;
      const dataCheckout = checkout.value;
      const qtdHospedes = hospedes.value;

      if (!dataCheckin || !dataCheckout || !qtdHospedes) {
        mostrarErro("Preencha todos os campos para continuar.");
        return;
      }

      if (dataCheckout <= dataCheckin) {
        mostrarErro("A data de check-out deve ser maior que a data de check-in.");
        return;
      }

      localStorage.setItem("checkin", dataCheckin);
      localStorage.setItem("checkout", dataCheckout);
      localStorage.setItem("hospedes", qtdHospedes);

      mostrarSucesso("Busca realizada com sucesso! Redirecionando...");

      setTimeout(() => {
        window.location.href = "quartos.html";
      }, 1200);
    });