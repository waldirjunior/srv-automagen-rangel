const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;


const yahooFinance = require('yahoo-finance2').default;
var googleFinance = require('google-finance');

async function googleBuscarHistorico() {
    await googleFinance.historical({
        symbol: 'WIN24Q:BVMF',
        from: '2024-04-24',
        to: '2024-04-25'
      }, function (err, quotes) {
        console.log(quotes)
      });
}

async function buscarDados() {
    try {
        // Substitua 'INDFUT' pelo símbolo correto do mini índice brasileiro
        const resultado = await yahooFinance.quoteSummary('INDFUT', {
            modules: ['price', 'summaryDetail']  // Módulos para informações detalhadas
        });
        console.log(resultado);
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}


async function buscarSimbolo() {
    try {
        const resultado = await yahooFinance.search('WIN24Q');
        console.log(resultado);
    } catch (error) {
        console.error('Erro ao buscar símbolo:', error);
    }
}


app.get('/', async (req, res) => {

    //googleBuscarHistorico();
    buscarSimbolo();

    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});