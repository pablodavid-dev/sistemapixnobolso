document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".submit-btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = document.querySelector('input[name="nome"]');
    const cpf = document.querySelector('input[name="cpf"]');
    const whatsapp = document.querySelector('input[name="whatsapp"]');
    const bairro = document.querySelector('select[name="bairro"]');
    const endereco = document.querySelector('input[name="endereco"]');
    const numero = document.querySelector('input[name="numero"]');
    const complemento = document.querySelector('input[name="complemento"]');
    const tempoApp = document.querySelector('select[name="tempo_app"]');

    const uber = document.querySelector('input[name="uber"]');
    const noveNove = document.querySelector('input[name="99"]');

    const declaraDocs = document.querySelector('input[name="declara_documentos"]');
    const aceiteCondicoes = document.querySelector('input[name="aceite_condicoes"]');
    const aceiteResponsabilidade = document.querySelector('input[name="aceite_responsabilidade"]');

    if (
      !nome.value ||
      !cpf.value ||
      !whatsapp.value ||
      !bairro.value ||
      !endereco.value ||
      !numero.value ||
      !tempoApp.value ||
      (!uber.checked && !noveNove.checked) ||
      !declaraDocs.checked ||
      !aceiteCondicoes.checked ||
      !aceiteResponsabilidade.checked
    ) {
      alert("⚠️ Preencha TODOS os campos obrigatórios para continuar.");
      return;
    }

    let atividade = [];
    if (uber.checked) atividade.push("Uber Moto");
    if (noveNove.checked) atividade.push("99 Moto");

    const mensagem = `
🟢 *NOVA SOLICITAÇÃO – QUEBRA GALHO*

👤 Nome: ${nome.value}
📄 CPF: ${cpf.value}
📱 WhatsApp: ${whatsapp.value}

🏠 Endereço: ${endereco.value}, Nº ${numero.value}
📍 Bairro: ${bairro.value}
➕ Complemento: ${complemento.value || "Não informado"}

🛵 Atividade: ${atividade.join(", ")}
⏱️ Tempo rodando de app: ${tempoApp.value}

💰 Condições
Valor liberado: R$ 30
Pagamento: R$ 27 por dia
Prazo: 2 dias
Total: R$ 54

☑️ Cliente aceitou as condições
    `.trim();

    const numeroWhats = "554896986075";
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});
