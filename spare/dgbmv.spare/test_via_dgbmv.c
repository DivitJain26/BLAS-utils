#include <stdio.h>
#include <cblas.h>

int main() {

    int m = 3;
    int n = 3;

    int kl = 1;
    int ku = 1;

    double alpha = 0.5;
    double beta  = 0.5;

    double x[] = {1.0, 2.0, 3.0};

		/*
			A_mat: [
				[1.0, 3.0, 0.0],
				[2.0, 5.0, 7.0],
				[0.0, 6.0, 8.0]
			]
		*/

    // Row-Major Band Packing

    /*
			A_compact_row_major: [
				[0.0, 1.0, 3.0],
				[2.0, 5.0, 7.0],
				[6.0, 8.0, 0.0]
			]
    */

    double AC_row_major[] = {0.0, 1.0, 3.0, 2.0, 5.0, 7.0, 6.0, 8.0, 0.0};
    double y1[] = {3.0, 2.0, 1.0};

    cblas_dgbmv(CblasRowMajor, CblasNoTrans, m, n, kl, ku, alpha, AC_row_major, (kl+ku+1), x, 1, beta, y1, 1);

    printf("Row-Major Result: ");
    for (int i = 0; i < m; i++) {
			printf("%f, ", y1[i]);
		}
		printf("\n");

    // Column-Major Band Packing
		
		/*
			A_compact_cloumn_major: [
				[0.0, 3.0, 7.0],
				[1.0, 5.0, 8.0],
				[2.0, 6.0, 0.0]
			]
		*/
		
		double AC_cloumn_major[] = {0.0, 1.0, 2.0, 3.0, 5.0, 6.0, 7.0, 8.0, 0.0};
    double y2[] = {3.0, 2.0, 1.0};
		
    cblas_dgbmv(CblasColMajor, CblasNoTrans, m, n, kl, ku, alpha, AC_cloumn_major, (kl+ku+1), x, 1, beta, y2, 1);
    printf("Column-Major Result: ");
		for (int i = 0; i < m; i++) {
			printf("%f, ", y2[i]);
		}
		printf("\n");

    return 0;
}