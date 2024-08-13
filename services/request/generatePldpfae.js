const { mapResponse400 } = require("../../services/response/error");
const { Response200 } = require("../../services/response/success");
const DIGITALFORMATS = require("./config");
const {
  CustomerProfile,
} = require("../../models/sao/request/pldpfaeRequest");

const generatePldpfae = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generatePldpfae ~ data:", data)
  if (!data) return { html: "" };
  try {
    const digitalFormatsAxios = await DIGITALFORMATS();
    const endpoint = `/generate-pldpfae`;
    const response = await digitalFormatsAxios.post(endpoint, data);
    if (response.status === 200) {
      //console.log("🚀 ~ generatePldpfae ~ mappedResponse.html:",mappedResponse.html);
      let mappedResponse = new Response200(response.data);
      return mappedResponse.html;
    } else if (response.status !== 200) {
      console.log(response.data);
      let response200 = new Response200("");
      return response200;
    }
  } catch (err) {
    //console.log(err.response.data.error)
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
  const jsonData = {
    customerData: {
      typePerson: "Persona Fisica con Actividad Empresarial",
      completeName: "Jose Alberto. Vazquez. Hernandez",
      curp: "VAHA750319HHGZRL09",
      rfc: "VAHA750319MZA",
      birthDay: "19/03/1975",
      email: "mvelazquez@scosi.mx",
      countryBirth: "México",
      countryResidence: "México",
      tin: "",
      reasonOpeningAccount: "",
    },
    addresses: [
      {
        type: "Particular",
        street: "13 de septiembre",
        internalNumber: "12",
        externalNumber: "201",
        colony: "Niños héroes",
        postalCode: "76010",
        municipality: "Querétaro",
        state: "Querétaro",
        country: "México",
      },
      {
        type: "Adicional",
        street: "",
        internalNumber: "",
        externalNumber: "",
        colony: "",
        postalCode: "",
        municipality: "",
        state: "",
        country: "",
      },
      {
        type: "Fiscal",
        street: "13 de septiembre",
        internalNumber: "12",
        externalNumber: "201",
        colony: "Niños héroes",
        postalCode: "76010",
        municipality: "Querétaro",
        state: "Querétaro",
        country: "México",
      },
    ],
    employment: {
      companyName: "Scosi  sa de cv.",
      position: "Director",
      antiquity: "5 años",
      fullAddress:
        "13 de septiembre., 12, 201, col. Niños Héroes., CP. 76010, Querétaro.",
      tradeNameOrBusiness: "Scosi  sa de cv.",
      numberEmployees: 34,
      carryOutExports: false,
      carryOutImports: false,
      relationshipsWithOtherInstitution: true,
      otherInstitutions: [
        {
          companyName: "SA DE CV",
          nacionality: "Mexicana",
          business: "Tenologia",
          percentageParticipation: "100%",
        },
      ],
    },
    realOwners: {
      isOwner: true,
      completeName: "",
      relationship: "",
      rfc: "",
    },
    politicallyExposedPeople: {
      performPublicOrGovernmentOrPoliticalFunctions: false,
      position: "",
      period: "",
      anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions: false,
      familyPosition: "",
      familyPeriod: "",
    },
    accountUse: {
      servicesHire: ["Cuenta de Depósito a la vista", "Crédito"],
      sourceOfResources: ["Ventas", "Otros"],
      accountGoal: [
        "Concentrar/Dispersar Fondos",
        "Administrar gastos/Ingresos",
        "Pago de Créditos",
        "Otros",
      ],
    },
    transactionability: {
      monthlyIncome: 5083630,
      monthlyExpenditures: 4563511,
      makeTransfers: true,
      howManyTransfersInAMonth: 5,
      averageMonthlyAmountOfTransactionsInTheAccount: 41668.07,
      youWillReceiveTransfersFromThirdParties: true,
      averageTansferYouWillReceiveFromThird: 20834.03,
      makeCashTransactions: false,
      howManyTradesMakeInAMonth: 0,
      averageMonthlyContributionAmount: 0,
      youWillReceiveCashDepositsFromThirdParties: false,
      averageMonthlyDepositAmountinCash: 0,
      averageWithdrawalsResourcesMakeMonth: 0,
      destinationOrUseOfTheCreditRequested: "Capital de Trabajo",
      makeAdvancePayments: false,
      doYouExpectToMakeTheCreditPaymentToThroughThirdParties: false,
      nameOflegalRepresentative: "Jose Alberto. Vazquez. Hernandez.",
      date: "28/04/2024",
    },
    promotorData: {
      date: "28/04/2024",
      promoterNotes: "N/A",
      fullNamePromoter: "Katia Estefania Ramos Gonzalez",
    },
  };
  const customerProfile = new CustomerProfile(jsonData);
  return customerProfile;
}
module.exports = {
  generatePldpfae,
};