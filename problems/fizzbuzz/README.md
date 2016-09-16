### Problem Description
Fizz buzz is a group word game for children to teach them about division. Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz". Another point to be noted here is, if a number is divisible by both five and three then we should replace the number with "fizz buzz"

### Input
A single line containing an integer N which tells till where should the
number sequence go.

### Output
The list of numbers having the required strings inserted

### Hint
```javascript
All n%3  === "fizz"
All n%5  === "buzz"
All n%15 === "fizz buzz"
```

### Sample Input
```javascript
10
```

### Sample Output
```javascript
1,
2,
Fizz,
4,
Buzz,
Fizz,
7,
8,
Fizz,
Buzz
```
