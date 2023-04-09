/**
 * @param {string} s
 * @return {boolean}
 */


let s="()"
let a="()[]{}"
let b="(]"
let x="({{{{}}}))"
var isValid = function(s) {
    try{

            //we need to check that every open bracket has closed one in the right order
            const correspondingOpen ={"(":")","{":"}","[":"]"}
             const correspondingClose ={")":"(","}":"{","]":"["}
             const correspondingOpenArr=["(","{","["]
             const correspondingCloseArr=[")","}","]"]

             let stack=[]
             for(let i=0;i<s.length ;i++){
                let x=s[i]

                if (correspondingOpenArr.includes(x)) {
                    stack.push(x);
                  } else if (correspondingCloseArr.includes(x) && stack[stack.length - 1] === correspondingClose[x]) {
                    stack.pop();
                  }  else {
                    return false;
                  }
              
                
             }
            
             if(stack.length === 0){
                console.log(true)
             }
             else{
                console.log(false)
             }

             return stack.length === 0;
            
        

    }catch(e){
        console.log(e)
        return e 
    }
}

isValid(x)
/* isValid(a)
isValid(b) */

