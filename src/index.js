// The default 'sort' ordering is ascending, but on this case, we want descending order
function compare(teamA, teamB) {
    if (teamA.points < teamB.points) {
        return 1;
    }

    if (teamA.points > teamB.points) {
        return -1;
    }

    return 0;
}

function printPodium(teams) {
    const medals = ['1st', '2nd', '3rd'];

    return teams
      .map((team, index) => `${medals[index]} ${team.name} - ${team.points} points`)
      .join('\n');
}

function orderLeaderBoard(teams) {
    let seasonStarted = false;
    const points = {
        WIN: 3,
        DRAW: 1,
        LOSS: 0,
    };

    if (!teams || teams.length < 3) {
        throw new Error ('Unable to create the leader board');
    }

    const leaderBoard = teams.map((team) => {
        const updatedTeam = {
            ...team,
            points: team.wins,
        };

        if (updatedTeam.points && !seasonStarted) {
            seasonStarted = true;
        }

        return updatedTeam;
    }).sort(compare);

    return seasonStarted ? printPodium(leaderBoard.slice(0, 3)) : teams;
}

module.exports = {
    orderLeaderBoard,
};
