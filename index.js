var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var tempObj = {}
  tempObj[key] = value;
  
  return Object.assign({}, object )
}