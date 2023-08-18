var person_name = document.querySelector("#name");
var email = document.querySelector("#email");
var telNumber = document.querySelector("#tel-login");
var password = document.querySelector("#password");
var btn = document.querySelector(".btn");
var Registers = /** @class */ (function () {
    function Registers(name, email, tel, password) {
        this.name = name;
        this.email = email;
        this.tel = tel;
        this.password = password;
    }
    return Registers;
}());
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    var box = new Registers(person_name.value, email.value, telNumber.value, password.value);
    console.log(box);
});
