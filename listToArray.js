
let list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: {
                value: 4,
                rest: null
            }

        }
    }
};

console.log(list.rest)
console.log(list.rest.rest)
console.log(list.rest.rest.rest)
console.log(list.value)
console.log(list.rest.value)
console.log(list.rest.rest.value)
console.log(list.rest.rest.rest.value)
console.log(list.prop)