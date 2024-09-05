const { mapResponse400 } = require("../../services/response/error");
const { Response200 } = require("../../services/response/success");
const DIGITALFORMATS = require("./config");
const { Model } = require("../../models/sao/request/sctdcRequest");

const generateSctdc = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generateScmorales ~ data:", data)
  if (!data) return { html: "" };
  try {
    const digitalFormatsAxios = DIGITALFORMATS();
    const endpoint = `/generate-sctdc`;

    const response = await digitalFormatsAxios.post(endpoint, data);
    if (response.status === 200) {
      //console.log("🚀 ~ generateScmorales ~ response.html:",response.html);
      let mappedResponse = new Response200(response.data);
      return mappedResponse.html;
    } else if (response.status !== 200) {
      console.log(response.data);
      var response200 = new Response200("");
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
const json={
    "place": "Ciudad de México",
    "date": "15/08/2024",
    "type": "DIGITAL",
    "term": "24",
    "amount": 800000,
    "name": "RAZIEL",
    "paternal": "MEZA",
    "maternal": "CARRETO",
    "age": 35,
    "workingCapital": true,
    "descriptionOtherUse": "",
    "rfc": "CALN610305QJ1",
    "fixedAsset": false,
    "technologicalInnovation": false,
    "consolidationLiabilities": false,
    "others": false,
    "birthDay": "21/11/1988",
    "countryBirth": "MEX",
    "nacionality": "MEX",
    "civilStatus": "Soltero(a)",
    "spousalRegime": "Soltero(a)",
    "curp": "MECR881121HDFZRZ09",
    "electronicSignatureSerialNumber": "",
    "email": "razielmeza21@gmail.com",
    "gender": "HOMBRE",
    "fiscalAddress": "MDO DE JAMAICA loc186",
    "colony": "Jamaica",
    "postalCode": "15800",
    "city": "CUAUHTEMOC",
    "municipality": "Venustiano Carranza",
    "state": "Ciudad de México",
    "country": "MEX",
    "landline": "5591961779",
    "mobilePhone": "5591961779",
    "lengthOfResidence": "",
    "mortgage": false,
    "income": false,
    "own": false,
    "other": true,
    "descriptionOther": "Incode",
    "colonyResidence": "Ampliación Asturias",
    "delegationResidence": "Cuauhtémoc",
    "stateResidence": "Ciudad de México",
    "addressResidence": "ORIENTE 67 2839",
    "phoneResidence": "5591961779",
    "colonyDelegationStateResidence": "Ampliación Asturias Cuauhtémoc Ciudad de México",
    "occupation": "Empresario",
    "position": "Director",
    "webSite": "",
    "companyName": "DISTRIBUDORA NORSA",
    "antiquity": "63",
    "phoneCompany": "5591961779",
    "monthlyIncome": 1222931.9175,
    "totalIncome": 14675183.01,
    "sourceOtherIncome": "",
    "custumerFullName": "RAZIEL MEZA CARRETO"
  };
    return json;
  }
  module.exports = {
    generateSctdc,
  };