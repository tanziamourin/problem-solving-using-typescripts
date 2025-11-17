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
        return `'Name : ${this.name} ,  Age : ${this.age}'`;
    }
}


// problem -- 4

interface BookItem {
    title :  string ;
    rating : number ;
}
function filterByRating (books : BookItem[]): BookItem[]{
    return books.filter(book => book.rating >= 4);

}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];


// problem -- 5
 interface User {
    id : number ;
    name : string ;
    email : string ;
    isActive : boolean ;
 }
 function filterActiveUsers (users : User[] ): User[]{
    return users.filter(user => user.isActive === true);
 }



// problem -- 6

interface Book {
    title : string ;
    author : string ;
    publishedYear :  number ;
    isAvailable : boolean ;
}
function printBookDetails (book : Book) : void {
    const availability = book.isAvailable ? "yes" : " no" ;
    console.log(`Title : ${book.title} , Author : ${book.author} , Published : ${book.publishedYear}` ) ;
}


// problem -- 7

function getUniqueValues (array1 : (string | number) [] , array2 : (string | number) []) {

    const result : (string | number)[] = [] ;
    function exists ( value : string | number ) : boolean {
        for (let index = 0; index < result.length; index++) {
            if (result[index] === value) {
                return true ;
            }
            
        }
        return false ;
    }


    for (let index = 0; index < array1.length; index++) {
       if ( !exists (array1[index])) {
        result.push(array1[index]) ;
       } ;
        
    }

     for (let index = 0; index < array2.length; index++) {
       if ( !exists (array2[index])) {
        result.push(array2[index]) ;
       } ;
        
    }
    return result ;
}

// problem -- 8
