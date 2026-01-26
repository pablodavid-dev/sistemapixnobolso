document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".submit-btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // ===== CAMPOS =====
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
    const particular = document.querySelector('input[name="particular"]');

    const cnh = document.querySelector('input[name="cnh"]');
    const comprovante = document.querySelector('input[name="residencia"]');
    const printApp = document.querySelector('input[name="print_app"]');

    const aceiteCondicoes = document.querySelector('input[name="aceite_condicoes"]');
    const aceiteResponsabilidade = document.querySelector('input[name="aceite_responsabilidade"]');

    // ===== VALIDAÇÃO =====
    if (
      !nome.value ||
      !cpf.value ||
      !whatsapp.value ||
      !bairro.value ||
      !endereco.value ||
      !numero.value ||
      !tempoApp.value ||
      (!uber.checked && !noveNove.checked && !particular.checked) ||
      cnh.files.length === 0 ||
      comprovante.files.length === 0 ||
      printApp.files.length === 0 ||
      !aceiteCondicoes.checked ||
      !aceiteResponsabilidade.checked
    ) {
      alert("⚠️ Preencha TODOS os campos obrigatórios para continuar.");
      return;
    }

    // ===== ATIVIDADE =====
    let atividade = [];
    if (uber.checked) atividade.push("Uber Moto");
    if (noveNove.checked) atividade.push("99 Moto");
    if (particular.checked) atividade.push("Particular");

    // ===== MENSAGEM =====
    const mensagem = `
🟢 *NOVA SOLICITAÇÃO – PIX NO BOLSO*

👤 *Nome:* ${nome.value}
📄 *CPF:* ${cpf.value}
📱 *WhatsApp:* ${whatsapp.value}

🏠 *Endereço:* ${endereco.value}, Nº ${numero.value}
📍 *Bairro:* ${bairro.value}
➕ *Complemento:* ${complemento.value || "Não informado"}

🛵 *Atividade:* ${atividade.join(", ")}
⏱️ *Tempo rodando de app:* ${tempoApp.value}

📂 *Documentos enviados:*
- CNH: ✅
- Comprovante de residência: ✅
- Print do aplicativo: ✅

💰 *Condições do serviço*
Valor liberado: R$ 40  
Pagamento: R$ 30 por dia  
Prazo: 2 dias  
Total: R$ 60  

☑️ Cliente aceitou as condições  
☑️ Cliente assumiu responsabilidade em caso de não pagamento
    `.trim();

    // ===== ENVIO PARA WHATSAPP =====
    const numeroWhats = "554896986075"; // formato internacional
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
  });
});
