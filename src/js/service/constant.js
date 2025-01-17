export const ALERT_MESSAGE = {
  INVALID: {
    CAR_NAMES_LENGTH: '자동차의 이름은 1~5자까지만 가능합니다',
    ATTEMPT_TIMES: '시도 횟수를 1회 이상으로 입력하세요',
    DUPLICATED_CAR_NAMES: '자동차의 이름은 중복될 수 없습니다',
  },
  GAME: {
    FINALIZED: '🎇🎇🎇🎇축하합니다!🎇🎇🎇🎇',
  },
};

export const CAR_RACING = {
  RACING_SPEED: 1000,
  DELAY_FOR_ALERT_MESSAGE: 2000,
  CAR_NAMES: {
    MIN_LENGTH: 1,
    MAX_LENGTH: 5,
    DELIMITER: ',',
    VICTOR_DELIMITER: ', ',
  },
  CAR: {
    CONDITION: {
      FORWARD: 4,
      STOP: 3,
    },
  },
  RANDOM_VALUE: {
    MIN: 0,
    MAX: 10,
  },
  ATTEMPT_TIMES: {
    MIN: 1,
  },
};
