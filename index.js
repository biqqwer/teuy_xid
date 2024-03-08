const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('HdyHcP0CSl', uuidlib.v4());
	}

module.exports = generateId
