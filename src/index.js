const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    let pair = '';
    let morseCode = '';
    let outputStr = '';

    for (let i = 0; i < expr.length+1; i += 2) {

        //если счетчик кратен 10, нужно определить символ алфавита и добавить его в строку
        if ((i !== 0) && ((i % 10) === 0) && (morseCode !== '')) {
            outputStr = outputStr + MORSE_TABLE[morseCode];
            morseCode = '';
        }

        pair =  expr.slice (i, i+2);
        if (pair === '10') {morseCode += '.'};
        if (pair === '11') {morseCode += '-'};
        if (pair === '**') {//попался пробел
            outputStr += ' ';
            i += 8; //скипаем последовательность **********
        };
    };

    return outputStr;
}

module.exports = {
    decode
}