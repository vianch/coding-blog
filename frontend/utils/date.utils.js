import moment from 'moment';

const USFormat = 'MMMM Do, YYYY';

export const timeStampToDate = (dateTimestamp) =>
  `${moment.unix(dateTimestamp).format(USFormat)}`;
