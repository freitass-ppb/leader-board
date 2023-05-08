# Leader Board

## Function signature

The function `orderLeaderBoard` receives a `teams` input list and returns a string with the top 3 teams, like:
```javascript
1st [team_name] - [team_points] points
2nd [team_name] - [team_points] points
3rd [team_name] - [team_points] points
```

## Requirements

* If the function input is `undefined`, `null` or a list with less than 3 teams, an error should be thrown with the message `Unable to create the leader board`
* If all the teams have 0 points, it should return the initial input
* Each team should have a property called `points`, which is calculated assuming:
  * `victory` is worth 3 points
  * `draw` is worth 1 point
  * `loss` is worth 0 points
* Indicate the top 3 teams ordered by descending points
* Ignore the cases where there are tied teams

Assume this `teams` structure as the input of the `orderLeaderBoard` function:

```javascript
const teams = [
  { name: 'Team D', wins: 0, draws: 2, losses: 2 },
  { name: 'Team B', wins: 1, draws: 1, losses: 2 },
  { name: 'Team E', wins: 1, draws: 2, losses: 1 },
  { name: 'Team A', wins: 4, draws: 0, losses: 0 },
  { name: 'Team C', wins: 0, draws: 0, losses: 4 },
];
```

## Your Goal

Don't worry, we already wrote some of the code for you, but there's something wrong, since there are some unit tests failing.

We need your help to fix the code and make all the unit tests pass.

## Examples of possible outputs

### Example 1

`orderLeaderBoard(undefined)` should return: `Uncaught Error: Unable to create the leader board`
___
### Example 2

`orderLeaderBoard(null)` should return: `Uncaught Error: Unable to create the leader board`
___ 
### Example 3

```javascript
const teams = [
    { name: 'Team A', wins: 1, draws: 0, losses: 0 },
    { name: 'Team B', wins: 0, draws: 0, losses: 1 },
];
```

`orderLeaderBoard(teams)` should return: `Uncaught Error: Unable to create the leader board`
___
### Example 4

```javascript
const teams = [
    { name: 'Team A', wins: 0, draws: 0, losses: 0 },
    { name: 'Team B', wins: 0, draws: 0, losses: 0 },
    { name: 'Team C', wins: 0, draws: 0, losses: 0 },
];
```

`orderLeaderBoard(teams)` should return:
```javascript
[
    { name: 'Team A', wins: 0, draws: 0, losses: 0 },
    { name: 'Team B', wins: 0, draws: 0, losses: 0 },
    { name: 'Team C', wins: 0, draws: 0, losses: 0 },
]
```
___
### Example 5

```javascript
const teams = [
    { name: 'Team D', wins: 0, draws: 2, losses: 2 },
    { name: 'Team B', wins: 1, draws: 1, losses: 2 },
    { name: 'Team E', wins: 1, draws: 2, losses: 1 },
    { name: 'Team A', wins: 4, draws: 0, losses: 0 },
    { name: 'Team C', wins: 0, draws: 0, losses: 4 },
];
```

`orderLeaderBoard(teams)` should return:
```javascript
1st Team A - 12 points
2nd Team E - 5 points
3rd Team B - 4 points
```
