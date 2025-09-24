/**
 * 📌 연산자
 * 1. 산술 연산자
 *   1) 이항 연산자
 *   2) 종류
 *       → 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)
 *       → 제곱(**) => ES7에서 추가된 연산자
 * 2. 증감 연산자
 *   1) 단항 연산자
 *   2) 변수 값을 1씩 증가/감소
 *   3) 종류
 *       → 증가(++), 감소(--)
 * 3. 대입(할당) 연산자
 *   1) 오른쪽 값을 왼쪽 변수에 할당
 *   2) 종류
 *       → 대입(=)
 *       → 복합 대입(+=, -=, *=, **=, /=, %=)
 * 4. 비교 연산자
 *   1) 이항 연산자
 *   2) 두 피연산자를 비교하여 참/거짓을 반환
 *   3) 종류
 *       → 대소 비교(>, <, >=, <=)
 *       → 동등 비교(==, !=)
 *       → 일치 비교(===, !==)
 * 5. 논리 연산자
 *   1) 이항 연산자
 *   2) 두 논리값의 피연산자를 연산하여 참/거짓을 반환
 *   3) 종류
 *       → 논리 AND(&&), 논리 OR(||), 논리 NOT(!)
 * 6. 조건 연산자
 *   1) 삼항 연산자
 *   2) 조건식의 참/거짓 여부에 따라 반환값을 결정
 *   3) 작성법
 *       → [조건식] ? [true일 때 반환값] : [false일 때 반환값]
 * 7. 문자열 연결 연산자
 *   1) 문자열과 문자열을 연결하여 새로운 문자열을 반환
 *   2) 종류
 *       → 문자열 연결(+)
 *       → 문자열 연결 할당(+=)
 *
 * ‼️ 연산자 우선순위 (높은 순으로 나열)
 * 1) 괄호, 대괄호, 마침표(멤버 접근, 함수호출)
 * 2) 단항 연산자 : new, ++, --, !, +, -, typeof, delete 등
 * 3) 산술 연산자 : **   >   *, /, %   >   +, -
 * 4) 비교 연산자 : <, <=, >, >=, instanceof, in   >   ==, ===, !=, !==
 * 5) 논리 연산자 : &&   >   ||
 * 6) 조건(삼항) 연산자
 * 7) 대입 연산자 : =, +=, -=, *=, /=, %=, **=
 */

// 1. 산술연산자
console.log(10 + 10); // 덧셈(+), 뺄셈(-), 곱셈(*), 나눗셈(/), 나머지(%)

// 2, 증감연산자
let num = 10;
console.log(num); // 10
num++; // num = num + 1;
console.log(num); // 11
console.log(num++); // 선출력(11) 후증가(12)
console.log(num);
console.log(++num); // 선증가(13) 후출력(13)

// 3. 대입연산자
let num2 = 10; // 일반 대입
//num2 = num2 + 20;
num2 += 20; // 복합 대입
console.log(num2); //30
num2 -= 10; // 20
num2 *= 2; // 40
console.log(num2);

// 4. 비교연산자
// 1) 대소 비교
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 5); // true
console.log(10 <= 5); // false

// 2) 동등 비교
console.log(1 == 1); // true
console.log(1 == "1"); // true
console.log(1 == true); // true
console.log(0 == true); // false
console.log(1 != "1"); // false

// 동등비교 연산자는 피연산자의 타입을 일치시킨다음(자동형변환)에 비교
// 타입이 맞지 않아도 실질적인 값만 가지고 비교

// 3) 일치 비교
console.log(1 === 1); // true
console.log(1 === "1"); // false
console.log(1 === true); // false

// null, undefined
console.log(null == undefined); // true
console.log(null === undefined); // false

// NaN : 자기 자신과 일치하지 않는 유일한 값
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
// Number.isNaN 를 사용해서 비교
console.log(Number.isNaN(NaN)); // true

// 문자열간의 대소 비교 : 유니코드 순으로 비교
console.log("apple" < "banana"); // true

// 5. 논리 연산자
// 1) 논리 AND (&&)
// 논리값 && 논리값
// 두개의 논리값 모두 참(true)일때만 최종 참(true)을 반환
// 즉, 둘 중 하나라도 거짓(false)일 경우 최종적으로 거짓(false) 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // f

// num 변수가 1이상"이면서" 10이하인지 확인
console.log(num >= 1 && num <= 10); // f

// 2) 논리 OR (||)
// 논리값 || 논리값
// 두개의 논리값 중 하나라도 참(true)이라면 최종적으로 참(true) 반환
// 즉, 둘 다 거짓(false)이여야만 최종적으로 거짓(false) 반환
console.log(true || true); // t
console.log(true || false); // t
console.log(false || true); // t
console.log(false || false); // false

// num 변수가 3의 배수 거나 4의 배수 인지 확인
console.log(num % 3 === 0 || num % 4 === 0); // false

// 3) 논리 NOT (!)
// !논리값
// 즉, 참일 경우 거짓을 반환하고 거짓일 경우 참을 반환
console.log(!true); // f
console.log(!false); // t

// num 변수가 NaN 아니고 그리고 10이상인지 확인
console.log(!Number.isNaN(num) && num >= 10); // t

// 6. 삼항 연산자
console.log(num > 0 ? "양수" : "양수가 아니다");
console.log(num % 2 === 0 ? "짝수" : "홀수");

let isLoading = true;
console.log(isLoading ? "로딩중..." : "로딩 완료");

// 7. 문자열 연결 연산자
let str = "Hello" + "World";
console.log(str); // HelloWorld
str += "!!";
console.log(str); // HelloWorld!!
