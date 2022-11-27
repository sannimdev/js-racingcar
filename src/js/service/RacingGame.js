import { CAR_RACING } from './constant.js';
import { generateNumber } from '../util/validator.js';
// eslint-disable-next-line no-unused-vars
import { Car } from './Car.js';

/**
 *
 * @param {string[]} carNames
 * @param {number|string} attetmptTimes
 * @returns {function}
 */
export const RacingGame = (carNames, attemptTimes) => {
  const cars = carNames.map((carName) => new Car(carName));
  const times = Number(attemptTimes);
  let winnerMovedDistance = 0;
  return () => {
    for (let i = 0; i < times; i++) {
      cars.forEach((car) => car.moveForward(generateNumber(CAR_RACING.RANDOM_VALUE.MIN, CAR_RACING.RANDOM_VALUE.MAX)));
    }
    winnerMovedDistance = Math.max(...cars.map((car) => car.getMovedDistance()));
    return cars.filter((car) => car.getMovedDistance() === winnerMovedDistance);
  };
};