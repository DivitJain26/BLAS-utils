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
	Compact band storage (column-major):

		A_compact: [
			[ 0.0,  2.0,  5.0,  9.0 ],
			[ 1.0,  4.0,  8.0, 12.0 ],
			[ 3.0,  7.0, 11.0,  0.0 ],
			[ 6.0, 10.0,  0.0,  0.0 ]
		]

	Stored column-major as:

		col0 -> [0, 1, 3, 6]
		col1 -> [2, 4, 7,10]
		col2 -> [5, 8,11, 0]
		col3 -> [9,12, 0, 0]
	*/

	/*
	For LAPACK column-major band storage:

		LDAB >= KL + KU + 1

		2 + 1 + 1 = 4
	*/

	lapack_int LDAB = KL + KU + 1;

	double AB[4*4] = {
		 0.0, 1.0, 3.0, 6.0,
		 2.0, 4.0, 7.0,10.0,
		 5.0, 8.0,11.0, 0.0,
		 9.0,12.0, 0.0, 0.0
	};

	/*
	Outputs
	*/

	double D[4];
	double E[4];

	double Q[4*4];
	double PT[4*4];
	double C[4*4];

	lapack_int NCC = 0;

	lapack_int info;

	info = LAPACKE_dgbbrd(
		LAPACK_COL_MAJOR,
		'B',
		M,
		N,
		NCC,
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

	printf("Diagonal D:\n\n");

	for(int i = 0; i < 4; i++) {
		printf("%8.3f ", D[i]);
	}

	printf("\n\n");

	printf("Off-diagonal E:\n\n");

	for(int i = 0; i < 3; i++) {
		printf("%8.3f ", E[i]);
	}

	printf("\n\n");

	printf("Q matrix:\n\n");

	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			printf("%8.3f ", Q[i + j*4]);
		}
		printf("\n");
	}

	printf("\nPT matrix:\n\n");

	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			printf("%8.3f ", PT[i + j*4]);
		}
		printf("\n");
	}

	return 0;
}