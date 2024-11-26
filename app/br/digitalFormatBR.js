const {
  generateScmorales,
} = require("../../services/request/generateScmorales");
const { generateScpfae } = require("../../services/request/generateScpfae");
const {
  generatePldmorales,
} = require("../../services/request/generatePldmorales");
const { generatePldpfae } = require("../../services/request/generatePldpfae");
const {
  generatePrivacyNoticepm,
} = require("../../services/request/generatePrivacynoticepm");
const {
  generatePrivacyNoticea1,
} = require("../../services/request/generatePrivacyNoticea1.js");
const { generateAutbca1 } = require("../../services/request/generateAutbca1");
const { generateAutbcpm } = require("../../services/request/generateAutbcpm");
const {
  generateEntidadesfinancieras,
} = require("../../services/request/generateEntidadesfinancieras.js");
const { generatePlda1 } = require("../../services/request/generatePlda1.js");
const { generateSctdc } = require("../../services/request/generateSctdc.js");
const { generateSanexo } = require("../../services/request/generateSanexo.js");
const {
  generateElectronicServices,
} = require("../../services/request/generateElectronicServices.js");
const { generateCse } = require("../../services/request/generateCse.js");
const {
  generateTrainingContractN3,
} = require("../../services/request/generateTrainingContractN3.js");
 const { generateContractAccount } = require("../../services/request/generateContractAccount.js");
 const { generateContractPulpi } = require("../../services/request/generateContractPulpi.js");

const fs = require("fs");
const puppeteer = require("puppeteer");
const path = require("path");
const uploadDir = "../../tmpFiles/";

