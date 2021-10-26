exports.giveMeFive = function(asString = false) {
    if (asString) {
        return '5';
    } else {
        return 5;
    }
}

exports.removeLetter = function(text, characterToRemove) {

    return text
        .split('')
        .filter((character) => {
            return character !== characterToRemove
        })
        .join('');

}

exports.removeProp = function(object, propertyName) {
    delete object[propertyName];
    return object;
}

exports.giveMeSix = function() {
    // comments
    console.log('asdasdd')
    const a = 7;
    return 6;
}