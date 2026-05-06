import numpy as np
from scipy.linalg.blas import ctrmv

# ####################### 3 by 3 complex matrix lower #####################
# A = np.array([
#     [1+1j, 0+0j, 0+0j],
#     [2+2j, 4+4j, 0+0j],
#     [3+3j, 5+5j, 6+6j]
# ], dtype=np.complex64)

# x = np.array([
#     1+1j,
#     2+2j,
#     3+3j,
# ], dtype=np.complex64)

# lower=1,   # lower triangular   1 = lower triangular, 0 = upper triangular
# trans=2,   # transpose     0 = no transpose, 1 = transpose, 2 = conjugate transpose
# diag=0     # non-unit diagonal   0 = non-unit diagonal, 1 = unit diagonal


####################### 3 by 3 complex matrix upper #####################

# A = np.array([
#     [1+1j, 2+2j, 3+3j],
#     [0+0j, 4+4j, 5+5j],
#     [0+0j, 0+0j, 6+6j]
# ], dtype=np.complex64)

# x = np.array([
#     1+1j,
#     2+2j,
#     3+3j,
# ], dtype=np.complex64)

# lower=0,   # lower triangular
# trans=0,   # transpose
# diag=1      # non-u


##################### 4 by 4 complex matrix #####################
A = np.array([
    [ 1+1j,  0+0j,  0+0j,  0+0j],
    [-2-2j,  5+5j,  0+0j,  0+0j],
    [ 3+3j, -6-6j,  8+8j,  0+0j],
    [-4-4j,  7+7j, -9-9j, 10+10j]
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
## 0.0, 2.0, 0.0, 16.0, 0.0, 30.0, 0.0, 46.0

# Perform triangular matrix-vector multiply
result = ctrmv(
    A,
    x,
    lower=lower,   # lower triangular
    trans=trans,   # no transpose
    diag=diag     # non-unit diagonal
)

print(result)