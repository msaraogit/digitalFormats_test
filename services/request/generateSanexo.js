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
const model = new Model(
  {
    "accountData": {
        "typeOperation": "Pasiva",
        "interestPayment": [],
        "originBankingInstitution": "STP",
        "originAccount": "101-61-403501",
        "originClabe": "646682177602339965",
        "BankingInstitutionFinsus": "BANORTE",
        "AccountFinsus": "0313939121",
        "ClabeFinsus": "072180003139391218"
    },
    "customerData": {
        "completeName": "H&H REFACCIONES SA DE ",
        "nacionality": "MX",
        "rfc": "H&H051122PC6",
        "street": "VIA MAGNA",
        "externalNumber": "6",
        "internalNumber": "T 1000 D 303",
        "colony": "BOSQUES DE LAS PALMAS",
        "postalCode": "52787",
        "city": "HUIXQUILUCAN",
        "municipality": "HUIXQUILUCAN",
        "state": "MEXICO",
        "country": "MX",
        "business": "Comercio al por menor de partes y refacciones nuevas para automóvile"
    },
    "constitutiveWritingData": {
        "instrumentNumber": "1541",
        "constitutionDate": "2005/11/22",
        "completeNamePublicFederator": "Félix Jorge David González ",
        "numberPublicFederator": "34",
        "locationPublicFederator": "Tabasco",
        "comercialFolio": "8742",
        "placeRegister": "Tabasco",
        "dateRegister": "2006/02/02"
    },
    "legalRepresentativeData": {
        "name": "HECTOR JOSE",
        "paternal": "VIDAL",
        "maternal": "LOPEZ",
        "ocupation": "Empresario",
        "birthDay": "31/10/1996",
        "countryBirth": "MEX",
        "nacionality": "MEX",
        "street": "Prol paseo usumacinta hacienda Casablanca 1 ",
        "externalNumber": "1",
        "internalNumber": "17",
        "colony": "Hacienda Casa Blanca",
        "postalCode": "86287",
        "city": "CENTRO",
        "municipality": "Centro",
        "state": "Tabasco",
        "country": "MEX",
        "curp": "VILH961031HTCDPC09",
        "AdvancedElectronicSignature": ""
    },
    "dataThePowersLegalRepresentative": {
        "instrumentNumber": "17315",
        "instrumentDate": "2023/10/16",
        "completeNamePublicFederator": "Carlos Camelo Cano ",
        "numberPublicFederator": "11",
        "DemarcationPublicFederator": "Tabasco"
    },
    "media": {
        "customerMedia": {
            "homePhone": "9933112504",
            "officePhone": "",
            "movilPhone": "",
            "email": "hhrefacciones@gmail.com"
        },
        "finsusMedia": {
            "phone": "(55) 56614915 ext. 228",
            "email": "servicioalcliente@finsus.mx"
        }
    },
    "signature": {
        "completeNameCustomer": ["HECTOR JOSE VIDAL LOPEZ"],
        "completeNameFinsus": "JUAN LOZANO GONZÁLEZ",
        "day": "22",
        "month": "Octubre",
        "year": "2024"
    }
}
);

return model;  
}

module.exports = {
    generateSanexo,
  };