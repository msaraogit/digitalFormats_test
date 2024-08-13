class CompanyModel {
    constructor(data = {}) {
        this.customerData = {
            denominationOrSocialReason: data.customerData?.denominationOrSocialReason ?? undefined,
            tradeNameOrBusiness: data.customerData?.tradeNameOrBusiness ?? undefined,
            rfc: data.customerData?.rfc ?? undefined,
            electronicSignatureSerialNumber: data.customerData?.electronicSignatureSerialNumber ?? undefined,
            phone: data.customerData?.phone ?? undefined,
            email: data.customerData?.email ?? undefined,
            nacionality: data.customerData?.nacionality ?? undefined,
            countryOfConstitution: data.customerData?.countryOfConstitution ?? undefined,
            countryTIN: data.customerData?.countryTIN ?? undefined,
            tin: data.customerData?.tin ?? undefined,
            reasonOpeningAccount: data.customerData?.reasonOpeningAccount ?? undefined,
            business: data.customerData?.business ?? undefined,
            productsServices: data.customerData?.productsServices ?? undefined
        };
        
        this.addresses = (data.addresses || []).map(address => ({
            type: address.type ?? undefined,
            street: address.street ?? undefined,
            internalNumber: address.internalNumber ?? undefined,
            externalNumber: address.externalNumber ?? undefined,
            colony: address.colony ?? undefined,
            postalCode: address.postalCode ?? undefined,
            municipality: address.municipality ?? undefined,
            state: address.state ?? undefined,
            country: address.country ?? undefined
        }));

        this.operations = {
            listFederalEntitiesOfferTheProducts: data.operations?.listFederalEntitiesOfferTheProducts ?? undefined,
            offerItsProductsInTheForeign: data.operations?.offerItsProductsInTheForeign ?? undefined,
            listCountriesOfferTheProducts: data.operations?.listCountriesOfferTheProducts ?? undefined,
            numberEmployees: data.operations?.numberEmployees ?? undefined
        };

        this.corporateInformation = {
            writingNumber: data.corporateInformation?.writingNumber ?? undefined,
            constitutionDate: data.corporateInformation?.constitutionDate ?? undefined,
            commercialElectronicFolio: data.corporateInformation?.commercialElectronicFolio ?? undefined,
            operationsStartDate: data.corporateInformation?.operationsStartDate ?? undefined,
            lastAssemblyDate: data.corporateInformation?.lastAssemblyDate ?? undefined,
            nameOflegalRepresentative: data.corporateInformation?.nameOflegalRepresentative ?? undefined,
            curp: data.corporateInformation?.curp ?? undefined,
            rfc: data.corporateInformation?.rfc ?? undefined,
            nacionality: data.corporateInformation?.nacionality ?? undefined,
            countryBirth: data.corporateInformation?.countryBirth ?? undefined,
            countryResidence: data.corporateInformation?.countryResidence ?? undefined,
            apostilleData: data.corporateInformation?.apostilleData ?? undefined
        };

        this.partnerOrShareholder = (data.partnerOrShareholder || []).map(partner => ({
            completeName: partner.completeName ?? undefined,
            rfc: partner.rfc ?? undefined,
            birthDay: partner.birthDay ?? undefined,
            percentageParticipation: partner.percentageParticipation ?? undefined
        }));

        this.posibleRealOwner = {
            denominationOrSocialReason: data.posibleRealOwner?.denominationOrSocialReason ?? undefined,
            posibleRealOwners: (data.posibleRealOwner?.posibleRealOwners || []).map(owner => ({
                completeName: owner.completeName ?? undefined,
                rfc: owner.rfc ?? undefined,
                birthDay: owner.birthDay ?? undefined,
                percentageParticipation: owner.percentageParticipation ?? undefined
            }))
        };

        this.administrationOrgan = {
            formOfAdministration: data.administrationOrgan?.formOfAdministration ?? undefined
        };

        this.presidentOfBoardOfDirectors = {
            completeName: data.presidentOfBoardOfDirectors?.completeName ?? undefined,
            position: data.presidentOfBoardOfDirectors?.position ?? undefined,
            rfc: data.presidentOfBoardOfDirectors?.rfc ?? undefined,
            nacionality: data.presidentOfBoardOfDirectors?.nacionality ?? undefined,
            countryResidence: data.presidentOfBoardOfDirectors?.countryResidence ?? undefined
        };

        this.membersOfBoardOfDirectors = (data.membersOfBoardOfDirectors || []).map(member => ({
            completeName: member.completeName ?? undefined,
            position: member.position ?? undefined,
            rfc: member.rfc ?? undefined,
            nacionality: member.nacionality ?? undefined,
            countryResidence: member.countryResidence ?? undefined
        }));

        this.generalDirector = {
            completeName: data.generalDirector?.completeName ?? undefined,
            position: data.generalDirector?.position ?? undefined
        };

        this.immediateLowerHierarchy = (data.immediateLowerHierarchy || []).map(hierarchy => ({
            completeName: hierarchy.completeName ?? undefined,
            position: hierarchy.position ?? undefined
        }));

        this.realOwner = {
            typeOfControlHeld: data.realOwner?.typeOfControlHeld ?? undefined,
            name: data.realOwner?.name ?? undefined,
            paternal: data.realOwner?.paternal ?? undefined,
            maternal: data.realOwner?.maternal ?? undefined,
            rfc: data.realOwner?.rfc ?? undefined,
            ocupation: data.realOwner?.ocupation ?? undefined
        };

        this.politicallyExposedPeople = {
            partnerOrShareholderPerformPublicOrGovernmentOrPoliticalFunctions: data.politicallyExposedPeople?.partnerOrShareholderPerformPublicOrGovernmentOrPoliticalFunctions ?? undefined,
            position: data.politicallyExposedPeople?.position ?? undefined,
            period: data.politicallyExposedPeople?.period ?? undefined,
            legalRepresentativePerformPublicOrGovernmentOrPoliticalFunctions: data.politicallyExposedPeople?.legalRepresentativePerformPublicOrGovernmentOrPoliticalFunctions ?? undefined,
            legalRepresentativePosition: data.politicallyExposedPeople?.legalRepresentativePosition ?? undefined,
            legalRepresentativePeriod: data.politicallyExposedPeople?.legalRepresentativePeriod ?? undefined,
            anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions: data.politicallyExposedPeople?.anyFamilyPerformPublicOrGovernmentOrPoliticalFunctions ?? undefined,
            familyCompleteName: data.politicallyExposedPeople?.familyCompleteName ?? undefined,
            familyRelationship: data.politicallyExposedPeople?.familyRelationship ?? undefined,
            familyPosition: data.politicallyExposedPeople?.familyPosition ?? undefined,
            familyPeriod: data.politicallyExposedPeople?.familyPeriod ?? undefined
        };

        this.accountUse = {
            servicesHire: data.accountUse?.servicesHire ?? undefined,
            sourceOfResources: data.accountUse?.sourceOfResources ?? undefined,
            accountGoal: data.accountUse?.accountGoal ?? undefined
        };

        this.transactionability = {
            monthlyIncome: data.transactionability?.monthlyIncome ?? undefined,
            monthlyExpenditures: data.transactionability?.monthlyExpenditures ?? undefined,
            makeTransfers: data.transactionability?.makeTransfers ?? undefined,
            howManyTransfersInAMonth: data.transactionability?.howManyTransfersInAMonth ?? undefined,
            averageMonthlyAmountOfTransactionsInTheAccount: data.transactionability?.averageMonthlyAmountOfTransactionsInTheAccount ?? undefined,
            youWillReceiveTransfersFromThirdParties: data.transactionability?.youWillReceiveTransfersFromThirdParties ?? undefined,
            averageWithdrawalsResourcesMakeMonth: data.transactionability?.averageWithdrawalsResourcesMakeMonth ?? undefined,
            destinationOrUseOfTheCreditRequested: data.transactionability?.destinationOrUseOfTheCreditRequested ?? undefined,
            makeAdvancePayments: data.transactionability?.makeAdvancePayments ?? undefined,
            doYouExpectToMakeTheCreditPaymentToThroughThirdParties: data.transactionability?.doYouExpectToMakeTheCreditPaymentToThroughThirdParties ?? undefined,
            nameOflegalRepresentative: data.transactionability?.nameOflegalRepresentative ?? undefined,
            date: data.transactionability?.date ?? undefined
        };

        this.promotorData = {
            date: data.promotorData?.date ?? undefined,
            promoterNotes: data.promotorData?.promoterNotes ?? undefined,
            fullNamePromoter: data.promotorData?.fullNamePromoter ?? undefined
        };
    }
}

module.exports = {
    CompanyModel
};