const DomNodeCollection = require('./dom_node_collection');

window.DomNodeCollection = DomNodeCollection;

function $l(selector){ 
    
    if (selector instanceof HTMLElement) {
        // passsingle element into DNC
        return new DomNodeCollection([selector]);
    } else {
        //pass list of elements into DNC
        const nodes = document.querySelectorAll(selector);
        return new DomNodeCollection(Array.from(nodes));
    }
};

window.$l = $l;
