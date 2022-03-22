// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
// 입출력 예
// numbers	return
// [6, 10, 2]	"6210"
// [3, 30, 34, 5, 9]	"9534330"

const numbers = [3, 30, 34, 5, 9, 340, 92, 300, 1, 920];

function solution(numbers) {
  let result = "";
  let number = numbers
    .map((value) => value.toString().split(""))
    .sort()
    .reverse();
  // .sort((a, b) => a.length - b.length);
  console.log(number);

  for (let i = 0; i < number.length - 1; i++) {
    if (
      number[i].length > number[i + 1].length &&
      number[i][number[i].length - 1] < number[i + 1][0] &&
      number[i].slice(0, number[i].length - 1).toString() ===
        number[i + 1].toString()
    ) {
      [number[i], number[i + 1]] = [number[i + 1], number[i]];
      i--;
    }
  }

  number.forEach((value) => (result += value.join("")));
  console.log(number);
  console.log(result);
  return result;
}

solution(numbers);
