import loadFile from "../utils/loadFile";

const processFile = async (): Promise<string> => {
  const filePath = "./day2/day2data.txt";
  try {
    const data = await loadFile(filePath);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const day2 = async () => {
  console.log("Day 2");
  let data: string;
  try {
    data = await processFile();
  } catch (error) {
    console.error("Error in day2:", error);
  }

  const badGames: number[] = [];
  const allGames: number[] = [];
  const powerOfCubes: number[] = [];

  interface cubeColours {
    [key: string]: number;
  }

  const cubeColourCount: cubeColours = {
    red: 12,
    green: 13,
    blue: 14,
  };

  // Split the string into lines
  const lines: string[] = data.split("\n");

  // Loop through each line
  for (const line of lines) {
    // Find the index of the colon
    const colonIndex: number = line.indexOf(":");
    if (colonIndex !== -1) {
      // Extract the part to the left of the colon
      const gameNumber: number = parseInt(
        line.substring(0, colonIndex).trim().replace("Game ", "")
      );

      const maxCounts = {
        "red": 0,
        "green": 0,
        "blue": 0
      };

      // Extract the part to the right of the colon (excluding the first space)
      const handfuls: string = line.substring(colonIndex + 1).trim();
      // Split the right part into an array of strings
      const handfulArray: string[] = handfuls.split(";");
      // Loop through each string in the array
      for (const handful of handfulArray) {
        // Split the string into an array of strings (cubes)
        const cubes: string[] = handful.split(",");
        // Loop through each cube
        for (const cube of cubes) {
          // trim the cube
          const trimmedCube: string = cube.trim();
          // get the number of cubes
          const cubeCount = parseInt(trimmedCube.match(/\d+/)[0], 10);
          // get the color of the cube
          const cubeColour = trimmedCube.match(/[a-zA-Z]+/)[0];

          if (cubeCount > maxCounts[cubeColour]) {
            maxCounts[cubeColour] = cubeCount;
          }

          if (cubeColourCount[cubeColour] < cubeCount) {
            badGames.push(gameNumber);
            // break;
          }
        }
        allGames.push(gameNumber);
      }
      powerOfCubes.push(maxCounts["red"] * maxCounts["green"] * maxCounts["blue"]);
    }
  }

  const removedDupesBadGames = [...new Set(badGames)];
  const goodGames = allGames.filter(
    (element) => !removedDupesBadGames.includes(element)
  );
  const removedDupesGoodGames = [...new Set(goodGames)];
  const sum = removedDupesGoodGames.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const sumOfPowerOfCubes = powerOfCubes.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  console.log("sum:", sum);
  console.log("sumOfPowerOfCubes:", sumOfPowerOfCubes);
};

export default day2;
