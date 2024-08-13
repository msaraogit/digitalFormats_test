class Manager {
    constructor(completeName, position, rfc, email, antiquity) {
        this.completeName = completeName ?? undefined;
        this.position = position ?? undefined;
        this.rfc = rfc ?? undefined;
        this.email = email ?? undefined;
        this.antiquity = antiquity ?? undefined;
    }
}

class Contact {
    constructor(type, completeName, position, phone, email) {
        this.type = type ?? undefined;
        this.completeName = completeName ?? undefined;
        this.position = position ?? undefined;
        this.phone = phone ?? undefined;
        this.email = email ?? undefined;
    }
}

class ProductService {
    constructor(nameOrDescription, percentageSales, percentageMarket) {
        this.nameOrDescription = nameOrDescription ?? undefined;
        this.percentageSales = percentageSales ?? undefined;
        this.percentageMarket = percentageMarket ?? undefined;
    }
}

class EndorsementData {
    constructor(completeNameOrBusinessName, rfc, curp, occupationOrBusiness, relationshipWithApplicant, email, electronicSignatureSerialNumber, civilStatus, regime, spousesName, fiscalAddress, colony, postalCode, city, municipality, state, country, landline, typeDomicile) {
        this.completeNameOrBusinessName = completeNameOrBusinessName ?? undefined;
        this.rfc = rfc ?? undefined;
        this.curp = curp ?? undefined;
        this.occupationOrBusiness = occupationOrBusiness ?? undefined;
        this.relationshipWithApplicant = relationshipWithApplicant ?? undefined;
        this.email = email ?? undefined;
        this.electronicSignatureSerialNumber = electronicSignatureSerialNumber ?? undefined;
        this.civilStatus = civilStatus ?? undefined;
        this.regime = regime ?? undefined;
        this.spousesName = spousesName ?? undefined;
        this.fiscalAddress = fiscalAddress ?? undefined;
        this.colony = colony ?? undefined;
        this.postalCode = postalCode ?? undefined;
        this.city = city ?? undefined;
        this.municipality = municipality ?? undefined;
        this.state = state ?? undefined;
        this.country = country ?? undefined;
        this.landline = landline ?? undefined;
        this.typeDomicile = typeDomicile ?? undefined;
    }
}

class Model {
    constructor(place, date, type, term, amount, workingCapital, fixedAsset, technologicalInnovation, consolidationLiabilities, others, descriptionOtherUse, businessName, rfc, tradeNameOrBusiness, business, nacionality, electronicSignatureSerialNumber, fiscalAddress, colony, postalCode, landline, city, municipality, state, country, numberEmployees, webSite, notaryNumber, nameOfNotary, entity, writingNumber, registrationInformation, constitutionDate, empoweredRepresentative, writingNumberWithPowers, writingDate, managers, contacts, productsServices, endorsementData, annualSales, nameOflegalRepresentative, nameOfEndorsement) {
        this.place = place ?? undefined;
        this.date = date ?? undefined;
        this.type = type ?? undefined;
        this.term = term ?? undefined;
        this.amount = amount ?? undefined;
        this.workingCapital = workingCapital ?? undefined;
        this.fixedAsset = fixedAsset ?? undefined;
        this.technologicalInnovation = technologicalInnovation ?? undefined;
        this.consolidationLiabilities = consolidationLiabilities ?? undefined;
        this.others = others ?? undefined;
        this.descriptionOtherUse = descriptionOtherUse ?? undefined;
        this.businessName = businessName ?? undefined;
        this.rfc = rfc ?? undefined;
        this.tradeNameOrBusiness = tradeNameOrBusiness ?? undefined;
        this.business = business ?? undefined;
        this.nacionality = nacionality ?? undefined;
        this.electronicSignatureSerialNumber = electronicSignatureSerialNumber ?? undefined;
        this.fiscalAddress = fiscalAddress ?? undefined;
        this.colony = colony ?? undefined;
        this.postalCode = postalCode ?? undefined;
        this.landline = landline ?? undefined;
        this.city = city ?? undefined;
        this.municipality = municipality ?? undefined;
        this.state = state ?? undefined;
        this.country = country ?? undefined;
        this.numberEmployees = numberEmployees ?? undefined;
        this.webSite = webSite ?? undefined;
        this.notaryNumber = notaryNumber ?? undefined;
        this.nameOfNotary = nameOfNotary ?? undefined;
        this.entity = entity ?? undefined;
        this.writingNumber = writingNumber ?? undefined;
        this.registrationInformation = registrationInformation ?? undefined;
        this.constitutionDate = constitutionDate ?? undefined;
        this.empoweredRepresentative = empoweredRepresentative ?? undefined;
        this.writingNumberWithPowers = writingNumberWithPowers ?? undefined;
        this.writingDate = writingDate ?? undefined;
        this.managers = managers ?? undefined;
        this.contacts = contacts ?? undefined;
        this.productsServices = productsServices ?? undefined;
        this.endorsementData = endorsementData ?? undefined;
        this.annualSales = annualSales ?? undefined;
        this.nameOflegalRepresentative = nameOflegalRepresentative ?? undefined;
        this.nameOfEndorsement = nameOfEndorsement ?? undefined;
    }
}

module.exports = {
    Manager,
    Contact,
    ProductService,
    EndorsementData,
    Model
};