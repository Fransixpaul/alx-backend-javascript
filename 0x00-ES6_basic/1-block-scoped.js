export default function taskBlock(trueOFalse) {
  var task = false;
  var task2 = true;

  if (trueOFalse) {
    let task = true;
    let task2 = false;
  }

  return [task, task2];
}