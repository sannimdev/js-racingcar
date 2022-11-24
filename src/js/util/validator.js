import { removeSpaces } from './string.js ';

/**
 * @typedef IsMetNamesLengthArgument
 * @property {string} name
 * @property {?number} minLength
 * @property {?number} maxLength
 */

/**
 *
 * @param {string[]} names
 * @returns {boolean}
 */
export const isEmptyNames = (names) => names.length === names.filter((name) => !!removeSpaces(name)).length;

/**
 *
 * @param {IsMetNamesLengthArgument} isMetNamesLengthArgument
 * @returns {boolean}
 */
export const isMetNamesLength = ({ name, minLength, maxLength }) => {
  const { length } = name;
  return !((minLength && minLength > length) || (maxLength && maxLength < length));
};

/**
 *
 * @param {number} minLength
 * @param {number} maxLength
 * @returns {number}
 */
export const generateNumber = (minLength = 0, maxLength = Number.MAX_SAFE_INTEGER) => {
  return Math.floor(Math.random() * (maxLength + 1)) + minLength;
};
