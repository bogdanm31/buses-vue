import { timeUnits } from '@/utils/constants/time';

const useTimestamp = () => {
  const toUnits = (num, excludeUnits = ['s']) => {
    let index = 0;
    const data = timeUnits.map((item) => ({
      ...item,
      value: 0,
    }));

    while (num > 0) {
      const t = num % 60;
      data[index].value = t;
      num -= t;
      num /= 60;
      index++;
    }

    return data.reverse().filter((unit) => !excludeUnits.includes(unit.symbol));
  };

  const toClockString = (num) => {
    const data = toUnits(num);

    return data
      .map((unit) => (unit.value < 10 ? '0' : '') + unit.value)
      .join(':');
  };

  const toTimeString = (num) => {
    const data = toUnits(num);

    return data
      .filter((unit) => !!unit.value)
      .map(
        (unit) =>
          `${unit.value} ${
            unit.value === 1 ? unit.name.singular : unit.name.plural
          }`
      )
      .join(' ');
  };

  return {
    toClockString,
    toTimeString,
    toUnits,
  };
};

export { useTimestamp };
