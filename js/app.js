import {fetchData} from "./main.js"

const wrapper = document.querySelector(".wrapper")

function renderProduct(data){
    data.products.forEach((product)=>{
        const card = document.createElement("div")
        card.className = "card"
        card.dataset.id = product.id
        card.innerHTML = `

            <img name="card-image" src=${product.thumbnail} alt="">
            <h3>${product.title}</h3>
        `
        wrapper.appendChild(card)
    })
}


wrapper.addEventListener("click", (event)=>{
    let name = event.target.name
    if(name === "card-image"){
        const id = event.target.closest(".card").dataset.id

        open(`/pages/product.html?id=${id}`, "_self")
    }
    
})

const productTag = document.querySelector(".product-tag")
function renderProductTag(data){
    data.forEach((tag)=>{
        let li = document.createElement("li")
        li.innerHTML = tag
        productTag.appendChild(li)
    })
}

productTag.addEventListener("click", (event)=>{
    if(event.target.tagName === "LI"){
        wrapper.innerHTML = null
        if(event.target.innerHTML === "All"){
            fetchData(`products`, renderProduct)
        }else{
            fetchData(`products/category/${event.target.innerHTML}`,renderProduct)
        }
    }
})  

window.onload = ()=>{

    fetchData("products/category-list", renderProductTag)
    fetchData("products", renderProduct)
}











// const title = document.querySelector(".title")

// title.dataset.userCountry = "USA"
// title.dataset.laylo = "akmalova"

// // console.log(title.dataset.laylo);
// // console.log(title.dataset.userId);
// // console.log(title);

// const collectionEl = document.querySelector(".collection")

// // Event delagation
// collectionEl.addEventListener("click", (event)=>{
//     if(event.target.tagName === "SPAN"){
//         title.innerHTML = event.target.innerHTML
//     }
// })