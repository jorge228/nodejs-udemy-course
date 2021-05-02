const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleVerify = async (idToken) => {

    const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID
    });

    // const payload = ticket.getPayload();
    // return payload;
    // email:mail for rename as user model
    const { name, picture, email: mail } = ticket.getPayload();
    return { name, picture, mail };
}

module.exports = {
    googleVerify
}