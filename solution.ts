

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



function getLength(value:string | any[]): number{
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return value;
}



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



 interface User {
    id : number ;
    name : string ;
    email : string ;
    isActive : boolean ;
 }
 function filterActiveUsers (users : User[] ): User[]{
    return users.filter(user => user.isActive === true);
 }




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




function getUniqueValues (array1 : (string | number) [] , array2 : (string | number) []) {
    const result : (string | number)[] = [] ;
    let resultIndex = 0 ;
    function exists ( value : string | number ) : boolean {
        for (let index = 0; index < resultIndex; index++) {
            if (result[index] === value) {
                return true ;
            } 
        }
        return false ;
    }
    for (let index = 0; index < array1.length; index++) {
       if ( !exists (array1[index])) {
        result[resultIndex] = array1[index];
        resultIndex++ ;
       } ; 
    }
     for (let index = 0; index < array2.length; index++) {
       if ( !exists (array2[index])) {
        result[resultIndex] = array2[index];
        resultIndex++ ;
       } ; 
    }
    return result ;
}



type Product = {
    name : string ;
    price : number ;
    quantity : number ;
    discount ? : number ;
};
function calculateTotalPrice  (products : Product []) : number {
    if (products.length === 0) {
        return 0;
    }
    return products 
    .map ((product) => {
        const total = product.price * product.quantity;
        return product.discount !== undefined ? total - ( total * product.discount)/100 : total ;
    })
    .reduce((sum, productTotal) => sum + productTotal, 0);
}


