#include <stdio.h>
#include <lapacke.h>

int main() {

	lapack_int M = 4;
	lapack_int N = 4;

	lapack_int KL = 2;
	lapack_int KU = 1;

	/*
		A_mat: [
			[ 1.0,  2.0,  0.0,  0.0 ],
			[ 3.0,  4.0,  5.0,  0.0 ],
			[ 6.0,  7.0,  8.0,  9.0 ],
			[ 0.0, 10.0, 11.0, 12.0 ]
		]
	*/

	/*
	Compact band storage (row-major):
		A_compact: [
			[  0.0,  0.0,  1.0,  2.0 ],
			[  0.0,  3.0,  4.0,  5.0 ],
			[  6.0,  7.0,  8.0,  9.0 ],
			[ 10.0, 11.0, 12.0,  0.0 ]
		]
	*/

	/*
	For LAPACKE row-major band storage:

	LDAB >= KL + KU + 1

	Here:
		KL = 2
		KU = 1

	So:
		LDAB = 4
	*/

	lapack_int LDAB = KL + KU + 1;

	double AB[4*4] = {
		// 0.0,  0.0,  1.0,  2.0,
		// 0.0,  3.0,  4.0,  5.0,
		// 6.0,  7.0,  8.0,  9.0,
		// 10.0, 11.0, 12.0, 0.0

		 0.0,  2.0,  5.0,  9.0,
		 1.0,  4.0,  8.0, 12.0,
		 3.0,  7.0, 11.0,  0.0,
		 6.0, 10.0,  0.0,  0.0
	};

	/*
	Outputs of DGBBRD
	*/

	double D[4];      // diagonal
	double E[4];      // off-diagonal

	double Q[4*4];    // left orthogonal matrix
	double PT[4*4];   // right orthogonal matrix
	double C[4*4];    // optional matrix

	lapack_int NCC = 0;

	lapack_int info;

	/*
		VECT = 'B'

		'B' => compute both Q and PT
	*/

	info = LAPACKE_dgbbrd(
		LAPACK_ROW_MAJOR,
		'B',
		M,
		N,
		0,          // NCC
		KL,
		KU,
		AB,
		LDAB,
		D,
		E,
		Q,
		4,
		PT,
		4,
		C,
		4
	);

	printf("INFO = %d\n\n", info);

	printf("Bidiagonal diagonal D:\n\n");

	for(int i = 0; i < 4; i++) {
		printf("%8.3f ", D[i]);
	}

	printf("\n\n");

	printf("Bidiagonal off-diagonal E:\n\n");

	for(int i = 0; i < 3; i++) {
		printf("%8.3f ", E[i]);
	}

	printf("\n\n");

	printf("Q matrix:\n\n");

	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			printf("%8.3f ", Q[i*4 + j]);
		}
		printf("\n");
	}

	printf("\nPT matrix:\n\n");

	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			printf("%8.3f ", PT[i*4 + j]);
		}
		printf("\n");
	}

	return 0;
}