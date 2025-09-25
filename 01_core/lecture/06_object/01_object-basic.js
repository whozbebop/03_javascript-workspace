/**
 * 📌 Object
 * 1. JavaScript 데이터 유형 중 하나
 * 2. 데이터와 함수(메소드)를 하나로 묶어 관리할 수 있는 자료구조
 * 3. 데이터가 저장되는 순서는 관리하지 않음
 * 4. 객체를 구성하는 하나의 데이터는 속성(property): 값(value) 조합으로 구성됨
 *   1) 속성(property, 프로퍼티): 문자열 또는 심볼
 *   2) 값(value): 문자열, 숫자, boolean, 배열, 다른 객체, 함수 등 모든 타입 가능
 * 5. 각 데이터들은 쉼표(comma)로 구분하며, trailing comma(후행 쉼표)를 사용할 수 있음
 * 6. 객체 생성 방법
 *   1) 객체 리터럴  => 메이저 방식
 *   2) Object 생성자 함수
 *   3) 생성자 함수
 *   4) Class(ES6)
 */

// * 객체 리터럴({}로 정의)
// let personName = "이름";
// let personAge = 10;
// let personHobby = [];
let person = {
  // 키 : 값 쌍으로 구성된 프로퍼티의 집합
  name: "홍길동",
  age: 20,
  hobbies: ["게임", "여행"],
  home: {
    address: "서울",
    phone: "02-123-4567", // 후행 쉼표
  },
  getInfo: function () {
    return `${this.name}은(는) ${this.age}세 입니다.`;
  },
};

//console.log(person.getInfo());
//console.log(typeof person);

/**
 * 📌 프로퍼티
 * 1. 프로퍼티 키(key)
 *   1) 프로퍼티 값에 접근하기 위한 식별자
 *   2) 문자열이므로 따옴표 사용가능하지만 식별자 네이밍 규칙을 따르는 경우 사용안해도됨
 *   3) 단, 식별자 네이밍 규칙을 따르지 않는 이름은 따옴표를 반드시 사용해야됨
 * 2. 프로퍼티 값(value)
 *   1) 자바스크립트에서 취급할 수 있는 모든 값 허용
 *   2) 각 자료형에 맞는 형식대로 작성해야됨
 *   3) 함수(function)을 프로퍼티 값으로 작성시 해당 객체의 메소드로 칭함
 * 3. 프로퍼티 접근
 *   1) 마침표 표기법 (dot notation)
 *       → 객체.프로퍼티명
 *   2) 대괄호 표기법 (square bracket notation)
 *       → 객체['프로퍼티명']
 */

const obj = {
  // 식별자 네이밍 규칙
  normal: "normal case",
  "s pace": "space use",
  "test!": "special use",
  number1: "number use",
  "1number": "number use",
  //normal: "new value",
};

// 마침표 표기법
//console.log(obj.normal);

//대괄호 표기법
//console.log(obj["normal"]);
//console.log(obj["s pace"]);

/*
  * 메소드 
  1) 객체 내에 프로퍼티로 함수를 할당시 메소드라고 함
  2) 자바스크립트에서는 함수도 하나의 값으로 취급하므로 
     프로퍼티 값으로 함수를 할당할 수 있음 
*/
const movie = {
  title: "F1 더 무비",
  "title en": "F1",
  showTm: 155,
  openDt: "2025/06/25",
  status: "개봉",
  printActor: (flag) => {
    if (flag === "주연") {
      //console.log("브래드 피트");
    } else if (flag === "조연") {
      //console.log("하비에르 바르뎀");
    }
  },
  toString: function () {
    // 메소드 내에서 현 객체의 프로퍼티 참조할 경우 this. 활용 해야됨
    // 화살표 함수에서는 this가 객체로 바인딩 되지 않음
    return `제목: ${this.title}, 상영시간: ${this.showTm}, 개봉일: ${this.openDt}`;
  },

  // toString: () => {
  //   return `제목: ${movie.title}, 상영시간: ${movie.showTm}, 개봉일: ${movie.openDt}`;
  // },
};

movie.printActor("주연");
movie.printActor("조연");

//console.log(movie.toString());

/*
  * 프로퍼티 조작
  1) 프로퍼티 추가 및 수정 (새로운 프로퍼티일 경우 추가, 기존 프로퍼티일 경우 수정)
      → 객체.프로퍼티명 = 값
      → 객체['프로퍼티명'] = 값
  2) 프로퍼티 삭제
      → delete 객체.프로퍼티명
      → delete 객체['프로퍼티명']
*/

movie.nation = "미국";
movie["title en"] = "F1 The Movie";
movie.status = "상영종료";

delete movie.showTm;

//console.log(movie);

/*
  * 프로퍼티/값 반환 메소드 
  1) Object.keys(객체) : 객체의 모든 프로퍼티 키를 배열로 반환
  2) Object.values(객체) : 객체의 모든 프로퍼티 값을 배열로 반환
  3) Object.entries(객체) : [키, 값] 쌍의 배열로 반환
*/

//console.log(Object.keys(movie));
//console.log(Object.values(movie));
//console.log(Object.entries(movie));

/*
  * in 연산자 
  1) 특정 객체 내에 특정 프로퍼티가 존재하는지 여부를 확인할 수 있는 연산자
  2) 사용법
      → '프로퍼티명' in 객체 : 객체 내에 해당 프로퍼티가 존재하면 true, 존재하지 않으면 false
*/

//console.log("status" in movie);
//console.log("test" in movie);

//"title" in movie && console.log(movie.title);

// for...in문
//1. 객체가 가지고 있는 프로퍼티명(ket=y)음 임의의 순서를 순차적으로 변화

//for (프로퍼티명(key)를 담을 변수 ) in
for (const key in movie) {
  console.log(movie[key]);
}
