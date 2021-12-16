const productContainers =[...document.querySelectorAll(".product")];
const prevBtn=[...document.querySelectorAll(".prev")];
const nextBtn=[...document.querySelectorAll(".next")];

productContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;
    
    nextBtn[i].addEventListener("click",()=>{

        item.scrollLeft += containerWidth;
    })
    nextBtn[i].addEventListener("click",()=>{

        item.scrollLeft += containerWidth;
    })

})