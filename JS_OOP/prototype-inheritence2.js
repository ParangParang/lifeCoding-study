var superObj = {superVal:'super'}
/* var subObj = {subVal:'sub'}
subObj.__proto__ = superObj; */
var subObj = Object.create(superObj);

/*새로운 객체가 superObj를 부모로하는 객체다*/


console.log('subObj.subVal :', subObj.subVal);
console.log('superObj.subVal :', subObj.superVal);

subObj.superVal = 'sub';

console.log('superObj.subVal :', subObj.superVal);
