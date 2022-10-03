import { faker } from '@faker-js/faker'

const cartText = `<div>You ${faker.random.numeric()} have items in your cart</div>`

document.querySelector("#dev-cart").innerHTML = cartText