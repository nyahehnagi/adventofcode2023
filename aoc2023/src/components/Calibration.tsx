
type CalibrationProps = {
  calibration: string[];
};

const Calibration = ({ calibration }: CalibrationProps) => {

  const parseDigitValue = (value: string): number => {
    if (/^\d$/.test(value)) {
      return parseInt(value, 10);
    } else {
      const writtenNumberMap: Record<string, number> = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
      };
      return writtenNumberMap[value];
    }
  };

  const findFirstDigit = (str: string) => {
    const combinedRegex = /\d|(one|two|three|four|five|six|seven|eight|nine)/i;
  
    const firstMatch = str.match(combinedRegex);

    if (firstMatch) {
      const firstDigit = firstMatch[0] !== undefined ? parseDigitValue(firstMatch[0]) : null;
      return { firstDigit };
    }
  
    return { firstDigit: null };
  };

  const findLastDigit = (str: string) => {
    const combinedRegex = /\d|(one|two|three|four|five|six|seven|eight|nine)/gi;

    // Use matchAll to get an iterable of matches
    const matches = Array.from(str.matchAll(combinedRegex));

    // Get the last match
    const lastMatch = matches.length > 0 ? matches[matches.length - 1] : null;

    // Check if there was any match
    if (lastMatch) {
      // Use it as the lastDigit
      const lastDigit =
        lastMatch[0] !== undefined ? parseDigitValue(lastMatch[0]) : null;
      return { lastDigit };
    }
    // Return null if there are no matches in the string
    return { lastDigit: null };

  };

  const processedCalibration = calibration.map((item) => {

    const combinedNumber = parseInt(
      `${findFirstDigit(item).firstDigit}${findLastDigit(item).lastDigit}`
    );
    return combinedNumber;
  });

  const sum = processedCalibration.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <div>
      Calibration Values are {sum}
      <br />
    </div>
  );
};

export default Calibration;
