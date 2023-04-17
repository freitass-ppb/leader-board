# Leader Board

Who bites their nails during their team's games? Yeap, I bet you're one of them and it's a great satisfaction to see our team on top of the leader board at the end of the season, right? 🏆

Bear your anxiety a little longer because the last game of the season has come to an end, and we just need to order the leader board to determine the ultimate winner.

You'll have the ginormous task 🫣 of ordering the leader board one last time and declare the podium!

## Function signature

Create an entry point function called `orderLeaderBoard(teams)` that receives a `teams` input list and returns a string with the top 3 teams, like:
```javascript
🥇 [team_name] - [team_points] points
🥈 [team_name] - [team_points] points
🥉 [team_name] - [team_points] points
```

## Requirements

* If the function input is `undefined`, `null` or a list with less than 3 teams, an error should be thrown with the message "Unable to create the leader board"
* If all the teams have 0 points, it should return the initial input
* Add a property into each team called `points` and calculate it assuming:
    * `victory` is worth 3 points
    * `draw` is worth 1 point
    * `loss` is worth 0 points
* Indicate the top 3 teams
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
    { name: 'Team B', wins: 0, draws: 0, losses: 1 }
];
```

`orderLeaderBoard(teams)` should return: `Uncaught Error: Unable to create the leader board`  
___
### Example 4

```javascript
const teams = [
    { name: 'Team A', wins: 0, draws: 0, losses: 0 },
    { name: 'Team B', wins: 0, draws: 0, losses: 0 }
    { name: 'Team C', wins: 0, draws: 0, losses: 0 }
];
```

`orderLeaderBoard(teams)` should return: 
```javascript
[
    { name: 'Team A', wins: 0, draws: 0, losses: 0 },
    { name: 'Team B', wins: 0, draws: 0, losses: 0 }
    { name: 'Team C', wins: 0, draws: 0, losses: 0 }
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
🥇 Team A - 12 points
🥈 Team E - 5 points
🥉 Team B - 4 points
```
