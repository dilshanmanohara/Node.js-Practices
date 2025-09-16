const fs = require('fs');
const path = require('path');

fs.readFile('files/starter.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString);
});

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you', (err) => {
    if (err) throw err;
    console.log('Write complete');

    fs.appendFile(path.join(__dirname,'files','reply.txt'), '\nHello World!', (err) => {
        if (err) throw err;
        console.log('Append complete');

        fs.rename(path.join(__dirname,'files','reply.txt'), path.join(__dirname,'files','newReply.txt'), (err) => {
            if (err) throw err;
            console.log('Rename complete');
        });
    });
});