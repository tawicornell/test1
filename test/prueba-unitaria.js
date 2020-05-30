const assert = require('assert');
const Message = require('./funcionalidad-API');
describe('#Abono',()=>{
      
    let original = 'Hello!';
    let mensaje = new Message(original);


    it('Prueba del API pirata',()=>{
        assert.deepEqual(
            mensaje.translateMsg(original),
              'Ahoy!', 
         );
    })


})