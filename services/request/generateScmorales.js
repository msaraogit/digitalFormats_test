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