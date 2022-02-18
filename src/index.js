const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    morse = expr.split('**********');
    let result = ''
    morse = morse.map(elem => {
        let arr = [];
        for (let i = 0; i < elem.length; i += 10) {
            arr.push(elem.slice(i, i + 10));
        }
        arr = arr.map(string => {
            let newArr = [];
            for (let i = 0; i < string.length; i += 2) {
                newArr.push(string.slice(i, i + 2));
            }
            return newArr
        })
        return arr
    })

    morse = morse.map(mass => {
        mass = mass.map((str) => {
            str = str.map(twoSymbols => {
                if (twoSymbols === '10') {
                    return "."
                }
                else if (twoSymbols === '11') {
                    return "-"
                } else {
                    return ''
                }
            });
            return str
        })
        return mass
    });

    morse = morse.map(mass => {
        mass = mass.map((str) => {
            return str.join('')
        })
        mass = mass.map(element => {
            return MORSE_TABLE[element]
        });
        return mass.join('')
    });
    return morse.join(' ')
}
module.exports = {
    decode
}

