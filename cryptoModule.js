import crypto from 'crypto';

// const hash = crypto.createHash('sha256').update('password1234').digest('hex')
// console.log(hash)

// crypto.randomBytes(16,(error,buffer)=>{
//     if(error) throw error;
//     console.log(buffer.toString('hex'));
// })

// createCipheriv & createDecipheriv

const algorithem = 'aes-256-cbc'
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorithem,key,iv);
let encrypted = cipher.update('hello!,this is a secrete message','utf8','hex');
encrypted += cipher.final('hex');
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithem,key,iv);
let decrypted = decipher.update(encrypted,'hex','utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);