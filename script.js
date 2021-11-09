var ism = prompt ("Izmingizni kiriting")
console.log("Mening ismim " + ism) ;
var age = +prompt ("Yoshingizni kiriting")
if( age <= 18){
    alert("Yoshsiz. O'qishingiz kerak ")
}
else if(age <= 50){
    alert("Ishlashingiz kerak")
}
else if(age <= 59){
    alert("Yaqinda pensiyaga chiqasiz")
}
else if(age <= 150){
    alert("Pensiyanerga o'xshaysiz, hali tirik bo'lsangiz")
}
else{
    alert("Nimadir notog'ri ketib qoldi")
}