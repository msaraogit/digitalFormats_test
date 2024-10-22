const {
  getScmorales,
  getScpfae,
  getPldpfae,
  getPldpmorales,
  geteEntidadesfinancieras,
  getPrivacynoticepm,
  getPrivacynoticea1,
  geteAutbca1,
  geteAutbcpm,
  getPlda1,
  getSctdc,
  getSanexo,
  getElectronicServices,
  getCse,
  getTrainingContractN3,
  getContractAccount,
} = require("./app/br/digitalFormatBR");

const readline = require('readline');

// Crear una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const opciones = [
  'getScmorales',
  'getScpfae',
  'getPldpfae',
  'getPldpmorales',
  'geteEntidadesfinancieras',
  'getPlda1',
  'getSctdc',
  'getSanexo',
  'getElectronicServices',
  'getCse',
  'getTrainingContractN3',
  'getContractAccount',
  'getPrivacynoticepm', // Comentados en tu código original
  'getPrivacynoticea1',
  'geteAutbca1',
  'geteAutbcpm'
];

// Mostrar el menú con las opciones numeradas
console.log('Seleccione el archivo a ejecutar:');
opciones.forEach((opcion, index) => {
  console.log(`${index + 1}. ${opcion}`);
});

// Función para ejecutar la opción seleccionada
const ejecutarOpcion = async (opcion) => {
  try {
    switch (opcion) {
      case 1: await getScmorales(); break;
      case 2: await getScpfae(); break;
      case 3: await getPldpfae(); break;
      case 4: await getPldpmorales(); break;
      case 5: await geteEntidadesfinancieras(); break;
      case 6: await getPlda1(); break;
      case 7: await getSctdc(); break;
      case 8: await getSanexo(); break;
      case 9: await getElectronicServices(); break;
      case 10: await getCse(); break;
      case 11: await getTrainingContractN3(); break;
      case 12: await getContractAccount(); break;
      case 13: await getPrivacynoticepm(); break;
      case 14: await getPrivacynoticea1(); break;
      case 15: await geteAutbca1(); break;
      case 16: await geteAutbcpm(); break;
      default: console.log("Opción no válida."); return;
    }
    console.log("Operación completada con éxito.");
  } catch (error) {
    console.log("Error al ejecutar la función:", error);
  }
};

// Solicitar al usuario que ingrese su selección
rl.question('Ingrese el número de la opción que desea ejecutar: ', (respuesta) => {
  const seleccion = parseInt(respuesta);
  
  if (seleccion >= 1 && seleccion <= opciones.length) {
    ejecutarOpcion(seleccion);
  } else {
    console.log('Opción no válida.');
  }
  
  rl.close();
});