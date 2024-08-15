const {
  getScmorales,
  getScpfae,
  getPldpfae,
  getPldpmorales,
  getPrivacynoticepm,
  getPrivacynoticea1,
  geteAutbca1,
  geteAutbcpm,
  } = require("./app/br/digitalFormatBR");
  /*
const {
  getScmorales,
  getScpfae,
  getPldpfae,
  getPldpmorales,
  getPrivacynoticepm,
  getPrivacynoticea1,
  geteAutbca1,
  geteAutbcpm,
} = require("./app/br/htmlpdfBR");
*/

try {
  /*
  ESTO SE GUARDA EN LA CARPETA tmpFiles
  */
  const prueba = async () => {
    await getScmorales();
    await getScpfae();
    await getPldpfae();
    await getPldpmorales();
    await getPrivacynoticepm();
    await getPrivacynoticea1();
    await geteAutbca1();
    await geteAutbcpm();
  };
  prueba();
} catch (error) {
  console.log(error);
}