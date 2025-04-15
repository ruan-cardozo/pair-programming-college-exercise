const filterOffensiveWord = require('./offensive_filter');

describe("Offensive Filter", () => {

    it("Deve filtrar palavras ofensivas", () => {

        const phrase = "Você é tolo";
        const expectedPhrase = "Você é ****"

        const result = filterOffensiveWord(phrase);

        expect(result).toBe(expectedPhrase);
    });

    it("Não deve filtrar palavras ofensivas", () => {

        const phrase = "Uma frase de paz";
        const expectedPhrase = "Uma frase de paz"

        const result = filterOffensiveWord(phrase);

        expect(result).toBe(expectedPhrase);
    });
});