class CustomerData {
    constructor(data = {}) {
      this.typePerson = data.typePerson || undefined;
      this.completeName = data.completeName || undefined;
      this.curp = data.curp || undefined;
      this.rfc = data.rfc || undefined;
      this.birthDay = data.birthDay || undefined;
      this.email = data.email || undefined;
      this.countryBirth = data.countryBirth || undefined;
      this.countryResidence = data.countryResidence || undefined;
      this.tin = data.tin || undefined;
      this.reasonOpeningAccount = data.reasonOpeningAccount || undefined;
    }
  }
  
  class Address {
    constructor(data = {}) {
      this.type = data.type || undefined;
      this.street = data.street || undefined;
      this.internalNumber = data.internalNumber || undefined;
      this.externalNumber = data.externalNumber || undefined;
      this.colony = data.colony || undefined;
      this.postalCode = data.postalCode || undefined;
      this.municipality = data.municipality || undefined;
      this.state = data.state || undefined;
      this.country = data.country || undefined;
    }
  }
  
  class Employment {
    constructor(data = {}) {
      this.companyName = data.companyName || undefined;
      this.position = data.position || undefined;
      this.antiquity = data.antiquity || undefined;
      this.fullAddress = data.fullAddress || undefined;
      this.tradeNameOrBusiness = data.tradeNameOrBusiness || undefined;
      this.numberEmployees = data.numberEmployees || undefined;
      this.carryOutExports = data.carryOutExports || undefined;
      this.carryOutImports = data.carryOutImports || undefined;
      this.relationshipsWithOtherInstitution = data.relationshipsWithOtherInstitution || undefined;
      this.otherInstitutions = (data.otherInstitutions || []).map(institution => new OtherInstitution(institution));
    }
  }
  
  class OtherInstitution {
    constructor(data = {}) {
      this.companyName = data.companyName || undefined;
      this.nacionality = data.nacionality || undefined;
      this.business = data.business || undefined;
      this.percentageParticipation = data.percentageParticipation || undefined;
    }
  }
  
  class RealOwner {
    constructor(data = {}) {
      this.isOwner = data.isOwner || undefined;
      this.completeName = data.completeName || undefined;
      this.relationship = data.relationship || undefined;
      this.rfc = data.rfc || undefined;
    }
  }
  
  class PoliticallyExposedPeople {
    constructor(data = {}) {
      this.performPublicOrGovernmentOrPoliticalFunctions = data.performPublicOrGovernmentOrPoliticalFunctions || undefined;
      this.position = data.position || undefined;
      this.period = data.period || undefined;
      this.anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions = data.anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions || undefined;
      this.familyPosition = data.familyPosition || undefined;
      this.familyPeriod = data.familyPeriod || undefined;
    }
  }
  
  class AccountUse {
    constructor(data = {}) {
      this.makeContributionsAccount = data.makeContributionsAccount || undefined;
      this.monetaryInstrumentWillMakeContributions = data.monetaryInstrumentWillMakeContributions || undefined;
      this.sourceOfResources = data.sourceOfResources || undefined;
      this.otherSourcesResources = data.otherSourcesResources || undefined;
      this.nameOflegalRepresentative = data.nameOflegalRepresentative || undefined;
      this.date = data.date || undefined;
    }
  }
  
  class Transactionability {
    constructor(data = {}) {
      this.monthlyIncome = data.monthlyIncome || undefined;
      this.monthlyExpenditures = data.monthlyExpenditures || undefined;
      this.makeTransfers = data.makeTransfers || undefined;
      this.howManyTransfersInAMonth = data.howManyTransfersInAMonth || undefined;
      this.averageMonthlyAmountOfTransactionsInTheAccount = data.averageMonthlyAmountOfTransactionsInTheAccount || undefined;
      this.youWillReceiveTransfersFromThirdParties = data.youWillReceiveTransfersFromThirdParties || undefined;
      this.averageTansferYouWillReceiveFromThird = data.averageTansferYouWillReceiveFromThird || undefined;
      this.makeCashTransactions = data.makeCashTransactions || undefined;
      this.howManyTradesMakeInAMonth = data.howManyTradesMakeInAMonth || undefined;
      this.averageMonthlyContributionAmount = data.averageMonthlyContributionAmount || undefined;
      this.youWillReceiveCashDepositsFromThirdParties = data.youWillReceiveCashDepositsFromThirdParties || undefined;
      this.averageMonthlyDepositAmountinCash = data.averageMonthlyDepositAmountinCash || undefined;
      this.averageWithdrawalsResourcesMakeMonth = data.averageWithdrawalsResourcesMakeMonth || undefined;
      this.destinationOrUseOfTheCreditRequested = data.destinationOrUseOfTheCreditRequested || undefined;
      this.makeAdvancePayments = data.makeAdvancePayments || undefined;
      this.doYouExpectToMakeTheCreditPaymentToThroughThirdParties = data.doYouExpectToMakeTheCreditPaymentToThroughThirdParties || undefined;
      this.nameOflegalRepresentative = data.nameOflegalRepresentative || undefined;
      this.date = data.date || undefined;
    }
  }
  
  class PromotorData {
    constructor(data = {}) {
      this.date = data.date || undefined;
      this.promoterNotes = data.promoterNotes || undefined;
      this.fullNamePromoter = data.fullNamePromoter || undefined;
    }
  }
  class Model{
    constructor(data = {}) {
        this.customerData = data.customerData;
        this.addresses = (data.addresses || []);
        this.employment =data.employment;
        this.realOwners = data.realOwners;
        this.politicallyExposedPeople = data.politicallyExposedPeople;
        this.accountUse = data.accountUse;
        this.transactionability = data.transactionability;
        this.promotorData = data.promotorData;
      }
  }
  module.exports = {
    Model,
    CustomerData,
    Address,
    Employment,
    OtherInstitution,
    RealOwner,
    PoliticallyExposedPeople,
    AccountUse,
    Transactionability,
    PromotorData,
  };  