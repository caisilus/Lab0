function get_input(prompt_message) {
    input = prompt(prompt_message)
    flag = false
    do {
        value = parseFloat(input)
        if (!isNaN(value)) {
            break;
        }
        input = prompt("Error. Please enter again")
    } while(true)

    return value
}

alert("Let's integrate!")
a = get_input("Enter left integration limit")
b = get_input("Enter right integration limit")
console.log(`a=${a}, b=${b}`)

function integrate(a, b, f, n=1000.0) {
    deltaX = (b - a) / n
    sum = 0
    for (let i = 0; i < n; i++) {
        sum += f(a + deltaX * i)
    }
    return sum * deltaX
}

f = (x) => x*x - Math.cos(x)
alert(`Result = ${integrate(a, b, f)}`)