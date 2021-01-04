const DOMNodeCollection = require('./dom_node_collection');

window.DOMNodeCollection = DOMNodeCollection;

function $l(selector){ 
    
    if (selector instanceof HTMLElement) {
        // passsingle element into DNC
        return new DOMNodeCollection([selector]);
    } else {
        //pass list of elements into DNC
        const nodes = document.querySelectorAll(selector);
        return new DOMNodeCollection(Array.from(nodes));
    }
};

window.$l = $l;
