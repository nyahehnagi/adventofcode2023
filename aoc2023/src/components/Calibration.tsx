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
      const firstDigit =
        firstMatch[0] !== undefined ? parseDigitValue(firstMatch[0]) : null;
      return { firstDigit };
    }

    return { firstDigit: null };
  };

  const findLastDigit = (str: string) => {
    let lastDigit = null;
  
    for (let i = str.length - 1; i >= 0; i--) {
      const writtenNumber3 = str.slice(i - 2 < 0 ? 0 : i - 2, i + 1);
      const writtenNumber4 = str.slice(i - 3 < 0 ? 0 : i - 3, i + 1);
      const writtenNumber5 = str.slice(i - 4 < 0 ? 0 : i - 4, i + 1);
  
      if (/one|two|six/i.test(writtenNumber3)) {
        lastDigit = parseDigitValue(writtenNumber3);
        break;
      } else if (/four|five|nine/i.test(writtenNumber4)) {
        lastDigit = parseDigitValue(writtenNumber4);
        break;
      } else if (/three|seven|eight/i.test(writtenNumber5)) {
        lastDigit = parseDigitValue(writtenNumber5);
        break;
      } else if (/\d/.test(str[i])) {
        lastDigit = parseInt(str[i], 10);
        break;
      }
    }
  
    return { lastDigit };
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
