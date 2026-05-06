import numpy as np
from scipy.linalg.blas import chpmv

####################### Hermitian matrix #####################
# Must be Hermitian: A = A^H
A = np.array([
    [1.0+0.0j, 2.0+2.0j, 3.0+3.0j],
    [2.0-2.0j, 4.0+0.0j, 5.0+5.0j],
    [3.0-3.0j, 5.0-5.0j, 6.0+0.0j]
], dtype=np.complex64)

# AP = np.array([
#     1.0+0.0j, 2.0+2.0j, 4.0+0.0j, 3.0+3.0j, 5.0+5.0j, 6.0+0.0j
# ], dtype=np.complex64)

AP = np.array([
    1.0+0.0j, 2.0-2.0j, 3.0-3.0j, 4.0+0.0j, 5.0-5.0j, 6.0+0.0j
], dtype=np.complex64)

x = np.array([
    1.0+1.0j,
    2.0+2.0j,
    3.0+3.0j
], dtype=np.complex64)

y = np.array([
    3.0+3.0j,
    2.0+2.0j,
    1.0+1.0j
], dtype=np.complex64)

alpha = np.complex64(0.5 + 0.5j)
beta  = np.complex64(0.5 - 0.5j)

# uplo = 0 → upper packed storage
result = chpmv(n=3, alpha=alpha, ap=AP, x=x, beta=beta, y=y, lower=1)

print(result)