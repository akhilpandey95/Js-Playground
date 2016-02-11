## Problem Description
Alex and Stella play a game together for this Valentine’s Day. They start by writing a random number on a board. Alex plays first and the turns alternate. At each move, the current player erases the number on the board and writes a new number, which is the smallest integer strictly greater than the old number and finishes his turn. The game ends when a player is forced to write a prime number and the other player wins.
Caught up in this dumb game, help Alex and Stella find the number of moves the game will take to end and the winner of this game, as they have to go shopping.

## Input
A single line containing a single integer N, the random number with which they start the game.

## Output
A single line containing an integer followed by ‘Alex’ or ‘Stella’ (without quotes, separated by a single space), the minimum number of moves for the game to end and the winner of the game.

## Constraints
1 <= N <= Math.pow(10, 5)

## Time Limit
1 second

##Sample test cases

### 1)

### Input
```shell
5
```

### Output
```shell
2 Alex
```

### Explanation
Alex writes 6. Stella writes 7, which is a prime => Alex wins, 2 moves.

### 2.)

### Input
```shell
4
```

### Output
```shell
1 Stella
```

