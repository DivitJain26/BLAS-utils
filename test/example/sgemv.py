import numpy as np
from scipy.linalg.blas import sgemv

A = np.array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ], dtype=np.float32 ).reshape( ( 3, 3 ), order='C' )

x = np.array( [ 1, 2, 3 ], dtype=np.float32 )
y = np.array( [ 3, 2, 1 ], dtype=np.float32 )

result = sgemv(0.5, A, x, beta=-0.5, y=y)
print(result)