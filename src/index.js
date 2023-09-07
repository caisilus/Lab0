function get_input(prompt_message) {
    let input = prompt(prompt_message)
    let value = NaN
    do {
        value = parseFloat(input)
        if (!isNaN(value)) {
            break;
        }
        input = prompt("Error. Please enter again")
    } while(true)

    return value
}

function integrate(a, b, f, n=1000.0) {
    let deltaX = (b - a) / n
    let sum = 0
    for (let i = 0; i < n; i++) {
        sum += f(a + deltaX * i)
    }
    return sum * deltaX
}
function check_error(first, second, eps) {
    return Math.abs(first - second) > eps
}

function integrate_fixed_error(a, b, f, eps=1e-4) {
    let last_n = 500
    let n = 1000
    
    let last_integral = integrate(a, b, f, last_n)
    let integral = integrate(a, b, f, n)
    while (check_error(last_integral, integral, eps) && n < 10000) {
        last_n = n
        n = last_n * 2
        last_integral = integrate(a, b, f, last_n)
        integral = integrate(a, b, f, n)
    }

    return integral
}

function main() {
    alert("Let's integrate!")
    let a = get_input("Enter left integration limit")
    let b = get_input("Enter right integration limit")
    if (a > b) {
        [a, b] = [b, a]
    }
    let f = (x) => x*x - Math.cos(x)
    let eps = get_input("Enter acceptable error")
    alert(`Result = ${integrate_fixed_error(a, b, f, eps)}`)
}

main()