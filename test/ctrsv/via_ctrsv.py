import numpy as np
from scipy.linalg.blas import ctrsv

# ####################### 3 by 3 complex matrix lower #####################
A = np.array([
    [1+1j, 0+0j, 0+0j],
    [2+2j, 4+4j, 0+0j],
    [3+3j, 5+5j, 6+6j]
], dtype=np.complex64)

b = np.array([
    0+1j,
    0+2j,
    0+3j,
], dtype=np.complex64)

lower=1,   # lower triangular   1 = lower triangular, 0 = upper triangular
trans=2,   # transpose     0 = no transpose, 1 = transpose, 2 = conjugate transpose
diag=0     # diagonal   0 = non-unit diagonal, 1 = unit diagonal



####################### 3 by 3 complex matrix upper #####################
# A = np.array([
#     [1+1j, 2+2j, 3+3j],
#     [0+0j, 4+4j, 5+5j],
#     [0+0j, 0+0j, 6+6j]
# ], dtype=np.complex64)

# b = np.array([
#     1+1j,
#     2+2j,
#     3+3j,
# ], dtype=np.complex64)

# lower=0,   # lower triangular   1 = lower triangular, 0 = upper triangular
# trans=0,   # transpose     0 = no transpose, 1 = transpose, 2 = conjugate transpose
# diag=0     # diagonal   0 = non-unit diagonal, 1 = unit diagonal




# Solves triangular matrix-vector multiply
result = ctrsv(
    A,
    b,
    lower=lower,   # lower triangular
    trans=trans,   # no transpose
    diag=diag     # non-unit diagonal
)

print(result)