const getScmorales = async () => {
  const mappedResponse = await generateScmorales();
  const name = "Scmorales";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Scmorales generado exitosamente");
};
const getScpfae = async () => {
  const mappedResponse = await generateScpfae();
  const name = "Scpfae";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--disable-features=IsolateOrigins",
      "--disable-site-isolation-trials",
      "--autoplay-policy=user-gesture-required",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-breakpad",
      "--disable-client-side-phishing-detection",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-dev-shm-usage",
      "--disable-domain-reliability",
      "--disable-extensions",
      "--disable-features=AudioServiceOutOfProcess",
      "--disable-hang-monitor",
      "--disable-ipc-flooding-protection",
      "--disable-notifications",
      "--disable-offer-store-unmasked-wallet-cards",
      "--disable-popup-blocking",
      "--disable-print-preview",
      "--disable-prompt-on-repost",
      "--disable-renderer-backgrounding",
      "--disable-setuid-sandbox",
      "--disable-speech-api",
      "--disable-sync",
      "--hide-scrollbars",
      "--ignore-gpu-blacklist",
      "--metrics-recording-only",
      "--mute-audio",
      "--no-default-browser-check",
      "--no-first-run",
      "--no-pings",
      "--no-sandbox",
      "--no-zygote",
      "--password-store=basic",
      "--use-gl=swiftshader",
      "--use-mock-keychain",
      "--font-render-hinting=none",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Scpfae generado exitosamente");
};
const getPldpfae = async () => {
  const mappedResponse = await generatePldpfae();
  const name = "Pldpfae";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
  });
  const page = await browser.newPage();
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.65,
  });

  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Pldpfae generado exitosamente");
};
const getPldpmorales = async () => {
  const mappedResponse = await generatePldmorales();
  const name = "Pldpmorales";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--disable-features=IsolateOrigins",
      "--disable-site-isolation-trials",
      "--autoplay-policy=user-gesture-required",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-breakpad",
      "--disable-client-side-phishing-detection",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-dev-shm-usage",
      "--disable-domain-reliability",
      "--disable-extensions",
      "--disable-features=AudioServiceOutOfProcess",
      "--disable-hang-monitor",
      "--disable-ipc-flooding-protection",
      "--disable-notifications",
      "--disable-offer-store-unmasked-wallet-cards",
      "--disable-popup-blocking",
      "--disable-print-preview",
      "--disable-prompt-on-repost",
      "--disable-renderer-backgrounding",
      "--disable-setuid-sandbox",
      "--disable-speech-api",
      "--disable-sync",
      "--hide-scrollbars",
      "--ignore-gpu-blacklist",
      "--metrics-recording-only",
      "--mute-audio",
      "--no-default-browser-check",
      "--no-first-run",
      "--no-pings",
      "--no-sandbox",
      "--no-zygote",
      "--password-store=basic",
      "--use-gl=swiftshader",
      "--use-mock-keychain",
      "--font-render-hinting=none",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Pldpmorales generado exitosamente");
};
const getPrivacynoticepm = async () => {
  const mappedResponse = await generatePrivacyNoticepm();
  const name = "Privacynoticepm";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Privacynoticepm generado exitosamente");
};
const getPrivacynoticea1 = async () => {
  const mappedResponse = await generatePrivacyNoticea1();
  const name = "Privacynoticea1";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Privacynoticea1 generado exitosamente");
};
const geteAutbca1 = async () => {
  const mappedResponse = await generateAutbca1();
  const name = "Autbca1";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--disable-features=IsolateOrigins",
      "--disable-site-isolation-trials",
      "--autoplay-policy=user-gesture-required",
      "--disable-background-networking",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-breakpad",
      "--disable-client-side-phishing-detection",
      "--disable-component-update",
      "--disable-default-apps",
      "--disable-dev-shm-usage",
      "--disable-domain-reliability",
      "--disable-extensions",
      "--disable-features=AudioServiceOutOfProcess",
      "--disable-hang-monitor",
      "--disable-ipc-flooding-protection",
      "--disable-notifications",
      "--disable-offer-store-unmasked-wallet-cards",
      "--disable-popup-blocking",
      "--disable-print-preview",
      "--disable-prompt-on-repost",
      "--disable-renderer-backgrounding",
      "--disable-setuid-sandbox",
      "--disable-speech-api",
      "--disable-sync",
      "--hide-scrollbars",
      "--ignore-gpu-blacklist",
      "--metrics-recording-only",
      "--mute-audio",
      "--no-default-browser-check",
      "--no-first-run",
      "--no-pings",
      "--no-sandbox",
      "--no-zygote",
      "--password-store=basic",
      "--use-gl=swiftshader",
      "--use-mock-keychain",
      "--font-render-hinting=none",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Autbca1 generado exitosamente");
};
const geteAutbcpm = async () => {
  const mappedResponse = await generateAutbcpm();
  const name = "Autbcpm";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Autbcpm generado exitosamente");
};
const geteEntidadesfinancieras = async () => {
  const mappedResponse = await generateEntidadesfinancieras();
  const name = "Entidadesfinancieras";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Entidadesfinancieras generado exitosamente");
};
const getPlda1 = async () => {
  const mappedResponse = await generatePlda1();
  const name = "Plda1";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log(`PDF ${name} generado exitosamente`);
};
const getSctdc = async () => {
  const mappedResponse = await generateSctdc();
  const name = "Sctdc";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.6,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log(`PDF ${name} generado exitosamente`);
};
const getSanexo = async () => {
  const mappedResponse = await generateSanexo();
  const name = "Sanexo";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.7,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log(`PDF ${name} generado exitosamente`);
};
const getElectronicServices = async () => {
  const mappedResponse = await generateElectronicServices();
  const name = "ElectronicServices";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.8,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log(`PDF ${name} generado exitosamente`);
};
const getCse = async () => {
  const mappedResponse = await generateCse();
  const name = "Cse";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.8,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log(`PDF ${name} generado exitosamente`);
};
const getTrainingContractN3 = async () => {
  const mappedResponse = await generateTrainingContractN3();
  const name = "TrainingContractN3";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.8,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log(`PDF ${name} generado exitosamente`);
};
const getContractAccount = async () => {
  const mappedResponse = await generateContractAccount();
  const name = "ContractAccount";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.8,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log(`PDF ${name} generado exitosamente`);
};
const getContractPulpi = async () => {
  const mappedResponse = await generateContractPulpi();
  const name = "ContractPulpi";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--allow-file-access-from-files",
    ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, { waitUntil: "load" });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "1cm", right: "0cm", bottom: "0cm" },
    scale: 0.8,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log(`PDF ${name} generado exitosamente`);
};
module.exports = {
  getScmorales,
  getScpfae,
  getPldpfae,
  getPldpmorales,
  getPrivacynoticepm,
  getPrivacynoticea1,
  geteAutbca1,
  geteAutbcpm,
  geteEntidadesfinancieras,
  getPlda1,
  getSctdc,
  getSanexo,
  getElectronicServices,
  getCse,
  getTrainingContractN3,
  getContractAccount,
  getContractPulpi,
};
