function sortearVersiculo() {
    var versiculos = ['Buscai o Senhor, vós todos os mansos da terra, que pondes por obra o seu juízo; buscai a justiça, buscai a mansidão; porventura sereis escondidos no dia da ira do Senhor. Sofonias 2:3', "3etretertertret", "4retertretrt", "5ertertert", "6etertert", "ertertert7"]

    var num = 6
    var res = window.document.getElementById('res')
    var randomNumero = Math.floor((Math.random() * (num)));
    res.innerHTML = `<p>O número sorteado foi: ${versiculos[randomNumero]}.</p>`
}