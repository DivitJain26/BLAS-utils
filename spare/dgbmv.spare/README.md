## Build and Run

Compile the program using GCC and link against OpenBLAS:

```bash
gcc test_via_dgbmv.c -o test_via_dgbmv -lopenblas
```

Compile the program using MKL:

```bash
gcc test_via_dgbmv.c -o test_via_dgbmv \
-I${MKLROOT}/include \
-L${MKLROOT}/lib/intel64 \
-lmkl_intel_lp64 \
-lmkl_sequential \
-lmkl_core \
-lpthread -lm -ldl
```

Run the executable:

```bash
./test_via_dgbmv
```

Ensure that OpenBLAS is installed and available on your system before compiling.
