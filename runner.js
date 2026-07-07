const { chromium } = require("playwright");

const URL = "https://ysyglobaloffers.netlify.app/";

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {

  const browser = await chromium.launch({
    headless: false,

    proxy: {
      server: "http://198.23.243.226:6361",
      username: "orzyxxuq",
      password: "s5jd613as0pq"
    }
  });

  const context = await browser.newContext({
    locale: "en-US",
    timezoneId: "America/New_York",

    viewport: {
      width: 1366,
      height: 768
    }
  });

  const page = await context.newPage();


  console.log("🚀 Abriendo página...");

  await page.goto(URL, {
    waitUntil: "domcontentloaded",
    timeout: 60000
  });


  console.log("✅ Página cargada");

  // Tiempo de lectura inicial
  await sleep(5000);


  // Movimiento del mouse
  await page.mouse.move(400, 300);
  await sleep(2000);

  await page.mouse.move(700, 350);
  await sleep(2000);


  // Scroll suave
  await page.mouse.wheel(0, 450);
  await sleep(4000);

  await page.mouse.wheel(0, 650);
  await sleep(4000);


  // Pequeño regreso
  await page.mouse.wheel(0, -500);
  await sleep(3000);


  // Buscar CTA
  const cta = page.getByText("Get Access").first();

  if (await cta.count() > 0 && await cta.isVisible()) {

    console.log("🖱️ Botón encontrado");

    await sleep(2000);

    await cta.click();

    console.log("✅ Click realizado");


    await sleep(8000);

    console.log("🌐 URL después del click:");
    console.log(page.url());

  } else {

    console.log("⚠️ No se encontró el botón Get Access");

  }


  // Guardar captura para revisar
  await page.screenshot({
    path: "resultado.png",
    fullPage: true
  });


  console.log("🏁 Prueba terminada");


  await browser.close();

})();
