const loggedInLinks = document.querySelectorAll(".logged-in")
const loggedDutLinks = document.querySelectorAll(".logged-out")
const loggedInCard = document.querySelectorAll(".card")

export const loginCheck = (user) => {
    if(user){
        loggedInLinks.forEach(link=>link.style.display="block")
        loggedDutLinks.forEach(link=>link.style.display="none")
        loggedInCard.forEach(card=>card.style.display="block")
    }else{
        loggedInLinks.forEach(link=>link.style.display="none")    
        loggedDutLinks.forEach(link=>link.style.display="block")
        loggedInCard.forEach(card=>card.style.display="none")
    }
}