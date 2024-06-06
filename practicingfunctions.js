let button = document.getElementById('changebackground');
    button.addEventListener('click', () => {
        document.body.style.backgroundColor = "brown";
    });

 const changtxt = () => {
    const p = document.querySelector('p');
    p.textContent = "I changed because my click was executed from the inline handle";
};
// the above could be changed to this comment below //

// function changtxt() {
//     const p = document.querySelector('p');
//     p.textContent = "I changed because my click was executed from the inline handle";
// }

const changtxt2 = () => {
    const p = document.querySelector('p');
    p.textContent = "I changed because of an Event Handler function";
};
// this above could also be changed to this comment below

// function changtxt2() {
//     const p = document.querySelector('p');
//     p.textContent = "I changed because of an Event Handler function";
// }

const btn = document.getElementById('button2');
btn.onclick = changtxt2;

var bttn = document.getElementById('button3');
    bttn.addEventListener('click', () => {
        document.body.style.backgroundColor = "red"; 
        const p = document.querySelector('p');
        p.textContent = "And my color changed";
        
    });
// function down() {
//     const ttxt = document.querySelector('input');
//     ttxt.value = ttxt.value.toUpperCase();
// };
// const trn = document.getElementById('spc2');
// trn.onclick = down;


const ttxt = document.getElementById('spc2');
    ttxt.addEventListener('click', () => {
    const me = document.querySelector('input');
    me.value = me.value.toUpperCase();

    });

const ttt = document.getElementById('spc3');
    ttt.addEventListener('onchange', () => {
        
    })


       



