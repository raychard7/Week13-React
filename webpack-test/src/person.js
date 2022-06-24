//we're importing the $ from jquery to use in our javascript module person.js

import $ from 'jquery';

//export default allows webpack to export this class.
export default class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display(elementId){
        $(`#${elementId}`).text(`${this.firstName} ${this.lastName}`);
    }
}