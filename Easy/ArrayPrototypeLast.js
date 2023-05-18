Array.prototype.last = function() {
    return typeof(this[this.length-1]) ==='undefined' ? -1 :  this[this.length-1]
};


 const arr = [1, 2, 3];
 arr.last(); // 3
 console.log( arr.last())