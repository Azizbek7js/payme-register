const person_name: HTMLInputElement  = document.querySelector("#name")!
const email :HTMLInputElement = document.querySelector("#email")!  
const telNumber:HTMLInputElement = document.querySelector("#tel-login")!  
const password :HTMLInputElement= document.querySelector("#password")!

const btn = document.querySelector(".btn") as HTMLButtonElement



class Registers {
    constructor(public name : string , public email : string , public tel : string , public password : string ){}
}




btn?.addEventListener("click" , ()=> {
    let box =new Registers(person_name.value , email.value , telNumber.value , password.value)
    console.log(box);
    
} )



