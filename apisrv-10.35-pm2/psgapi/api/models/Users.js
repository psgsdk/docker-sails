module.exports = {
  connection: 'authsql',
  tableName: 'users',
  migrate: 'safe',
  autoPK: false,
  autoCreatedAt: true,
  autoUpdatedAt: true,
  meta: {
    schemaName: 'Users'
  },
  attributes: {
    id: {
      type: 'string',
      unique: true,
      primaryKey: true,
      columnName: 'id'
    },
    username: {
      type: 'string',
      unique: true,
      columnName: 'username'
    },
     firstname: {
      type: 'string',
      columnName: 'firstname'
    },
     lastname: {
      type: 'string',
      columnName: 'lastname'
    },
    phash: {
      type: 'string',
      columnName: 'phash'
    },
    createdAt: {
      type: 'datetime',
      columnName: 'createdAt'
    },
    updatedAt: {
      type: 'datetime',
      columnName: 'updatedAt'
    },
      email: {
      type: 'email',
      columnName: 'email'
    }
  },
 beforeCreate: function (attrs, next) {
       var genhash = require('../../js/fgen.js')
       attrs.username = attrs.username.toLowerCase()
       if (attrs.password){
       attrs.phash = genhash.hash(attrs.password,26);
       } else { attrs.phash = genhash.hash(attrs.username,26)};
       attrs.id    = genhash.uuid();
       next()
  },
 afterCreate: function (attrs, next){
 attrs.phash = 'protected'  // hide the hash value !!!
 next()
},
 beforeUpdate: function (attrs, next) {
 if (attrs.username){attrs.username = attrs.username.toLowerCase()};
 if (attrs.password){attrs.phash = genhash.hash(attrs.password,26)};
},
 afterUpdate: function (attrs, next){
 attrs.phash = 'protected'  // hide the hash value !!!
 next()
},
 afterFind: function (attrs, next){
 attrs.phash = 'protected'  // hide the hash value !!!
 next()
}

};
