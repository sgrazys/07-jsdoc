/** Suapvalinta PI reiksme */
const PEE = 3.14;

/** Dvigubas PEE */
const PEEPEE = PEE + PEE;

/**
 * Dvieju skaiciu sumos skaiciavimas.
 * @param {number} a Pirmasis skaicius.
 * @param {number} b Antrasis skaicius.
 * @returns {number} Sumos rezultatas.
 */
function sum(a, b) {
    return a + b;
}

const s = sum(7, 8);

/**
 * Dvieju reiksmiu (gali buti tekstines) sudetis.
 * @param {number|string} a Pirmas skaicius.
 * @param {number|string} b Antras skaicius.
 * @returns {number} Sumos rezultatas.
 */
function superSudetis(a, b) {
    if (typeof a !== 'number') {
        a = parseFloat(a)
    }
    if (typeof b !== 'number') {
        b = +b
    }

    return a + b;
}

const s1 = superSudetis(7, 5);
const s2 = superSudetis('7', 5);
const s3 = superSudetis(7, '5');
const s4 = superSudetis('7', '5');

/**
 * Pasisveikinimo tekstas pagal studento objekta,
 * @param {Object} student Studenta aprasantis objektas.
 * @param {string} student.name Studento vardas.
 * @param {number} student.age Studento amzius.
 * @param {boolean} student.isMarried Studento vedybinis statusas.
 * @returns {string} pasisveikinimo tekstas.
 */
function studentHi(student) {
    return `Student ${student.name} says Hi!`;
}

const petras = {
    name: 'Petras',
    age: 99,
    isMarried: true
}

console.log(studentHi(petras));
