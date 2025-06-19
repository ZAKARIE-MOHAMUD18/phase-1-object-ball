function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}
// console.log(gameObject());


function numPointsScored(playerName) {
  const game = gameObject();

  for (const teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    if (players[playerName]) {
      return players[playerName].points;
    }
  }

  return "Player not found";
}

function shoeSize(playerName) {
  const game = gameObject();

  for (const teamKey in game) {
    const team = game[teamKey];
    const players = team.players;

    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }

  return "Player not found";
}

function teamColors(teamName) {
  const game = gameObject();

  for (const teamKey in game) {
    const team = game[teamKey];

    if (team.teamName === teamName) {
      return team.colors;
    }
  }

  return "Team not found";
}
// console.log(teamColors("Brooklyn Nets"));     // Should print ["Black", "White"]
// console.log(teamColors("Charlotte Hornets")); // Should print ["Turquoise", "Purple"]


function teamNames() {
  const game = gameObject();
  const names = [];

  for (const teamKey in game) {
    const team = game[teamKey];
    names.push(team.teamName);
  }

  return names;
}

// console.log(teamNames()); // Should print: ["Brooklyn Nets", "Charlotte Hornets"]

function playerNumbers(teamName) {
  const game = gameObject();

  for (const teamKey in game) {
    const team = game[teamKey];

    if (team.teamName === teamName) {
      const numbers = [];

      for (const player in team.players) {
        numbers.push(team.players[player].number);
      }

      return numbers;
    }
  }

  return "Team not found";
}

//console.log(playerNumbers("Brooklyn Nets"));     // Should print jersey numbers of all Brooklyn Nets players
//console.log(playerNumbers("Charlotte Hornets")); // Should print jersey numbers of all Hornets players

function playerStats(playerName) {
  const game = gameObject();

  for (const teamKey in game) {
    const players = game[teamKey].players;

    if (players[playerName]) {
      return players[playerName];
    }
  }

  return "Player not found";
}
//console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoe = 0;
  let rebounds = 0;

  for (const teamKey in game) {
    const players = game[teamKey].players;

    for (const player in players) {
      const stats = players[player];
      if (stats.shoe > largestShoe) {
        largestShoe = stats.shoe;
        rebounds = stats.rebounds;
      }
    }
  }

  return rebounds;
}
//console.log(bigShoeRebounds()); 

function mostPointsScored() {
  const game = gameObject();
  let maxPoints = 0;
  let topPlayer = "";

  for (const teamKey in game) {
    const players = game[teamKey].players;

    for (const player in players) {
      const points = players[player].points;

      if (points > maxPoints) {
        maxPoints = points;
        topPlayer = player;
      }
    }
  }

  return topPlayer;
}
//console.log(mostPointsScored()); 

function winningTeam() {
  const game = gameObject();
  let winningTeamName = "";
  let highestTotal = 0;

  for (const teamKey in game) {
    const team = game[teamKey];
    const players = team.players;
    let teamTotal = 0;

    for (const player in players) {
      teamTotal += players[player].points;
    }

    if (teamTotal > highestTotal) {
      highestTotal = teamTotal;
      winningTeamName = team.teamName;
    }
  }

  return winningTeamName;
}

//console.log(winningTeam());

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";

  for (const teamKey in game) {
    const players = game[teamKey].players;

    for (const player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}

//console.log(playerWithLongestName());

function doesLongNameStealATon() {
  const game = gameObject();
  let longestName = playerWithLongestName();
  let mostSteals = 0;
  let topStealer = "";

  for (const teamKey in game) {
    const players = game[teamKey].players;

    for (const player in players) {
      const steals = players[player].steals;

      if (steals > mostSteals) {
        mostSteals = steals;
        topStealer = player;
      }
    }
  }

  return longestName === topStealer;
}

console.log(doesLongNameStealATon());



