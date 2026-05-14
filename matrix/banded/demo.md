> One question I have: how do row- and column-major orders factor in here. For example, in [dgbbrd](https://github.com/OpenMathLib/OpenBLAS/blob/43fdff7f145736cb7fcccb81f3cabf9a5a84be76/lapack-netlib/LAPACKE/src/lapacke_dgbbrd.c#L35), the routine accepts a layout argument.

this is how i understand the row and column major interpretations of these matrices:

for column major:

```json
{
  "order": "column-major",
  "type": "banded",
  "M": 5,
  "N": 5,
  "KL": 2,
  "KU": 1,
  "A": [
    0.0, 0.0, 0.0, 1.1, 2.1, 3.1,
    0.0, 0.0, 1.2, 2.2, 3.2, 4.2,
    0.0, 0.0, 2.3, 3.3, 4.3, 5.3,
    0.0, 0.0, 3.4, 4.4, 5.4, 0.0,
    0.0, 0.0, 4.5, 5.5, 0.0, 0.0
  ],
	"A_compact": [
		[ 0.0, 1.2, 2.3, 3.4, 4.5 ],
		[ 1.2, 2.2, 3.3, 4.4, 5.5 ],
		[ 2.1, 3.2, 4.3, 5.4, 0.0 ],
		[ 3.1, 4.2, 5.3, 0.0, 0.0 ]
	],
  "A_mat": [
    [ 1.1, 1.2, 0.0, 0.0, 0.0 ],
    [ 2.1, 2.2, 2.3, 0.0, 0.0 ],
    [ 3.1, 3.2, 3.3, 3.4, 0.0 ],
    [ 0.0, 4.2, 4.3, 4.4, 4.5 ],
    [ 0.0, 0.0, 5.3, 5.4, 5.5 ]
  ],
}
```

for row major:

```json
{
  "order": "row-major",
  "type": "banded",
  "M": 5,
  "N": 5,
  "KL": 2,
  "KU": 1,
  "A": [
    0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 1.2, 2.3, 3.4, 4.5,
    1.1, 2.2, 3.3, 4.4, 5.5,
    2.1, 3.2, 4.3, 5.4, 0.0,
    3.1, 4.2, 5.3, 0.0, 0.0
  ],
  "A_mat": [
    [ 1.1, 1.2, 0.0, 0.0, 0.0 ],
    [ 2.1, 2.2, 2.3, 0.0, 0.0 ],
    [ 3.1, 3.2, 3.3, 3.4, 0.0 ],
    [ 0.0, 4.2, 4.3, 4.4, 4.5 ],
    [ 0.0, 0.0, 5.3, 5.4, 5.5 ]
  ]
}
```

<img width="200" height="168" alt="image" src="https://github.com/user-attachments/assets/256eec08-5759-4653-af87-a9fa2f3a0cec" />

 i am basically reading this column-by-column for col-major and row-by-row for row-major