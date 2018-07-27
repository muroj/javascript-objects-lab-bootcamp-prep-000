var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var tempObj = {};
  tempObj[key] = value;
  
  return Object.assign({}, object, tempObj);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue