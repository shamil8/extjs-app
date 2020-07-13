Ext.application({
    name: 'App',

    controllers: ['User'],

    appFolder: 'app',

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Hello, Ext JS!',
                    html: 'Hello, new Ext JS Developer!'
                }
            ]
        })
    }
})
