const functions = {}


functions.randomize = (arr) => {
 return arr.sort((a,b) => Math.random() - Math.random())
}


module.exports = functions;

