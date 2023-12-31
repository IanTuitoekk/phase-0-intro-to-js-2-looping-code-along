// Code your solutions in this file

const name=["John", "Jane", "Ashley"]
function writeCards(name){
const thankyouCards=[];
    for (let i = 0;i<name.length; i++){
    thankyouCards.push(`Thank you, ${name[i]}, for the wonderful surprise gift!`);
    }
    return thankyouCards;
}
function countDown(number){
    while(number>-1){
        console.log(number);
        number--;
    }
}