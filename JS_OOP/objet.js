var memberArray = ['kim','lee','park'];
/* 목록만 만들 때는 배열 하나 쓰면 된다. */

/* 설명 같은 연관되는 내용을 함께 묶고 싶다면? */
var memberObject = {
    master : 'kim',
    server : 'lee',
    defender : 'pakr'
}

console.log(memberObject.master);
/* 배열은 [] 통해서도 접근할 수 있음 */
console.log(memberObject['master']);

memberObject.defender = 'park';

delete memberObject.defender;
