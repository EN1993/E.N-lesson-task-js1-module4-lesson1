function message(messageType="success", message ="") {
  redturn `<div class="alert ${messageType}"> ${message} </div>`;
}