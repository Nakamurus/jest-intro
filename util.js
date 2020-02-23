exports.generateText = (name, age) => {
    return `${name} (${age} years old)`;
};

exports.validateInput = (text, notEmpty, isNumber) => {
    if (!text) {
        return false
    }
    if (notEmpty && text.trim().length === 0) {
        return false
    }
    if(isNumber && +text === NaN) {
        return false;
    }
    return true;
};

exports.checkAndGenerate = (name, age) => {
    if (
        !this.validateInput(name, true, false) ||
        !this.validateInput(age, false, true)
    ) {
        return false;
    }
    return this.generateText(name, age);
};