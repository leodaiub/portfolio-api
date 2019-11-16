"use strict";
const Mail = use("Mail");

class EmailController {
  async mail({ request, response }) {
    const body = request.post();
    await Mail.send("emails.message", body, message => {
      message
        .to("leodaiub@gmail.com")
        .from("leonardo@leonardodaiub.com")
        .subject("Contato pelo formulario do site");
    });
    return "Registered successfully";
  }
}

module.exports = EmailController;
