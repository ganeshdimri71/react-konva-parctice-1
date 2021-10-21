import React from 'react'

var obj = {
    a: 10,
    b:20,
}

var obj1 = { ...obj, a: 20, b: 20 }

console.log(obj1);