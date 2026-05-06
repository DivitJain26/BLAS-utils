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



# A = np.array([
#     [1.0+0.0j, 2.0+2.0j, 3.0-3.0j],
#     [2.0-2.0j, 4.0+0.0j, 5.0+5.0j],
#     [3.0+3.0j, 5.0-5.0j, 6.0+0.0j]
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
    [1.0+0.0j, 2.0-2.0j, 3.0+3.0j, 4.0-4.0j],
    [2.0+2.0j, 5.0+0.0j, 6.0-6.0j, 7.0+7.0j],
    [3.0-3.0j, 6.0+6.0j, 8.0+0.0j, 9.0-9.0j],
    [4.0+4.0j, 7.0-7.0j, 9.0+9.0j, 10.0+0.0j]
], dtype=np.complex64)

x = np.array([
    1.0+1.0j,
    2.0+2.0j,
    3.0+3.0j,
    4.0+4.0j
], dtype=np.complex64)

y = np.array([
    4.0+4.0j,
    3.0+3.0j,
    2.0+2.0j,
    1.0+1.0j
], dtype=np.complex64)

alpha = np.complex64(0.5 + 0.5j)
beta  = np.complex64(0.5 - 0.5j)

trans = 0


result = cgemv(alpha, A, x, beta=beta, y=y, trans=trans )
print(result)
# [  8.+14.j -11.+25.j   8.+31.j]