const fetch = require('node-fetch');

const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/6871243a3497bd4cad9af69c';
const JSONBIN_API_KEY = '$2a$10$ofyfg/SJffTq5mkMGirtXe0EJH5u6sP37TmjMwIcyCJKCfUB12z8O';

exports.handler = async function(event) {
    if (event.httpMethod === 'GET') {
        // Fetch current count
        const res = await fetch(JSONBIN_URL, {
            headers: { 'X-Master-Key': JSONBIN_API_KEY }
        });
        const data = await res.json();
        return {
            statusCode: 200,
            body: JSON.stringify({ count: data.record.count })
        };
    }

    if (event.httpMethod === 'POST') {
        // Increment count
        const res = await fetch(JSONBIN_URL, {
            headers: { 'X-Master-Key': JSONBIN_API_KEY }
        });
        const data = await res.json();
        let count = data.record.count || 0;
        count = count + 1;
        await fetch(JSONBIN_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY
            },
            body: JSON.stringify({ count: count })
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ count })
        };
    }

    return { statusCode: 405, body: 'Method Not Allowed' };
};