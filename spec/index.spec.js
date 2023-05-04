const { orderLeaderBoard } = require("../src/index");

describe("orderLeaderBoard test", () => {
    describe("when the input is invalid", () => {
        it("should return an error if the input is undefined", () => {
            expect(() => orderLeaderBoard(undefined)).toThrow(new Error('Unable to create the leader board'));
        });

        it("should return an error if the input is null", () => {
            expect(() => orderLeaderBoard(null)).toThrow(new Error('Unable to create the leader board'));
        });

        it("should return an error if the input is a list with less than 3 teams", () => {
            const teams = [
                { name: 'Team A', wins: 1, draws: 0, losses: 0 },
                { name: 'Team B', wins: 0, draws: 0, losses: 1 },
            ];

            expect(() => orderLeaderBoard(teams)).toThrow(new Error('Unable to create the leader board'));
        });
    });

    describe("when the input is valid", () => {
        describe("when all the teams have 0 points", () => {
            it("should return the same value as the input", () => {
                const teams = [
                    { name: 'Team A', wins: 0, draws: 0, losses: 0 },
                    { name: 'Team B', wins: 0, draws: 0, losses: 0 },
                    { name: 'Team C', wins: 0, draws: 0, losses: 0 },
                ];

                expect(orderLeaderBoard(teams)).toEqual(teams);
            });
        });

        describe("with multiple teams with non 0 points", () => {
            it("should return the ordered list", () => {
                const teams = [
                    { name: 'Team D', wins: 0, draws: 2, losses: 2 },
                    { name: 'Team B', wins: 1, draws: 1, losses: 2 },
                    { name: 'Team E', wins: 1, draws: 2, losses: 1 },
                    { name: 'Team A', wins: 4, draws: 0, losses: 0 },
                    { name: 'Team C', wins: 0, draws: 0, losses: 4 },
                ];

                expect(orderLeaderBoard(teams))
                  .toEqual('1st Team A - 12 points\n2nd Team E - 5 points\n3rd Team B - 4 points');
            });
        });

        describe("with few teams with non 0 points", () => {
            it("should return the ordered list", () => {
                const teams = [
                    { name: 'Team C', wins: 0, draws: 0, losses: 2 },
                    { name: 'Team A', wins: 1, draws: 0, losses: 1 },
                    { name: 'Team B', wins: 2, draws: 0, losses: 0 },
                ];

                expect(orderLeaderBoard(teams))
                  .toEqual('1st Team B - 6 points\n2nd Team A - 3 points\n3rd Team C - 0 points');
            });
        });
    });
});
