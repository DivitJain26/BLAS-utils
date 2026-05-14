import numpy as np
from scipy.linalg.blas import cgeru


####################### 2 by 3 complex matrix #####################

# A = np.array([
#     [1.0+1.0j, 2.0+2.0j, 3.0+3.0j],
#     [4.0+4.0j, 5.0+5.0j, 6.0+6.0j]
# ], dtype=np.complex64)

# x = np.array([
#     1.0+1.0j,
#     2.0+2.0j
# ], dtype=np.complex64)

# y = np.array([
#     3.0+3.0j,
#     2.0+2.0j,
#     1.0+1.0j
# ], dtype=np.complex64)

# alpha = np.complex64(0.5 + 0.5j)

# result = cgeru(alpha, x, y, a=A)


####################### 2 by 3 complex matrix #####################

A = np.array([
    [1.0+1.0j, 2.0+2.0j, 3.0+3.0j],
    [4.0+4.0j, 5.0+5.0j, 6.0+6.0j],
    [7.0+7.0j, 8.0+8.0j, 9.0+9.0j],
    [10.0+10.0j, 11.0+11.0j, 12.0+12.0j]
], dtype=np.complex64)

x = np.array([
    1.0+1.0j,
    2.0+2.0j,
    3.0+3.0j,
    4.0+4.0j
], dtype=np.complex64)

y = np.array([
    3.0+3.0j,
    2.0+2.0j,
    1.0+1.0j
], dtype=np.complex64)

alpha = np.complex64(0.5 + 0.5j)

result = cgeru(alpha, x, y, a=A)





print(result)