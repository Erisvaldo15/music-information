const back = document.querySelector('#back')
const next = document.querySelector('.list ul')

function populateList() {

    
const list = document.querySelector('.list ul')



    const data = Array.from({length: 20}) // create an array with values
    
    // data.forEach((element, index) => {
    //     list.appendChild(document.createElement('li')).textContent = `Item ${index+1}`
    // })

   
    return data.length
}

const data = populateList()

let perPage = 5

const list = {

    create(element) {
        const list = document.querySelector('.list ul')
        list.appendChild(document.createElement('li')).textContent = `${element}`
    },

    update() {

        // const data = Array.from({length: 20}).map((_, index) => `Item ${index + 1}`)

        //  list.innerHTML = ''

        //  let page = pagination.actualPage - 1
        //  let start = page * pagination.perPage 
        //  let end = start + pagination.perPage

        //  const paginatedItem = data.slice(start, end)

        //  console.log(paginatedItem)

        //  paginatedItem.forEach((element) => list.create(element))
    }
}

const pagination = {
    actualPage: 1,
    perPage: perPage,
    numberOfPages: Math.ceil(data / perPage), // round to bigger number more next 
    controls: {
        back() {
            
            if(pagination.actualPage <= 1) {
                return pagination.actualPage = pagination.numberOfPages
            }

            return pagination.actualPage -= 1
        },
        next() {
            
            if(pagination.actualPage >= pagination.numberOfPages) {
                return pagination.actualPage = pagination.numberOfPages
            }

            return pagination.actualPage += 1
        },
    },
   

}

// pagination.actualPage = 1
back.addEventListener('click', () => pagination.controls.next())
console.log(pagination.actualPage)
// console.log(pagination.controls.back())
list.update()