L.NumberedDivIcon = L.Icon.extend({
    options: {
        iconUrl: '/img/posts/course-schedule/numbered-icon2.png',
        number: '',
        iconSize: [25, 60],
        iconAnchor: [32, 64],
        popupAnchor: [0, -33],
        className: 'leaflet-div-icon'
    },

    createIcon: function () {
        var div = document.createElement('div');
        var img = this._createImg(this.options['iconUrl']);
        var numdiv = document.createElement('div');
        numdiv.setAttribute ( "class", "number" );
        numdiv.innerHTML = this.options['number'] || '';
        div.appendChild ( img );
        div.appendChild ( numdiv );
        this._setIconStyles(div, 'icon');
        return div;
    }

});