Ext.define('App.model.User', {
    extend: 'Ext.data.Model',

    idProperty: 'name',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' }
    ]
})

const store = Ext.create('Ext.data.Store', {
    model: 'App.model.User',

    proxy: {
        type: 'ajax',
        url: 'http://localhost:3000/users',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },

    autoLoad: true
});
