class person {
    /* function 안씀 - 사족이라고 생각했나?
    대신 constructor 함수를 사용, 반드시. 
    클래스를 통해 객체를 만들 때 반드시 constructor를 실행하게 됨*/
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;

    }

    sum (){
        return this.first + this.second;
    }

}





var kim = new person();