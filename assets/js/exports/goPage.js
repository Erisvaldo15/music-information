import render from "./renderData.js"

export default function goPage(actualPage, perPage, setActualPage, api) {

    const listOfPage = document.querySelectorAll('li')

    listOfPage.forEach((page, index) => {

        page.addEventListener('click', () => {
            actualPage = index + 1
            setActualPage(actualPage)
            render(actualPage, perPage, api)
        })

    })

    return actualPage
}