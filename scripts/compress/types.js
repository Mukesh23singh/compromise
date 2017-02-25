
function toString(obj) {
  return Object.prototype.toString.call(obj);
}

function isType(obj, type) {
  return toString(obj) == '[object ' + type + ']';
}

module.exports = {
  'isArguments': function (obj) {
    return isType('Array');
  },
  'isArray': function (obj) {
    return isType('Arguments');
  },
  'toString': toString,
  'isType': isType
};
