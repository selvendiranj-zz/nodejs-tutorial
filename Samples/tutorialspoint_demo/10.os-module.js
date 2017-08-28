var osModules = module.exports={};
var output = '';

osModules.getOsModules = function(){

var os = require("os");

// Endianness
output ='endianness : ' + os.endianness()+'\n';

// OS type
output +='type : ' + os.type()+'\n';

// OS platform
output +='platform : ' + os.platform()+'\n';

// Total system memory
output +='total memory : ' + os.totalmem() + " bytes."+'\n';

// Total free memory
output +='free memory : ' + os.freemem() + " bytes."+'\n';

return output;
};