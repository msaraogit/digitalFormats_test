const { mapResponse400 } = require("../../services/response/error");
const { Response200 } = require("../../services/response/success");
const DIGITALFORMATS = require("./config");
const {CustomerModel,} = require("../../models/sao/request/entidadesFinancierasRequest");

const generateEntidadesfinancieras = async () => {
  const data = fillModel();
  //console.log("🚀 ~ generateScmorales ~ data:", data)
  if (!data) return { html: "" };
  try {
    const digitalFormatsAxios = await DIGITALFORMATS();
    const endpoint = `/generate-entidadesfinancieras`;
    const response = await digitalFormatsAxios.post(endpoint, data);
    if (response.status === 200) {
      let mappedResponse = new Response200(response.data);
      //console.log("🚀 ~ generateEntidadesfinancieras ~ mappedResponse.html:", mappedResponse.html);
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
  const customerData = {
    "customerData":{
        "denominationOrSocialReason": "SOLUCIONES EN CONTROL Y SISTEMAS INDUSTRIALES S.A. DE C.V.",
        "tradeNameOrBusiness": "Scosi  sa de cv",
        "rfc": "SCS150814MD2",
        "electronicSignatureSerialNumber" : "1000000702301650",
        "phone" : "4428247400",
        "email" :"mamoya@socasesores.com",
        "nacionality": "Mexicana",
        "countryOfConstitution": "México",
        "countryTIN": "México",
        "tin":"",
        "reasonOpeningAccount":"",
        "business":"Toda la republica",
        "productsServices":"No"
    },
    "addresses": [
        {
            "type":"Particular",
            "street":"13 de septiembre",
            "internalNumber":"12",
            "externalNumber":"201",
            "colony":"Niños héroes",
            "postalCode":"76010",
            "municipality":"Querétaro",
            "state":"Querétaro",
            "country":"México"
        },
        {
            "type":"Adicional",
            "street":"San Antonio",
            "internalNumber":"23",
            "externalNumber":"",
            "colony":"513",
            "postalCode":"97345",
            "municipality":"San Luis",
            "state":"Querétaro",
            "country":"México"
        }
    ],
    "operations":{
        "doYouHaveBanches": false,
        "numberbraches":"",
        "listFederalEntitiesOfferTheProducts":"Toda la republica",
        "offerItsProductsInTheForeign":false,
        "listCountriesOfferTheProducts":"",
        "numberEmployees":34
    },
    "corporateInformation":{
        "writingNumber":"28132",
        "constitutionDate":"14/08/2015",
        "commercialElectronicFolio":"49473",
        "operationsStartDate":"14/08/2015",
        "lastAssemblyDate":"04/11/2022",
        "nameOflegalRepresentative":"Jose Alberto. Vazquez. Hernandez.",
        "curp":"VAHA750319HHGZRL09",
        "rfc":"VAHA750319MZA",
        "nacionality":"Mexicana",
        "countryBirth":"México",
        "countryResidence":"México",
        "apostilleData":""
    },
    "partnerOrShareholder":[{
        "completeName":"Jose Alberto. Vazquez. Hernandez.",
        "rfc":"VAHA750319MZA",
        "birthDay":"1975-03-19",
        "percentageParticipation":"85%"
    }],
    "posibleRealOwner":{
        "denominationOrSocialReason":"",
        "posibleRealOwners":[
            {    
                "completeName":"Jose Alberto. Vazquez. Hernandez.",
                "rfc":"VAHA750319MZA",
                "birthDay":"1975-03-19",
                "percentageParticipation":"85%"
            }
        ]
    },
    "administrationOrgan":{
        "formOfAdministration":"Consejo de Administración"
    },
    "presidentOfBoardOfDirectors":{
        "completeName":"Jose Alberto. Vazquez. Hernandez.",
        "position":"presidente de Consejo",
        "rfc":"VAHA750319MZA",
        "nacionality":"Mexicana",
        "countryResidence":"México"
    },
    "membersOfBoardOfDirectors":[
        {
        "completeName":"Jose Alberto. Vazquez. Hernandez.",
        "position":"Presidente de Consejo",
        "rfc":"VAHA750319MZA",
        "nacionality":"Mexicana",
        "countryResidence":"México"
        },
        {
        "completeName":"Edgar. . Vázquez Hernández",
        "position":"Secretario",
        "rfc":"VAHA750319MZA",
        "nacionality":"Mexicana",
        "countryResidence":"México"
        }
    ],
    "generalDirector":{
            "completeName":"Jose Alberto Vazquez Hernandez",
            "position":"Apoderado"
    },
    "immediateLowerHierarchy":[
        {
        "completeName":"Edgar. . Vázquez Hernández",
        "position":"Secretario"
        }
    ],
    "realOwner":{
        "typeOfControlHeld":"Mediante la participación en el capital social (igual ó mayor al 25%)",
        "name":"Jose Alberto",
        "paternal":"Vázquez",
        "maternal":"Hernandez",
        "rfc":"VAHA750319MZA",
        "ocupation":"Empresario"
    },
    "politicallyExposedPeople":{
        "partnerOrShareholderPerformPublicOrGovernmentOrPoliticalFunctions":false,
        "position":"",
        "period":"",
        "legalRepresentativePerformPublicOrGovernmentOrPoliticalFunctions":false,
        "legalRepresentativePosition":"",
        "legalRepresentativePeriod":"",
        "anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions":false,
        "familyCompleteName":"",
        "familyRelationship":"",
        "familyPosition":"",
        "familyPeriod":""
    },
    "preventiveRegimeMoneyLaunderingFinancingTerrorism":{
        "registrationApplicableLaw":{
            "detailRegulatoryBody":"",
            "dateRegisterRegulatoryBody":"",
            "sipresRegister":"",
            "opinionRegistrationNumberTechnician":"",
            "detailRelevantLawsRegulationsApplicablePLDFT":""
        },
        "policiesProceduresPLDFT":{
            "entityImplementedProgramPreventReactMoneyLaundering":false,
            "programApprovedBoardDirectorsOrEquivalent":false,
            "periodicityUpdatePoliciesProcedures":"",
            "entityHasPoliciesAndProceduresWithpoliticallyExposedPeoples":false,
            "entityHasPoliciesAndProcedureInPlaceAllowRetentionDocumentsAccordaceApplicableLaws":false,
            "timeRecordKept":"",
            "entityHasProceduresinPlaceForCashTransactions":false,
            "entityHasPolicyProhibitsAccountsRelationshipsWithFrontBanks":false,
            "entityImplementPoliciesAndProceduresForIdentificationSuppliersBusinessPartners":false
        },
        "internalStructures":{
            "isThereACOmplianceOfficerWithinEntityCoordinateAndOverseePLDFTDaily":false,
            "completeNameOfficer":"",
            "positionOfficer":"",
            "isItcertifiedByTheRegulatoryBody":false,
            "doesTheEntityHaveCommunicationAndControlCommittee":false
        },
        "riskBasedApproach":{
            "entityHasRiskAssessmentClassificationItsCustomers":true,
            "hasDueDiligenceProcessdifferentiatedAccordingClassificationCustomer":true,
            "specifyRiskFactorsCriteriaIncludedRiskClassificationCustomers":"",
            "hasDueDiligenceProcessCustomersTransactionsHigherRisk":true,
            "specifyDueDiligenceProcessReinforced":"",
            "entityHasProceduresPlaceUpdatingInformationAndDocumentationCustomers":true,
            "indicatePeriodicity":""
        },
        "transactionMonitoringAndReporting":{
            "entityHasTransactionMonitoringSystemDetectUnusualOperations":false,
            "itHasRelevantProceduresPlaceComplyWithReportsTimelyMannerWithinDeadlinesEstablishedApplicableRgulations":false,
            "DoesEntityHavePoliciesAndProceduresPlaceIdentifyStructuredTransactionsOrderAvoidReportingRequirementsLargeAmountsCash":false,
            "entityScreensProspectsClientsOrClientsAgainstListsSanctionsAsWellAsListsPoliticallyExposedPeoples":false,
            "whenIsScreeningPerformed":"",
            "pleaseIndicateListsUsed":"",
            "doesEntityHaveTransactionMonitoringSystemDetectUnusualOperations":true,
            "entityHasProcessesConsiderNegativeNotesProspectsCustomers":true
        },
        "trainingAndOutreachProgramsPLDFT":{
            "entityProvidesEmployeesWithTrainingPreventionOperationsWithResourcesIllicitOriginAndFinancingTerrorism":false,
            "indicateFrequencyEmployeeTraining":"",
            "detailMainTopicsCovered":"",
            "entityHasPoliciesCommunicateNewLawsEmployeesOrModificationsRelatedPreventionOperationsQithResourceIllicitOriginAndFinancingTerrorism":false,
            "mentionWhoResponsibleTrainingNewEmployeesAndCurrentEmployees":""
        },
        "auditExercisesPLDFT":{
            "entityHasReceivedAuditsFromTheRegulator":false,
            "dateLastRevisionRegulator":"",
            "indicateMainFindingsDetected":"",
            "entityHasInternalAuditDepartmentOrExternalUditorThatEvaluatespoliciesAndProceduresPLD":false,
            "dateLastRevisionInternalOrExternalAuditDepartmet":"",
            "indicateMainFindingsDetectedInternalOrExternalAuditDepartmet":"",
            "entityHasReceivedFinesOrSanctionsLinkedComplianceWithPLDFTRulesRegulatorLastFiveYears":false,
            "detailFinesOrPenalties":""
        }
    },
    "accountUse":{
        "servicesHire": ["Cuenta de Depósito a la vista", "Crédito"],
        "sourceOfResources": ["Ventas", "Otros"],
       "accountGoal": ["Concentrar/Dispersar Fondos", "Administrar gastos/Ingresos", "Pago de Créditos", "Otros"]
    },
    "transactionability":{
        "monthlyIncome":5083630,
        "monthlyExpenditures":4563511,
        "makeTransfers":true,
        "howManyTransfersInAMonth": 5,
        "averageMonthlyAmountOfTransactionsInTheAccount":41668.07,
        "youWillReceiveTransfersFromThirdParties": true,
        "averageTansferYouWillReceiveFromThird" : 20834.03,
        "makeCashTransactions": false,
        "howManyTradesMakeInAMonth": 0,
        "averageMonthlyContributionAmount":0,
        "youWillReceiveCashDepositsFromThirdParties":false,
        "averageMonthlyDepositAmountinCash":0,
        "averageWithdrawalsResourcesMakeMonth":0,
        "destinationOrUseOfTheCreditRequested":"Capital de Trabajo",
        "makeAdvancePayments":false,
        "doYouExpectToMakeTheCreditPaymentToThroughThirdParties":false,
        "nameOflegalRepresentative": "Jose Alberto. Vazquez. Hernandez.",
        "date":"28/04/2024"
    },
    "promotorData":{
        "date":"28/04/2024",
        "promoterNotes":"N/A",
        "fullNamePromoter":"Katia Estefania Ramos Gonzalez"
    }
  }
  const customer = new CustomerModel(customerData);
  return customer;
};

module.exports = {
  generateEntidadesfinancieras,
};