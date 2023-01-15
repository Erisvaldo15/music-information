export default function paginate(pagination) {
    const paginatedPage = document.querySelector('#paginated-pages ul')
    const numberOfPages = pagination.numberOfPages()

    for (let index = 0; index < numberOfPages; index++) {
        paginatedPage.appendChild(document.createElement('li')).textContent = index + 1
    }

    return numberOfPages
}