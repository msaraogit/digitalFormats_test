const {
    AccountData,
    CustomerData,
    ConstitutiveWritingData,
    LegalRepresentativeData,
    DataThePowersLegalRepresentative,
    CustomerMedia,
    FinsusMedia,
    Media,
    Signature,
    Model,
  } = require("../../models/sao/request/sanexoRequest");
  const { mapResponse400 } = require("../../services/response/error");
  const { Response200 } = require("../../services/response/success");
  const DIGITALFORMATS = require("./config");
  const generateSanexo = async () => {
    const data = fillModel();
    //console.log("🚀 ~ generateSanexo ~ data:", data)
    if (!data) return { err: "BAD RESQUEST." };
    try {
      const digitalFormatsAxios = DIGITALFORMATS();
      const endpoint = `/generate-sanexo`;
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
const model = new Model({
    accountData: {
        typeOperation: "Pasiva",
        interestPayment: ["Mensual"],
        automaticRenewal: false,
        originBankingInstitution: "Bancpmer",
        originAccount: "103074609",
        originClabe: "12680001030746000",
        BankingInstitutionFinsus: "Banorte",
        AccountFinsus: "0313939121",
        ClabeFinsus: "072180003139391218"
    },
    customerData: {
        completeName: "Scosi sa de cv",
        nacionality: "Mexicano",
        rfc: "SCS150814MD2",
        street: "13 De Septiembre",
        externalNumber: "12",
        internalNumber: "201",
        colony: "Niños Heroes",
        postalCode: "76010",
        city: "Querétaro",
        municipality: "Querétaro",
        state: "Querétaro",
        country: "México",
        electronicSignature: "1000000702301650",
        business: ""
    },
    constitutiveWritingData: {
        instrumentNumber: "28132",
        constitutionDate: "14/08/2015",
        completeNamePublicFederator: "Alejandro Serrano Berry",
        numberPublicFederator: "33",
        locationPublicFederator: "Querétaro",
        comercialFolio: "49473",
        placeRegister: "Querétaro",
        dateRegister: "04/11/2022"
    },
    legalRepresentativeData: {
        completeName: "Jose Alberto. Vazquez. Hernandez",
        gender: "Masculino",
        ocupation: "Apoderado",
        birthDay: "1975-03-19",
        countryBirth: "México",
        nacionality: "Mexicano",
        street: "13 De Septiembre",
        externalNumber: "12",
        internalNumber: "201",
        colony: "Niños Heroes",
        postalCode: "76010",
        city: "Querétaro",
        municipality: "Querétaro",
        state: "Querétaro",
        country: "México",
        curp: "VAHA750319HHGZRL09",
        AdvancedElectronicSignature: ""
    },
    dataThePowersLegalRepresentative: {
        instrumentNumber: "14907",
        instrumentDate: "04/11/2022",
        completeNamePublicFederator: "José Adolfo Ortega Osorio",
        numberPublicFederator: "33",
        DemarcationPublicFederator: "Querétaro"
    },
    media: {
        customerMedia: {
            homePhone: "",
            officePhone: "4428247400",
            movilPhone: "",
            email: "mamoya@socasesores.com"
        },
        finsusMedia: {
            phone: "Teléfono: (55)56614915 ext. 228",
            email: "servicioalcliente@finsus.mx"
        }
    },
    signature: {
        completeNameCustomer: "Scosi sa de cv",
        completeNameFinsus: "JUAN LOZANO GONZÁLEZ",
        day: "22",
        month: "abril",
        year: "2024"
    }
});

return model;  
}

module.exports = {
    generateSanexo,
  };