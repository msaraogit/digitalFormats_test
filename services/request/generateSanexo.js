const {
    Model,
  } = require("../../models/sao/request/sanexoRequest");
  const { mapResponse400 } = require("../../services/response/error");
  const { Response200 } = require("../../services/response/success");
  const DIGITALFORMATS = require("./config");
  const generateSanexo = async () => {
    const data = fillModel();
    //console.log("🚀 ~ generateSanexo ~ data:", data)
    if (!data) return { err: "BAD RESQUEST." };
    try {
      const digitalFormatsAxios = DIGITALFORMATS();
      const endpoint = `/generate-sanexo`;
      const response = await digitalFormatsAxios.post(endpoint, data);
      if (response.status === 200) {
        //console.log("🚀 ~ generateScmorales ~ mappedResponse.html:", mappedResponse.html);
        let mappedResponse = new Response200(response.data);
        return mappedResponse.html;
      } else if (response.status !== 200) {
        console.log(response.data);
        let response200 = new Response200("");
        return response200;
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        const mappedErrorResponse = mapResponse400(err);
        console.error("Error en la solicitud:", mappedErrorResponse);
      } else {
        console.error("Error inesperado:", err);
      }
      return { err };
    }
  };

  function fillModel() {
const model = new Model({
  "accountData": {
      "typeOperation": "Pasiva",
      "interestPayment": [],
      "originBankingInstitution": "BBVA MEXICO, S.A.",
      "originAccount": "144883896",
      "originClabe": "012180001448838961",
      "BankingInstitutionFinsus": "BANORTE",
      "AccountFinsus": "0313939121",
      "ClabeFinsus": "072180003139391218"
  },
  "customerData": {
      "completeName": "COQUILUB",
      "nacionality": "MX",
      "rfc": "COQ180522NB4",
      "street": "FUENTE DE PEGASO",
      "externalNumber": "MANZANA 27 LOTE 43",
      "internalNumber": "DEPTO B CASA 131",
      "colony": "FUENTES DEL VALLE 1A SECC",
      "postalCode": "54910",
      "city": "TULTITLAN",
      "municipality": "TULTITLAN",
      "state": "MEXICO",
      "country": "MX",
      "electronicSignature": "00001000000702377019",
      "business": "Comercializacion de aceites y lubricantes"
  },
  "constitutiveWritingData": {
      "instrumentNumber": "38665",
      "constitutionDate": "2017-11-29",
      "completeNamePublicFederator": "Maria Guadalupe Pérez Palomino ",
      "numberPublicFederator": "91",
      "locationPublicFederator": "México",
      "comercialFolio": "N-2018087506",
      "placeRegister": "México",
      "dateRegister": "2018-10-26"
  },
  "legalRepresentativeData": {
      "name": "Jose Alberto",
      "paternal": "Vazquez",
      "maternal": "Hernandez",
      "gender": "HOMBRE",
      "ocupation": "Empresario",
      "birthDay": "01/09/1986",
      "countryBirth": "MEX",
      "nacionality": "MEX",
      "street": "C EL PORTAL 105",
      "externalNumber": "105",
      "colony": "Jardines de la Hacienda Sur",
      "postalCode": "54720",
      "city": "CUAUTITLÁN IZCALLI",
      "municipality": "Cuautitlán Izcalli",
      "state": "México",
      "country": "MEX",
      "curp": "GAGM860901HMCLNG01",
      "AdvancedElectronicSignature": ""
  },
  "dataThePowersLegalRepresentative": {
      "instrumentNumber": "15969",
      "instrumentDate": "2023-01-26",
      "completeNamePublicFederator": "Patricia Mónica Ruiz de  Chávez Rincón Gallardo",
      "numberPublicFederator": "163",
      "DemarcationPublicFederator": "México"
  },
  "media": {
      "customerMedia": {
          "homePhone": "5563537073",
          "officePhone": "",
          "movilPhone": "",
          "email": "m.galvan@coquilub.com.mx"
      },
      "finsusMedia": {
            "phone": "(55) 56614915 ext. 228",
            "email": "servicioalcliente@finsus.mx"
      }
  },
  "signature": {
      "completeNameCustomer": "MIGUEL ANGEL GALVAN GONZALEZ",
      "completeNameFinsus": "",
      "day": "5",
      "month": "Septiembre",
      "year": "2024"
  }
});

return model;  
}

module.exports = {
    generateSanexo,
  };