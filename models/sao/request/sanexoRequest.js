class AccountData {
    constructor({
        typeOperation = undefined,
        interestPayment = undefined,
        automaticRenewal = undefined,
        originBankingInstitution = undefined,
        originAccount = undefined,
        originClabe = undefined,
        BankingInstitutionFinsus = undefined,
        AccountFinsus = undefined,
        ClabeFinsus = undefined,
    } = {}) {
        this.typeOperation = typeOperation;
        this.interestPayment = interestPayment;
        this.automaticRenewal = automaticRenewal;
        this.originBankingInstitution = originBankingInstitution;
        this.originAccount = originAccount;
        this.originClabe = originClabe;
        this.BankingInstitutionFinsus = BankingInstitutionFinsus;
        this.AccountFinsus = AccountFinsus;
        this.ClabeFinsus = ClabeFinsus;
    }
}

class CustomerData {
    constructor({
        completeName = undefined,
        nacionality = undefined,
        rfc = undefined,
        street = undefined,
        externalNumber = undefined,
        internalNumber = undefined,
        colony = undefined,
        postalCode = undefined,
        city = undefined,
        municipality = undefined,
        state = undefined,
        country = undefined,
        electronicSignature = undefined,
        business = undefined,
    } = {}) {
        this.completeName = completeName;
        this.nacionality = nacionality;
        this.rfc = rfc;
        this.street = street;
        this.externalNumber = externalNumber;
        this.internalNumber = internalNumber;
        this.colony = colony;
        this.postalCode = postalCode;
        this.city = city;
        this.municipality = municipality;
        this.state = state;
        this.country = country;
        this.electronicSignature = electronicSignature;
        this.business = business;
    }
}

class ConstitutiveWritingData {
    constructor({
        instrumentNumber = undefined,
        constitutionDate = undefined,
        completeNamePublicFederator = undefined,
        numberPublicFederator = undefined,
        locationPublicFederator = undefined,
        comercialFolio = undefined,
        placeRegister = undefined,
        dateRegister = undefined,
    } = {}) {
        this.instrumentNumber = instrumentNumber;
        this.constitutionDate = constitutionDate;
        this.completeNamePublicFederator = completeNamePublicFederator;
        this.numberPublicFederator = numberPublicFederator;
        this.locationPublicFederator = locationPublicFederator;
        this.comercialFolio = comercialFolio;
        this.placeRegister = placeRegister;
        this.dateRegister = dateRegister;
    }
}

class LegalRepresentativeData {
    constructor({
        completeName = undefined,
        gender = undefined,
        ocupation = undefined,
        birthDay = undefined,
        countryBirth = undefined,
        nacionality = undefined,
        street = undefined,
        externalNumber = undefined,
        internalNumber = undefined,
        colony = undefined,
        postalCode = undefined,
        city = undefined,
        municipality = undefined,
        state = undefined,
        country = undefined,
        curp = undefined,
        AdvancedElectronicSignature = undefined,
    } = {}) {
        this.completeName = completeName;
        this.gender = gender;
        this.ocupation = ocupation;
        this.birthDay = birthDay;
        this.countryBirth = countryBirth;
        this.nacionality = nacionality;
        this.street = street;
        this.externalNumber = externalNumber;
        this.internalNumber = internalNumber;
        this.colony = colony;
        this.postalCode = postalCode;
        this.city = city;
        this.municipality = municipality;
        this.state = state;
        this.country = country;
        this.curp = curp;
        this.AdvancedElectronicSignature = AdvancedElectronicSignature;
    }
}

class DataThePowersLegalRepresentative {
    constructor({
        instrumentNumber = undefined,
        instrumentDate = undefined,
        completeNamePublicFederator = undefined,
        numberPublicFederator = undefined,
        DemarcationPublicFederator = undefined,
    } = {}) {
        this.instrumentNumber = instrumentNumber;
        this.instrumentDate = instrumentDate;
        this.completeNamePublicFederator = completeNamePublicFederator;
        this.numberPublicFederator = numberPublicFederator;
        this.DemarcationPublicFederator = DemarcationPublicFederator;
    }
}

class CustomerMedia {
    constructor({
        homePhone = undefined,
        officePhone = undefined,
        movilPhone = undefined,
        email = undefined,
    } = {}) {
        this.homePhone = homePhone;
        this.officePhone = officePhone;
        this.movilPhone = movilPhone;
        this.email = email;
    }
}

class FinsusMedia {
    constructor({
        phone = undefined,
        email = undefined,
    } = {}) {
        this.phone = phone;
        this.email = email;
    }
}

class Media {
    constructor({
        customerMedia = undefined,
        finsusMedia = undefined,
    } = {}) {
        this.customerMedia = customerMedia ? new CustomerMedia(customerMedia) : undefined;
        this.finsusMedia = finsusMedia ? new FinsusMedia(finsusMedia) : undefined;
    }
}

class Signature {
    constructor({
        completeNameCustomer = undefined,
        completeNameFinsus = undefined,
        day = undefined,
        month = undefined,
        year = undefined,
    } = {}) {
        this.completeNameCustomer = completeNameCustomer;
        this.completeNameFinsus = completeNameFinsus;
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

class Model {
    constructor({
        accountData = undefined,
        customerData = undefined,
        constitutiveWritingData = undefined,
        legalRepresentativeData = undefined,
        dataThePowersLegalRepresentative = undefined,
        media = undefined,
        signature = undefined,
    } = {}) {
        this.accountData = accountData ? new AccountData(accountData) : undefined;
        this.customerData = customerData ? new CustomerData(customerData) : undefined;
        this.constitutiveWritingData = constitutiveWritingData ? new ConstitutiveWritingData(constitutiveWritingData) : undefined;
        this.legalRepresentativeData = legalRepresentativeData ? new LegalRepresentativeData(legalRepresentativeData) : undefined;
        this.dataThePowersLegalRepresentative = dataThePowersLegalRepresentative ? new DataThePowersLegalRepresentative(dataThePowersLegalRepresentative) : undefined;
        this.media = media ? new Media(media) : undefined;
        this.signature = signature ? new Signature(signature) : undefined;
    }
}
module.exports = {
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
  };