function gerarCodigo() {
  //Criar variável do link
  qrcode = "https://api.qrserver.com/v1/create-qr-code/?";

  //Pega e insere o user-input no link
  link = document.getElementById("user-input").value;
  qrcode += `data=${encodeURI(link)}`;

  if (link === "") {
    alert("Ops, faltou preencher o texto ou URL!")
    return;
  } else {
    //Pega e insere o tamanho no link
    size = document.getElementById("tamanho").value;
    qrcode += `&size=${size}x${size}`;

    //Pega e insere as cores no link
    color = document.getElementById("color").value;
    bg_color = document.getElementById("bg-color").value;
    color = color.substring(1);
    bg_color = bg_color.substring(1);
    qrcode += `&color=${color}&bgcolor=${bg_color}`;

    //Pega e insere a margem no link
    qzone = document.getElementById("qzone").value;
    qrcode += `&qzone=${qzone}`;

    //Pega e insere a margem no link
    tipo = document.getElementById("tipo").value;
    qrcode += `&format=${tipo}`;

    document.getElementById("qrcode").src = qrcode;

  }
}