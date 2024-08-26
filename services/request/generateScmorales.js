const {
  Model,
  Manager,
  Contact,
  ProductService,
  EndorsementData,
} = require("../../models/sao/request/scmoralesRequest");
const { mapResponse400 } = require("../../services/response/error");
const { Response200 } = require("../../services/response/success");
const DIGITALFORMATS = require("./config");

const generateScmorales = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generateScmorales ~ data:", data)
  if (!data) return { err: "BAD RESQUEST." };
  try {
    const digitalFormatsAxios = DIGITALFORMATS();
    const endpoint = `/generate-scmorales`;
    const json={
      "place": "Yucatán",
      "date": "2024-08-14T08:10:30.451Z",
      "type": "DIGITAL",
      "term": "18",
      "amount": 1200000,
      "workingCapital": true,
      "fixedAsset": false,
      "technologicalInnovation": false,
      "consolidationLiabilities": false,
      "others": false,
      "descriptionOtherUse": "",
      "businessName": "GLOBAL INNOVATION TECHNOLOGIES SOCIEDAD ANONIMA DE CAPITAL VARIABLE",
      "rfc": "GIT130827B16",
      "tradeNameOrBusiness": "GLOBAL INNOVATION TECHNOLOGIES SOCIEDAD ANONIMA DE CAPITAL VARIABLE",
      "business": "Servicios de consultoria en computacion, Comercio al por mayor de equipo y accesorios de computo, Comercio al por mayor de articulos de papeleria para uso escolar y de oficina",
      "nacionality": "MEX",
      "electronicSignatureSerialNumber": "1000000702301650",
      "fiscalAddress": "C 9 C POR 72 E 647",
      "colony": "Gran Santa Fe",
      "postalCode": "97203",
      "landline": "9995767253",
      "city": "Mérida",
      "municipality": "Mérida",
      "state": "Yucatán",
      "country": "Mexico",
      "numberEmployees": 3,
      "webSite": "https://www.ejemplo.com/",
      "notaryNumber": "41",
      "nameOfNotary": "Rafael J. Ramos Vázquez",
      "entity": "Yucatán",
      "writingNumber": "228",
      "registrationInformation": "55380",
      "constitutionDate": "2013-09-18",
      "empoweredRepresentative": "Uriel José Basto Pedre",
      "writingNumberWithPowers": "635",
      "writingDate": "2013-08-27",
      "managers": [
          {
              "completeName": "LUIS OSVALDO TORRES CARDEÑA",
              "position": "0",
              "rfc": "TOCL850409CZ8",
              "email": "luistorres@grupogit.com",
              "antiquity": "AsociadoPF"
          },
          {
              "completeName": "URIEL JOSE BASTO PEDRE",
              "position": "0",
              "rfc": "BAPU8605285F4",
              "email": "urielbasto@grupogit.com",
              "antiquity": "AsociadoPF"
          }
      ],
      "contacts": [
          {
              "type": "Cobranza",
              "completeName": "LUIS OSVALDO TORRES CARDENA",
              "position": "0",
              "phone": "9991228431",
              "email": "luistorres@grupogit.com"
          },
          {
              "type": "Cobranza",
              "completeName": "URIEL JOSE BASTO PEDRE",
              "position": "0",
              "phone": "9995767253",
              "email": "urielbasto@grupogit.com"
          }
      ],
      "productsServices": [
          {
              "nameOrDescription": "Servicios de consultoría en computación",
              "percentageSales": "80%",
              "percentageMarket": "1%"
          },
          {
              "nameOrDescription": "Comercio al por mayor de artículos de papelería para uso escolar y de oficina",
              "percentageSales": "10%",
              "percentageMarket": "1%"
          },
          {
              "nameOrDescription": "Comercio al por mayor de equipo y accesorios de cómputo",
              "percentageSales": "10%",
              "percentageMarket": "1%"
          }
      ],
      "endorsementData": {
          "completeNameOrBusinessName": "URIEL JOSE BASTO PEDRE",
          "rfc": "GIT130827B16",
          "curp": "BAPU860528HYNSDR04",
          "occupationOrBusiness": "Empresario",
          "relationshipWithApplicant": "Socio",
          "email": "urielbasto@grupogit.com",
          "electronicSignatureSerialNumber": "1000000702301650",
          "civilStatus": "CASADO",
          "regime": "MANCOMUNADO",
          "spousesName": "",
          "fiscalAddress": "C 9 C POR 72 E",
          "colony": "Gran Santa Fe",
          "postalCode": "97314",
          "city": "MÉRIDA",
          "municipality": "Mérida",
          "state": "Yucatán",
          "country": "Mexico",
          "landline": "9995767253",
          "typeDomicile": "Propio"
      },
      "annualSales": 8613109.523389997,
      "nameOflegalRepresentative": "URIEL JOSE BASTO PEDRE",
      "nameOfEndorsement": "URIEL JOSE BASTO PEDRE"
  };
    const response = await digitalFormatsAxios.post(endpoint, json);
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
  const managers = [
    new Manager(
      "Jose Alberto Vazquez Hernandez",
      "Director",
      "VAHA750319MZA",
      "mvelazquez@scosi.mx",
      "9 años"
    ),
    new Manager(
      "Edgar Vázquez Hernández",
      "Director",
      undefined,
      undefined,
      "9 años"
    ),
  ];

  const contacts = [
    new Contact(
      "Cobranza",
      "Jose Alberto Vazquez Hernandez",
      "Director",
      "4424718971",
      "mvelazquez@scosi.mx"
    ),
    new Contact(
      "Negocios",
      "Edgar Vázquez Hernández",
      "Director",
      "4424718971",
      "mvelazquez@scosi.mx"
    ),
    new Contact(
      "Aclaraciones",
      "Jose Alberto Vazquez Hernandez",
      "Director",
      "4424718971",
      "mvelazquez@scosi.mx"
    ),
  ];

  const productsServices = [
    new ProductService(
      "Comercio al por mayor de equipo y material eléctrico",
      "100%",
      "1%"
    ),
  ];

  const endorsementData = new EndorsementData(
    "Jose Alberto. Vazquez. Hernandez",
    "VAHA750319MZA",
    "VAHA750319HHGZRL09",
    "Empresario",
    "Socio",
    "mvelazquez@scosi.mx",
    "1000000702301650",
    "soltero",
    "soltero",
    undefined, // spousesName
    "13 De Septiembre. 12 201",
    "Niños Heroes",
    "76010",
    "Querétaro",
    "Querétaro",
    "Querétaro",
    "México",
    "4424718971",
    "Propio"
  );

  const model = new Model(
    "Queretaro",
    "28/04/2024",
    "Credito Simple",
    "4",
    500000.0,
    true,
    false,
    false,
    false,
    false,
    "",
    "SOLUCIONES EN CONTROL Y SISTEMAS INDUSTRIALES S.A. DE C.V.",
    "SCS150814MD2",
    "Scosi  sa de cv.",
    "Comercio al por mayor de equipo y material eléctrico",
    "Mexicana",
    "1000000702301650",
    "13 De Septiembre. 12 201",
    "Niños Heroes",
    "76010",
    undefined, // landline
    "Querétaro",
    "Querétaro",
    "Querétaro",
    "México",
    34,
    "https://scosi.mx/",
    "33",
    "Alejandro Serrano Berry",
    "Querétaro",
    "28132",
    "49473",
    "14/08/2015",
    "Jose Alberto. Vazquez. Hernandez.",
    "14907",
    "04/11/2022",
    managers,
    contacts,
    productsServices,
    endorsementData,
    61003563.13,
    "Jose Alberto. Vazquez. Hernandez",
    "Jose Alberto. Vazquez. Hernandez"
  );

  return model;
}
module.exports = {
  generateScmorales,
};