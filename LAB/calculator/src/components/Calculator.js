import React, { useState } from 'react'
import './Calculator.css'
const Calculator = () => {
  let [exp,setexp]=useState('');
  const changeexpt=(e)=>{
    setexp(e.target.value)
  }
  const typeplus=()=>{
    setexp(exp+'+');
  }
  const typeminus=()=>{
    setexp(exp+'-');
  }
  const typedivide=()=>{
    setexp(exp+'/');
  }
  const typemultiply=()=>{
    setexp(exp+'x');
  }
  const typeclear=()=>{
    setexp('');
  }
  const typeone=()=>{
    setexp(exp+'1');
  }
  const typetwo=()=>{
    setexp(exp+'2');
  }
  const typethree=()=>{
    setexp(exp+'3');
  }
  const typefour=()=>{
    setexp(exp+'4');
  }
  const typefive=()=>{
    setexp(exp+'5');
  }
  const typesix=()=>{
    setexp(exp+'6');
  }
  const typeseven=()=>{
    setexp(exp+'7');
  }
  const typeeight=()=>{
    setexp(exp+'8');
  }
  const typenine=()=>{
    setexp(exp+'9');
  }
  const typezero=()=>{
    setexp(exp+'0');
  }
 
  const equal=()=>{
  let ans=0;
  let op=[];
  let val=[];
  let i=0;
  let num='',ope='';
  let n=0,o=0;
  while(i<exp.length){
    if (!isNaN(exp[i]) || exp[i]=='.'){
      num=num+exp[i];
      n=n+1;
      if (o>0){
        op.push(ope);
        ope='';
        o=0;
      }
    }
    else if (exp[i]=='='){
      continue;
    }
    else if (isNaN(exp[i])){
      if (n>0){
      val.push(parseInt(num));
      num='';
      n=0
    }
      ope=ope+exp[i];
      o=o+1;
    }
    i=i+1;
  }
  val.push(parseInt(num));
  ans=evualate(val,op);
  
  setexp(ans.toString())
  }
  const evualate=(val,op)=>{
    let c=0;
    let arr=[];
    let arr1=[];
    let i=0;
    console.log(val);
    console.log(op);
    while(i<op.length){
     if (c==0){
       arr.push(val[i]);
      arr.push(op[i]);
      arr.push(val[i+1]);
      c=c+1;
      i=i+1;
      continue;
     }
     arr.push(op[i]);
     arr.push(val[i+1]);
     i=i+1;
}
i=0;
while(i<arr.length)
{
  if (arr[i]=='*'|| arr[i]=='x'){
    arr1[arr1.length-1]=arr1[arr1.length-1]*arr[i+1];
    i=i+2;
    continue
  }
  if (arr[i]=='/'){
    arr1[arr1.length-1]=arr1[arr1.length-1]/arr[i+1];
    i=i+2;
    continue
  }
  arr1.push(arr[i]);
  i=i+1;
}
let arr2=[]
i=0;
while(i<arr1.length){
  if (arr1[i]=='+'){
    arr2[arr2.length-1]=arr2[arr2.length-1]+arr1[i+1];
    i=i+2;
    console.log(i)
    console.log(arr1[i]);
    continue;
  }
  if (arr[i]=='-'){
    arr2[arr2.length-1]=arr2[arr2.length-1]-arr1[i+1];
    i=i+2;
    continue;
  }
  arr2.push(arr1[i]);
  i=i+1;
}
console.log(arr1);
  console.log(arr);
  console.log(arr2);
  return arr2[0];
}
  
  return (
    <div className='center calculatordiv'> 
    <div className='calculator center'>
      <div className='calculatordisplaydiv'>
        <input type='text' value={exp} onChange={changeexpt} className='calculatordisplay'/> 

      </div>
      <div className='buttonsdiv'> 
        <table>
          <tbody>
            <tr>
              <td>
                <button className='button' onClick={typeplus}>+</button>
              </td>
              <td>
                <button className='button' onClick={typeminus}>-</button>
              </td>
              <td>
                <button className='button' onClick={typedivide}>/</button>
              </td>
              <td>
                <button className='button' onClick={typemultiply}>x</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className='button' onClick={typeone}>1</button>
              </td>
              <td>
                <button className='button' onClick={typetwo}>2</button>
              </td>
              <td>
                <button className='button' onClick={typethree}>3</button>
              </td>
              <td>
                <button className='button' onClick={typeclear}>c</button>
              </td>
            </tr>
            
            <tr>
              <td>
                <button className='button' onClick={typefour}>4</button>
              </td>
              <td>
                <button className='button' onClick={typefive}>5</button>
              </td>
              <td>
                <button className='button' onClick={typesix}>6</button>
              </td>
              <td>
                <button className='button' onClick={equal}>=</button>
              </td>
            </tr>
            <tr>
              <td>
                <button className='button' onClick={typeseven}>7</button>
              </td>
              <td>
                <button className='button' onClick={typeeight}>8</button>
              </td>
              <td>
                <button className='button' onClick={typenine}>9</button>
              </td>
              <td>
                <button className='button' onClick={typezero}>0</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
    </div>
  )
}

export default Calculator