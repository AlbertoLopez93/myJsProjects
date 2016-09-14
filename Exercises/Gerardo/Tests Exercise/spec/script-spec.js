function add(date, quantity, str) {
  const year = 365 * 24 * 60 * 60 * 1000;
  const quarter = 3 * 31 * 24 * 60 * 60 * 1000;
  const month = 31 * 24 * 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;
  if(!(date instanceof Date)) {
    return false;
  }
  if(typeof quantity !== 'number') {
    return false;
  }
  if(quantity + '' === 'Infinity') {
    return false;
  }
  if(quantity % 1 !== 0) {
    return false;
  }
  if(quantity < 0) {
    return false;
  }
  if(quantity + '' === 'NaN') {
    return false;
  }
  if(typeof str !== 'string') {
    return false;
  }
  switch(str) {
    case 'years':
      date.setMilliseconds(date.getMilliseconds() + year * quantity);
      return date;
    case 'quarters':
      date.setMilliseconds(date.getMilliseconds() + quarter * quantity);
      return date;
    case 'months':
      date.setMilliseconds(date.getMilliseconds() + month * quantity);
      return date;
    case 'days':
      date.setMilliseconds(date.getMilliseconds() + day * quantity);
      return date;
    case 'hours':
      date.setMilliseconds(date.getMilliseconds() + hour * quantity);
      return date;
    case 'minutes':
      date.setMilliseconds(date.getMilliseconds() + minute * quantity);
      return date;
    case 'seconds':
      date.setMilliseconds(date.getMilliseconds() + second * quantity);
      return date;
    case 'milliseconds':
      date.setMilliseconds(date.getMilliseconds() + quantity);
      return date;
    default:
      return false;
  }
}

function subtract(date, quantity, str) {
  const year = 365 * 24 * 60 * 60 * 1000;
  const quarter = 3 * 31 * 24 * 60 * 60 * 1000;
  const month = 31 * 24 * 60 * 60 * 1000;
  const day = 24 * 60 * 60 * 1000;
  const hour = 60 * 60 * 1000;
  const minute = 60 * 1000;
  const second = 1000;
  if(!(date instanceof Date)) {
    return false;
  }
  if(typeof quantity !== 'number') {
    return false;
  }
  if(quantity + '' === 'Infinity') {
    return false;
  }
  if(quantity % 1 !== 0) {
    return false;
  }
  if(quantity < 0) {
    return false;
  }
  if(quantity + '' === 'NaN') {
    return false;
  }
  if(typeof str !== 'string') {
    return false;
  }
  switch(str) {
    case 'years':
      date.setMilliseconds(date.getMilliseconds() - year * quantity);
      return date;
    case 'quarters':
      date.setMilliseconds(date.getMilliseconds() - quarter * quantity);
      return date;
    case 'months':
      date.setMilliseconds(date.getMilliseconds() - month * quantity);
      return date;
    case 'days':
      date.setMilliseconds(date.getMilliseconds() - day * quantity);
      return date;
    case 'hours':
      date.setMilliseconds(date.getMilliseconds() - hour * quantity);
      return date;
    case 'minutes':
      date.setMilliseconds(date.getMilliseconds() - minute * quantity);
      return date;
    case 'seconds':
      date.setMilliseconds(date.getMilliseconds() - second * quantity);
      return date;
    case 'milliseconds':
      date.setMilliseconds(date.getMilliseconds() - quantity);
      return date;
    default:
      return false;
  }
}

function deepReverse(array) {
  if(!Array.isArray(array)) {
    return false;
  }
  for(var i = 0; i < array.length; i++) {
    if(Array.isArray(array[i])) {
      array[i] = deepReverse(array[i]);
    }
  }
  return array.reverse();
}
