const infoCheckin = document.getElementById("info-checkin");
    const infoCheckout = document.getElementById("info-checkout");
    const infoHospedes = document.getElementById("info-hospedes");

    const checkin = localStorage.getItem("checkin");
    const checkout = localStorage.getItem("checkout");
    const hospedes = localStorage.getItem("hospedes");

    infoCheckin.textContent = checkin || "--";
    infoCheckout.textContent = checkout || "--";
    infoHospedes.textContent = hospedes || "--";

    const botoesReserva = document.querySelectorAll(".reservar-btn");

    botoesReserva.forEach((botao) => {
      botao.addEventListener("click", () => {

        const quarto = botao.dataset.quarto;
        const valor = botao.dataset.valor;

        localStorage.setItem("quartoSelecionado", quarto);
        localStorage.setItem("valorQuarto", valor);

        window.location.href = "reserva.html";
      });
    });