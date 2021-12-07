var kim = { name : 'kim', first : 10, second : 20}
var lee = { name : 'lee', first : 15, second : 17}

function sum(prefix) {
        return prefix + this.first + this.second;
}
/* sum이라는 함수가 독립적으로 존재하고 있음 */


/* sum이라는 객체를 실행시킨다 = sum(); 과 같음 
그런데 js에서 function은 객체이고, 모든 함수는 call이라는 method를 가지고 있음 */
sum.call(kim);
/* this를 kim으로 하여 sum 함수를 실행 - kim의 멤버인 메소드처럼 사용 */

sum.call(lee, ' = ');
/* 매개변수에 넣을 인자도 사용할 수 있음 */

/* 유사품 apply 있음. 형식이 다르고 거의 비슷함 */

var kimSum = sum.bind(kim, ' = ');
/* this를 kim으로 하는 새로운 함수를 만듬 */
