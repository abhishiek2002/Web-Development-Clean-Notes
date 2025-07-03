var isValid = function(s) {
    var stack = [];
    const map = {
        '(':')',
        '{':'}',
        '[':']'
    };

        for(const ch of s){
            if((ch == '(') || (ch == '{') || (ch == '[')){
                stack.push(map[ch]);
            }
            else{
                if(stack.length === 0 || stack.pop() !== ch){
                    return false;
                }
            }
        }

        return (stack.length === 0);
};
