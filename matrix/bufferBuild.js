import { generatePaddedMatrix, generatePaddedMatrix2, printBuffer } from './bufferGenerator.js'

// row mojor
const A_mat = [
    [ 1.0, 1.0, 2.0, 2.0, 3.0, 3.0 ],
    [ 0.0, 0.0, 4.0, 4.0, 5.0, 5.0 ],
    [ 0.0, 0.0, 0.0, 0.0, 6.0, 6.0 ]
];


let buffer = generatePaddedMatrix(A_mat, 3, 3, -2, -9, 23, true);

printBuffer(buffer);
