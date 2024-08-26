const {generateScmorales,} = require("../../services/request/generateScmorales");
const {generateEntidadesfinancieras,} = require("../../services/request/generateEntidadesfinancieras");
const { generateScpfae } = require("../../services/request/generateScpfae");
const { generatePldmorales } = require("../../services/request/generatePldmorales");
const { generatePldpfae } = require("../../services/request/generatePldpfae");
const { generatePrivacyNoticepm } = require("../../services/request/generatePrivacynoticepm");
const { generatePrivacyNoticea1 } = require("../../services/request/generatePrivacyNoticea1.js");
const { generateAutbca1 } = require("../../services/request/generateAutbca1");
const { generateAutbcpm } = require("../../services/request/generateAutbcpm");

const fs = require("fs");
const pdf = require('html-pdf');
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
  await page.setContent(mappedResponse.html, {  waitUntil: 'networkidle0' });
  const pdfPagare = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0cm", top: "0cm", right: "0cm", bottom: "0cm" },
    displayHeaderFooter: true
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Scmorales generado exitosamente");
};
const getScpfae = async () => {
  const mappedResponse = await generateScpfae();
  const name = "Scpfae";
  const outputDir = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  const options = {
    format: 'A4',
    orientation: 'portrait',
    border: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm'
    }
  };
  pdf.create(mappedResponse.html, options).toFile(outputDir, (err, res) => {
    if (err) {
      return console.error('Error al generar el PDF:', err);
    }
    console.log('PDF Scpfae generado exitosamente en:', res.filename);
  });
};
const getPldpfae = async () => {
    const mappedResponse = await generatePldpfae();
    const name = "Pldpfae";
    const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
    const outputDir = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }
  const options = {
    format: 'A4',
    orientation: 'portrait',
    border: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm'
    },
    scale : .65
  };
  pdf.create(mappedResponse.html, options).toFile(outputDir, (err, res) => {
    if (err) {
      return console.error('Error al generar el PDF:', err);
    }
    console.log('PDF Pldpfae generado exitosamente en:', res.filename);
  });
};
const getPldpmorales = async () => {
  const mappedResponse = await generatePldmorales();
  const name = "Pldpmorales";
  const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
  const browser = await puppeteer.launch({
    headless: "chrome",
    args: [
      '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
          '--autoplay-policy=user-gesture-required',
          '--disable-background-networking',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-breakpad',
          '--disable-client-side-phishing-detection',
          '--disable-component-update',
          '--disable-default-apps',
          '--disable-dev-shm-usage',
          '--disable-domain-reliability',
          '--disable-extensions',
          '--disable-features=AudioServiceOutOfProcess',
          '--disable-hang-monitor',
          '--disable-ipc-flooding-protection',
          '--disable-notifications',
          '--disable-offer-store-unmasked-wallet-cards',
          '--disable-popup-blocking',
          '--disable-print-preview',
          '--disable-prompt-on-repost',
          '--disable-renderer-backgrounding',
          '--disable-setuid-sandbox',
          '--disable-speech-api',
          '--disable-sync',
          '--hide-scrollbars',
          '--ignore-gpu-blacklist',
          '--metrics-recording-only',
          '--mute-audio',
          '--no-default-browser-check',
          '--no-first-run',
          '--no-pings',
          '--no-sandbox',
          '--no-zygote',
          '--password-store=basic',
          '--use-gl=swiftshader',
          '--use-mock-keychain',
          '--font-render-hinting=none',
      ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    }
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, {  waitUntil: 'networkidle0' });
  const pdfPagare = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { left: "0cm", top: "0cm", right: "0cm", bottom: "0cm" },
      displayHeaderFooter: true,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Pldpmorales generado exitosamente");
};
const getEntidadesfinancieras = async () => {
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
    });
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
    );
    await page.setContent(mappedResponse.html, {  waitUntil: 'networkidle0' });
    const pdfPagare = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "0px", right: "0px", bottom: "0px", left: "0px" },
    });
    fs.writeFileSync(pagarePDF, pdfPagare);
    await browser.close();
    console.log("PDF Entidadesfinancieras generado exitosamente");
};
const getPrivacynoticepm = async () => {
    const mappedResponse = await generatePrivacyNoticepm();
    const name = "Privacynoticepm";
    const pagarePDF = path.resolve(__dirname, `${uploadDir + name}_1.pdf`);
    const browser = await puppeteer.launch({
      headless: "chrome",
      args: [
        '--disable-features=IsolateOrigins',
            '--disable-site-isolation-trials',
            '--autoplay-policy=user-gesture-required',
            '--disable-background-networking',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-breakpad',
            '--disable-client-side-phishing-detection',
            '--disable-component-update',
            '--disable-default-apps',
            '--disable-dev-shm-usage',
            '--disable-domain-reliability',
            '--disable-extensions',
            '--disable-features=AudioServiceOutOfProcess',
            '--disable-hang-monitor',
            '--disable-ipc-flooding-protection',
            '--disable-notifications',
            '--disable-offer-store-unmasked-wallet-cards',
            '--disable-popup-blocking',
            '--disable-print-preview',
            '--disable-prompt-on-repost',
            '--disable-renderer-backgrounding',
            '--disable-setuid-sandbox',
            '--disable-speech-api',
            '--disable-sync',
            '--hide-scrollbars',
            '--ignore-gpu-blacklist',
            '--metrics-recording-only',
            '--mute-audio',
            '--no-default-browser-check',
            '--no-first-run',
            '--no-pings',
            '--no-sandbox',
            '--no-zygote',
            '--password-store=basic',
            '--use-gl=swiftshader',
            '--use-mock-keychain',
            '--font-render-hinting=none',
        ],
      defaultViewport: {
        width: 750,
        height: 500,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: false,
      }
    });
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
    );
    await page.setContent(mappedResponse.html, {  waitUntil: 'networkidle0' });
    const pdfPagare = await page.pdf({
        format: "A4",
        printBackground: true,
        margin: { left: "0cm", top: "0cm", right: "0cm", bottom: "0cm" },
        displayHeaderFooter: true,
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
      '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
          '--autoplay-policy=user-gesture-required',
          '--disable-background-networking',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-breakpad',
          '--disable-client-side-phishing-detection',
          '--disable-component-update',
          '--disable-default-apps',
          '--disable-dev-shm-usage',
          '--disable-domain-reliability',
          '--disable-extensions',
          '--disable-features=AudioServiceOutOfProcess',
          '--disable-hang-monitor',
          '--disable-ipc-flooding-protection',
          '--disable-notifications',
          '--disable-offer-store-unmasked-wallet-cards',
          '--disable-popup-blocking',
          '--disable-print-preview',
          '--disable-prompt-on-repost',
          '--disable-renderer-backgrounding',
          '--disable-setuid-sandbox',
          '--disable-speech-api',
          '--disable-sync',
          '--hide-scrollbars',
          '--ignore-gpu-blacklist',
          '--metrics-recording-only',
          '--mute-audio',
          '--no-default-browser-check',
          '--no-first-run',
          '--no-pings',
          '--no-sandbox',
          '--no-zygote',
          '--password-store=basic',
          '--use-gl=swiftshader',
          '--use-mock-keychain',
          '--font-render-hinting=none',
      ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    }
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  const htmlScpfae = `
      <html>
      <head>
          <title>Mi PDF</title>
      </head>
      <body>${mappedResponse.html}</body></html>`;
  await page.setContent(htmlScpfae, {  waitUntil: 'networkidle0' });
  const pdfPagare = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { left: "0cm", top: "0cm", right: "0cm", bottom: "0cm" },
      displayHeaderFooter: true,
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
      '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
          '--autoplay-policy=user-gesture-required',
          '--disable-background-networking',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-breakpad',
          '--disable-client-side-phishing-detection',
          '--disable-component-update',
          '--disable-default-apps',
          '--disable-dev-shm-usage',
          '--disable-domain-reliability',
          '--disable-extensions',
          '--disable-features=AudioServiceOutOfProcess',
          '--disable-hang-monitor',
          '--disable-ipc-flooding-protection',
          '--disable-notifications',
          '--disable-offer-store-unmasked-wallet-cards',
          '--disable-popup-blocking',
          '--disable-print-preview',
          '--disable-prompt-on-repost',
          '--disable-renderer-backgrounding',
          '--disable-setuid-sandbox',
          '--disable-speech-api',
          '--disable-sync',
          '--hide-scrollbars',
          '--ignore-gpu-blacklist',
          '--metrics-recording-only',
          '--mute-audio',
          '--no-default-browser-check',
          '--no-first-run',
          '--no-pings',
          '--no-sandbox',
          '--no-zygote',
          '--password-store=basic',
          '--use-gl=swiftshader',
          '--use-mock-keychain',
          '--font-render-hinting=none',
      ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    }
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, {  waitUntil: 'networkidle0' });
  const pdfPagare = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { left: "0cm", top: "0cm", right: "0cm", bottom: "0cm" },
      displayHeaderFooter: true,
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
      '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
          '--autoplay-policy=user-gesture-required',
          '--disable-background-networking',
          '--disable-background-timer-throttling',
          '--disable-backgrounding-occluded-windows',
          '--disable-breakpad',
          '--disable-client-side-phishing-detection',
          '--disable-component-update',
          '--disable-default-apps',
          '--disable-dev-shm-usage',
          '--disable-domain-reliability',
          '--disable-extensions',
          '--disable-features=AudioServiceOutOfProcess',
          '--disable-hang-monitor',
          '--disable-ipc-flooding-protection',
          '--disable-notifications',
          '--disable-offer-store-unmasked-wallet-cards',
          '--disable-popup-blocking',
          '--disable-print-preview',
          '--disable-prompt-on-repost',
          '--disable-renderer-backgrounding',
          '--disable-setuid-sandbox',
          '--disable-speech-api',
          '--disable-sync',
          '--hide-scrollbars',
          '--ignore-gpu-blacklist',
          '--metrics-recording-only',
          '--mute-audio',
          '--no-default-browser-check',
          '--no-first-run',
          '--no-pings',
          '--no-sandbox',
          '--no-zygote',
          '--password-store=basic',
          '--use-gl=swiftshader',
          '--use-mock-keychain',
          '--font-render-hinting=none',
      ],
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
      isLandscape: false,
    }
  });
  const page = await browser.newPage();
  page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36"
  );
  await page.setContent(mappedResponse.html, {  waitUntil: 'networkidle0' });
  //console.log(mappedResponse);
  const pdfPagare = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { left: "0cm", top: "0cm", right: "0cm", bottom: "0cm" },
      displayHeaderFooter: true,
  });
  fs.writeFileSync(pagarePDF, pdfPagare);
  await browser.close();
  console.log("PDF Autbcpm generado exitosamente");
};
module.exports = {
  getScmorales,
  getScpfae,
  getPldpfae,
  getPldpmorales,
  getEntidadesfinancieras,
  getPrivacynoticepm,
  getPrivacynoticea1,
  geteAutbca1,
  geteAutbcpm
};