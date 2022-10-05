import { faker } from '@faker-js/faker'

let products =  '';
for(let i = 0; i < 5; i++){
    const name = faker.commerce.productName()
    products += `<div>${name}</div>`
}

const mount = (el) => {
    el.innerHTML = products;
}

if(process.env.NODE_ENV === 'development'){
    if(document.querySelector('#dev-products')){
        mount(document.querySelector("#dev-products"))
    }
}

export { mount }