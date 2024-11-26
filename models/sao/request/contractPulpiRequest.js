/**
 * Clase principal que almacena los datos de la solicitud de contratos.
 */
class Model {
    /**
     * Constructor principal que recibe instancias de las clases específicas.
     */
    constructor(folio, date, enterpriseData, fiscalAddressData, representativeData) {
      this.folio = folio || undefined;
      this.date = date || undefined;
      this.enterpriseData = enterpriseData || undefined;
      this.fiscalAddressData = fiscalAddressData || undefined;
      this.representativeData = representativeData || undefined;
    }
  }
  
  class EnterpriseData {
    /**
     * Constructor que recibe datos de la empresa solicitante.
     * @author Maquir Sarao
     * @param {string} denominationOrSocialReason - Denominación o razón social
     * @param {string} business - Giro o ramo de la empresa
     * @param {string} rfc - RFC de la empresa
     * @param {string} domain - Dominio de la empresa
     * @param {string} publicInstrument - Instrumento público de la empresa
     * @param {string} dateRegister - Fecha de registro de la empresa
     * @param {string} notaryPublic - Notario público de la empresa
     * @param {string} city - Ciudad de la empresa
     * @param {string} state - Estado de la empresa
     * @param {string} graduate - Graduado de la empresa
     * @param {string} placeRegister - Lugar de registro de la empresa
     * @param {string} electronicCommercialFolio - Folio electrónico mercantil
     */
    constructor(
        denominationOrSocialReason,
        business,
        rfc,
        domain,
        publicInstrument,
        dateRegister,
        notaryPublic,
        city,
        state,
        graduate,
        placeRegister,
        electronicCommercialFolio
    ) {
      this.denominationOrSocialReason = denominationOrSocialReason || undefined;
      this.business = business || undefined;
      this.rfc = rfc || undefined;
      this.domain = domain || undefined;
      this.publicInstrument = publicInstrument || undefined;
      this.dateRegister = dateRegister || undefined;
      this.notaryPublic = notaryPublic || undefined;
      this.city = city || undefined;
      this.state = state || undefined;
      this.graduate = graduate || undefined;
      this.placeRegister = placeRegister || undefined;
      this.electronicCommercialFolio = electronicCommercialFolio || undefined;
    }

  }
  
  class FiscalAddressData {
    /**
     * Constructor que recibe datos de la dirección fiscal.
     * @author Maquir Sarao
     * @param {string} street - Calle de la dirección fiscal
     * @param {string} internalNumber - Número interno de la dirección fiscal
     * @param {string} externalNumber - Número externo de la dirección fiscal
     * @param {string} colony - Colonia de la dirección fiscal
     * @param {string} postalCode - Código postal de la dirección fiscal
     * @param {string} municipality - Municipio de la dirección fiscal
     * @param {string} state - Estado de la dirección fiscal
     */
    constructor(street, internalNumber, externalNumber, colony, postalCode, municipality, state) {
      this.street = street || undefined; // Calle de la dirección
      this.internalNumber = internalNumber || undefined; // Número interno
      this.externalNumber = externalNumber || undefined; // Número externo
      this.colony = colony || undefined; // Colonia
      this.postalCode = postalCode || undefined; // Código postal
      this.municipality = municipality || undefined; // Municipio
      this.state = state || undefined; // Estado
    }
  }
  
  class RepresentativeData {
    /**
     * Constructor que recibe datos del representante.
     * @param {string} completeName - Nombre completo del representante
     * @param {string} publicInstrument - Instrumento público del representante
     * @param {string} dateRegister - Fecha de registro del representante
     * @param {string} notaryPublic - Notario público del representante
     * @param {string} city - Ciudad del representante
     * @param {string} state - Estado del representante
     * @param {string} graduate - Graduado del representante
     */
    constructor(completeName, publicInstrument, dateRegister, notaryPublic, city, state, graduate) {
      this.completeName = completeName || undefined; // Nombre completo
      this.publicInstrument = publicInstrument || undefined; // Instrumento público
      this.dateRegister = dateRegister || undefined; // Fecha de registro
      this.notaryPublic = notaryPublic || undefined; // Notario público
      this.city = city || undefined; // Ciudad
      this.state = state || undefined; // Estado
      this.graduate = graduate || undefined; // Graduado
    }
  }

  module.exports = {
    Model,
    EnterpriseData,
    FiscalAddressData,
    RepresentativeData,
  }