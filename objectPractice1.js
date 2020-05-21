const prompt = require('prompt-sync')();

class Puppet {
    constructor(name, age, employment, speach){
        this.puppetname = name
        this.puppetage = age
        this.puppetjob = employment
        this.puppetspeach = speach 
    }
    talk(){
        console.log(this.puppetspeach)
    }
    reply(){
        if (Joelito.talk){
            console.log(this.puppetspeach)
        }
    }
}

var Loren = new Puppet('Loren', 42, 'engineer', 'Hola Joelito!')

var Joelito = new Puppet('Joelito', 20, 'programer', 'Hola tio Loren!')


play()

function play(){
    console.log('What do you want your puppets to do?')
    let action = prompt('')
    if (action === 'talk'){
        Joelito.talk()
        Loren.reply()
    }
}