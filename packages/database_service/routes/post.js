const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const mailHandler = async ({body: {subject, receiver, content}}, res) => {
    let mail;
    let error;

    if (!subject || !receiver || !content) {
        res.send({
            message: 'You forgot something',
            service: 'Database Service',
            status: 400,
            payload: null
        });
    }

    const newMail = new Mail({
        subject,
        receiver,
        content
    });

    try {
        mail = await newMail.save();
    } catch (err) {
        error = err;
    }

    res.send({
        message: 'Got response from db',
        service: 'Database Srervice',
        status: 200,
        payload: mail || error
    });
};


module.exports = server => {
    server.post('/mails', mailHandler);
}