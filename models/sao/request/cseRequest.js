/**
 * @class Model
 * @description Clase que representa los datos de un cliente incluyendo información personal, dirección, identificación, y contacto.
 * @author Maquirsarao
 */
class Model {
    /**
     * @param {string} [name=undefined] - Nombre del cliente.
     * @param {string} [paternal=undefined] - Apellido paterno del cliente.
     * @param {string} [maternal=undefined] - Apellido materno del cliente.
     * @param {string} [gender=undefined] - Género del cliente.
     * @param {string} [birthDay=undefined] - Fecha de nacimiento del cliente.
     * @param {string} [countryBirth=undefined] - País de nacimiento del cliente.
     * @param {string} [entityBirth=undefined] - Entidad de nacimiento del cliente.
     * @param {string} [nacionality=undefined] - Nacionalidad del cliente.
     * @param {string} [civilStatus=undefined] - Estado civil del cliente.
     * @param {string} [street=undefined] - Calle de residencia del cliente.
     * @param {string} [externalNumber=undefined] - Número externo de la residencia del cliente.
     * @param {string} [internalNumber=undefined] - Número interno de la residencia del cliente.
     * @param {string} [colony=undefined] - Colonia de residencia del cliente.
     * @param {string} [postalCode=undefined] - Código postal de la residencia del cliente.
     * @param {string} [municipality=undefined] - Municipio de residencia del cliente.
     * @param {string} [state=undefined] - Estado de residencia del cliente.
     * @param {string} [country=undefined] - País de residencia del cliente.
     * @param {Array} [operations=undefined] - Lista de operaciones relacionadas con el cliente.
     * @param {string} [clabe=undefined] - CLABE interbancaria del cliente.
     * @param {string} [monthlyCommission=undefined] - Comisión mensual del cliente.
     * @param {string} [curp=undefined] - CURP del cliente.
     * @param {string} [rfc=undefined] - RFC del cliente.
     * @param {string} [AdvancedElectronicSignature=undefined] - Firma electrónica avanzada del cliente.
     * @param {string} [phone=undefined] - Teléfono de contacto del cliente.
     * @param {string} [email=undefined] - Correo electrónico del cliente.
     * @param {boolean} [idIdentificationINE=undefined] - Indicador de si el cliente tiene identificación INE.
     * @param {string} [numberIdentification=undefined] - Número de identificación del cliente.
     * @param {string} [otherIdentification=undefined] - Otra identificación del cliente.
     * @param {string} [completeNameCustomer=undefined] - Nombre completo del cliente.
     * @param {string} [day=undefined] - Día relacionado con una fecha de interés.
     * @param {string} [month=undefined] - Mes relacionado con una fecha de interés.
     * @param {string} [year=undefined] - Año relacionado con una fecha de interés.
     */
    constructor(
        name = undefined,
        paternal = undefined,
        maternal = undefined,
        gender = undefined,
        birthDay = undefined,
        countryBirth = undefined,
        entityBirth = undefined,
        nacionality = undefined,
        civilStatus = undefined,
        street = undefined,
        externalNumber = undefined,
        internalNumber = undefined,
        colony = undefined,
        postalCode = undefined,
        municipality = undefined,
        state = undefined,
        country = undefined,
        operations = undefined,
        clabe = undefined,
        monthlyCommission = undefined,
        curp = undefined,
        rfc = undefined,
        AdvancedElectronicSignature = undefined,
        phone = undefined,
        email = undefined,
        idIdentificationINE = undefined,
        numberIdentification = undefined,
        otherIdentification = undefined,
        completeNameCustomer = undefined,
        day = undefined,
        month = undefined,
        year = undefined,
    ) {
        this.name = name;
        this.paternal = paternal;
        this.maternal = maternal;
        this.gender = gender;
        this.birthDay = birthDay;
        this.countryBirth = countryBirth;
        this.entityBirth = entityBirth;
        this.nacionality = nacionality;
        this.civilStatus = civilStatus;
        this.street = street;
        this.externalNumber = externalNumber;
        this.internalNumber = internalNumber;
        this.colony = colony;
        this.postalCode = postalCode;
        this.municipality = municipality;
        this.state = state;
        this.country = country;
        this.operations = operations;
        this.clabe = clabe;
        this.monthlyCommission = monthlyCommission;
        this.curp = curp;
        this.rfc = rfc;
        this.AdvancedElectronicSignature = AdvancedElectronicSignature;
        this.phone = phone;
        this.email = email;
        this.idIdentificationINE = idIdentificationINE;
        this.numberIdentification = numberIdentification;
        this.otherIdentification = otherIdentification;
        this.completeNameCustomer = completeNameCustomer;
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
module.exports = {Model};