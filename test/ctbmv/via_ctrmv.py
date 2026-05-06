import numpy as np
from scipy.linalg.blas import ctrmv

# ####################### 3 by 3 complex matrix #####################
# A = np.array([
#     [1+1j, 0+0j, 0+0j],
#     [2+2j, 3+3j, 0+0j],
#     [0+0j, 4+4j, 5+5j]
# ], dtype=np.complex64)

# x = np.array([
#     1+1j,
#     2+2j,
#     3+3j,
# ], dtype=np.complex64)

# lower=1,   # lower triangular
# trans=2,   # transpose
# diag=0     # non-unit diagonal





####################### 3 by 3 complex matrix #####################

# A = np.array([
#     [1+1j, 2+2j, 0+0j],
#     [0+0j, 3+3j, 4+4j],
#     [0+0j, 0+0j, 5+5j]
# ], dtype=np.complex64)

# x = np.array([
#     1+1j,
#     2+2j,
#     3+3j,
# ], dtype=np.complex64)

# lower=0,   # lower triangular
# trans=0,   # transpose
# diag=1      # non-u


####################### 4 by 4 complex matrix #####################
A = np.array([
    [ 1.+1.j,  0.+0.j,  0.+0.j,  0.+0.j],
    [-2.-2.j,  4.+4.j,  0.+0.j,  0.+0.j],
    [ 3.+3.j, -5.-5.j,  7.+7.j,  0.+0.j],
    [ 0.+0.j,  6.+6.j, -8.-8.j,  9.+9.j]
], dtype=np.complex64)

x = np.array([
    1+1j,
    2+2j,
    3+3j,
    4+4j,
], dtype=np.complex64)

lower=1,   # lower triangular
trans=0,   # transpose
diag=0     # non-unit diagonal




# Perform triangular matrix-vector multiply
result = ctrmv(
    A,
    x,
    lower=lower,   # lower triangular
    trans=trans,   # no transpose
    diag=diag     # non-unit diagonal
)

print(result)