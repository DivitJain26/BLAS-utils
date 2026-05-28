#include <stdio.h>
#include <lapacke.h>     // ← Best for MKL
// #include <mkl.h>

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
		Compact band storage (column-major convention):
		A_compact: [
			[ 0.0,  2.0,  5.0,  9.0 ],
			[ 1.0,  4.0,  8.0, 12.0 ],
			[ 3.0,  7.0, 11.0,  0.0 ],
			[ 6.0, 10.0,  0.0,  0.0 ]
		]
	*/

	lapack_int LDAB = KL + KU + 1;

	double AB_col[4*4] = { 0.0, 1.0, 3.0, 6.0, 2.0, 4.0, 7.0, 10.0, 5.0, 8.0, 11.0, 0.0, 9.0, 12.0, 0.0, 0.0 };
	double AB_row[4*4] = { 0.0, 2.0, 5.0, 9.0, 1.0, 4.0, 8.0, 12.0, 3.0, 7.0, 11.0, 0.0, 6.0, 10.0, 0.0, 0.0 };

	double D_col[4];
	double E_col[4];
	double Q_col[4*4];
	double PT_col[4*4];
	double C_col[4*4];
	lapack_int info_col;
	double D_row[4];
	double E_row[4];
	double Q_row[4*4];
	double PT_row[4*4];
	double C_row[4*4];
	lapack_int info_row;

	lapack_int NCC = 0;

	info_col = LAPACKE_dgbbrd( LAPACK_COL_MAJOR, 'B', M, N, 0, KL, KU, AB_col, LDAB, D_col, E_col, Q_col, 4, PT_col, 4, C_col, 4 );
	info_row = LAPACKE_dgbbrd( LAPACK_ROW_MAJOR, 'B', M, N, 0, KL, KU, AB_row, LDAB, D_row, E_row, Q_row, 4, PT_row, 4, C_row, 4 );

	printf("\n=======Column Major========\n");
	printf("INFO = %d\n", info_col);

	printf("\nDiagonal D:\n");
	for(int i = 0; i < 4; i++) printf("%8.3f ", D_col[i]);

	printf("\n\nOff-diagonal E:\n");
	for(int i = 0; i < 3; i++) printf("%8.3f ", E_col[i]);
	

	printf("\n\nQ matrix:\n");
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			printf("%8.3f ", Q_col[i + j*4]);
		}
		printf("\n");
	}

	printf("\nPT matrix:\n");
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			printf("%8.3f ", PT_col[i + j*4]);
		}
		printf("\n");
	}

	printf("\n=======Row Major========\n");
	printf("INFO = %d\n", info_row);

	printf("\nDiagonal D:\n");
	for(int i = 0; i < 4; i++) printf("%8.3f ", D_row[i]);

	printf("\n\nOff-diagonal E:\n");
	for(int i = 0; i < 3; i++) printf("%8.3f ", E_row[i]);

	printf("\n\nQ matrix:\n");
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			printf("%8.3f ", Q_row[i*4 + j]);
		}
		printf("\n");
	}

	printf("\nPT matrix:\n");
	for(int i = 0; i < 4; i++) {
		for(int j = 0; j < 4; j++) {
			printf("%8.3f ", PT_row[i*4 + j]);
		}
		printf("\n");
	}
	
	return 0;
}