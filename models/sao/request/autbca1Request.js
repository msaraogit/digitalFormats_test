class Model {
    constructor(
        place,
        date,
        authPF,
        authPFAE,
        authPM,
        nameComplete,
        nameOflegalRepresentative,
        rfcOrCurp,
        address,
        colony,
        postalCode,
        city,
        municipality,
        state,
        phone,
        nameOfficial,
        consultationDate,
        consultationFolio
    ){
        this.place = place ?? undefined;
        this.date = date ?? undefined;
        this.authPF = authPF ?? undefined;
        this.authPFAE = authPFAE ?? undefined;
        this.authPM = authPM ?? undefined;
        this.nameComplete = nameComplete ?? undefined;
        this.nameOflegalRepresentative = nameOflegalRepresentative ?? undefined;
        this.rfcOrCurp = rfcOrCurp ?? undefined;
        this.address = address ?? undefined;
        this.colony = colony ?? undefined;
        this.authPM = authPM ?? undefined;
        this.postalCode = postalCode ?? undefined;
        this.city= city ?? undefined;
        this.municipality= municipality ?? undefined;
        this.state= state ?? undefined;
        this.phone= phone ?? undefined;
        this.nameOfficial= nameOfficial ?? undefined;
        this.consultationDate= consultationDate ?? undefined;
        this.consultationFolio= consultationFolio ?? undefined;
    }
}
module.exports = {
    Model
};