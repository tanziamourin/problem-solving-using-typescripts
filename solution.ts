// problem -- 1

function formatValue (value: string| number| boolean) :  string | number| boolean {
    if(typeof value === "string"){
        return value.toUpperCase();
    }
    if(typeof  value === "number"){
        return value * 10;
    }
    if(typeof value === "boolean"){
        return  !value;
    }
    return value

}

// problem -- 2

function getLength(value:string | any[]): number{
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return value;
}


// problem -- 3
class Person {
    name: string;
    age: number;

    constructor(name:string , age:number){
        this.name =  name;
        this.age = age;
    }
    getDetails(){
        return `Name : ${this.name} ,  Age : ${this.age}`
    }
}


// problem -- 4

interface BookItem {
    title :  string ;
    rating : number ;
}
function filterByRating (bookItems : BookItem[]): BookItem[]{
    return bookItems.filter(i => i.rating >= 4);

}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

// problem -- 5
// problem -- 6
// problem -- 7
// problem -- 8
