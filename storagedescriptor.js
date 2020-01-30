module.exports = {
  record:{
    fields:[{
      name: 'id', 
      type: 'string'
    },{
      name: 'from',
      type: 'string'
    },{
      name: 'from_role',
      type: 'string'
    },{
      name: 'from_realm',
      type: 'string'
    },{
      name: 'to',
      type: 'string'
    },{
      name: 'to_role',
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
    },{
      name: 'seen',
      type: 'integer'
    }]
  }
};
