const { mapResponse400 } = require("../response/error");
const { Response200 } = require("../response/success");
const DIGITALFORMATS = require("./config");
const { Model } = require("../../models/sao/request/electronicServicesRequest");

const generateElectronicServices = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generateElectronicServices ~ data:", data)
  if (!data) return { html: "" };
  try {
    const digitalFormatsAxios = DIGITALFORMATS();
    const endpoint = `/generate-electronic-services`;

    const response = await digitalFormatsAxios.post(endpoint, data);
    if (response.status === 200) {
      //console.log("🚀 ~ generateElectronicServices ~ response.html:",response.html);
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
    "Jaime Sánchez Alfonso",
    "28",
    "Agosto",
    "2024",
  );

  return model;
}
module.exports = {
    generateElectronicServices,
};