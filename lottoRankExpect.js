function solution(lottos, win_nums) {
  var answer = [];
  let min = 0;
  let add = 0;

  //최소 개수
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        min++;
      }
    }
  }
  console.log(min);

  //최대 개수
  for (let i = 0; i < lottos.length; i++) {
    //0값 채우기
    if (lottos[i] === 0) {
      add++;
    }
  }
  let max = min + add;
  console.log(add);
  console.log(max);
  //등수
  let rank = [1, 2, 3, 4, 5, 6, 6];
  answer[0] = rank[6 - max];
  answer[1] = rank[6 - min];

  return answer;
}
