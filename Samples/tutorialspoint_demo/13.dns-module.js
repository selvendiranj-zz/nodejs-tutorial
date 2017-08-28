var dnsModules = module.exports={};

dnsModules.getDnsModules = function(){

    console.log("Inside DNS Module");

var dns = require('dns');
var output ='';

dns.lookup('www.google.com', function onLookup(err, address, family) {
   console.log('address:', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }

      console.log('reverse for ' + address + ': ' + JSON.stringify(hostnames));
   });  
});
console.log("Inside DNS Module - end");
};