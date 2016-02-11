## Problem description
On this valentine's day, Alex wants to gift a painting to Stella. For this, he has a rectangular grid sheet which has M rows and N columns. Each cell of this grid sheet is a perfect unit square.
Now he wants to cut a good piece from this sheet. A piece will be a good piece if it is of rectangular shape and it is properly cut with scissors along the joining line of rows and the joining line of columns, so that each of its cells is a perfect unit square.
So Alex wants you to tell the number of different ways W, to cut a good piece from that grid sheet.
As W can be very large, output `W%1000000007` i.e. `W%(109+7)`, where % is modulus operator.

## Input
A single integer T, in first line, denoting number of test cases.
For next T lines, each has two integers M and N, denoting rows and columns of rectangular grid paper.

## Output
For each test case, output `W%1000000007` i.e. `W%(109+7)`, in a new line.

## Constraints
+ 1<= T <= 1000
+ 1<= M <= 10000
+ 1<= N <= 10000


## Sample test cases

### 1.)

### Input
```shell
2
1 2
1 1
```

### Output
```shell
3
1
```

### Explanation
In first test case, as we have 1 row and 2 columns in grid paper, we can cut two good pieces of size 1x1 and one good piece of size 1x2, hence number of different ways are 3.
For second test case, we have grid paper of size 1x1, so we can only cut a single good piece, hence answer is 1.

### 2.)

### Input
```shell
2
2 3
1 10
```

### Output
```shell
18
55
```

