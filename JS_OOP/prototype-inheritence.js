var superObj = {superVal:'super'}
var subObj = {subVal:'sub'}

/* javascript는 서로 관계가 없는 클래스가 아닌 객체를 다른 객체의 자식으로 만들 수 있음 */

subObj.__proto__ = superObj;

console.log('subObj.subVal :', subObj.subVal);
console.log('superObj.subVal :', subObj.superVal);

/* 위 로그는 sub, 아래는 subObj 객체가 super를 가리키게 됨 */

subObj.superVal = 'sub';
/* 자손 객체에서 조상 객체의 값을 바꿀 수 있을까? */

console.log('superObj.subVal :', subObj.superVal);

/* 바꿀 수 없음 */