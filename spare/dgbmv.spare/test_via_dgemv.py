import numpy as np
from scipy.linalg.blas import dgemv

A = np.array([
	[1.0, 3.0, 0.0],
	[2.0, 5.0, 7.0],
	[0.0, 6.0, 8.0]
])

x = np.array([1.0, 2.0, 3.0])
y = np.array([3.0, 2.0, 1.0])

result = dgemv(alpha=0.5, a=A, x=x, beta=0.5, y=y)
print(result)
# [ 5.  17.5 18.5]