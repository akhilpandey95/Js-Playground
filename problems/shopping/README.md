## Problem description

Alex promised Stella that he will take her to every Shopping Mall in the city on Valentine’s Day. The city they live in consists of N+2 buildings, N Shopping Malls and two houses, the places where Alex and Stella live. The buildings are numbered from 1 to N+2. Each building is connected with a road to some of the other buildings in such a way that every building is reachable from every other building, using some set of roads. To use a road, a price must be paid, which is equal to the length of the road. Paying for a road will allow them to use it, to and fro once, i.e., if x is the cost to use a road connecting two buildings a and b, then one can use the road to travel from a to b and again from b to a, any time in the future, exactly once, paying exactly x.

Alex has to leave his place, pick Stella from her house, go to every mall in the city, drop Stella back at her house and return to Alex’s place.


Help Alex minimise the total price he has to pay for using the roads.


## Input

First line of the input contains four integers N, M, x and y, the number of Shopping Malls, the number of roads, Alex’s place and Stella’s place.

The next M lines contain 3 separated integers a, b and d, which implies that there is a road of length d connecting buildings a and b.


## Output

A single line containing a single integer, the minimum total price Alex has to pay.


## Constraints
+ 1 <= N <= 105
+ N+1 <= M <= min( ((N+2)*(N+1))/2 , 105 + 1 )
+ 1 <= x,y <= N+2
+ 1 <= a,b <= 105 + 2
+ 1 <= d <= 100


## Time Limit
1.5 sec


## Sample test case


### Input
```shell
1 3 1 2
1 2 1
1 3 1
2 3 3
```

### Output
```shell
3
```

###Explanation

The optimal path is 1->2->1->3->1->2->1