## Christmas Toy Factory

Santa's toy factory in GiabLand is getting ready for the beginning of the Christmas season, and production is in full swing. Now the assembly line is churning out lots of parts for dolls: heads, legs, bodies and arms.

To create one doll, the elves need two arms, two legs, one head and one body.

Unfortunately, they don't know how many pieces of each part have been produced, and after production the parts are all dumped into one container where they mix, which creates a huge mess.

The elves are having trouble computing the maximum quantity of dolls that can be assembled from the produced parts. Can you help them?


**Function signature**
getNumberOfDollsAvailable(parts) returns Number

The first and only line of the input contains a single nonempty string of length at most 50.

Each character of this string is one of the following:

- `h`, which represents a head,
- `l`, which represents a leg (doesn't matter if it's right or left because they are equal),
- `a`, which represents an arm (doesn't matter if it's right or left because they are equal),
- `b`, which represents a body.

**Examples:**

`getNumberOfDollsAvailable("")` should return `0`

`getNumberOfDollsAvailable("llaahb")` should return `1`

`getNumberOfDollsAvailable("lllllllllll")` should return `0`

`getNumberOfDollsAvailable("lllallllalllhbl")` should return `1`
