import numpy as np
from scipy.linalg.blas import dspmv

# Packed matrix (lower)
AP = np.array([1.,2.,3.,4.,5.,6.])

x = np.array([1.,1.,1.])
y = np.array([1.,1.,1.])

y_out = dspmv(3, 1.0, AP, x, beta=2.0, y=y, lower=1)

print(y_out)