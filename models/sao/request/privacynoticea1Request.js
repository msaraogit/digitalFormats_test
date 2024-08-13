class Model {
    constructor(
        completeName,
        date,
        nameOflegalRepresentative,
        acceptPrivacyNotice
    ){
        this.completeName = completeName ?? undefined;
        this.date = date ?? undefined;
        this.nameOflegalRepresentative = nameOflegalRepresentative ?? undefined;
        this.acceptPrivacyNotice = acceptPrivacyNotice ?? undefined;
    }
}
module.exports = {
    Model
};