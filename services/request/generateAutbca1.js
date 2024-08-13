const { mapResponse400 } = require("../response/error");
const { Response200 } = require("../response/success");
const DIGITALFORMATS = require("./config");
const { Model } = require("../../models/sao/request/autbca1Request");

const generateAutbca1 = async () => {
    const data = fillModel();
    //console.log("🚀 ~ generateAutbca1 ~ data:", data)
    if (!data) return { success: "BAD RESQUEST.", html:"" };
    try {
    const digitalFormatsAxios = DIGITALFORMATS();
    const endpoint = `/generate-autbca1`;
  
    const response = await digitalFormatsAxios.post(endpoint, data);
      if (response.status === 200) {
        //console.log("🚀 ~ generateAutbca1 ~ response.html:",response.html);
        let mappedResponse = new Response200(response.data);
        mappedResponse.success="ok";
        return mappedResponse.html;
      } else if (response.status !== 200) {
        console.log(response.data);
        let err = new Error(response.data.message);
        err.response = response;
        let response200 = new Response200("","error");
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
        true,
        false,
        false,
        "SOLUCIONES EN CONTROL Y SISTEMAS INDUSTRIALES S.A. DE C.V.",
        "Jose Alberto. Vazquez. Hernandez",
        "SCS150814MD2",
        "13 De Septiembre. 12 201",
        "Niños Heroes",
        "76010",
        "Querétaro",
        "Querétaro",
        "Querétaro",
        "4428247400",
        "Anonimo",
        "28/04/2024",
        "1234567890"
    );
  
    return model;
  }
  module.exports = {
    generateAutbca1,
  };