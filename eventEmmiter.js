import {EventEmitter} from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name){
    console.log('hello '+ name)
}
function goodbyeHandler(name){
    console.log('goodbye '+ name)
}

// register the events

myEmitter.on('greet',greetHandler);
myEmitter.on('goodbye',goodbyeHandler);

myEmitter.emit('greet','doll');
myEmitter.emit('goodbye','doll');

myEmitter.on('error',(err)=>{
    console.log('an error occured:',err);
})
myEmitter.emit('error',new Error('something went wrong'))