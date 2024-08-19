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

  return model;
}
module.exports = {
  generateScpfae,
};