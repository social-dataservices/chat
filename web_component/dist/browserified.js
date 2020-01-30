(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
ALLEX.execSuite.registry.registerClientSide('social__data_chatservice',require('./sinkmapcreator')(ALLEX, ALLEX.execSuite.registry.getClientSide('allex_dataservice')));

},{"./sinkmapcreator":4}],2:[function(require,module,exports){
module.exports = {
};

},{}],3:[function(require,module,exports){
arguments[4][2][0].apply(exports,arguments)
},{"dup":2}],4:[function(require,module,exports){
function sinkMapCreator(execlib, ParentSinkMap) {
  'use strict';
  var sinkmap = new (execlib.lib.Map);
  sinkmap.add('service', require('./sinks/servicesinkcreator')(execlib, ParentSinkMap.get('service')));
  sinkmap.add('user', require('./sinks/usersinkcreator')(execlib, ParentSinkMap.get('user')));
  
  return sinkmap;
}

module.exports = sinkMapCreator;

},{"./sinks/servicesinkcreator":5,"./sinks/usersinkcreator":6}],5:[function(require,module,exports){
function createServiceSink(execlib, ParentSink) {
  'use strict';
  function ServiceSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  
  ParentSink.inherit(ServiceSink, require('../methoddescriptors/serviceuser'), require('../visiblefields/serviceuser'),require('../storagedescriptor'));
  ServiceSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return ServiceSink;
}

module.exports = createServiceSink;

},{"../methoddescriptors/serviceuser":2,"../storagedescriptor":7,"../visiblefields/serviceuser":8}],6:[function(require,module,exports){
function createUserSink(execlib, ParentSink) {
  'use strict';
  function UserSink(prophash, client) {
    ParentSink.call(this, prophash, client);
  }
  
  ParentSink.inherit(UserSink, require('../methoddescriptors/user'), require('../visiblefields/user'),require('../storagedescriptor'));
  UserSink.prototype.__cleanUp = function () {
    ParentSink.prototype.__cleanUp.call(this);
  };
  return UserSink;
}

module.exports = createUserSink;

},{"../methoddescriptors/user":3,"../storagedescriptor":7,"../visiblefields/user":9}],7:[function(require,module,exports){
module.exports = {
  record:{
    fields:[{
      name: 'id', 
      type: 'string'
    },{
      name: 'from',
      type: 'string'
    },{
      name: 'from_realm',
      type: 'string'
    },{
      name: 'to',
      type: 'string'
    },{
      name: 'to_realm',
      type: 'string'
    },{
      name: 'message',
      type: 'string'
    },{
      name: 'created',
      type: 'integer',
      default: '{{Date.now()}}'
    }]
  }
};

},{}],8:[function(require,module,exports){
module.exports = [];

},{}],9:[function(require,module,exports){
module.exports = ['id', 'from', 'from_realm', 'to', 'to_realm', 'message', 'created'];

},{}]},{},[1]);
