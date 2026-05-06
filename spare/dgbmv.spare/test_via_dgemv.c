#include <stdio.h>
#include <cblas.h>

int main()
{

	// Matrix dimensions
	int m = 3;
	int n = 3;

	double x[] = {1.0, 2.0, 3.0};

	// Scalars
	double alpha = 0.5;
	double beta = 0.5;

	/*
		A_mat: [
			[1.0, 3.0, 0.0],
			[2.0, 5.0, 7.0],
			[0.0, 6.0, 8.0]
		]
	*/

	// Row-major matrix
	double A_row_major[] = {1.0, 3.0, 0.0, 2.0, 5.0, 7.0, 0.0, 6.0, 8.0};
	double y1[] = {3.0, 2.0, 1.0};
	
	cblas_dgemv(CblasRowMajor, CblasNoTrans, m, n, alpha, A_row_major, n, x, 1, beta, y1, 1);
	
	printf("Row-Major Result: ");
	for (int i = 0; i < m; i++) {
		printf("%f, ", y1[i]);
	}
	printf("\n");
	
	// Column-major matrix
	double A_cloumn_major[] = {1.0, 2.0, 0.0, 3.0, 5.0, 6.0, 0.0, 7.0, 8.0};
	double y2[] = {3.0, 2.0, 1.0};
	
	cblas_dgemv(CblasColMajor, CblasNoTrans, m, n, alpha, A_cloumn_major, m, x, 1, beta, y2, 1);
	
	printf("Column-Major Result: ");
	for (int i = 0; i < m; i++) {
		printf("%f, ", y2[i]);
	}
	printf("\n");

	return 0;
}