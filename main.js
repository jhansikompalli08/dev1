//console.dir(document);
//console.log(document.body);
//console.log(document.all);
//console.log(document.getElementById('header-title'));
//var headerTitle=document.getElementById('header-title');
//headerTitle.textContent='hello';
 
//var items=document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[3]);
//items[2].style.backgroundColor='green';
//for(var i=0;i<items.length;i++){
    //items[i].style.fontWeight='bold';
//}
// var li=document.getElementsByTagName('li');
 //console.log(li);
 //li[1].style.backgroundColor='green';

/*  var secondItem=document.querySelector('.list-group-item:nth-child(2)');
  secondItem.style.backgroundColor='green';
  var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
  thirdItem.style.visibility='hidden';*/
    
var itemList=document.querySelector('#items');
//console.log(itemList.parentNode);
//itemList.parentNode.style.backgroundColor='#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);
/*console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);*/

//console.log(itemList.childNodes);
/*console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';*/
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='hello1';

//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='hello4';
  
//console.log(itemList.nextSibling);
//console.log(itemList.nextElementSibling);

//console.log(itemList.previousSibling);
//console.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

//createElement
//create a div 
 
var newDiv=document.createElement('div');
newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','helloDiv');
var newDivText=document.createTextNode('helloworld');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);







