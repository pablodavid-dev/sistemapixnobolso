document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".submit-btn");

  btn.addEventListener("click", () => {
    // ===== CAPTURA =====
    const cpf = document.querySelector('input[name="cpf"]').value.trim();
    const bairro = document.querySelector('select[name="bairro"]').value;
    const endereco = document.querySelector('input[name="endereco"]').value.trim();
    const numero = document.querySelector('input[name="numero"]').value.trim();
    const complemento = document.querySelector('input[name="complemento"]').value.trim();

    const declaraDocs = document.querySelector('input[name="declara_documentos"]').checked;
    const aceiteCondicoes = document.querySelector('input[name="aceite_condicoes"]').checked;
    const aceiteResponsabilidade = document.querySelector('input[name="aceite_responsabilidade"]').checked;
    const aceiteCobranca = document.querySelector('input[name="aceite_cobranca"]').checked;

    // ===== VALIDAÇÃO =====
    if (
      !cpf ||
      !bairro ||
      !endereco ||
      !numero ||
      !declaraDocs ||
      !aceiteCondicoes ||
      !aceiteResponsabilidade ||
      !aceiteCobranca
    ) {
      alert("Para continuar, preencha os dados e aceite todas as condições.");
      return;
    }

    // ===== MENSAGEM (SEM EMOJI) =====
    const mensagem = `
NOVA SOLICITAÇÃO – QUEBRA GALHO

CPF: ${cpf}

Endereço: ${endereco}, Nº ${numero}
Bairro: ${bairro}
Complemento: ${complemento || "Não informado"}

Condições do serviço
Liberação: R$ 50
Pagamento: 3 diárias de R$ 27
Prazo: 3 dias
Total a pagar: R$ 81

Declarações do cliente:
- Possui CNH válida e comprovante de residência
- Leu e aceitou as condições do serviço
- Assumiu total responsabilidade pelo pagamento
- Concordou com a política de cobrança
    `.trim();

    // ===== ENVIO WHATSAPP =====
    const numeroWhats = "554896986075";
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

    window.location.href = url;
  });
});
