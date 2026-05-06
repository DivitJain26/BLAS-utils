import numpy as np
from scipy.linalg.blas import dgbmv


# A_mat = np.array([
# 	[1.0, 3.0, 0.0],
# 	[2.0, 5.0, 7.0],
# 	[0.0, 6.0, 8.0]
# ])

# Row-Major Packing

# A_compact = np.array([
# 	[0.0, 1.0, 3.0],
# 	[2.0, 5.0, 7.0],
# 	[6.0, 8.0, 0.0]
# ])

A = np.array([
	0.0, 1.0, 3.0, 2.0, 5.0, 7.0, 6.0, 8.0, 0.0
], dtype=np.float64).reshape((3,3), order='C')

x = np.array([1.0, 2.0, 3.0])
y = np.array([3.0, 2.0, 1.0])

result = dgbmv(m=3, n=3, kl=1, ku=1, alpha=0.5, a=A, x=x, beta=0.5, y=y)
print(result)


# Column-Major Packing

# A_compact = np.array([
# 	[0.0, 3.0, 7.0],
# 	[1.0, 5.0, 8.0],
# 	[2.0, 6.0, 0.0]
# ])

A = np.array([
	0.0, 1.0, 2.0, 3.0, 5.0, 6.0, 7.0, 8.0, 0.0
], dtype=np.float64).reshape((3,3), order='F')

x = np.array([1.0, 2.0, 3.0])
y = np.array([3.0, 2.0, 1.0])

result = dgbmv(m=3, n=3, kl=1, ku=1, alpha=0.5, a=A, x=x, beta=0.5, y=y)
print(result)