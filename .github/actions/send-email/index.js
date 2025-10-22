const nodeMailer = require('nodemailer');  

console.log(process.env.USUARIO_EMAIL);
console.log(process.env.EMAIL);

const enviador =  nodeMailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.USUARIO_EMAIL,
        pass: process.env.EMAIL,
    }
});


async function enviar() {
    await enviador.sendMail({
        from: process.env.USUARIO_EMAIL,
        to: "jordivallspladaw@gmail.com",
        subject: "Resultat del workflow executat",
        html: "<p>S'ha realitzat un push en la branca main que ha provocat l'execució del workflow nom_repositori_workflow amb els següents resultats:</p>",
    });
}

enviar().then(() => {   
    console.log("Email enviat correctament");
}).catch((error) => {
    console.error("Error en enviar l'email:", error);
});


