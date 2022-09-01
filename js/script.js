// task 1: 

const shop = {
    cashMoney: 30000,
    location: {
        road: 24,
        area: 'Adorsho nagar',
        city: 'Dhaka',
        postOffice: 'Gulshan'
    },
    product: ['shoap', 'choclate', 'milk', 'cake', 'rice'],
    work: function sellProduct(newSell) {
        const availableBalance = this.cashMoney + newSell;
        return availableBalance;
    },
    isOpen: true,
    shopName: 'Super Shop'
}
// console.log(shop.work(5000))


// task 2: 

let shopDetails = `
Our shop name is ${shop.shopName}. our shop sells ${shop.product[2]}. 
our shop is located in ${shop.location.area}. 
please visit our shop.
`
// console.log(shopDetails);


// task 3.1

let arrayFunction = () => {
    return 89;
}
// console.log(arrayFunction());

// task 3.2 

const result = num => {
    vagFol = num / 17;
    return vagFol;
}

// console.log(result(34));


// task 3.3 

const vagFol2 = (num1, num2) => {
    let sum = num1 + num2;
    let finalResult = sum / 2;
    return finalResult;
}
// console.log(vagFol2(2, 4));


// task 3.4 

const multiLineFunction = (num1, num2) => {
    let num1Final = num1 + 7;
    let num2Final = num2 + 7;
    let sumFinal = num1Final + num2Final;
    return sumFinal;
}
// console.log(multiLineFunction(3, 4));


// task 4: 

const numsArray = [23, 34, 25, 54, 64, 74, 54, 12, 44, 32];
const mapArray = numsArray.map(n => n / 7);
// console.log(mapArray)

// task 5 : 

/*
1. Map :
    The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
    ex. 
    const numsArray = [23, 34, 25, 54, 64, 74, 54, 12, 44, 32];
    const mapArray = numsArray.map(n => n / 7);
    console.log(mapArray);

2. forEach :
    The forEach() method executes a provided function once for each array element.
    ex.
    const array1 = ['a', 'b', 'c'];

    array1.forEach(element => console.log(element));

    // expected output: "a"
    // expected output: "b"
    // expected output: "c"

3. filter : 
    The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
    ex.
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const result = words.filter(word => word.length > 6);

    console.log(result);
    // expected output: Array ["exuberant", "destruction", "present"]

4. find :
    The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
    ex. 
    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10);

    console.log(found);
    // expected output: 12

*/


// task 6 : 



// task 7 : 

fetch('https://jsonplaceholder.typicode.com/photos?_limit=20')
    .then(res => res.json())
    .then(data => loadData(data))

function loadData(photos) {
    for (photo of photos) {
        let imageTitle = photo.title;
        let imgaeUrl = photo.url;
        let photoPushParent = document.getElementById('photo-div');
        let photoDiv = document.createElement('div');
        photoDiv.classList.add('col');
        photoDiv.innerHTML = `
            <div class="card">
                <img src="${imgaeUrl}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${imageTitle}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `
        photoPushParent.appendChild(photoDiv);
    }
}