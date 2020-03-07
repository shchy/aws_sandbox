var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-1' });

var ses = new AWS.SES();

var params = {
    Destination: {
        ToAddresses: ['shch.pc@gmail.com']
    },
    Message: {
        Body: {
            Text: {
                Data: 'こんにちは SES',
                Charset: 'utf-8'
            }
        },
        Subject: {
            Data: 'こんにちは',
            Charset: 'utf-8'
        }
    },
    Source: 'shch.pc@gmail.com' // From
};

ses.sendEmail(params, function (err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else console.log(data);           // successful response
});