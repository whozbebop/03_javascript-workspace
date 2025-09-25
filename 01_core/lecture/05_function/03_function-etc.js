/**
 * 📌 즉시 실행 함수
 * 1. 함수 정의와 동시에 즉시 호출되는 함수로 단 한번만 실행되며 다시 호출 할 수 없음
 * 2. 정의한 함수를 ()-그룹연산자 로 감싼 후 ()을 붙여 실행
 * 3. 익명 함수를 사용하는게 일반적임
 * 4. 기명 함수도 가능하긴 하나 해당 이름으로 다시 재호출은 불가
 */

(function () {
  console.log("익명함수 즉시실행! 함수 정의와 동시에 호출");
})();

(function () {
  let name;
})();

// 함수내에 코드를 모아두면 변수 충돌이나 의도치 않은 값 변경을 최소화 시킬 수 있음

/**
 * 📌 중첩 함수
 * 1. 함수 내부에서 정의된 함수를 중첩함수 또는 내부함수라고 함
 * 2. 중첩함수를 포함하는 함수는 외부함수라고 함
 * 3. 일반적으로 중첩함수는 자신을 포함하는 외부함수를 돕는 헬퍼함수의 역할을 함
 * 4. 외부함수는 내부함수 변수를 사용할 수 없음
 *    단, 내부함수는 외부함수의 변수를 사용할 수 있음
 */

// 외부함수 - a
function fnOuter(a) {
  console.log("외부함수", a); // b 내부함수 변수 사용할 수 없음

  fnInner(a + 1); // 외부함수의 스코프 안에서만 최상단으로 호이스팅

  // 내부함수 - b
  function fnInner(b) {
    console.log("내부함수", a, b);
  }
}

fnOuter(10);

/**
 * 📌 콜백 함수
 * 1. 인자로 다른 함수에 전달되서 실행되는 함수
 * 2. 콜백함수를 전달받은 함수는 고차함수 라고 함
 * 3. 즉, 콜백함수는 고차함수에 전달되어 헬퍼함수의 역할을 함
 *
 * a 함수를 전달받은 b 함수는 본문에서 전달받은 a 함수를 다시 호출해야되므로 callback이라 함
 * a 함수 == 콜백함수
 * b 함수 == 고차함수
 */

function increase(value) {
  // 전달값을 1증가 시켜주는 함수
  return value + 1;
}

function decrease(value) {
  // 전달값을 1감소 시켜주는 함수
  return value - 1;
}

// 예시1) 경우에 따라 특정 값을 증가 또는 감소 시켜줘야됨
// 변화시킬 값을 전달받아서 상황에 따라 변화를 주도록 적용시켜주는 함수

function apply(value, func) {
  // value = 값; function 실행시킬함수
  return func(value);
}

// 특정 값을 1 증가시키고 싶음
console.log(5, increase);

// 특정 값을 1 감소 시키고 싶음
console.log(5, decrease);

// 특정 값을 2배 증가
console.log(apply(5, (a) => a * 2));
console.log(apply(3, (a) => a * 3));

// 예시2) 로그인 처리시 아이디/비번/이메일/토큰 중에 두개를 체크해야된다고 가정
const idCheck = () => console.log("아이디 체크 로직 실행");
const pwdCheck = () => console.log("비번 체크 로직 실행");
const emailCheck = () => console.log("이메일 체크 로직 실행");
const tokenCheck = () => console.log("토큰 체크 로직 실행");

// 로그인 처리용 함수 정의 (매번 경우에 따라서 체크해야될 두개의 함수 콜백함수로 전달받기)
const login = (check1, check2) => {
  console.log("로그인 공통 로직 먼저 실행");
  // 검증을 위한 두개의 함수 실행
  check1();
  check2();
};

login(idCheck, pwdCheck);
login(emailCheck, pwdCheck);
