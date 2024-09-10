const { mapResponse400 } = require("../response/error");
const { Response200 } = require("../response/success");
const DIGITALFORMATS = require("./config");
const { Model } = require("../../models/sao/request/electronicServicesRequest");

const generateContractAccount = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generateContractAccount ~ data:", data)
  if (!data) return { html: "" };
  try {
    const digitalFormatsAxios = DIGITALFORMATS();
    const endpoint = `/generate-contract-account`;

    const response = await digitalFormatsAxios.post(endpoint, data);
    if (response.status === 200) {
      //console.log("🚀 ~ generateContractAccount ~ response.html:",response.html);
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
    "NORMA YOLANDA CARRETO LEYTE",
    "3",
    "Septiembre",
    "2024",
  );

  return model;
}
module.exports = {
  generateContractAccount,
};