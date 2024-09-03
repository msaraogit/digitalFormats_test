const { mapResponse400 } = require("../response/error");
const { Response200 } = require("../response/success");
const DIGITALFORMATS = require("./config");
const { Model } = require("../../models/sao/request/cseRequest");

const generateCse = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generateCse ~ data:", data)
  if (!data) return { html: "" };
  try {
    const digitalFormatsAxios = DIGITALFORMATS();
    const endpoint = `/generate-cse`;

    const response = await digitalFormatsAxios.post(endpoint, data);
    if (response.status === 200) {
      //console.log("🚀 ~ generateCse ~ response.html:",response.html);
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
    const model = new Model("Alfonso",
        "Jaime",
        "Sanchez",
        "Masculino",
        "19/10/1991",
        "MEX.",
        "MEX.",
        "MEX.",
        "Soltero(a).",
        "Iturbide",
        "S/N.",
        "",
        "Villa guerrero.",
        "51760",
        "Villa guerrero.",
        "México",
        "México",
        [],
        "",
        "",
        "JASA920415HMCMNL06",
        "JASA920415V9A",
        "1000000706724590",
        "7228226628",
        "ponn_ccho@hotmail.com",
        true,
        "144744920",
        "",
        "Jaime Sánchez Alfonso",
        "28",
        "Agosto",
        "2024");

  return model;
}
module.exports = {
    generateCse,
};