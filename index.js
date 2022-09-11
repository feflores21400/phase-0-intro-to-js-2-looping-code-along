const names =["Guadalupe", "Ollie", "Aki"]

function writeCards(names){
    const thanks =[]
    for (let i = 0; i< names.length; i++){
        thanks.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
        
    
    }
    return thanks;
}
writeCards(names);

function countDown(){
let countDown = 10
while(countDown >= 0){
    console.log(countDown--);
}
};