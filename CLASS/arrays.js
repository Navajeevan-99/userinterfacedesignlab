const arr=[1,2,3,4,5];
console.log(arr);
//Map funtion
const disp=arr.map(a=>console.log(a));
const dis=arr.map(a=>a);
console.log(dis);
const disp2=arr.reduce((s,a)=>s+a,0);
console.log(disp2)