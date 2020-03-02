describe('ArrayList',  () => {
    describe('init', () => {
        it('should be defined', () =>{
            assert.isDefined(ArrayList.init,'function has been defined') 
        })
        it('should warn the user to Undefined', () => {
            const arr = undefined;
            const expArr = 'Please enter an array';
            const expSize = 'Please enter an array';
    
            const actual = ArrayList.init(arr);
    
            assert.deepEqual(actual,expArr);
            assert.deepEqual(actual,expSize);
        })
        it('should return the user to Null', () => {
            const arr = null;
            const expArr = 'Please enter an array';
            const expSize = 'Please enter an array';
    
            const actual = ArrayList.init(arr);
    
            assert.deepEqual(actual,expArr);
            assert.deepEqual(actual,expSize);
        })

    });
   
    describe('addAtEnd',  () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.addAtEnd, 'function has been defined')
        })
        it('should warn the user to Undefined', () => {
            const arr = undefined;
            const expArr = 'Please enter an array';
            const expSize = 'Please enter an array';
    
            const actual = ArrayList.addAtEnd(arr);
    
            assert.deepEqual(actual,expArr);
            assert.deepEqual(actual,expSize);
        })
        it('should return the user to Null', () => {
            const arr = null;
            const expArr = 'Please enter an array';
            const expSize = 'Please enter an array';
    
            const actual = ArrayList.addAtEnd(arr);
    
            assert.deepEqual(actual,expArr);
            assert.deepEqual(actual,expSize);
        })
        it('should return [a, 2, c, xanali]', () => {
            const myArray = ['a', 2, 'c']; 
            const arr = 'xanali';
            const expArr = ['a', 2, 'c', 'xanali'];
            const expSize = 4;
            ArrayList.init(myArray);
    
            const actual = ArrayList.addAtEnd(arr);
    
            assert.deepEqual(actual,expArr);
            assert.deepEqual(actual.length,expSize);
        })
    });

    describe('clearArray', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.clearArray, 'function has been defined');
        })
        
        it('should return empty array', () => {
            const myArray = [5];
            const expArr = [];
            const expSize = 0;
            ArrayList.init(myArray);

            ArrayList.clearArray();

            assert.deepEqual(ArrayList.array, expArr);
            assert.deepEqual(ArrayList.size, expSize)
        })

    });

    describe('deleteLastElm', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.deleteLastElm, 'function has been defined');
        })
        it('should return [a, 2, c]', () => {
            const arr = ['a', 2, 'c', 5];
            const expArr = ['a', 2, 'c'];
            const expSize = 3;
            ArrayList.init(arr);

            const actual = ArrayList.deleteLastElm();

            assert.deepEqual(ArrayList, expArr);
            assert.deepEqual(ArrayList.size, expSize)
        })
    });

    
});
