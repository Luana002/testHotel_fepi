const nomeHospede = localStorage.getItem("nomeHospede");
  const quarto = localStorage.getItem("quartoSelecionado");
  const checkin = localStorage.getItem("checkin");
  const checkout = localStorage.getItem("checkout");
  const hospedes = localStorage.getItem("hospedes");
  const codigoReserva = localStorage.getItem("codigoReserva");

  const cardReserva = document.getElementById("cardReserva");
  const emptyState = document.getElementById("emptyState");

  if (!codigoReserva) {
    cardReserva.style.display = "none";
    emptyState.style.display = "block";
  } else {
    document.getElementById("nomeHospede").textContent = nomeHospede;
    document.getElementById("nomeQuarto").textContent = quarto;
    document.getElementById("checkin").textContent = checkin;
    document.getElementById("checkout").textContent = checkout;
    document.getElementById("hospedes").textContent = hospedes;
    document.getElementById("codigoReserva").textContent = codigoReserva;
  }