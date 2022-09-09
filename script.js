
const calculateBill = () => {
    billTotal = Number(document.getElementById("billTotalInput").value)
    tip = Number(document.querySelector("#tipInput").value) / 100
    people = Number(document.querySelector("#numberOfPeople").innerHTML)

    const total = (billTotal * tip) + billTotal
    const perPersonTotal = total / people

    document.querySelector("#perPersonTotal").innerHTML = `$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    const people = document.querySelector("#numberOfPeople")
    people.innerHTML = Number(people.innerHTML) + 1
    calculateBill()
}

const decreasePeople = () => {
    const people = document.querySelector("#numberOfPeople")
    if (people.innerHTML > 1) {
        people.innerHTML = Number(people.innerHTML) - 1
    }
    calculateBill()
}