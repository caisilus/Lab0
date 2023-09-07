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
