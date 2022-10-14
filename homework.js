//celcius to farhient

const read = require('readline-sync')
var a, b
a = read.questionInt("Enter temp in cel: ")
b = (a * 9 / 5) + 32
console.log("Temp in ferh: ", b)

// km to mm,cm,inches, feet
var c, d, e, f, g
c = read.questionInt("Enter km: ")
d = c * 1000000
console.log("mm in km is: ", d)
e = d * 39370.1
console.log("inches in km is: ", e)
f = d * 100000
console.log("cm in km: ", f)
g = d * 3280.84
console.log("feet in km: ", g)

// swappig two number
var num1 = 12,
    num2 = 23
var temp
temp = num1
num1 = num2
num2 = temp
console.log(num1)
console.log(num2)



// bmi calculator
var weight, height, bmi
weight = read.questionFloat("Enter your weight: ")
height = read.questionFloat("Enter your height in meters: ")
bmi = weight / height ** 2
console.log("Bmi is: ", bmi)

// area of square
var r, area
const pi = 3.14
r = read.questionInt("Enter radius of circle: ")
area = pi * (r ** 2)
console.log("Area of circle is: ", area)