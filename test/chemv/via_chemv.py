import numpy as np
from scipy.linalg.blas import chemv


####################### 3 by 3 complex matrix #####################
A = np.array([
    [1.0+0.0j, 0.0+0.0j, 0.0+0.0j],
    [2.0-2.0j, 4.0+0.0j, 0.0+0.0j],
    [3.0-3.0j, 5.0-5.0j, 6.0+0.0j]
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



result = chemv(alpha, A, x, beta=beta, y=y, lower='1')
print(result)