import numpy as np
from scipy.linalg.blas import cgbmv


####################### 3 by 3 complex matrix #####################
# A = np.array([
#     [1.0+1.0j, 3.0+3.0j, 0.0+0.0j],
#     [2.0+2.0j, 4.0+4.0j, 6.0+6.0j],
#     [0.0+0.0j, 5.0+5.0j, 7.0+7.0j]
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

# result = cgbmv(3, 3, 1, 1, alpha, A, x, beta=beta, y=y, trans=trans )
# print(result)

####################### 3 by 3 complex matrix compact #####################
# Amat
# [
#     [1.0+1.0j, 3.0+3.0j, 0.0+0.0j],
#     [2.0+2.0j, 4.0+4.0j, 6.0+6.0j],
#     [0.0+0.0j, 5.0+5.0j, 7.0+7.0j]
# ]

# row major
A = np.array([
    0.0+0.0j, 3.0+3.0j, 6.0+6.0j,
    1.0+1.0j, 4.0+4.0j, 7.0+7.0j,
    2.0+2.0j, 5.0+5.0j, 0.0+0.0j,
], dtype=np.complex64).reshape((3,3), order='C')

# col major
# A = np.array([
#     0.0+0.0j, 1.0+1.0j, 2.0+2.0j,
#     3.0+3.0j, 4.0+4.0j, 5.0+5.0j,
#     6.0+6.0j, 7.0+7.0j, 0.0+0.0j,
# ], dtype=np.complex64).reshape((3,3), order='F')


x = np.array([
    1.0+1.0j,
    2.0+2.0j,
    3.0+3.0j,
], dtype=np.complex64)

y = np.array([
    3.0+3.0j,
    2.0+2.0j,
    1.0+1.0j
], dtype=np.complex64)

alpha = np.complex64(0.5 + 0.5j)
beta  = np.complex64(0.5 - 0.5j)

trans = 0

result = cgbmv(3, 3, 1, 1, alpha, A, x, beta=beta, y=y, trans=trans )
print(result)

###################################################################
#  A mat
# [
#     [1.0+1.0j, 3.0+3.0j, 6.0+6.0j, 0.0+0.0j],
#     [2.0+2.0j, 4.0+4.0j, 7.0+7.0j, 10.0+10.0j],
#     [0.0+0.0j, 5.0+5.0j, 8.0+8.0j, 11.0+11.0j],
#     [0.0+0.0j, 0.0+0.0j, 9.0+9.0j, 12.0+12.0j]
# ]

# row major
# A = np.array([
#     0.0+0.0j, 0.0+0.0j, 6.0+6.0j, 10.0+10.0j,
#     0.0+0.0j, 3.0+3.0j, 7.0+7.0j, 11.0+11.0j,
#     1.0+1.0j, 4.0+4.0j, 8.0+8.0j, 12.0+12.0j,
#     2.0+2.0j, 5.0+5.0j, 9.0+9.0j, 0.0+0.0j
# ], dtype=np.complex64).reshape((4,4), order='C')

# col major
# A = np.array([
#     0.0+0.0j, 0.0+0.0j, 1.0+1.0j, 2.0+2.0j,
#     0.0+0.0j, 3.0+3.0j, 4.0+4.0j, 5.0+5.0j,
#     6.0+6.0j, 7.0+7.0j, 8.0+8.0j, 0.0+0.0j,
#     10.0+10.0j, 11.0+11.0j, 12.0+12.0j, 0.0+0.0j
# ], dtype=np.complex64).reshape((4,4), order='F')

# x = np.array([
#     1.0+1.0j,
#     2.0+2.0j,
#     3.0+3.0j,
#     4.0+4.0j
# ], dtype=np.complex64)

# y = np.array([
#     4.0+4.0j,
#     3.0+3.0j,
#     2.0+2.0j,
#     1.0+1.0j
# ], dtype=np.complex64)

# alpha = np.complex64(0.5 + 0.5j)
# beta  = np.complex64(0.5 - 0.5j)

# trans = 0

# result = cgbmv(4, 4, 1, 2, alpha, A, x, beta=beta, y=y, trans=trans )
# print(result)