// //////////////////tsc -w app.ts//////////////////////
const button = document.querySelector('button');
const input1 = document.getElementById('num1')! as HTMLInputElement;
const input2 = document.getElementById('num2')! as HTMLInputElement;

function add(num1:number,num2:number){
    return num1+num2
}

button.addEventListener('click', function(){
    console.log(add(+input1.value, +input2.value))
});
// ////////////////////////////////////////////////////////////////////

// let num: number;
// num = 1;

// let str: string;
// str = 'string';

// let bool: boolean;
// bool = true;

// const person = "Max";
// ////////////////////////////////////////////////////////////////////
// let arr: any[] = [];
// arr = [1,"str", true];

// let arrNumber:number[]=[];
// arrNumber= [1,2,3];

// let arrString:string[]=[];
// arrString= ['string','name'];

// let arrObject: {name:string}[];
// arrObject=[{name:'Alex'},{name:'Mike'}];
// ////////////////////////////////////////////////////////////////////

// // let obj:object;
// let obj: {
//   name: string;
// };
// obj = { name: "Alex" };
// obj.name;
// ////////////////////////////////////////////////////////////////////
// let db:{
//     id:number;
//     title:string;
//     info?:{
//         date: Date;
//         isNew:boolean;
//     }
// };

// db={
//     id:1,
//     title:"new product",
//     info:{
//         date: new Date,
//         isNew:true
//     }
// };
// ////////////////////////////////////////////////////////////////////
// let some : any;
// some = 1;
// some = "stringgggggggggg";
// some ={name:"Alex",age:33}
// ////////////////////////////////////////////////////////////////////
// let some : any;
// some ={name:"Alex",age:33}
// let num:number;
// num = some;
// ////////////////////////////////////////////////////////////////////
// let some: unknown;
// some = 10;
// some = "stringgg";
// let str: string;
// if (typeof some === "string") {
//     str = some;
// };
// ////////////////////////////////////////////////////////////////////
// let fixed: [string,number];
// fixed = ['str', 10];
// fixed.push('new')
// fixed.pop();
// ////////////////////////////////////////////////////////////////////
// enum Toggle {ENABLE, DISABLE, PENDING};

// const service = {
//     status: Toggle.ENABLE
// };
// if(service.status === Toggle.ENABLE){
//     console.log('it is active');
// }
// ////////////////////////////////////////////////////////////////////
// let union : number | string | boolean;

// union = 10;
// union = 'string';
// union = true;

// function combine (param1: string|number, param2: string|number){
//     if ( typeof param1==='string'|| typeof param2==='string'){
//         return param1.toString() + param2.toString();
//     }
//     return param1 + param2;
// }
// console.log(combine ('this is ', 'string'));
// console.log(combine (2, 2));
// ///////////////////////////////////////////////////////////////
// const fruit:string[] = [];
// function workWithArr( arr:string[], value:string, action:'add'|'delete'){
//     if (action==='add'){
//         arr.push(value)
//     }else{
//         const index = arr.indexOf(value);
//         arr.splice(index,1);
//     }
//     return arr;
// }
// workWithArr(fruit,'Banana', 'add');
// workWithArr(fruit,'Melon', 'add');
// workWithArr(fruit,'Pear', 'add');
// workWithArr(fruit,'Pear', 'delete');
// console.log(fruit)
// ///////////////////////////////////////////////////////////////
// function print(): void {
//     console.log('some log')
// }

// function combine(num1:number, num2: number): number{
//     return num1 + num2;
// }
// function customEror (): never {
//     throw new Error('Some error');
// }

// function createServerPersone(name:string){
//     return eval(`
//     (()=>{
//         return{
//             name:'$(name)'
//         }
//     })()
//     `);
// }
// function createPersone(name:string){
//     return createServerPersone(name)
// }
// const persone = createPersone('Alex');
// console.log(persone);