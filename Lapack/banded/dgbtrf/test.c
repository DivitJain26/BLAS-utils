#include <stdio.h>
#include <lapacke.h>

int main() {

	lapack_int M = 4;
	lapack_int N = 4;

	lapack_int KL = 2;
	lapack_int KU = 1;

	// LDAB >= KL + KU + 1 
	lapack_int LDAB = 4;

	/*
		A_mat: [
			[ 1.0,  2.0,  0.0,  0.0 ],
			[ 3.0,  4.0,  5.0,  0.0 ],
			[ 6.0,  7.0,  8.0,  9.0 ],
			[ 0.0, 10.0, 11.0, 12.0 ]
		]
	*/

	/*
	Compact band storage (Column-Major):
		A_compact: [
			[ 0.0,  2.0,  5.0,  9.0 ],
			[ 1.0,  4.0,  8.0, 12.0 ],
			[ 3.0,  7.0, 11.0,  0.0 ],
			[ 6.0, 10.0,  0.0,  0.0 ]
		]
	*/

	/*
	Compact band storage (row-Major):
		A_compact: [
			[  0.0,  0.0,  1.0, 2.0 ],
			[  0.0,  3.0,  4.0, 5.0 ],
			[  6.0,  7.0,  8.0, 9.0 ],
			[ 10.0, 11.0, 12.0, 0.0 ]
		]
	*/

	// double AB[6*4] = { 0.0, 2.0, 5.0, 9.0, 1.0, 4.0, 8.0, 12.0, 3.0, 7.0, 11.0, 0.0, 6.0, 10.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,, 0.0, 0.0 0.0 };
	double AB[4*6] = { 0.0, 0.0, 1.0, 2.0, 0.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 0.0 };

	double D[4];
	double E[3];
// We won't compute Q or P^T for minimal change (set VECT = 'N')
	char VECT = 'N';           // 'N' = do not form Q or P^T
	lapack_int NCC = 0;        // no extra matrix C

	double *Q = NULL;          // not used
	lapack_int LDQ = 1;
	double *PT = NULL;         // not used
	lapack_int LDPT = 1;
	double *C = NULL;          // not used
	lapack_int LDC = 1;

	double WORK[2 * 8];        // 2*max(M,N) is safe

	lapack_int info;

	printf("Calling LAPACKE_dgbbrd (ROW_MAJOR)...\n\n");

info = LAPACKE_dgbbrd(LAPACK_ROW_MAJOR, VECT,
                          M, N, NCC,
                          KL, KU,
                          AB, LDAB,
                          D, E,
                          Q, LDQ,
                          PT, LDPT,
                          C, LDC,
                          WORK);

    printf("INFO = %d\n\n", info);

    if (info == 0) {
        printf("Bidiagonal form - Diagonal D:\n");
        for (int i = 0; i < 4; i++) {
            printf("%10.6f ", D[i]);
        }
        printf("\n\n");

        printf("Superdiagonal E:\n");
        for (int i = 0; i < 3; i++) {
            printf("%10.6f ", E[i]);
        }
        printf("\n\n");

        printf("AB after reduction (modified band storage):\n");
        for (int i = 0; i < M; i++) {
            for (int j = 0; j < LDAB; j++) {
                printf("%10.4f ", AB[i * LDAB + j]);
            }
            printf("\n");
        }
    } else {
        printf("Error: DGBBRD returned INFO = %d\n", info);
    }

    return 0;
}