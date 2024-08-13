class CustomerData {
  constructor({
    typePerson,
    completeName,
    curp,
    rfc,
    birthDay,
    email,
    countryBirth,
    countryResidence,
    tin,
    reasonOpeningAccount,
  } = {}) {
    this.typePerson = typePerson;
    this.completeName = completeName;
    this.curp = curp;
    this.rfc = rfc;
    this.birthDay = birthDay;
    this.email = email;
    this.countryBirth = countryBirth;
    this.countryResidence = countryResidence;
    this.tin = tin;
    this.reasonOpeningAccount = reasonOpeningAccount;
  }
}

class Address {
  constructor({
    type,
    street,
    internalNumber,
    externalNumber,
    colony,
    postalCode,
    municipality,
    state,
    country,
  } = {}) {
    this.type = type;
    this.street = street;
    this.internalNumber = internalNumber;
    this.externalNumber = externalNumber;
    this.colony = colony;
    this.postalCode = postalCode;
    this.municipality = municipality;
    this.state = state;
    this.country = country;
  }
}

class Employment {
  constructor({
    companyName,
    position,
    antiquity,
    fullAddress,
    tradeNameOrBusiness,
    numberEmployees,
    carryOutExports,
    carryOutImports,
    relationshipsWithOtherInstitution,
    otherInstitutions,
  } = {}) {
    this.companyName = companyName;
    this.position = position;
    this.antiquity = antiquity;
    this.fullAddress = fullAddress;
    this.tradeNameOrBusiness = tradeNameOrBusiness;
    this.numberEmployees = numberEmployees;
    this.carryOutExports = carryOutExports;
    this.carryOutImports = carryOutImports;
    this.relationshipsWithOtherInstitution = relationshipsWithOtherInstitution;
    this.otherInstitutions = otherInstitutions
      ? otherInstitutions.map((inst) => new OtherInstitution(inst))
      : [];
  }
}

class OtherInstitution {
  constructor({
    companyName,
    nacionality,
    business,
    percentageParticipation,
  } = {}) {
    this.companyName = companyName;
    this.nacionality = nacionality;
    this.business = business;
    this.percentageParticipation = percentageParticipation;
  }
}

class RealOwners {
  constructor({ isOwner, completeName, relationship, rfc } = {}) {
    this.isOwner = isOwner;
    this.completeName = completeName;
    this.relationship = relationship;
    this.rfc = rfc;
  }
}

class PoliticallyExposedPeople {
  constructor({
    performPublicOrGovernmentOrPoliticalFunctions,
    position,
    period,
    anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions,
    familyPosition,
    familyPeriod,
  } = {}) {
    this.performPublicOrGovernmentOrPoliticalFunctions =
      performPublicOrGovernmentOrPoliticalFunctions;
    this.position = position;
    this.period = period;
    this.anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions =
      anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions;
    this.familyPosition = familyPosition;
    this.familyPeriod = familyPeriod;
  }
}

class AccountUse {
  constructor({ servicesHire, sourceOfResources, accountGoal } = {}) {
    this.servicesHire = servicesHire;
    this.sourceOfResources = sourceOfResources;
    this.accountGoal = accountGoal;
  }
}

class Transactionability {
  constructor({
    monthlyIncome,
    monthlyExpenditures,
    makeTransfers,
    howManyTransfersInAMonth,
    averageMonthlyAmountOfTransactionsInTheAccount,
    youWillReceiveTransfersFromThirdParties,
    averageTansferYouWillReceiveFromThird,
    makeCashTransactions,
    howManyTradesMakeInAMonth,
    averageMonthlyContributionAmount,
    youWillReceiveCashDepositsFromThirdParties,
    averageMonthlyDepositAmountinCash,
    averageWithdrawalsResourcesMakeMonth,
    destinationOrUseOfTheCreditRequested,
    makeAdvancePayments,
    doYouExpectToMakeTheCreditPaymentToThroughThirdParties,
    nameOflegalRepresentative,
    date,
  } = {}) {
    this.monthlyIncome = monthlyIncome;
    this.monthlyExpenditures = monthlyExpenditures;
    this.makeTransfers = makeTransfers;
    this.howManyTransfersInAMonth = howManyTransfersInAMonth;
    this.averageMonthlyAmountOfTransactionsInTheAccount =
      averageMonthlyAmountOfTransactionsInTheAccount;
    this.youWillReceiveTransfersFromThirdParties =
      youWillReceiveTransfersFromThirdParties;
    this.averageTansferYouWillReceiveFromThird =
      averageTansferYouWillReceiveFromThird;
    this.makeCashTransactions = makeCashTransactions;
    this.howManyTradesMakeInAMonth = howManyTradesMakeInAMonth;
    this.averageMonthlyContributionAmount = averageMonthlyContributionAmount;
    this.youWillReceiveCashDepositsFromThirdParties =
      youWillReceiveCashDepositsFromThirdParties;
    this.averageMonthlyDepositAmountinCash = averageMonthlyDepositAmountinCash;
    this.averageWithdrawalsResourcesMakeMonth =
      averageWithdrawalsResourcesMakeMonth;
    this.destinationOrUseOfTheCreditRequested =
      destinationOrUseOfTheCreditRequested;
    this.makeAdvancePayments = makeAdvancePayments;
    this.doYouExpectToMakeTheCreditPaymentToThroughThirdParties =
      doYouExpectToMakeTheCreditPaymentToThroughThirdParties;
    this.nameOflegalRepresentative = nameOflegalRepresentative;
    this.date = date;
  }
}

class PromotorData {
  constructor({ date, promoterNotes, fullNamePromoter } = {}) {
    this.date = date;
    this.promoterNotes = promoterNotes;
    this.fullNamePromoter = fullNamePromoter;
  }
}

class CustomerProfile {
  constructor({
    customerData,
    addresses,
    employment,
    realOwners,
    politicallyExposedPeople,
    accountUse,
    transactionability,
    promotorData,
  } = {}) {
    this.customerData = new CustomerData(customerData);
    this.addresses = addresses
      ? addresses.map((addr) => new Address(addr))
      : [];
    this.employment = new Employment(employment);
    this.realOwners = new RealOwners(realOwners);
    this.politicallyExposedPeople = new PoliticallyExposedPeople(
      politicallyExposedPeople
    );
    this.accountUse = new AccountUse(accountUse);
    this.transactionability = new Transactionability(transactionability);
    this.promotorData = new PromotorData(promotorData);
  }
}

module.exports = {
    CustomerData,
    Address,
    Employment,
    OtherInstitution,
    RealOwners,
    PoliticallyExposedPeople,
    AccountUse,
    Transactionability,
    PromotorData,
    CustomerProfile
};
