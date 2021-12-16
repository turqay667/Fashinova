const ProductContainers=[...document.querySelectorAll(".product-card")];
const prev=[...document.querySelectorAll(".prev")];
const next=[...document.querySelectorAll(".next")];
ProductContainers.forEach((item,i)=>{
    let containerDimenstions = item.getBoundingClientRect(i);
    let containerWidth = containerDimenstions.width

    next[i].addEventListener("click",(item)=> {
            item.scrollLeft += containerWidth;
        })
    prev[i].addEventListener("click",()=>{
        item.scrollLeft-=containerWidth;
    })

})