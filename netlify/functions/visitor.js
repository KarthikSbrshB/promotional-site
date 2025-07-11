const fs = require('fs');
const path = require('path');
const COUNTER_FILE = path.resolve(__dirname, '../../visitorData.json');

function readCount() {
    try {
        return JSON.parse(fs.readFileSync(COUNTER_FILE, 'utf8')).count || 0;
    } catch {
        return 0;
    }
}

function writeCount(count) {
    fs.writeFileSync(COUNTER_FILE, JSON.stringify({ count }), 'utf8');
}

exports.handler = async function(event, context) {
    let count = readCount();
    if (event.httpMethod === 'POST') {
        count += 1;
        writeCount(count);
        return {
            statusCode: 200,
            body: JSON.stringify({ count }),
            headers: { 'Content-Type': 'application/json' }
        };
    }
    // GET
    return {
        statusCode: 200,
        body: JSON.stringify({ count }),
        headers: { 'Content-Type': 'application/json' }
    };
};