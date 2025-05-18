// this is for calculator
document.getElementById("calc").onsubmit = e => {
  e.preventDefault();
  let a=+e.target.a.value, b=+e.target.b.value;
  let op=e.target.op.value, r;
  if(op==="+") r=a+b;
  if(op==="-") r=a-b;
  if(op==="*") r=a*b;
  if(op==="/" && b!==0) r=a/b;
  alert("Result: "+r);
};

// this is for factorial
document.getElementById("fact").onsubmit = e => {
  e.preventDefault();
  let n=+e.target.n.value, f=1;
  for(let i=2;i<=n;i++) f*=i;
  alert(n+"! = "+f);
};

// this is for fibonacci
document.getElementById("fib").onsubmit = e => {
  e.preventDefault();
  let k=+e.target.k.value;
  let a=0,b=1;
  if(k===0) return alert("0");
  for(let i=2;i<=k;i++){
    [a,b]=[b,a+b];
  }
  alert("Fib("+k+") = "+(k===1?1:b));
};

// this is for Min/Max/Range
document.getElementById("mmr").onsubmit = e => {
  e.preventDefault();
  let nums=[+e.target.x1.value,+e.target.x2.value,+e.target.x3.value];
  let mn=Math.min(...nums), mx=Math.max(...nums);
  alert("Min:"+mn+" Max:"+mx+" Range:"+(mx-mn));
};

// this is for mailing list
document.getElementById("mail").onsubmit = e => {
  e.preventDefault();
  let f=e.target.first.value, l=e.target.last.value,
      em=e.target.email.value, z=e.target.zip.value;
  document.getElementById("mailOutput").innerHTML +=
    `<p>${f} ${l}, ${em}, ${z}</p>`;
  e.target.reset();
};
