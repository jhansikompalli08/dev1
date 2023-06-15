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
  var secondItem=document.querySelector('.list-group-item:nth-child(2)');
  secondItem.style.backgroundColor='green';
  var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
  thirdItem.style.visibility='hidden';
