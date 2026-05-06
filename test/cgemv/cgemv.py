import numpy as np
from scipy.linalg.blas import cgemv


####################### 3 by 3 complex matrix #####################
# A = np.array([
#     [1.0+0.0j, 2.0+2.0j, 3.0+3.0j],
#     [2.0-2.0j, 4.0+0.0j, 5.0+5.0j],
#     [3.0-3.0j, 5.0-5.0j, 6.0+0.0j]
# ], dtype=np.complex64)

# x = np.array([
#     1.0+1.0j,
#     2.0+2.0j,
#     3.0+3.0j
# ], dtype=np.complex64)

# y = np.array([
#     3.0+3.0j,
#     2.0+2.0j,
#     1.0+1.0j
# ], dtype=np.complex64)

# alpha = np.complex64(0.5 + 0.5j)
# beta  = np.complex64(0.5 - 0.5j)

# trans = 0



A = np.array([
    [1.1+1.1j, 3.3+3.3j],
    [2.2+2.2j, 4.4+4.4j],
], dtype=np.complex64)

x = np.array([
    1.1+1.1j,
    2.2+2.2j,
], dtype=np.complex64)

y = np.array([
    2.2+2.2j,
    1.1+1.1j
], dtype=np.complex64)

alpha = np.complex64(0.2 + 0.3j)
beta  = np.complex64(0.3 - 0.2j)

trans = 0



result = cgemv(alpha, A, x, beta=beta, y=y, trans=trans )
print(result)