class DOMNodeCollection {
    constructor(htmlElements) {
        this.htmlElements = htmlElements;
    }
 
    html(string) {
        if (!string) {
            return this.htmlElements[0].innerHTML;
        } else {
            this.htmlElements.forEach( el => el.innerHTML = string);
        }
    }

    empty() {
        debugger;
        // this.htmlElements.forEach((el) => (el.innerHTML = ""));
        let str = " ";
        this.html(str)
    }

    append(ele) {
        const dnc = this.htmlElements; // adding args to each element's innerHTML
        if (ele instanceof DOMNodeCollection) {
            let newEles = ele.htmlElements

            dnc.forEach( el => {
                for (let i = 0; i < newEles.length; i++) {
                    el.innerHTML += newEles[i].outerHTML;
                }
            })
        }

        if (ele instanceof HTMLElement){
            dnc.forEach( el => {
                el.innerHTML += ele.outerHTML;
            });
        }

        if (ele instanceof String){
            dnc.forEach( el => {
                el.innerHTML += ele;
            });
        }

        // string passed in = string shown in inner HTML
        // HTML elements ==> OK if passed in as a string
        // jQuery lite ==> ???????
    }

    attr() {
        return this.htmlElements.map ( el => {
            return el.attributes;
        })
    }

    addClass(className) {
        return this.htmlElements.forEach ( el => {
            const currentAttribute = el.getAttribute("class");
            if (!currentAttribute) {
                el.setAttribute("class", className);
            } else {
                el.setAttribute("class", currentAttribute.concat(` ${className}`));
            }
        })
    }

    removeClass(className) {
        return this.htmlElements.forEach ( el => {
            el.removeAttribute("class");
        })
    }

}

module.exports = DOMNodeCollection;