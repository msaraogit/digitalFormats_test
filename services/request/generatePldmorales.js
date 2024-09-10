const { mapResponse400 } = require("../../services/response/error");
const { Response200 } = require("../../services/response/success");
const DIGITALFORMATS = require("./config");
const { CompanyModel } = require("../../models/sao/request/pldmoralesRequest");

const generatePldmorales = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generatePldmorales ~ data:", data)
  if (!data) return { html: "" };
  try {
    const digitalFormatsAxios = await DIGITALFORMATS();
    const endpoint = `/generate-pldmorales`;
    const response = await digitalFormatsAxios.post(endpoint, data);
    if (response.status === 200) {
      //console.log("🚀 ~ generatePldmorales ~ mappedResponse.html:",mappedResponse.html);
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
  const companyData = {
    customerData: {
      denominationOrSocialReason:
        "SOLUCIONES EN CONTROL Y SISTEMAS INDUSTRIALES S.A. DE C.V.",
      tradeNameOrBusiness: "Scosi  sa de cv",
      rfc: "SCS150814MD2",
      electronicSignatureSerialNumber: "1000000702301650",
      phone: "4428247400",
      email: "mamoya@socasesores.com",
      nacionality: "Mexicana",
      countryOfConstitution: "México",
      countryTIN: "México",
      tin: "",
      reasonOpeningAccount: "",
      business: "Toda la republica",
      productsServices: "No",
    },
    addresses: [
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
    ],
    operations: {
      listFederalEntitiesOfferTheProducts: "Toda la republica",
      offerItsProductsInTheForeign: false,
      listCountriesOfferTheProducts: "",
      numberEmployees: 34,
    },
    corporateInformation: {
      writingNumber: "28132",
      constitutionDate: "14/08/2015",
      commercialElectronicFolio: "49473",
      operationsStartDate: "14/08/2015",
      lastAssemblyDate: "04/11/2022",
      nameOflegalRepresentative: "Jose Alberto. Vazquez. Hernandez.",
      curp: "VAHA750319HHGZRL09",
      rfc: "VAHA750319MZA",
      nacionality: "Mexicana",
      countryBirth: "México",
      countryResidence: "México",
      apostilleData: "",
    },
    partnerOrShareholder: [
      {
        completeName: "María de las Mercedes Medina",
        rfc: "MEME780724BM3",
        birthDay: "1975-03-19",
        percentageParticipation: "50%",
      },{
        completeName: "Juana Dellavedova",
        rfc: "VAHA750319MZA",
        birthDay: "1975-03-19",
        percentageParticipation: "45%",
      },{
        completeName: "Alejandro Carlos Dellavedova",
        rfc: "DEXJ9508103V8",
        birthDay: "1975-03-19",
        percentageParticipation: "5%",
      },
    ],
    posibleRealOwner: {
      denominationOrSocialReason: "",
      posibleRealOwners: [
        {
          completeName: "María de las Mercedes Medina",
          rfc: "MEME780724BM3",
          birthDay: "1975-03-19",
          percentageParticipation: "50%",
        },{
          completeName: "Juana Dellavedova",
          rfc: "VAHA750319MZA",
          birthDay: "1975-03-19",
          percentageParticipation: "45%",
        },
      ],
    },
    administrationOrgan: {
      formOfAdministration: "Consejo de Administración",
    },
    presidentOfBoardOfDirectors: {
      completeName: "Jose Alberto. Vazquez. Hernandez.",
      position: "presidente de Consejo",
      rfc: "VAHA750319MZA",
      nacionality: "Mexicana",
      countryResidence: "México",
    },
    membersOfBoardOfDirectors: [
      {
        completeName: "María de las Mercedes Medina",
        position: "Consejo de Gerentes",
        rfc: "VAHA750319MZA",
        nacionality: "Argentina",
        countryResidence: "ARG",
      },
      {
        completeName: "Juana Dellavedova",
        position: "Consejo de Gerentes",
        rfc: "VAHA750319MZA",
        nacionality: "Argentina",
        countryResidence: "ARG",
      },
    ],
    generalDirector: {
      completeName: "Jose Alberto Vazquez Hernandez",
      position: "Apoderado",
    },
    immediateLowerHierarchy: [
      {
        completeName: "Edgar. . Vázquez Hernández",
        position: "Secretario",
      },
    ],
    realOwner: {
      typeOfControlHeld:
        "Mediante la participación en el capital social (igual ó mayor al 25%)",
      name: "Jose Alberto",
      paternal: "Vázquez",
      maternal: "Hernandez",
      rfc: "VAHA750319MZA",
      ocupation: "Empresario",
    },
    politicallyExposedPeople: {
      partnerOrShareholderPerformPublicOrGovernmentOrPoliticalFunctions: false,
      position: "",
      period: "",
      legalRepresentativePerformPublicOrGovernmentOrPoliticalFunctions: false,
      legalRepresentativePosition: "",
      legalRepresentativePeriod: "",
      anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions: false,
      familyCompleteName: "",
      familyRelationship: "",
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
      averageMonthlyAmountOfTransactionsInTheAccount: 50000.0,
      youWillReceiveTransfersFromThirdParties: true,
      averageWithdrawalsResourcesMakeMonth: 250000.0,
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
  const companyModel = new CompanyModel(companyData);
  const json={
    "customerData": {
        "denominationOrSocialReason": "COQUILUB S.A. de C.V.",
        "tradeNameOrBusiness": "COQUILUB",
        "rfc": "COQ180522NB4",
        "electronicSignatureSerialNumber": "00001000000702377019",
        "phone": "5563537073",
        "email": "m.galvan@coquilub.com.mx",
        "nacionality": "MEX",
        "countryOfConstitution": "MEX",
        "countryTIN": "MEX",
        "tin": "",
        "reasonOpeningAccount": "",
        "business": "",
        "productsServices": ""
    },
    "addresses": [
        {
            "type": "Incode",
            "street": "C EL PORTAL 105",
            "internalNumber": "",
            "externalNumber": "105",
            "colony": "Jardines de la Hacienda Sur",
            "postalCode": "54720",
            "municipality": "Cuautitlán Izcalli",
            "state": "México",
            "country": "MEX"
        }
    ],
    "operations": {
        "listFederalEntitiesOfferTheProducts": "Toda la republica",
        "offerItsProductsInTheForeign": false,
        "listCountriesOfferTheProducts": "",
        "numberEmployees": 11
    },
    "corporateInformation": {
        "writingNumber": "38665",
        "constitutionDate": "2017-11-29",
        "commercialElectronicFolio": "N-2018087506",
        "operationsStartDate": "2018-10-26",
        "lastAssemblyDate": "2023-01-26",
        "nameOflegalRepresentative": "Miguel Ángel Galván González ",
        "curp": "GAGM860901HMCLNG01",
        "rfc": "GAGM860901I95",
        "nacionality": "MEX",
        "countryBirth": "MEX",
        "countryResidence": "MEX",
        "apostilleData": ""
    },
    "partnerOrShareholder": [
        {
            "completeName": "ERNESTO ZAMORA CONTRERAS",
            "rfc": "ZACE680115JD8",
            "birthDay": "15/01/1968",
            "percentageParticipation": "88.00%"
        },
        {
            "completeName": "MIGUEL ANGEL GALVAN GONZALEZ",
            "rfc": "GAGM860901I95",
            "birthDay": "01/09/1986",
            "percentageParticipation": "2.00%"
        }
    ],
    "posibleRealOwner": {
        "denominationOrSocialReason": "COQUILUB",
        "posibleRealOwners": [
            {
                "completeName": "ERNESTO ZAMORA CONTRERAS",
                "rfc": "ZACE680115JD8",
                "birthDay": "15/01/1968",
                "percentageParticipation": "88.00%"
            },
            {
                "completeName": "MIGUEL ANGEL GALVAN GONZALEZ",
                "rfc": "GAGM860901I95",
                "birthDay": "01/09/1986",
                "percentageParticipation": "2.00%"
            }
        ]
    },
    "administrationOrgan": {
        "formOfAdministration": "Consejo de Administración"
    },
    "presidentOfBoardOfDirectors": {
        "completeName": "MIGUEL ANGEL GALVAN GONZALEZ",
        "position": "PENDIENTE",
        "rfc": "GAGM860901I95",
        "nacionality": "MEX",
        "countryResidence": "MEX"
    },
    "membersOfBoardOfDirectors": [
        {
            "completeName": "ERNESTO ZAMORA CONTRERAS",
            "position": "PENDIENTE",
            "rfc": "ZACE680115JD8",
            "nacionality": "MEX",
            "countryResidence": "MEX"
        },
        {
            "completeName": "MIGUEL ANGEL GALVAN GONZALEZ",
            "position": "PENDIENTE",
            "rfc": "GAGM860901I95",
            "nacionality": "MEX",
            "countryResidence": "MEX"
        }
    ],
    "generalDirector": {
        "completeName": "MIGUEL ANGEL GALVAN GONZALEZ",
        "position": "PENDIENTE"
    },
    "immediateLowerHierarchy": [
        {
            "completeName": "ERNESTO ZAMORA CONTRERAS",
            "position": "PENDIENTE"
        },
        {
            "completeName": "MIGUEL ANGEL GALVAN GONZALEZ",
            "position": "PENDIENTE"
        }
    ],
    "realOwner": {
        "typeOfControlHeld": "Mediante la participación en el capital social (igual ó mayor al 25%)",
        "name": "MIGUEL ANGEL",
        "paternal": "GALVAN",
        "maternal": "GONZALEZ",
        "rfc": "GAGM860901I95",
        "ocupation": "PENDIENTE"
    },
    "politicallyExposedPeople": {
        "partnerOrShareholderPerformPublicOrGovernmentOrPoliticalFunctions": false,
        "position": "PENDIENTE",
        "period": "",
        "legalRepresentativePerformPublicOrGovernmentOrPoliticalFunctions": false,
        "legalRepresentativePosition": "",
        "legalRepresentativePeriod": "",
        "anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions": false,
        "familyCompleteName": "",
        "familyRelationship": "",
        "familyPosition": "",
        "familyPeriod": ""
    },
    "accountUse": {
        "servicesHire": [
            "Cuenta de Depósito a la vista",
            "Crédito"
        ],
        "sourceOfResources": [
            "Ventas",
            "Otros"
        ],
        "accountGoal": [
            "Concentrar/Dispersar Fondos",
            "Administrar gastos/Ingresos",
            "Pago de Créditos",
            "Otros"
        ]
    },
    "transactionability": {
        "monthlyIncome": 38718369.13943835,
        "monthlyExpenditures": 34411018.67758406,
        "makeTransfers": true,
        "howManyTransfersInAMonth": 5,
        "averageMonthlyAmountOfTransactionsInTheAccount": 50000,
        "youWillReceiveTransfersFromThirdParties": true,
        "averageWithdrawalsResourcesMakeMonth": 250000,
        "destinationOrUseOfTheCreditRequested": "ESTA SECCION ESTA PENDIENTE",
        "makeAdvancePayments": false,
        "doYouExpectToMakeTheCreditPaymentToThroughThirdParties": false,
        "nameOflegalRepresentative": "AQUI IRÁ EL NOMBRE DEL REPRESENTANTE LEGAL",
        "date": "05/09/2024"
    },
    "promotorData": {
        "date": "05/09/2024",
        "promoterNotes": "",
        "fullNamePromoter": "Pendiente por enviar"
    }
};
  return json;
}
module.exports = {
  generatePldmorales,
};
