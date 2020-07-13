Ext.define('App.controller.User', {
    extend: 'Ext.app.Controller',

    models: ['User'],

    init: function () {
        console.log('init')

        this.callParent(arguments)
    }
})

// const user = Ext.create('App.model.User', {id: 1, name: 'Shamil'})
