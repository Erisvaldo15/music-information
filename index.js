const paginatedPage = document.querySelector('#paginated-pages ul')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

const data =  Array.from({ length: 17 })
const dataLength = data.length

let actualPage = 1
let perPage = 5

function paginate(dataLength, perPage) {

    const numberOfPages = Math.ceil(dataLength / perPage) // round to bigger number more next 

    for (let index = 0; index < numberOfPages; index++) {
        paginatedPage.appendChild(document.createElement('li')).textContent = index + 1
    }

    return numberOfPages
}

function setActualPage(actualPage) {

    const listOfPage = document.querySelectorAll('li')

    listOfPage.forEach(element => {
        element.classList.remove('active')
    });

    listOfPage[actualPage - 1].classList.add('active')
}

function prevPage() {

    prev.addEventListener('click', () => {

        if (actualPage <= 1) {
            actualPage = 1
        } else {
            actualPage -= 1
        }

        setActualPage(actualPage)
        renderPageContent()
    })

}

function nextPage(numberOfPages) {

    next.addEventListener('click', () => {

        if (actualPage >= numberOfPages) {
            actualPage = 1
        } else {
            actualPage += 1
        }

        setActualPage(actualPage)
        renderPageContent()
    })

}

function specificPage() {

    const listOfPage = document.querySelectorAll('li')

    listOfPage.forEach((page, index) => {

        page.addEventListener('click', () => {
            actualPage = index + 1
            setActualPage(actualPage)
            renderPageContent()
        })

    })

}

async function api() {

    const response = await fetch('http://localhost:9000/api/songs');

    try {

        if (response.status === 200) {
            return await response.json();
        }

    } 
    
    catch (error) {
        console.log(error)
    }
    
}



async function renderPageContent() {
    
    const songs = await api()

    let page = actualPage - 1
    let start = page * perPage // 0
    let end = start + perPage // 5

    const dataOfPage = songs.slice(start, end)

    console.log(dataOfPage)
    
    const tbody = document.querySelector('tbody')

    for (let index = 0; index < dataOfPage.length; index++) {

        const tr = document.createElement('tr')

        const tdName = document.createElement('td')
        const tdBand = document.createElement('td')
        const tdVocalist = document.createElement('td')
        const tdMusical = document.createElement('td')

        let createdTr = tbody.appendChild(tr)

        createdTr.appendChild(tdName).textContent = `${dataOfPage[index]['Name']}`
        createdTr.appendChild(tdBand).textContent = `${dataOfPage[index]['Band Name']}`
        createdTr.appendChild(tdVocalist).textContent = `${dataOfPage[index]['Vocalist Name']}`
        createdTr.appendChild(tdMusical).textContent = `${dataOfPage[index]['Musical Genre']}`
    }
}


const numberOfPages = paginate(dataLength, perPage)
setActualPage(actualPage)
prevPage()
nextPage(numberOfPages)
specificPage()
renderPageContent()