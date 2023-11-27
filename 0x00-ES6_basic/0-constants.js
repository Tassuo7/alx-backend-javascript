export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  const c = ' is okay';
  return c;
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
