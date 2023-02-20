function shallowCopyObj (origin) {
    let obj = {}
    for (prop in origin) {
        obj[prop] = origin[prop]
    }
    return obj
}

function deepCopyObj (origin) {
    let obj = {}
        for (prop in origin) {
            obj[prop] = origin[prop]
        }
    return obj;
}
let obj = {
    a:1,
    b: {
        c:null,
        d:[1,2]
    }
}
let obj2 = deepCopyObj(obj)
obj.e=4
console.log(obj2.e == obj.e)
