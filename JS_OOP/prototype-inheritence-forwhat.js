var kim = {
    name:'kim',
    first:20, second:10,
    sum:function () {
        return this.first+this.second;
    }
}

var lee = {
    name:'lee',
    first:15, second:17,
    sum:function () {
        return this.first+this.second;
    }
}

lee.__proto__ = kim;
/* 이러면 lee라는 객체에 sum이라는 메서드가 없어도 사용할 수 있음 */
/* 그리고 lee에만 메서드를 추가하면 lee만 쓸 수 있는 기능도 생김 */

var lee = object.create(kim);
lee.name = 'lee';
lee.first = '15'
lee.second = '17';
lee.average = function () {
    return (this.first+this.second)/2
}
/* 라는 식으로도 사용할 수 있음 */
