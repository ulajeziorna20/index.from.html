let elementyListy = document.querySelectorAll(`[href]`);
// console.log(elementyListy);


// let newArray = Array.from(elementyListy)
// console.log(newArray);



let newArray = Array.from(elementyListy, element => {
    
    // console.log(element['href']);
    // console.log(element.getAttribute(`href`));


    // opcja 1.
    // let object = {
    //     href: element.getAttribute(`href`),
    //     text: element.innerText,
    // };

    // opcja 2.
    // object.href = element.getAttribute(`href`);
    // // console.log(element.innerText);
    // object.text = element.innerText;
    // console.log(object);

    

    // opcja 3.
    return {
        href: element.getAttribute(`href`),
        text: element.innerText,
    };



});
// console.log(newArray);
// let nowaTablica = newArray.entries().next().value;
// // nowaTablica.push(`Ula`);
// console.log(nowaTablica);
// console.log(newArray.entries().next().value.push(`Ula`));

// jak podglądasz cos w console.log pierwsze co sprawdzasz jaki masz rodzaj danych.




// for (const [i, element] of newArray.entries()) {
//     // console.log(i);
    
// }



// const iterator1 = newArray.entries();

// console.log(iterator1.next().value);
// expected output: Array [0, "a"]

// console.log(iterator1.next().value);
// expected output: Array [1, "b"]






// Stwórz trzy tablice:

// 1. Pierwsza zawiera tylko obiekty z linkami z domeną .pl
// 2. Druga zawiera obiekty z linkami z domeną .com
// 3. Trzecia zawiera obiekty z linkami wewnętrznymi





// let kwiaty = [`goździki`, `róże`, `piwonie`];
// console.log(kwiaty);

// let usunietyKwiat = kwiaty.shift();
// console.log(usunietyKwiat);

// console.log(kwiaty);





// metoda array.pop()
// let produkty = [`chleb`, `płatki`, `mleko`];
// console.log(produkty);

// let usunietyProdukt = produkty.pop();
// console.log(usunietyProdukt);

// console.log(produkty);





// metoda array.push()
// let filmy = [`Incepcja`, `Gladiator`, `Ostatni Mohikanin`];
// console.log(filmy);

// let nowaDlugoscTablicy = filmy.push(`Iluzja`);
// console.log(nowaDlugoscTablicy);

// console.log(filmy);







// 1. Pierwsza zawiera tylko obiekty z linkami z domeną .pl



// let elementyListyFiltered = Array.from(elementyListy).filter(element => {
//     console.log(element.getAttribute(`href`));
//     // console.log(element.getAttribute(`href`).includes(`.pl`));
//     // let filteredElements = element.getAttribute(`[href$="pl"]`);

//     return element.getAttribute(`href`).includes(`.pl`);
// })

// console.log(elementyListyFiltered);





// 2. Druga zawiera obiekty z linkami z domeną .com



// let elementyListyFiltered = Array.from(elementyListy).filter(element => {
//     // console.log(element.getAttribute(`href`));
//     // console.log(element.getAttribute(`href`).includes(`.com`));

//     return element.getAttribute(`href`).includes(`.com`);
// })

// console.log(elementyListyFiltered);




// 3. Trzecia zawiera obiekty z linkami wewnętrznymi


// let elementyListyFiltered = Array.from(elementyListy).filter(element => {
//     // console.log(element.getAttribute(`href`));
//     // console.log(element.getAttribute(`href`).includes(`#`));

//     return element.getAttribute(`href`).includes(`#`);
// })

// console.log(elementyListyFiltered);
