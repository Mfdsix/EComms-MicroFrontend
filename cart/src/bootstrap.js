import { faker } from '@faker-js/faker'

const content = `<div>You ${faker.random.numeric()} have items in your cart</div>`

const mount = (el) => {
    el.innerHTML = content
}

if(process.env.NODE_ENV === 'development'){
    if(document.querySelector("#dev-cart")){
        mount(document.querySelector("#dev-cart"))
    }
}

export { mount }