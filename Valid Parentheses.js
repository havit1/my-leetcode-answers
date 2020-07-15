var isValid = function(s) {
    const stack = []
    s.split('').forEach((el) => {
        switch(el) {
            case "(": 
                return stack.push(`(`)
            case "{":
                return stack.push(`{`)
            case "[": 
                return stack.push(`[`)
            case ")":
                return stack[stack.length - 1] === '(' ? stack.pop() : stack.unshift(')')
            case "}":
                return stack[stack.length - 1] === '{' ? stack.pop() : stack.unshift('{')
            case "]":
                return stack[stack.length - 1] === '[' ? stack.pop() : stack.unshift('[')
        }
    })
    return stack.length ? false : true
};