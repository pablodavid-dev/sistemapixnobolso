<script>
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".submit-btn");

  btn.addEventListener("click", () => {

    // ===== CAPTURA DOS VALORES =====
    const nome = document.querySelector('input[name="nome"]').value.trim();
    const cpf = document.querySelector('input[name="cpf"]').value.trim();
    const whatsapp = document.querySelector('input[name="whatsapp"]').value.trim();
    const bairro = document.querySelector('select[name="bairro"]').value;
    const endereco = document.querySelector('input[name="endereco"]').value.trim();
    const numero = document.querySelector('input[name="numero"]').value.trim();
    const complemento = document.querySelector('input[name="complemento"]').value.trim();
    const tempoApp = document.querySelector('select[name="tempo_app"]').value;

    const uber = document.querySelector('input[name="uber"]').checked;
    const noveNove = document.querySelector('input[name="99"]').checked;

    const declaraDocs = document.querySelector('input[name="declara_documentos"]').checked;
    const aceiteCondicoes = document.querySelector('input[name="aceite_condicoes"]').checked;
    const aceiteResponsabilidade = document.querySelector('input[name="aceite_responsabilidade"]').checked;

    // ===== VALIDAÇÃO =====
    if (
      !nome ||
      !cpf ||
      !whatsapp ||
      !bairro ||
      !endereco ||
      !numero ||
      !tempoApp ||
      (!uber && !noveNove) ||
      !declaraDocs ||
      !aceiteCondicoes ||
      !aceiteResponsabilidade
    ) {
      alert("⚠️ Preencha TODOS os campos obrigatórios para continuar.");
      return;
    }

    // ===== ATIVIDADE =====
    const atividade = [];
    if (uber) atividade.push("Uber Moto");
    if (noveNove) atividade.push("99 Moto");

    // ===== MENSAGEM =====
    const mensagem = `
🟢 *NOVA SOLICITAÇÃO – QUEBRA GALHO*

👤 *Nome:* ${nome}
📄 *CPF:* ${cpf}
📱 *WhatsApp:* ${whatsapp}

🏠 *Endereço:* ${endereco}, Nº ${numero}
📍 *Bairro:* ${bairro}
➕ *Complemento:* ${complemento || "Não informado"}

🛵 *Atividade:* ${atividade.join(", ")}
⏱️ *Tempo rodando de app:* ${tempoApp}

💰 *Condições do serviço*
Valor liberado: R$ 30
Pagamento: R$ 27 por dia
Prazo: 2 dias
Total: R$ 54

☑️ Cliente aceitou as condições
☑️ Cliente assumiu responsabilidade
    `.trim();

    // ===== ENVIO WHATSAPP =====
    const numeroWhats = "554896986075";
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

    // método mais confiável (não bloqueia)
    window.location.href = url;
  });
});
</script>
