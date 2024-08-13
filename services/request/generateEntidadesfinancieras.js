const { CustomerData, Address, Operations, CorporateInformation, PartnerOrShareholder, PossibleRealOwner, AdministrationOrgan, PresidentOfBoardOfDirectors, MemberOfBoardOfDirectors, GeneralDirector, ImmediateLowerHierarchy, RealOwner, PoliticallyExposedPeople, AccountUse, Transactionability, PromotorData } = 
require("../../models/sao/request/entidadesFinancierasRequest");
const {mapResponse400} = require("../../services/response/error");
const {Response200} = require("../../services/response/success");
const DIGITALFORMATS = require("./config");

const generateEntidadesfinancieras = async () => {
  
    const data= fillModel();
      //console.log("🚀 ~ generateScmorales ~ data:", data)
      if (!data)
        return { err: "BAD RESQUEST." };
      try {
        const digitalFormatsAxios = await DIGITALFORMATS();
        const endpoint = `/generate-entidadesfinancieras`;
    
        const response = await digitalFormatsAxios.post(endpoint, data);
        if(response.status === 200){
          //console.log("🚀 ~ generateScmorales ~ mappedResponse.html:", mappedResponse.html);
          let mappedResponse = new Response200(response.data);
          mappedResponse.success="ok";
          return mappedResponse.html;
        }else if (response.status !== 200) {
            console.log(response.data);
            let err = new Error(response.data.message);
            err.response = response;
            let response200 = new Response200("","error");
            return response200;
        }
      } catch (err) {
        //console.log(err.response.data.error)
        if (err.response && err.response.status === 400) {
          const mappedErrorResponse = mapResponse400(err);
          console.error('Error en la solicitud:', mappedErrorResponse);
        } else {
            console.error('Error inesperado:', error);
        }
        return { err };
      }
    };
function fillModel() {
    const customerData = new CustomerData({
        denominationOrSocialReason: "SOLUCIONES EN CONTROL Y SISTEMAS INDUSTRIALES S.A. DE C.V.",
        tradeNameOrBusiness: "Scosi sa de cv",
        rfc: "SCS150814MD2",
        electronicSignatureSerialNumber: "1000000702301650",
        phone: "4428247400",
        email: "mamoya@socasesores.com",
        nacionality: "Mexicana",
        countryOfConstitution: "México",
        countryTIN: "México",
        // Otros campos aquí...
    });

    const addresses = [
        new Address({
            type: "Particular",
            street: "13 de septiembre",
            internalNumber: "12",
            externalNumber: "201",
            colony: "Niños héroes",
            postalCode: "76010",
            municipality: "Querétaro",
            state: "Querétaro",
            country: "México",
        }),
        // Otros objetos Address si es necesario...
    ];

    const operations = new Operations({
        doYouHaveBanches: false,
        numberbraches: "",
        listFederalEntitiesOfferTheProducts: "Toda la republica",
        offerItsProductsInTheForeign: false,
        listCountriesOfferTheProducts: "",
        numberEmployees: 34,
    });

    const corporateInformation = new CorporateInformation({
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
    });

    const partnerOrShareholder = new PartnerOrShareholder({
        completeName: "Jose Alberto. Vazquez. Hernandez.",
        rfc: "VAHA750319MZA",
        birthDay: "1975-03-19",
        percentageParticipation: "85%",
    });

    const possibleRealOwner = new PossibleRealOwner({
        denominationOrSocialReason: "",
        possibleRealOwners: [partnerOrShareholder],
    });

    const administrationOrgan = new AdministrationOrgan({
        formOfAdministration: "Consejo de Administración",
    });

    const presidentOfBoardOfDirectors = new PresidentOfBoardOfDirectors({
        completeName: "Jose Alberto. Vazquez. Hernandez.",
        position: "presidente de Consejo",
        rfc: "VAHA750319MZA",
        nacionality: "Mexicana",
        countryResidence: "México",
    });

    const membersOfBoardOfDirectors = [
        new MemberOfBoardOfDirectors({
            completeName: "Jose Alberto. Vazquez. Hernandez.",
            position: "Presidente de Consejo",
            rfc: "VAHA750319MZA",
            nacionality: "Mexicana",
            countryResidence: "México",
        }),
        new MemberOfBoardOfDirectors({
            completeName: "Edgar. . Vázquez Hernández",
            position: "Secretario",
            rfc: "VAHA750319MZA",
            nacionality: "Mexicana",
            countryResidence: "México",
        }),
    ];

    const generalDirector = new GeneralDirector({
        completeName: "Jose Alberto Vazquez Hernandez",
        position: "Apoderado",
    });

    const immediateLowerHierarchy = [
        new ImmediateLowerHierarchy({
            completeName: "Edgar. . Vázquez Hernández",
            position: "Secretario",
        }),
    ];

    const realOwner = new RealOwner({
        typeOfControlHeld: "Mediante la participación en el capital social (igual ó mayor al 25%)",
        name: "Jose Alberto",
        paternal: "Vázquez",
        maternal: "Hernandez",
        rfc: "VAHA750319MZA",
        ocupation: "Empresario",
    });

    const politicallyExposedPeople = new PoliticallyExposedPeople({
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
    });

    const accountUse = new AccountUse({
        servicesHire: ["Cuenta de Depósito a la vista", "Crédito"],
        sourceOfResources: ["Ventas", "Otros"],
        accountGoal: ["Concentrar/Dispersar Fondos", "Administrar gastos/Ingresos", "Pago de Créditos", "Otros"],
    });

    const transactionability = new Transactionability({
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
    });

    const promotorData = new PromotorData({
        date: "28/04/2024",
        promoterNotes: "N/A",
        fullNamePromoter: "Katia Estefania Ramos Gonzalez",
    });

    return {
        customerData,
        addresses,
        operations,
        corporateInformation,
        partnerOrShareholder,
        possibleRealOwner,
        administrationOrgan,
        presidentOfBoardOfDirectors,
        membersOfBoardOfDirectors,
        generalDirector,
        immediateLowerHierarchy,
        realOwner,
        politicallyExposedPeople,
        accountUse,
        transactionability,
        promotorData,
    };
}

module.exports={
    generateEntidadesfinancieras,
}
