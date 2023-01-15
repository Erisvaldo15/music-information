export default function setActualPage(actualPage) {

    const listOfPage = document.querySelectorAll('li')

    listOfPage.forEach(element => {
        element.classList.remove('active')
    });
    
    listOfPage[actualPage - 1].classList.add('active')
}