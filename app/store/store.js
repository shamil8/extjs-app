const store = Ext.create('Ext.data.Store', {
    model: 'App.model.User',

    proxy: {
        type: 'ajax',
        url: '/users',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    }
});
