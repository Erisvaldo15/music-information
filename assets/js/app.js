import api from "./exports/api.js";
import setActualPage from "./exports/actualPage.js";
import goPage from "./exports/goPage.js";
import paginate from "./exports/paginate.js"
import prev from "./exports/prevPage.js";
import next from "./exports/nextPage.js";
import render from "./exports/renderData.js";

const pagination = {
    data: Array.from({ length: 17 }),
    actualPage: 1,
    perPage: 5,
    numberOfPages: function() {
       return this.NumberOfPages = Math.ceil(this.data.length / this.perPage) 
       // round to bigger number more next 
    },
}

function start(pagination) {

    const actualPage = pagination.actualPage
    const perPage = pagination.perPage
    const numberOfPages = paginate(pagination)
    
    setActualPage(actualPage)
    prev(actualPage, perPage, api, setActualPage)
    next(actualPage, perPage, numberOfPages, api, setActualPage)
    pagination.actualPage = goPage(actualPage, perPage, setActualPage, api)
}

render(pagination.actualPage, pagination.perPage, api)

window.addEventListener('load', () => start(pagination))