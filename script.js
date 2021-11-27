


setInterval(()=>{
 let d = new Date();
 h=d.getHours();
 m=d.getMinutes();
 s=d.getSeconds();
 rh=(30*h+m/2+s/120);
 rm=(6*m+s/10); //s/10
 rs=(6*s);
hour.style.transform=`rotate(${rh}deg)`;
min.style.transform=`rotate(${rm}deg)`;
 sec.style.transform=`rotate(${rs}deg)`;

},1000);

