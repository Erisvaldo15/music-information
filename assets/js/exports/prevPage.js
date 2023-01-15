import render from "./renderData.js"

export default function prev(actualPage, perPage, api, setActualPage) {

    const prev = document.querySelector('#prev')

    prev.addEventListener('click', () => {

        if (actualPage <= 1) {
            actualPage = 1
        } else {
            actualPage -= 1
        }

        setActualPage(actualPage)
        render(actualPage, perPage, api)
    })
}