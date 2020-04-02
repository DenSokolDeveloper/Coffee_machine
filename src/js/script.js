//Задание 12
/*
Написать программу эмулирующую работу кофейного автомата
 */
// Коффемашина:

let conteiner = document.getElementsByTagName('button');
let moneyStuck = 100;
let personMoney,ceshBack=0,ceshMoneyBank=0;
let instraction=document.getElementById('instraction');
let timer =document.getElementById('timer');
let newP=document.createElement('p');
let newT=document.createElement('p');
let newPcash = document.createElement('p');
timer.appendChild(newT);
instraction.appendChild(newP);
timer.appendChild(newPcash);
let latteCost=10, capuchinoCost=9, glyaseCost=7,espressoCost=6,americano=3,irishcremaCost=11,mokkaCost=12,greenteaCost=2;
function firstEntrance(){
    let question = confirm(`Hey there I'm coffee machine\nPress OK and let's drink some coffee;D`);

    if  (!!question){
        toAddInstraction('Please choose one of the bellow');
        toAddActive();
    }else{
        let timer= setInterval(()=>{
            alert(`See you next time`);

            clearInterval(timer);
            firstEntrance();
        },300);
    }

}
firstEntrance();

document.getElementById('latte').onclick = function(){
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{

        let question2 = confirm(`Latte is the best coffee that i can make!!!=)\nIt cost ${latteCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${latteCost}$\nI take only 0.5,1,5,10,20,50$`));
            if (!personMoney){
                newP.classList.remove('active');
                setTimeout(()=>{
                    firstEntrance();
                },300)
            }else{
                while (personMoney<latteCost){
                    personMoney=parseFloat(prompt(`You need to put ${latteCost}$\nI take only 0.5,1,5,10,20,50$`));
                }
                toAddInstraction('Wait for your coffee');
                let coffeTimer =4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML= coffeTimer;

                let coffeReady = setInterval(()=>{
                    coffeTimer--;
                    newT.innerHTML= coffeTimer;
                    if  (coffeTimer===0){
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                },1000);
                ceshMoneyBank += personMoney;
                ceshBack = personMoney - latteCost;
                moneyStuck-=ceshBack;
                setTimeout(()=>{
                    toAddInstraction(`Please take your money!`);
                    setTimeout(()=>{
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = ceshBack;
                        if (ceshBack !== 0){
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id='aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick=function () {
                                setTimeout(()=>{
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(()=>{
                                        newP.classList.remove('active');
                                        setTimeout(()=>{
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        },100)

                                    },3000)
                                },3000)
                            }
                        }else{
                            setTimeout(()=>{
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(()=>{
                                    newP.classList.remove('active');
                                    setTimeout(()=>{
                                        firstEntrance();
                                    },100)

                                },3000)
                            },3000)
                        }

                    },3000);

                },7000)

            }
        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('capuchino').onclick = function(){
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Capuchino is the best coffee that i can make!!!=)\nIt cost ${capuchinoCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${capuchinoCost}$\nI take only 0.5,1,5,10,20,50$`));
            if (!personMoney){
                newP.classList.remove('active');
                setTimeout(()=>{
                    firstEntrance();
                },300)
            }else {
                while (personMoney < capuchinoCost || !personMoney) {
                    personMoney = parseFloat(prompt(`You need to put ${capuchinoCost}$\nI take only 0.5,1,5,10,20,50$`));
                }

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                ceshMoneyBank += personMoney;
                ceshBack = personMoney - capuchinoCost;
                moneyStuck -= ceshBack;
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = ceshBack;
                        if (ceshBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 3000)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)
            }


        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('glyase').onclick = function(){
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Glyase is the best coffee that i can make!!!=)\nIt cost ${glyaseCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${glyaseCost}$\nI take only 0.5,1,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {
                while (personMoney < glyaseCost || !personMoney) {
                    personMoney = parseFloat(prompt(`You need to put ${glyaseCost}$\nI take only 0.5,1,5,10,20,50$`));
                }

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                ceshMoneyBank += personMoney;
                ceshBack = personMoney - glyaseCost;
                moneyStuck -= ceshBack;
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = ceshBack;
                        if (ceshBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 3000)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('espresso').onclick = function(){
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Espresso is the best coffee that i can make!!!=)\nIt cost ${espressoCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${espressoCost}$\nI take only 0.5,1,5,10,20,50$`));

            if (!personMoney){
                newP.classList.remove('active');
                setTimeout(()=>{
                    firstEntrance();
                },300);
            }else {
                while (personMoney < espressoCost || !personMoney) {
                    personMoney = parseFloat(prompt(`You need to put ${espressoCost}$\nI take only 0.5,1,5,10,20,50$`));
                }

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                ceshMoneyBank += personMoney;
                ceshBack = personMoney - espressoCost;
                moneyStuck -= ceshBack;
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = ceshBack;
                        if (ceshBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 3000)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('americano').onclick = function(){
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Americano is the best coffee that i can make!!!=)\nIt cost ${americano}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${americano}$\nI take only 0.5,1,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {

                while (personMoney < americano || !personMoney) {
                    personMoney = parseFloat(prompt(`You need to put ${americano}$\nI take only 0.5,1,5,10,20,50$`));
                }

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                ceshMoneyBank += personMoney;
                ceshBack = personMoney - americano;
                moneyStuck -= ceshBack;
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = ceshBack;
                        if (ceshBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 3000)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('irish-crema').onclick = function(){
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Irish-crema is the best coffee that i can make!!!=)\nIt cost ${irishcremaCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${irishcremaCost}$\nI take only 0.5,1,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {

                while (personMoney < irishcremaCost || !personMoney) {
                    personMoney = parseFloat(prompt(`You need to put ${irishcremaCost}$\nI take only 0.5,1,5,10,20,50$`));
                }

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                ceshMoneyBank += personMoney;
                ceshBack = personMoney - irishcremaCost;
                moneyStuck -= ceshBack;
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = ceshBack;
                        if (ceshBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 3000)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('mokka').onclick = function(){
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Mokka is the best coffee that i can make!!!=)\nIt cost ${mokkaCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${mokkaCost}$\nI take only 0.5,1,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {

                while (personMoney < mokkaCost || !personMoney) {
                    personMoney = parseFloat(prompt(`You need to put ${mokkaCost}$\nI take only 0.5,1,5,10,20,50$`));
                }

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                ceshMoneyBank += personMoney;
                ceshBack = personMoney - mokkaCost;
                moneyStuck -= ceshBack;
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = ceshBack;
                        if (ceshBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 3000)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};

document.getElementById('green_tea').onclick = function(){
    toRemoveActive();
    newP.classList.remove('active');
    setTimeout(()=>{
        let question2 = confirm(`Green tea is the best coffee that i can make!!!=)\nIt cost ${greenteaCost}$\nPress OK and follow instraction`);

        if(!!question2){
            personMoney=parseFloat(prompt(`You need to put ${greenteaCost}$\nI take only 0.5,1,5,10,20,50$`));

            if (!personMoney) {
                newP.classList.remove('active');
                setTimeout(() => {
                    firstEntrance();
                }, 300)
            }else {

                while (personMoney < greenteaCost || !personMoney) {
                    personMoney = parseFloat(prompt(`You need to put ${greenteaCost}$\nI take only 0.5,1,5,10,20,50$`));
                }

                toAddInstraction('Wait for your coffee');
                let coffeTimer = 4;
                newT.classList.add('active');
                newT.classList.add('timer');
                newT.innerHTML = coffeTimer;

                let coffeReady = setInterval(() => {
                    coffeTimer--;
                    newT.innerHTML = coffeTimer;
                    if (coffeTimer === 0) {
                        clearInterval(coffeReady);
                        toAddInstraction(`Please take your coffe but it is HOT!</br>Dont forget your money!`);
                        newT.classList.remove('active');
                    }
                }, 1000)
                ceshMoneyBank += personMoney;
                ceshBack = personMoney - greenteaCost;
                moneyStuck -= ceshBack;
                setTimeout(() => {
                    toAddInstraction(`Please take your money!`);
                    setTimeout(() => {
                        newPcash.classList.add('active');
                        newPcash.classList.add('cashback');
                        newPcash.innerHTML = ceshBack;
                        if (ceshBack !== 0) {
                            let buttonAccept = document.createElement('button');
                            timer.appendChild(buttonAccept);
                            buttonAccept.classList.add('aceptbutton');
                            buttonAccept.classList.add('active');
                            buttonAccept.id = 'aceptbutton';
                            buttonAccept.innerHTML = `Get your money`;
                            document.getElementById('aceptbutton').onclick = function () {
                                setTimeout(() => {
                                    newPcash.classList.remove('active');
                                    buttonAccept.classList.remove('active');
                                    toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                    setTimeout(() => {
                                        newP.classList.remove('active');
                                        setTimeout(() => {
                                            timer.removeChild(buttonAccept);
                                            firstEntrance();
                                        }, 100)

                                    }, 3000)
                                }, 3000)
                            }
                        } else {
                            setTimeout(() => {
                                newPcash.classList.remove('active');
                                toAddInstraction(`Thank you for visiting me!!!</br>Good bye!`);
                                setTimeout(() => {
                                    newP.classList.remove('active');
                                    setTimeout(() => {

                                        firstEntrance();
                                    }, 100)

                                }, 3000)
                            }, 3000)
                        }
                    }, 3000);

                }, 7000)

            }

        }else   {
            newP.classList.remove('active');
            setTimeout(()=>{
                firstEntrance();
            },300)

        }
    },400);

};


function toAddInstraction(text){
    newP.classList.add('active');
    newP.innerHTML=text;
}

function toAddActive(){
    for(let i=0;i<conteiner.length;i++){
        conteiner[i].classList.add('active');
    }
}

function toRemoveActive(){
    for(let i=0;i<conteiner.length;i++){
        conteiner[i].classList.remove('active');
    }
}
