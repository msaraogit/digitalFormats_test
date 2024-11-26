const { mapResponse400 } = require("../response/error");
const { Response200 } = require("../response/success");
const DIGITALFORMATS = require("./config");
const {
  Model,
  EnterpriseData,
  FiscalAddressData,
  RepresentativeData,
} = require("../../models/sao/request/contractPulpiRequest");

const generateContractPulpi =  async () => {
  try {
    const data = fillModel();

    const digitalFormatsAxios = DIGITALFORMATS();
    const endpoint = `/generate-contract-pulpi`;

    const response = await digitalFormatsAxios.post(endpoint, data);
    if (response.status === 200) {
        //console.log("🚀 ~ generateContractPulpi ~ response.html:",response.html);
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
  const enterpriseDataInstance = new EnterpriseData(
    "PROCARURAL S.P.R. DE R.L..",
    "Siembra, cultivo y cosecha de hortalizas.",
    "PRO221003AFA",
    "innovarefoods.com",
    "1988",
    "28/04/2024",
    "36",
    "Querétaro.",
    "Querétaro.",
    "Gilda González García Jimeno.",
    "Querétaro.",
    "N-2022015035."
  );

  const fiscalAddressDataInstance = new FiscalAddressData(
    "Plateros",
    "EDIFICIO 71 DEPARTAMENTO 401",
    "110",
    "San Jose Insurgentes",
    "3900",
    "Benito Juarez",
    "Ciudad de México"
  );

  const representativeDataInstance = new RepresentativeData(
    "Gilda González García Jimeno.",
    "36",
    "28/04/2024",
    "Gilda González García Jimeno.",
    "Querétaro",
    "Querétaro",
    "Gilda González García Jimeno."
  );

  // Crear la instancia principal de Model pasando las instancias concretas:
  const modelInstance = new Model(
    "12345",
    "28/04/2024",
    enterpriseDataInstance,
    fiscalAddressDataInstance,
    representativeDataInstance
  );
  return modelInstance;
}
module.exports = {
    generateContractPulpi,
};