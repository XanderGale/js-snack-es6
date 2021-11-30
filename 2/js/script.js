// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams =
[
    {
        teamName: 'Milan',
        teamPoints: 0,
        teamPenalties: 0,
    },
    {
        teamName: 'Inter',
        teamPoints: 0,
        teamPenalties: 0,
    },
    {
        teamName: 'Juventus',
        teamPoints: 0,
        teamPenalties: 0,
    },
];

console.log(teams);

const newTeams = [];

for(let i = 0; i < teams.length; i++) {

    teams[i].teamPoints = getRndInteger(1, 100);
    teams[i].teamPenalties = getRndInteger(1, 50);

    const {teamName, teamPenalties} = teams[i];

    const copyTeam = {teamName, teamPenalties};

    newTeams.push(copyTeam);

}

console.log(teams);
console.log(newTeams);






// FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};