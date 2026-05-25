const nomeHospede = localStorage.getItem("nomeHospede");
  const quarto = localStorage.getItem("quartoSelecionado");
  const checkin = localStorage.getItem("checkin");
  const checkout = localStorage.getItem("checkout");
  const hospedes = localStorage.getItem("hospedes");

  document.getElementById("nomeHospede").textContent = nomeHospede || "--";
  document.getElementById("quarto").textContent = quarto || "--";
  document.getElementById("checkin").textContent = checkin || "--";
  document.getElementById("checkout").textContent = checkout || "--";
  document.getElementById("hospedes").textContent = hospedes || "--";

  function gerarCodigoReserva() {
    return "HTL-" + Math.floor(Math.random() * 100000);
  }

  const codigo = gerarCodigoReserva();

  document.getElementById("codigoReserva").textContent = codigo;

  localStorage.setItem("codigoReserva", codigo);