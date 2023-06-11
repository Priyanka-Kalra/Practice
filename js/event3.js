const body=document.querySelector('body');
let div=document.createElement('div')
for(let i=1;i<51;i++){
    let b=document.createElement('button')
    b.append(`BUTTON`);
    div.append(b);
}
body.append(div)

const RandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}
const button=document.querySelectorAll('button');

for(let btn of button){
    btn.addEventListener('click',()=>{

        const newCol=RandomColor();
        btn.style.backgroundColor=newCol;
    })
}