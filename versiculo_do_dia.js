function sortearVersiculo() {
    var versiculos = ['Buscai o Senhor, vós todos os mansos da terra, que pondes por obra o seu juízo; buscai a justiça, buscai a mansidão; porventura sereis escondidos no dia da ira do Senhor. Sofonias 2:3', 'O sábio de coração aceita os mandamentos, mas o louco palrador será transtornado.Provérbios 10:8', 'Faze-nos voltar, Senhor, Deus dos Exércitos; faze resplandecer o teu rosto, e seremos salvos. Salmo 80:19', 'Se, porém, não perdoardes aos homens as suas ofensas, também vosso Pai vos não perdoará as vossas ofensas. Mateus 6:15', 'Tu, pois, meu filho, fortifica-te na graça que há em Cristo Jesus. 2 Timóteo 2:1', 'Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá; e todo aquele que vive e crê em mim nunca morrerá. Crês tu isso? João 11:25-26']

    var num = 6
    var res = window.document.getElementById('res')
    var randomNumero = Math.floor((Math.random() * (num)));
    res.innerHTML = `<p>O versículo do dia é: ${versiculos[randomNumero]}.</p>`
}