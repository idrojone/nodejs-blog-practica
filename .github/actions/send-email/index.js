const nodeMailer = require('nodemailer');  

const enviador =  nodeMailer.createTransport({
    service: "gmail",
    auth: {
        type: "OAuth2",
        user: process.env.USUARIO_EMAIL,
        pass: process.env.EMAIL,
    }
});

const enviar = async () => {
    await enviador.sendMail({
        from: process.env.USUARIO_EMAIL,
        to: "jordivallspladaw@gmail.com",
        subject: "Resultat del workflow executat",
        html: "<p>S'ha realitzat un push en la branca main que ha provocat l'execució del workflow nom_repositori_workflow amb els següents resultats:</p>",
    });
};

enviar();