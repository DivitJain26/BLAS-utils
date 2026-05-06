// JavaScript program to convert a given complex matrix into a padded buffer array
// with 999.0 fillers, using specified strides and major order (row or column major).
// The buffer is a 1D array of floats (re, im interleaved for each complex element).
// Output is printed as a string in the format: [1.0, 1.0, 999.0, ...]

// Function to generate the padded buffer
export function generatePaddedMatrix(A_mat, M, N, strideA1, strideA2, offsetA, isRowMajor = true) {
    // Validate inputs
    if (A_mat.length !== M) {
        throw new Error('A_mat must have M rows');
    }
    for (let i = 0; i < M; i++) {
        if (A_mat[i].length !== 2 * N) {
            throw new Error(`Row ${i} must have ${2 * N} elements (re, im for each of ${N} columns)`);
        }
    }

    // Compute strides in floats (each complex is 2 floats)
    const rowStride = strideA1 * 2;  // Float stride for rows (outer in row-major)
    const colStride = strideA2 * 2;  // Float stride for columns (inner in row-major)

    // Find the maximum position to determine buffer size
    let maxPos = -Infinity;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            let posRe;
            if (isRowMajor) {
                // Row-major: pos = 2*offsetA + i * rowStride + j * colStride
                posRe = 2 * offsetA + i * rowStride + j * colStride;
            } else {
                // Column-major: pos = 2*offsetA + j * rowStride + i * colStride
                // (Here, rowStride acts as col stride (outer), colStride as row stride (inner))
                posRe = 2 * offsetA + j * rowStride + i * colStride;
            }
            const posIm = posRe + 1;
            maxPos = Math.max(maxPos, posIm);
        }
    }

    // Create buffer of size maxPos + 1, filled with 999.0
    const bufferSize = maxPos + 1;
    if (bufferSize < 0) {
        throw new Error('Invalid strides leading to negative buffer size');
    }
    const buffer = new Array(bufferSize).fill(999.0);

    // Place the matrix elements into the buffer
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            let posRe;
            if (isRowMajor) {
                posRe = 2 * offsetA + i * rowStride + j * colStride;
            } else {
                posRe = 2 * offsetA + j * rowStride + i * colStride;
            }
            const posIm = posRe + 1;
            // Extract re and im from flattened row: A_mat[i][2*j] = re, A_mat[i][2*j+1] = im
            const re = A_mat[i][2 * j];
            const im = A_mat[i][2 * j + 1];

            // Place if within bounds (assumes valid inputs where pos >=0 and < size)
            if (posRe >= 0 && posRe < bufferSize && posIm >= 0 && posIm < bufferSize) {
                buffer[posRe] = re;
                buffer[posIm] = im;
            } else {
                console.warn(`Position out of bounds for A[${i}][${j}]: posRe=${posRe}`);
            }
        }
    }

    return buffer;
}


// Enhanced function: Auto-computes offsetA if passed as -1
export function generatePaddedMatrix2(A_mat, M, N, strideA1, strideA2, offsetA = 0, isRowMajor = true, paddingMode = 'padded') {
    if (A_mat.length !== M || A_mat.some(row => row.length !== 2 * N)) {
        throw new Error('Invalid A_mat dimensions');
    }

    let computedOffset = offsetA;
    const s1 = strideA1;
    const s2 = strideA2;
    const hasNegative = (s1 < 0 || s2 < 0);

    if (offsetA < 0 || (hasNegative && offsetA === 0)) {  // Auto-compute if invalid/negative strides
        let minRel = Infinity, maxRel = -Infinity;
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                const rel = isRowMajor ? (i * s1 + j * s2) : (j * s1 + i * s2);
                minRel = Math.min(minRel, rel);
                maxRel = Math.max(maxRel, rel);
            }
        }
        const baseOffset = -minRel;
        let padding = 0;
        if (hasNegative && paddingMode === 'padded') {
            const innerAbs = isRowMajor ? Math.abs(s2) : Math.abs(s1);
            padding = Math.floor(innerAbs / 2);
        }
        computedOffset = baseOffset + padding;
        console.log(`Auto-computed offsetA: ${computedOffset} (min_rel=${minRel}, padding=${padding})`);
    }

    const rowStride = s1 * 2;  // Float strides
    const colStride = s2 * 2;
    let maxPos = -Infinity;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            const posRe = 2 * computedOffset + (isRowMajor ? (i * rowStride + j * colStride) : (j * rowStride + i * colStride));
            maxPos = Math.max(maxPos, posRe + 1);
        }
    }

    const bufferSize = maxPos + 1;
    const buffer = new Array(bufferSize).fill(999.0);

    // Place elements
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            const posRe = 2 * computedOffset + (isRowMajor ? (i * rowStride + j * colStride) : (j * rowStride + i * colStride));
            const posIm = posRe + 1;
            const re = A_mat[i][2 * j];
            const im = A_mat[i][2 * j + 1];
            if (posRe >= 0 && posRe < bufferSize) {
                buffer[posRe] = re;
                if (posIm < bufferSize) buffer[posIm] = im;
            }
        }
    }

    return buffer;
}


// Function to print the buffer as a string in the specified format
export function printBuffer(buffer) {
    const str = '[' + buffer.map(v => v.toFixed(1)).join(', ') + ']';
    console.log(str);
    return str;
}

