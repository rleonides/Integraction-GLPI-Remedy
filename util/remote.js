const Formatter = require("./formatter");
//const ApiClient = require("./api-client"); // Any API Client implementation. Can be axios

const  axios = require('axios')
const Parser = require("./parser");

const url = `http://www.dneonline.com/calculator.asmx`;

class Remote {
  static async multipleTwoOperands(operandA, operandB) {
    try {
      let payload = {
        Multiply: {
          intA: operandA,
          intB: operandB,
        },
      };

      const headers = {
        headers: {
          "Content-Type": "text/xml; charset=utf-8",
          SOAPAction: "http://tempuri.org/Multiply",
        },
      };

      let args = Formatter.convertJsonToSoapRequest(payload);
     console.log(args)
      const xml =  `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Body>
    <Multiply xmlns="http://tempuri.org/">
      <intA>${operandA}</intA>
      <intB>${operandB}</intB>
    </Multiply>
  </soap:Body>
</soap:Envelope>` ;

      let remoteResponse = await axios.post(url, xml, headers);
      remoteResponse = await Parser.convertXMLToJSON(remoteResponse.data);
      console.log(remoteResponse);
    } catch (err) {
      console.log(err)
        
      
    }
  }
};

Remote.multipleTwoOperands(50,8)