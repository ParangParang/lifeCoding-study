class person{
   
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum (){
        return this.first + this.second;
    }
}


class personSecond extends peson{
    
    constructor(name, first, second, third, fourth){
        super(name, first, second);
        this.third = third;
        this.fourth = fourth;
    }
    sum (){
        return super.sum() + this.third + this.fourth;
    }

    average (){
        return this.sum()/2;
    }

}



var kim = new personSecond('kim', 10, 20);
