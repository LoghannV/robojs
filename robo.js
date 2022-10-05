const puppeteer = require("puppeteer");
const readLineSynch = require("readline-sync")
async function tipoRobo(){
    const navegador = await puppeteer.launch({headless:true})
    const paginaweb = await navegador.newPage()
    const moedabase = readLineSynch.question("Digite a moeda base ") || "dolar";
    const moedafinal =readLineSynch.question("Digite a moeda que vc deseja ") || 'real';
    const urlGoogle = `https://www.google.com/search?q=`+moedabase+`+para+`+moedafinal+`&oq=`+moedabase+`+para+`+moedafinal+`&aqs=chrome
    ..69i57j0i131i433i512j0i512l8.2208j1j4&sourceid=chrome&ie=UTF-8`

    await paginaweb.goto(urlGoogle)

    await paginaweb.screenshot({path: 'foto001.png'})

    const resultado = await paginaweb.evaluate(()=>{
         return document.querySelector(".lWzCpb.a61j6").value
    })
    console.log(`O valor de 1 ${moedabase} em ${moedafinal} é de ${resultado}`)
    await navegador.close()
    
}
tipoRobo()