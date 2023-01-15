import api from "../../src/api.js";

export default async function render(pagination) {

    const songs = await api()

    let page = pagination.actualPage - 1
    let start = page * pagination.perPage // 0
    let end = start + pagination.perPage // 5

    const dataOfPage = songs.slice(start, end)

    const tbody = document.querySelector('tbody')

    tbody.innerHTML = ''

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