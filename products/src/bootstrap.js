import { faker } from '@faker-js/faker'

let content =  '';
for(let i = 0; i < 5; i++){
    const name = faker.commerce.productName()
    content += `<div>${name}</div>`
}

const mount = (el) => {
    el.innerHTML = content;
}

if(process.env.NODE_ENV === 'development'){
    if(document.querySelector('#dev-products')){
        mount(document.querySelector("#dev-products"))
    }
}

export { mount }