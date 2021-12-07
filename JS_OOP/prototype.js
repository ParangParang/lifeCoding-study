
function person (name, first, second){
    this.name = name;
    this.first = first;
    this.second = second;

}



person.prototype.sum = function(){
    return this.first + this.second;
}


var kim = new person ('kim' , 10, 20);
kim.sum = function () {
	return this.first - this.second;
}
