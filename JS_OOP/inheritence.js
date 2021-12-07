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
    
    average (){
        return (this.first + this.second)/2;
    }

}



var kim = new personSecond('kim', 10, 20);
