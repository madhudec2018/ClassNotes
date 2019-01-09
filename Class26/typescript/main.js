// let month = 'january';
// const seondMonth = 'february';
// if(month === 'janaury'){
//     //
// }
//enum
var Month;
(function (Month) {
    Month["January"] = "january";
    Month["February"] = "february";
    Month["March"] = "march"; //2
})(Month || (Month = {}));
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["FieldUser"] = 1] = "FieldUser";
    Role[Role["CustomerServiceUser"] = 2] = "CustomerServiceUser";
})(Role || (Role = {}));
var month = Month.March;
var secondMonth = Month.February;
var d;
function greet(message) {
    console.log("hello " + message);
}
greet("World");
