import $ from '../core';

$.prototype.addAttribute = function (name, value) {
    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }
    return this;
};
 
$.prototype.removeAttribute = function (nameAtribute) {
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(nameAtribute);
    }
 
    return this;
};
 
$.prototype.toggleAttribute = function (name, value = '') {
    for (let i = 0; i < this.length; i++) {
        if (this[i].hasAttribute(name)) {
            this[i].removeAttribute(name);
        } else {
            this[i].setAttribute(name, value);
        }        
    }
 
    return this;
};