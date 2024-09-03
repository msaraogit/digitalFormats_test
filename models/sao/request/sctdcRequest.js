class Model {
  /**
   * @param {string} [place] - Lugar donde se encuentra el cliente.
   * @param {string} [date] - Fecha del evento relacionado con el cliente.
   * @param {string} [type] - Tipo de crédito.
   * @param {number} [amount] - Monto del crédito.
   * @param {string} [name] - Nombre del cliente.
   * @param {string} [paternal] - Apellido paterno del cliente.
   * @param {string} [maternal] - Apellido materno del cliente.
   * @param {number} [age] - Edad del cliente.
   * @param {string} [birthDay] - Fecha de nacimiento del cliente.
   * @param {string} [countryBirth] - País de nacimiento del cliente.
   * @param {string} [nacionality] - Nacionalidad del cliente.
   * @param {string} [rfc] - RFC del cliente.
   * @param {string} [civilStatus] - Estado civil del cliente.
   * @param {string} [spousalRegime] - Régimen conyugal del cliente.
   * @param {string} [curp] - CURP del cliente.
   * @param {string} [refenceFolio] - Folio de referencia.
   * @param {string} [email] - Correo electrónico del cliente.
   * @param {string} [gender] - Género del cliente.
   * @param {string} [fiscalAddress] - Domicilio fiscal del cliente.
   * @param {string} [colony] - Colonia del cliente.
   * @param {string} [postalCode] - Código postal del cliente.
   * @param {string} [city] - Ciudad del cliente.
   * @param {string} [municipality] - Municipio del cliente.
   * @param {string} [state] - Estado del cliente.
   * @param {string} [country] - País del cliente.
   * @param {string} [landline] - Teléfono fijo del cliente.
   * @param {string} [mobilePhone] - Teléfono móvil del cliente.
   * @param {string} [phoneCompany] - Compañía telefónica del cliente.
   * @param {number} [monthlyIncome] - Ingreso mensual del cliente.
   * @param {string} [sourceOtherIncome] - Fuente de otros ingresos.
   * @param {string} [custumerFullName] - Nombre completo del cliente.
   */
  constructor({
    place = undefined,
    date = undefined,
    type = undefined,
    amount = undefined,
    name = undefined,
    paternal = undefined,
    maternal = undefined,
    age = undefined,
    birthDay = undefined,
    countryBirth = undefined,
    nacionality = undefined,
    rfc = undefined,
    civilStatus = undefined,
    spousalRegime = undefined,
    curp = undefined,
    refenceFolio = undefined,
    email = undefined,
    gender = undefined,
    fiscalAddress = undefined,
    colony = undefined,
    postalCode = undefined,
    city = undefined,
    municipality = undefined,
    state = undefined,
    country = undefined,
    landline = undefined,
    mobilePhone = undefined,
    phoneCompany = undefined,
    monthlyIncome = undefined,
    sourceOtherIncome = undefined,
    custumerFullName = undefined,
  } = {}) {
    this.place = place;
    this.date = date;
    this.type = type;
    this.amount = amount;
    this.name = name;
    this.paternal = paternal;
    this.maternal = maternal;
    this.age = age;
    this.birthDay = birthDay;
    this.countryBirth = countryBirth;
    this.nacionality = nacionality;
    this.rfc = rfc;
    this.civilStatus = civilStatus;
    this.spousalRegime = spousalRegime;
    this.curp = curp;
    this.refenceFolio = refenceFolio;
    this.email = email;
    this.gender = gender;
    this.fiscalAddress = fiscalAddress;
    this.colony = colony;
    this.postalCode = postalCode;
    this.city = city;
    this.municipality = municipality;
    this.state = state;
    this.country = country;
    this.landline = landline;
    this.mobilePhone = mobilePhone;
    this.phoneCompany = phoneCompany;
    this.monthlyIncome = monthlyIncome;
    this.sourceOtherIncome = sourceOtherIncome;
    this.custumerFullName = custumerFullName;
  }
}
module.exports = {
  Model,
};
