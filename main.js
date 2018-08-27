function exesAndOhs(text) {
    const textArray = Array.from(text);
    const countNumberOf = createCounter(textArray)
    const exes = countNumberOf("x");
    const ohs = countNumberOf("o");
    if (exes !== 0 || ohs !== 0) return exes == ohs //la comparación en si ya me devuelve un booleano
    return false
}


function counterLength(textArray, expectedLetter) {
    return textArray.filter(letter => letter.toLowerCase() == expectedLetter).length;
}


//Currificación función que returna una funcióny descompone parámetros
//Super versión refactor de currificación: 
//const createCounter = textArray => expectedLetter => counterLength(textArray, expectedLetter)


const createCounter = (textArray) => {
    return (expectedLetter) => {
        return counterLength(textArray, expectedLetter)
    }
}


module.exports = {
    exesAndOhs
}