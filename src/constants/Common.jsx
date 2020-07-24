import moment from 'moment';

export const checkIsPremiumMember = (user) => {
  const createdAt = moment(user.createdTime);
  const today = moment(new Date());
  const diff = today.diff(createdAt, 'days');
  if (user.membership === 0 && diff > 14) {
    return false;
  } else if (user.membership === 0 && diff < 15 && (!user.cardInfo || user.cardInfo === '')) {
    return false;
  } else {
    return true;
  }
}