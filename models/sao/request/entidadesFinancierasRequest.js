class CustomerModel {
    constructor(data = {}) {
        this.customerData = data.customerData || {};
        this.addresses = data.addresses || [];
        this.operations = data.operations || {};
        this.corporateInformation = data.corporateInformation || {};
        this.partnerOrShareholder = data.partnerOrShareholder || [];
        this.posibleRealOwner = data.posibleRealOwner || {};
        this.administrationOrgan = data.administrationOrgan || {};
        this.presidentOfBoardOfDirectors = data.presidentOfBoardOfDirectors || {};
        this.membersOfBoardOfDirectors = data.membersOfBoardOfDirectors || [];
        this.generalDirector = data.generalDirector || {};
        this.immediateLowerHierarchy = data.immediateLowerHierarchy || [];
        this.realOwner = data.realOwner || {};
        this.politicallyExposedPeople = data.politicallyExposedPeople || {};
        this.preventiveRegimeMoneyLaunderingFinancingTerrorism = data.preventiveRegimeMoneyLaunderingFinancingTerrorism || {};
        this.accountUse = data.accountUse || {};
        this.transactionability = data.transactionability || {};
        this.promotorData = data.promotorData || {};
    }
}

module.exports = {CustomerModel};