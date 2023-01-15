import render from "./renderData.js"

export default function next(actualPage, perPage, numberOfPages, api, setActualPage) {

    const next = document.querySelector('#next')

    next.addEventListener('click', () => {

        if (actualPage >= numberOfPages) {
            actualPage = 1
        } else {
            actualPage += 1
        }

        setActualPage(actualPage)
        render(actualPage, perPage, api)
    })
}