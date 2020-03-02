const ArrayList = {
    array: [],
    size: 0,
    init: function (argument) {
        if (!argument) {
            return 'Please enter an array';
        }
        ArrayList.array = argument;
        ArrayList.size = argument.length;
    },
    addAtEnd: function (arrElm) {
        if(!arrElm) {
            return 'Please enter an array';
        }
        let arr = ArrayList.array;
        arr[arr.length] = arrElm;
        ArrayList.size = arr.length;

        return arr;
    },
    clearArray: function () {
        
        ArrayList.array = [];
        ArrayList.size = 0;
    },
    deleteLastElm: function() { 
        const arr = ArrayList.array;
        arr.length = [arr.length - 1];
        ArrayList.size = arr.length;
    },
    deleteFirstElm: function () {
        const arr = ArrayList.array;
        let b = [];
        for(let i = 1; i < arr.length; i++) {
            b[i-1] = arr[i];
        }

        ArrayList.array = b;
        ArrayList.size -= 1;
    },
    addAtFirstElm: function(arrElm) {
        const arr = ArrayList.array;
        let b = [arrElm];
        for(let i = 0; i < arr.length; i++) {
            b[i+1] = arr[i];
        }

        ArrayList.array = b;
        ArrayList.size += 1;
    },
    changeTostring: function () {
        const arr = ArrayList.array;
        return [ "" + myArray];
    },
    
    doReverse: function() {
        let arr = ArrayList.array;
        let b = [];
        let counter = arr.length - 1;

        for(let i = 0; i < arr.length; i++) {
            b[i] = arr[counter - i];
        }
        ArrayList.array = b;
        ArrayList.size = arr.length;

        return ArrayList.array;
    },
       
    findIndexOf: function (arrElm) {
        if (!argument) {
            return 'Please enter an array';
        }
        const arr = ArrayList.array;
        for(let i = 0; i < arr.length; i++) {
            if(arrElm === arr[i]) return i;
        }
        ArrayList.size = arr.length;
        return '-1';
    },

    checkIncludes: function (arrElm) {
        if (!argument) {
            return 'Please enter an array';
        }
        const arr = ArrayList.array;
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === arrElm) return 'true';
        } 
        return 'false';
    }
    
};




let myArray = ['a', 2, 'c', 5];

ArrayList.init(myArray);
console.log(ArrayList);

// ArrayList.addAtEnd("xanali");
// console.log(ArrayList);

//  ArrayList.clearArray();
//  console.log('clear--------------------------', ArrayList.clearArray());

// ArrayList.deleteLastElm();
// console.log(ArrayList);

// ArrayList.deleteFirstElm();
// console.log(ArrayList);

// ArrayList.addAtFirstElm(8);
// console.log(ArrayList);


//console.log(ArrayList.changeTostring());

//console.log(ArrayList.doReverse());

console.log(ArrayList.findIndexOf(8))

//console.log(ArrayList.checkIncludes(8));





