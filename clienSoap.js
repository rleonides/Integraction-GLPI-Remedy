const soapRequest = require('easy-soap-request');
const fs = require('fs');
const Parser = require("./util/parser");
// example data
const url = 'http://localhost:3001/services/ws_ipicyt_glpi_Creation';
const sampleHeaders = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'urn:ws_ipicyt_glpi_Creation/CREATE',
};
const xml =  fs.readFileSync('./create.xml','utf-8');


(async () => {
  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  console.log(headers);
  console.log(body);
  remoteResponse = await Parser.convertXMLToJSON(body);
  console.log(remoteResponse);
  console.log(statusCode);
})();