const sumRequestHandler = (req, res) => {
console.log("In Sum Request Handler",  req.url);
const body = [];
let result;
req.on('data', chunk => {
  body.push(chunk);
});

req.on('end', () => {
  const bodyStr = Buffer.concat(body).toString();
  const params = new URLSearchParams(bodyStr);
  const bodyObj = Object.fromEntries(params);
  result = Number(bodyObj.first) + Number(bodyObj.second);
  console.log(result);

  res.setHeader('Contect-Type', 'text/html');
  res.write(`
    <html>
    <head><title>Practise Set</title></head>
    <Body>
     <h1>Your Sum is ${result}</h1>
    </Body>
    </html>
    `)
});


}

exports.sumRequestHandler = sumRequestHandler;