var memberArray = ['kim','lee','park'];

/* while을 이용한 반복문, for을 이용한 반복문의 차이 */

var i = 0;
while (i < memberArray.length){
    console.log(i, memberArray[i]);
    i = i + 1 ;
} 

var memberObject = {
    master : 'kim',
    server : 'lee',
    defender : 'pakr'
}

/* for in 문이라고 불림 in 뒤에는 for을 적용할 객체, in 앞에는 순서대로 들어올 원소를 변수로 지정*/
for (var name  in memberObject){
    console.log(name, memberObject[name]);
}