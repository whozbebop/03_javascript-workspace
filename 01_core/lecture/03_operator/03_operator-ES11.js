/**
 * 📌 ES11에 추가된 연산자
 * 1. null 병합 연산자 (??)
 *   1) nullish coalescing operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 때만 오른쪽 피연산자를 평가하여 반환
 *   3) 기존에 좌항이 falsy 값일 경우 오른쪽 피연산자를 평가했던 || 와 달리
 *      0, '', false 값은 유효한 값으로 처리함
 * 2. 옵셔널 체이닝 연산자 (?. 또는 ?[])
 *   1) optional chaining operator
 *   2) 좌항의 피연산자가 null 또는 undefined일 경우 undefined를 반환,
 *      그렇지 않으면 우항의 프로퍼티 참조를 이어감
 *   3) null 병합 연산자와 동일하게 0, '', false 값은 유효한 값으로 처리함
 *   4) 주로 객체의 프로퍼티 참조할때 사용
 */

// 1. null 병합 연산자 (??)
// 입력된 점수값이 존재하지 않을 경우 50점으로 대입
//const grade = 0 || 50; // 50
const grade = 0 ?? 50; // 0
//console.log(grade);

// 사용자 입력값(선택사항) 기록
//const input = "" || "hello";
const input = "" ?? "hello"; // null, undefined
console.log(input);

// 2. 옵셔널 체이닝 연산자

// 사용자가 입력한 문자열의 길이(문자열.length) 출력
// 'apple' => 5
// '' => 0
// null, undefined => undefined

let str = null; // 1) length
//console.log(str.length); // 1) length 프로퍼티에 바로 접근 : null일 경우 오류발생
// console.log(str && str.length); // 2) 단축평가(&&) 사용 : 빈문자열이 falsy 값으로 취급되서 length 값 확인 불가
console.log(str?.length);
