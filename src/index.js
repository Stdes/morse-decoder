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
    // write your solution here
    // 10 === .
    // 11 === -
    // space === **********

    let pair = ''    ;
    let morseCode = '';
    let outputStr = '';

    
    for (let i = 0; i < expr.length+1; i = i + 2) {

        //если счетчик кратен 10, нужно определить символ алфавита и добавить его в строку
        if ((i !== 0) && ((i % 10) === 0)) {
            outputStr = outputStr + MORSE_TABLE[morseCode];
            morseCode = '';
        }

        pair =  expr.slice (i, i+2);
        if (pair === '10') {morseCode = morseCode + '.'};
        if (pair === '11') {morseCode = morseCode + '-'};
        if (pair === '**') {//попался пробел
            outputStr = outputStr + ' ';
            i = i + 10; //скипаем последовательность **********
        };
    };
    return outputStr;
}

/*
проходят все тесты, кроме одного: 
ожидается:
+answer on the ultimate question of life the universe and everything is 42
получено:
-answer on the ultimate question of life the universe and everything is v2

то есть вместо 42 получаем v2 или вместо вместо ....- мы получаем ...-
одна точка куда-то девается. Не понимаю, как при этом все 49 тестов проходят.
*/

module.exports = {
    decode
}