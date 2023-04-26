function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let what = 0;

  lottos = lottos.sort();
  win_nums = win_nums.sort();

  for (let i = 0; i < win_nums.length; i++) {
    if (lottos[i] == 0) what++;

    if (lottos.includes(win_nums[i])) count++;
  }
  if (what == 6) {
    return [1, 6];
  }
  if (what == 0 && count == 0) {
    return [6, 6];
  }
  if (count + what >= count) {
    return [6 - (count + what) + 1, 6 - count + 1];
  } else return [6 - count + 1, 6 - (count + what) + 1];
}
