function createChatService(execlib, ParentService) {
  'use strict';
  var dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function ChatService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(ChatService, factoryCreator, require('./storagedescriptor'));
  
  ChatService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  ChatService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return ChatService;
}

module.exports = createChatService;
