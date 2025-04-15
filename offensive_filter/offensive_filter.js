const blackList = ["tolo","bobo","boboca","bobinho","pateta","lesado","panaca","lerdo","lerdo demais","tontinho","bolota","cabeçudo","abobrinha","zé ruela","zé mané","zé ninguém","mané","pastel","banana","cabeçudo","troxa","vacilão"];

function filterOffensiveWord(frase) {

    const words = frase.split(' ')

    for (let i = 0; i < words.length; i++) {

        const word = words[i];
        const lowerCaseWord = word.toLocaleLowerCase();

        if (blackList.includes(lowerCaseWord)) {
            words[i] = "****";
        }
    }

    return words.toString().replaceAll(',', ' ');
}

module.exports = filterOffensiveWord