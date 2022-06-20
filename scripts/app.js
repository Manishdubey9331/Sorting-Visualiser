"use strict"; //code should be executed in "strict mode"

/*
async:  makes a function return a Promise
await:  makes a function wait for a Promise
QuerySelector: allows you to select the first element that matches one or more CSS selectors.
=== : strictly equals to
render(): to display the specified HTML code inside the specified HTML element.
*/

//Starting the Algorithm
const start = async() => {
    let algoValue = Number(document.querySelector(".algo-menu").value);
    let speedValue = Number(document.querySelector(".speed-menu").value);

    if(speedValue === 0){
        speedValue = 1;
    }

    if(algoValue === 0){
        alert("NO ALGORITHM IS SELECTED");
        return;
    }

    let algorithm = new sortAlgorithms(speedValue);
    if(algoValue === 1) await algorithm.BubbleSort();
    if(algoValue === 2) await algorithm.SelectionSort();
    if(algoValue === 3) await algorithm.InsertionSort();
    if(algoValue === 4) await algorithm.MergeSort();
    if(algoValue === 5) await algorithm.QuickSort();
};

//Navbar -> Render
const RenderScreen = async () => {
    let algoValue = Number(document.querySelector(".algo-menu").value);
    await RenderList();
};

// Rendering the size of array Box
const RenderList = async () => {
    let sizeValue = Number(document.querySelector(".size-menu").value);
    await clearScreen();

    let list = await randomList(sizeValue);
    const arrayNode = document.querySelector(".array");
    console.log(arrayNode);
    console.log(list);

    for(const element of list){
        const node = document.createElement("div");
        node.className = "cell";
        node.setAttribute("value",String(element)) ;
        node.style.height = `${3.8 * element}px`;
        arrayNode.appendChild(node);
    }
};

// Rendering the array
const RenderArray = async (sorted) => {
    let sizeValue = Number(document.querySelector(".size-menu").value);
    await clearScreen();

    let list = await randomList(sizeValue);
    if (sorted) list.sort((a, b) => a - b);

    const arrayNode = document.querySelector(".array");
    const divnode = document.querySelector("div");
    divnode.className = "s-array";

    for(const element of list){
        const dnode = document.createElement("div");
        dnode.className = "s-cell";
        dnode.innerText = element;
        divnode.appendChild(dnode);
    }
    arrayNode.appendChild(divnode);
};

const randomList = async (Length) => {
    let list = new Array();
    let lowerBound = 1;
    let upperBound = 100;

    for(let i = 0; i<Length ; ++i){
        let randomNumber = Math.floor(
            Math.random()*(upperBound - lowerBound + 1) + lowerBound
        );
        list.push(parseInt(randomNumber));
    }
    return list;
};

const clearScreen = async() => {
    document.querySelector(".array").innerHTML = "";
};

const response = () => {
    let Navbar = document.querySelector(".navbar");

    if(Navbar.className === "navbar"){
        Navbar.className += " responsive";
    }else{
        Navbar.className += "navbar";
    }
};

document.querySelector(".icon").addEventListener("click",response);
document.querySelector(".start").addEventListener("click",start);
document.querySelector(".size-menu").addEventListener("change",RenderScreen);
document.querySelector(".algo-menu").addEventListener("change",RenderScreen);
window.onload = RenderScreen;