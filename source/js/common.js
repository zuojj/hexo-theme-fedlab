
(function () {
    /**
     * 
     * @param {Element} node 
     * @param {String} className 
     */
    function addClass (node, className) {
        var classes = node.className.split(' ').filter(function (_class, key) {
            return _class && _class.trim();
        });
        classes.indexOf(className) && classes.push(className);
        node.className = classes.join(' ');
    }
    
    /**
     * 选中item
     */
    function selectMenuItem () {
        var list = document.querySelector('.fedlab-menu-list'),
            items = list && list.querySelectorAll('.fedlab-menu-item'),
            current = decodeURIComponent(location.hash.substring(1));

        current = current || '全部';
        [].forEach.call(items || [], function (item, index) {
            var a = item.querySelector('a'),
                text = a && a.innerText && a.innerText.toLowerCase();

            if (text === current) {
                addClass(a, 'current');
            }
        });
    }
    
    selectMenuItem();
})();
