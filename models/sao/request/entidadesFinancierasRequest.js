class CustomerData {
    constructor({
        denominationOrSocialReason,
        tradeNameOrBusiness,
        rfc,
        electronicSignatureSerialNumber,
        phone,
        email,
        nacionality,
        countryOfConstitution,
        countryTIN,
        tin,
        reasonOpeningAccount,
        business,
        productsServices,
    } = {}) {
        this.denominationOrSocialReason = denominationOrSocialReason ?? undefined;
        this.tradeNameOrBusiness = tradeNameOrBusiness ?? undefined;
        this.rfc = rfc ?? undefined;
        this.electronicSignatureSerialNumber = electronicSignatureSerialNumber ?? undefined;
        this.phone = phone ?? undefined;
        this.email = email ?? undefined;
        this.nacionality = nacionality ?? undefined;
        this.countryOfConstitution = countryOfConstitution ?? undefined;
        this.countryTIN = countryTIN ?? undefined;
        this.tin = tin ?? undefined;
        this.reasonOpeningAccount = reasonOpeningAccount ?? undefined;
        this.business = business ?? undefined;
        this.productsServices = productsServices ?? undefined;
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
        this.type = type ?? undefined;
        this.street = street ?? undefined;
        this.internalNumber = internalNumber ?? undefined;
        this.externalNumber = externalNumber ?? undefined;
        this.colony = colony ?? undefined;
        this.postalCode = postalCode ?? undefined;
        this.municipality = municipality ?? undefined;
        this.state = state ?? undefined;
        this.country = country ?? undefined;
    }
}
class Operations {
    constructor({
        doYouHaveBanches,
        numberbraches,
        listFederalEntitiesOfferTheProducts,
        offerItsProductsInTheForeign,
        listCountriesOfferTheProducts,
        numberEmployees,
    } = {}) {
        this.doYouHaveBanches = doYouHaveBanches ?? undefined;
        this.numberbraches = numberbraches ?? undefined;
        this.listFederalEntitiesOfferTheProducts = listFederalEntitiesOfferTheProducts ?? undefined;
        this.offerItsProductsInTheForeign = offerItsProductsInTheForeign ?? undefined;
        this.listCountriesOfferTheProducts = listCountriesOfferTheProducts ?? undefined;
        this.numberEmployees = numberEmployees ?? undefined;
    }
}
class CorporateInformation {
    constructor({
        writingNumber,
        constitutionDate,
        commercialElectronicFolio,
        operationsStartDate,
        lastAssemblyDate,
        nameOflegalRepresentative,
        curp,
        rfc,
        nacionality,
        countryBirth,
        countryResidence,
        apostilleData,
    } = {}) {
        this.writingNumber = writingNumber ?? undefined;
        this.constitutionDate = constitutionDate ?? undefined;
        this.commercialElectronicFolio = commercialElectronicFolio ?? undefined;
        this.operationsStartDate = operationsStartDate ?? undefined;
        this.lastAssemblyDate = lastAssemblyDate ?? undefined;
        this.nameOflegalRepresentative = nameOflegalRepresentative ?? undefined;
        this.curp = curp ?? undefined;
        this.rfc = rfc ?? undefined;
        this.nacionality = nacionality ?? undefined;
        this.countryBirth = countryBirth ?? undefined;
        this.countryResidence = countryResidence ?? undefined;
        this.apostilleData = apostilleData ?? undefined;
    }
}
class PartnerOrShareholder {
    constructor({
        completeName,
        rfc,
        birthDay,
        percentageParticipation,
    } = {}) {
        this.completeName = completeName ?? undefined;
        this.rfc = rfc ?? undefined;
        this.birthDay = birthDay ?? undefined;
        this.percentageParticipation = percentageParticipation ?? undefined;
    }
}
class PossibleRealOwner {
    constructor({
        denominationOrSocialReason,
        possibleRealOwners = [],
    } = {}) {
        this.denominationOrSocialReason = denominationOrSocialReason ?? undefined;
        this.possibleRealOwners = possibleRealOwners.map(owner => new PartnerOrShareholder(owner)) ?? undefined;
    }
}
class AdministrationOrgan {
    constructor({ formOfAdministration } = {}) {
        this.formOfAdministration = formOfAdministration ?? undefined;
    }
}
class PresidentOfBoardOfDirectors {
    constructor({
        completeName,
        position,
        rfc,
        nacionality,
        countryResidence,
    } = {}) {
        this.completeName = completeName ?? undefined;
        this.position = position ?? undefined;
        this.rfc = rfc ?? undefined;
        this.nacionality = nacionality ?? undefined;
        this.countryResidence = countryResidence ?? undefined;
    }
}
class MemberOfBoardOfDirectors {
    constructor({
        completeName,
        position,
        rfc,
        nacionality,
        countryResidence,
    } = {}) {
        this.completeName = completeName ?? undefined;
        this.position = position ?? undefined;
        this.rfc = rfc ?? undefined;
        this.nacionality = nacionality ?? undefined;
        this.countryResidence = countryResidence ?? undefined;
    }
}
class GeneralDirector {
    constructor({ completeName, position } = {}) {
        this.completeName = completeName ?? undefined;
        this.position = position ?? undefined;
    }
}
class ImmediateLowerHierarchy {
    constructor({ completeName, position } = {}) {
        this.completeName = completeName ?? undefined;
        this.position = position ?? undefined;
    }
}
class RealOwner {
    constructor({
        typeOfControlHeld,
        name,
        paternal,
        maternal,
        rfc,
        ocupation,
    } = {}) {
        this.typeOfControlHeld = typeOfControlHeld ?? undefined;
        this.name = name ?? undefined;
        this.paternal = paternal ?? undefined;
        this.maternal = maternal ?? undefined;
        this.rfc = rfc ?? undefined;
        this.ocupation = ocupation ?? undefined;
    }
}
class PoliticallyExposedPeople {
    constructor({
        partnerOrShareholderPerformPublicOrGovernmentOrPoliticalFunctions,
        position,
        period,
        legalRepresentativePerformPublicOrGovernmentOrPoliticalFunctions,
        legalRepresentativePosition,
        legalRepresentativePeriod,
        anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions,
        familyCompleteName,
        familyRelationship,
        familyPosition,
        familyPeriod,
    } = {}) {
        this.partnerOrShareholderPerformPublicOrGovernmentOrPoliticalFunctions = partnerOrShareholderPerformPublicOrGovernmentOrPoliticalFunctions ?? undefined;
        this.position = position ?? undefined;
        this.period = period ?? undefined;
        this.legalRepresentativePerformPublicOrGovernmentOrPoliticalFunctions = legalRepresentativePerformPublicOrGovernmentOrPoliticalFunctions ?? undefined;
        this.legalRepresentativePosition = legalRepresentativePosition ?? undefined;
        this.legalRepresentativePeriod = legalRepresentativePeriod ?? undefined;
        this.anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions = anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions ?? undefined;
        this.familyCompleteName = familyCompleteName ?? undefined;
        this.familyRelationship = familyRelationship ?? undefined;
        this.familyPosition = familyPosition ?? undefined;
        this.familyPeriod = familyPeriod ?? undefined;
    }
}
class AccountUse {
    constructor({
        servicesHire = [],
        sourceOfResources = [],
        accountGoal = [],
    } = {}) {
        this.servicesHire = servicesHire ?? undefined;
        this.sourceOfResources = sourceOfResources ?? undefined;
        this.accountGoal = accountGoal ?? undefined;
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
        this.monthlyIncome = monthlyIncome ?? undefined;
        this.monthlyExpenditures = monthlyExpenditures ?? undefined;
        this.makeTransfers = makeTransfers ?? undefined;
        this.howManyTransfersInAMonth = howManyTransfersInAMonth ?? undefined;
        this.averageMonthlyAmountOfTransactionsInTheAccount = averageMonthlyAmountOfTransactionsInTheAccount ?? undefined;
        this.youWillReceiveTransfersFromThirdParties = youWillReceiveTransfersFromThirdParties ?? undefined;
        this.averageTansferYouWillReceiveFromThird = averageTansferYouWillReceiveFromThird ?? undefined;
        this.makeCashTransactions = makeCashTransactions ?? undefined;
        this.howManyTradesMakeInAMonth = howManyTradesMakeInAMonth ?? undefined;
        this.averageMonthlyContributionAmount = averageMonthlyContributionAmount ?? undefined;
        this.youWillReceiveCashDepositsFromThirdParties = youWillReceiveCashDepositsFromThirdParties ?? undefined;
        this.averageMonthlyDepositAmountinCash = averageMonthlyDepositAmountinCash ?? undefined;
        this.averageWithdrawalsResourcesMakeMonth = averageWithdrawalsResourcesMakeMonth ?? undefined;
        this.destinationOrUseOfTheCreditRequested = destinationOrUseOfTheCreditRequested ?? undefined;
        this.makeAdvancePayments = makeAdvancePayments ?? undefined;
        this.doYouExpectToMakeTheCreditPaymentToThroughThirdParties = doYouExpectToMakeTheCreditPaymentToThroughThirdParties ?? undefined;
        this.nameOflegalRepresentative = nameOflegalRepresentative ?? undefined;
        this.date = date ?? undefined;
    }
}
class PromotorData {
    constructor({
        date,
        promoterNotes,
        fullNamePromoter,
    } = {}) {
        this.date = date ?? undefined;
        this.promoterNotes = promoterNotes ?? undefined;
        this.fullNamePromoter = fullNamePromoter ?? undefined;
    }
}

module.exports = {
CustomerData, Address, Operations, CorporateInformation, PartnerOrShareholder, PossibleRealOwner, AdministrationOrgan, PresidentOfBoardOfDirectors, MemberOfBoardOfDirectors, GeneralDirector, ImmediateLowerHierarchy, RealOwner, PoliticallyExposedPeople, AccountUse, Transactionability, PromotorData
}