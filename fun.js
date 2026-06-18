let popupoverlay = document.querySelector(".popup_overlay")

let popupmsg = document.querySelector(".popup_msg")

let addbtn= document.querySelector(".add_btn")

addbtn.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupmsg.style.display="block"
})

let cancle=document.getElementById("cancle_btn")

cancle.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupmsg.style.display="none"
    

})

let add_popup_msg=document.getElementById("add_popup_msg")
let container=document.querySelector(".container")
let b_name=document.getElementById("b_name")
let a_name=document.getElementById("a_name")
let desc=document.getElementById("desc")

add_popup_msg.addEventListener("click",function(event){
    event.preventDefault()
    let div=document.createElement("div")
    div.setAttribute("class","book_container")
    div.innerHTML=`<h2>${b_name.value}</h2><br>
        <h4>${a_name.value}</h4><br>
        <P>${desc.value}</P>
        <br>
        <button  onclick="del_book(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupmsg.style.display="none"



})

  function del_book(event){
    event.target.parentElement.remove()

}