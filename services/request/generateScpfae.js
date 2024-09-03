const { mapResponse400 } = require("../../services/response/error");
const { Response200 } = require("../../services/response/success");
const DIGITALFORMATS = require("./config");
const { Model } = require("../../models/sao/request/scpfaeRequest");

const generateScpfae = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generateScmorales ~ data:", data)
  if (!data) return { html: "" };
  try {
    const digitalFormatsAxios = DIGITALFORMATS();
    const endpoint = `/generate-scpfae`;

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
  const model = new Model(
    "Queretaro",
    "28/04/2024",
    "Credito Simple",
    "4",
    500000.0,
    "Jose Alberto",
    "Vazquez",
    "Hernandez",
    49,
    true,
    false,
    false,
    false,
    false,
    "",
    "19/03/1975",
    "México",
    "Mexicana",
    "VAHA750319MZA",
    "soltero",
    "",
    "VAHA750319HHGZRL09",
    "1000000702301650",
    "mvelazquez@scosi.mx",
    "Masculino",
    "13 De Septiembre. 12 201",
    "Niños Heroes",
    "76010",
    "Querétaro",
    "Querétaro",
    "Querétaro",
    "México",
    "4428247400",
    "4424718971",
    "1",
    false,
    false,
    false,
    true,
    "Familiar",
    "Queretaro",
    "Queretaro",
    "Queretaro",
    "4428247400",
    "13 De Septiembre. 12 201",
    "Niños Héroes. Querétaro. Querétaro.",
    "Empresario",
    "Director",
    "https://scosi.mx/",
    "Scosi  sa de cv",
    "5",
    "4428247400",
    5083630.0,
    5083630.0,
    "N/A",
    "Jose Alberto. Vazquez. Hernandez"
  );
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
  generateScpfae,
};