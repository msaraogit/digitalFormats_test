/**
 * @class Model
 * @description Clase que representa una estructura básica con nombre completo y una fecha específica.
 * @author Maquirsarao
 */
class Model {
    /**
     * @param {string} [completeName=undefined] - Nombre completo del individuo.
     * @param {string} [day=undefined] - Día relacionado con una fecha de interés.
     * @param {string} [month=undefined] - Mes relacionado con una fecha de interés.
     * @param {string} [year=undefined] - Año relacionado con una fecha de interés.
     */
    constructor(completeName = undefined, day = undefined, month = undefined, year = undefined) {
        this.completeName = completeName;
        this.day = day;
        this.month = month;
        this.year = year;
    }
}

module.exports = { Model };
