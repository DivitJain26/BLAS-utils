import { generateComplexPaddedMatrix, generateRealPaddedMatrix, printBuffer } from './bufferGenerator.js'

// in
const A_i = [
    [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ],
    [ 4.0, 4.0, 5.0, 5.0, 6.0, 6.0 ]
];

// out
const A_o = [
    [  4.0,  4.0, 4.0, 4.0, 4.0, 4.0 ],
    [ 10.0, 10.0, 9.0, 9.0, 8.0, 8.0 ]
];


let buffer = generateComplexPaddedMatrix(A_o, 2, 3, -7, -3, 17, false);

printBuffer(buffer);
