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
    const json= {
      "place": "Ciudad de México",
      "date": "10/09/2024",
      "type": "DIGITAL",
      "term": "18",
      "amount": 210000,
      "workingCapital": true,
      "fixedAsset": false,
      "technologicalInnovation": false,
      "consolidationLiabilities": false,
      "others": false,
      "descriptionOtherUse": "",
      "businessName": "TECNOLOGIAS DE LA INFORMACION ODEM S.A.S. de C.V.",
      "rfc": "TIO180716555",
      "tradeNameOrBusiness": "TECNOLOGIAS DE LA INFORMACION ODEM",
      "business": "Comercio equipo de computo y software ",
      "nacionality": "MEX",
      "fiscalAddress": "av 11  71",
      "colony": "San Juan Xalpa",
      "postalCode": "9850",
      "landline": "5579784191",
      "city": "Nezahualcóyotl",
      "municipality": "Iztapalapa",
      "state": "Ciudad de México",
      "country": "MEX",
      "numberEmployees": 0,
      "webSite": "",
      "notaryNumber": "N/A",
      "nameOfNotary": "Secretaría de Economía",
      "entity": "N/A",
      "writingNumber": "SAS2018133135",
      "registrationInformation": "N-2018064294",
      "constitutionDate": "2018-08-09",
      "empoweredRepresentative": "Oscar  Paredes Águila",
      "writingNumberWithPowers": "SAS2018133135",
      "writingDate": "2018-07-16",
      "managers": [
          {
              "completeName": "OSCAR PAREDES AGUILA",
              "position": "Directivo",
              "rfc": "PAAO810407UQ3"
          }
      ],
      "contacts": [
          {
              "type": "Cobranza",
              "completeName": "OSCAR PAREDES AGUILA",
              "position": "Directivo",
              "phone": "5579784191",
              "email": "oscar.paredes@odemx.com"
          },
          {
              "type": "Negocios",
              "completeName": "undefined undefined undefined",
              "position": "Directivo"
          },
          {
              "type": " en Caso de Aclaraciones de Información",
              "completeName": "OSCAR PAREDES AGUILA",
              "position": "Directivo",
              "phone": "5579784191",
              "email": "oscar.paredes@odemx.com"
          }
      ],
      "productsServices": [
          {
              "nameOrDescription": "Comercio al por mayor de equipo y accesorios de cómputo",
              "percentageSales": "60%",
              "percentageMarket": "1%"
          },
          {
              "nameOrDescription": "Otros servicios profesionales, científicos y técnicos",
              "percentageSales": "10%",
              "percentageMarket": "1%"
          },
          {
              "nameOrDescription": "Otros servicios de telecomunicaciones",
              "percentageSales": "10%",
              "percentageMarket": "1%"
          }
      ],
      "endorsementData": {
          "completeNameOrBusinessName": "OSCAR PAREDES AGUILA",
          "rfc": "TIO180716555",
          "curp": "PAAO810407HDFRGS07",
          "occupationOrBusiness": "Empresario",
          "relationshipWithApplicant": "Socio",
          "email": "oscar.paredes@odemx.com",
          "civilStatus": "Soltero(a)",
          "regime": "Soltero(a)",
          "spousesName": "",
          "fiscalAddress": "Av. Morelos",
          "colony": "Estado de México",
          "postalCode": "57210",
          "city": "NEZAHUALCÓYOTL",
          "municipality": "Nezahualcóyotl",
          "state": "México",
          "country": "MEX",
          "landline": "5579784191"
      },
      "annualSales": 4830191.96,
      "nameOflegalRepresentative": "OSCAR PAREDES AGUILA",
      "nameOfEndorsement": "OSCAR PAREDES AGUILA"
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