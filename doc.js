const hourE1= document.querySelector(".hour");
const hourM1= document.querySelector(".minute");
const hourS1= document.querySelector(".second");

function clockOp(){
    const currentDate=new Date();
    setTimeout(clockOp,1000);
   const hour=currentDate.getHours();
   const minute=currentDate.getMinutes();
   const second=currentDate.getSeconds();
const hourDeg=(hour/12)*360;
hourE1.style.transform=`rotate(${hourDeg}deg)`
const minuteDeg=(minute/60)*360;
hourE1.style.transform=`rotate(${minuteDeg}deg)`
const secondsDeg=(second/60)*360;
hourE1.style.transform=`rotate(${secondsDeg}deg)`
}
clockOp();