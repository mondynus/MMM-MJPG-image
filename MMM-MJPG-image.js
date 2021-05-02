Module.register('MMM-MJPG-image', {
    defaults: {
        title: 'MJPG image',
        header: false,
        width: '100%',
        height: '480px',
        moveUp: '60px;',
        refreshInterval: 60 // IMPORTANT: Refresh interval is to be set in seconds, not millisecs.
    },

    getScripts: function() {
        return [];
    },

    start: function() {
        Log.info('Starting module ' + this.name);
        this.loaded = false;
        var self = this;
        //setInterval(function() {
        //    self.updateDom();
        //},5000);      
    },

    getDom: function() {
        var content = document.createElement('img');
        content.style.border = "0";
        content.style.width = this.config.width;
        content.style.height = this.config.height;
        content.src=this.config.url1;
        return content;
    },

});
