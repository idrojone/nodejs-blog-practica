const nodeMailer = require('nodemailer');



const enviador = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.INPUT_GMAIL_TOKEN_USER,
        pass: process.env.INPUT_GMAIL_TOKEN,
    },
});

async function enviar() {
    await enviador.sendMail({
        from: process.env.INPUT_GMAIL_TOKEN_USER,
        to: process.env.INPUT_GMAIL_TOKEN_USER,
        subject: 'Resultat del workflow executat',
        html: "<p>S'ha realitzat un push en la branca main que ha provocat l'execució del workflow nodejs-blog-practica amb els següents resultats:</p>",
    });
}

enviar().then(() => {
    console.log('Email enviat correctament');
}).catch((error) => {
    console.error('Error en enviar l\'email:', error);
});


