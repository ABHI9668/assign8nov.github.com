 //Assignment
 // Question 1 calculate the volume and surface of cylinder.
 //Date:8-11-21

var obj  ={
    h:10,// height of cylinder
    r:5,// radius of cylinder
};
function volume(h,r){
return(3.14)*r*r*h;// 3.14=PI value

}
function surface(h,r){
    return (2*(3.14)*r*h)+(2*(3.14)*r*r);

}
var vol=volume(obj.h,obj.r);
var sur=surface(obj.h,obj.r);
console.log(vol,sur)


//Question 2  Create a function takes in input as voltage and current and returns the power.
// Date:8-11-21


let vol1=10;// voltage
let curr=20;// current
function mypower(vol1,curr){
    return vol1*curr;
}
let p=mypower(vol1,curr)
console.log(p)





