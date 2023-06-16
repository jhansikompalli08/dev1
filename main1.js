var itemList=document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);*/

//console.log(itemList.childNodes);
//console.log(itemList.children);
/*console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';*/
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='hello1';