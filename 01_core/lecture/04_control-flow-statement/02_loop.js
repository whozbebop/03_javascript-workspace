/**
 * 📌 반복문
 * 1. 코드 블럭을 여러 번 반복 실행하는 역할
 * 2. 종류 및 작성법
 *   1) while문
 *      → 조건이 참인 동안 반복 실행
 *         while(조건식) {
 *           조건이 참일 경우 실행할 구문;
 *         }
 *   2) do-while문
 *      → 코드 블럭을 최소 한 번 실행하고 조건 검사
 *         do {
 *           코드 블럭을 최소 한 번 실행;
 *         } while(조건식);
 *   3) for문
 *      → 특정 횟수 만큼 반복 실행
 *         for(초기식; 조건식; 증감식) {
 *           조건이 참일 경우 실행할 구문;
 *         }
 */

// 1. while문
// "안녕하세요" 5번 출력
let count = 0;
while (count < 5) {
  //count = 0, 1, 2, 3, 4 일 경우
  console.log("안녕하세요");
  count++;
}

// 1 ~ 10 까지 1씩 증가되는 값 출력 (1, 2, 3, ...,10)
let n = 1;
while (n <= 10) {
  console.log(n++);
}

// 2. do-while문
// "안녕하세요"를 사용자가 입력한 숫자만큼 반복 출력
// 단, 사용자가 입력한 값이 양수가 아닐 경우 적어도 한번은 출력되도록
let input = 5;
let num = 0;
//while (num < input) {
// num = 0 ~ input-1
//console.log("안녕");
//num++;
//}
do {
  console.log("안녕");
  num++;
} while (num < input);
/*
  * for문 
  1. while문에 비해 가독성이 좋음 
  2. 반복해서 사용할 값의 범위가 명확하거나, 반복횟수가 정해져있을 경우 사용 권장
  3. 세가지 구문(초기식, 조건식, 상태변화)로 반복횟수 결정 
  4. 용어 정리 
    1) 초기식 : 반복문이 수행될 때 최초에 단 한번 실행되는 구문
                 → 주로 반복문 안에 사용될 변수를 선언 및 초기화 
    2) 조건식 : 반복문이 수행될 조건을 작성하는 구문 
                 → 주로 초기식에 제시된 변수를 가지고 조건식 작성 
    3) 증감식 : 반복문이 수행될 때 마다 증가하는 구문
                 → 주로 반복문을 제어하는 변수값(초기식변수)을 변화시킴

  for(초기식; 조건식; 증감식) {
    반복적으로 실행할 구문
  }

  // "Hello 5회 반복 출력"
*/

for (let i = 1; i <= 5; i++) {
  console.log("Hello");
}

// Tip. for(let i = 0; i < 반복횟수; i++)

// 10개의 집이 있다고 가정)00()
// for (;;) {}
for (let i = 0; i < 10; i++) {
  console.log(`${i}번지`);
}

// 여러 요소들에 순차적으로 접근할 때 많이 사용
/* 
  문자열 == 여러 문자들이 조합된 집합체
  "apple" == "a" "p" "p" "l" "e"
  (인덱스) 01234

  문자열.charAt(인덱스) => 문자열의 해당 인덱스위치의 문자 반환
  apple.charAt(0) => "a"
  apple.charAt(1) => "p"
    ....
  apple,charAt(4) => "e"

  * 마지막인덱스 : 문자열의 길이(.length) - 1
*/

// 문자열의 각 문자들을 순차적으로 출력
const fruit = "strawberry";
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit.charAt(i));
}

for (let r = 1; r <= 4; r++) {
  let stars = "";
  for (let c = 1; c <= r; c++) {
    stars += "*";
  }
  console.log(stars);
}

let nn = 5;
while (nn > 0) {
  console.log(nn);
  nn--;
}
