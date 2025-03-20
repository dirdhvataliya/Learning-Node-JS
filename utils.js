function generateRandomFunction(){
    return Math.floor(Math.random()*100+1);
}
function CtoF(celcious){
    return (celcious*9)/5 + 32;
}
module.exports = {generateRandomFunction,
CtoF};