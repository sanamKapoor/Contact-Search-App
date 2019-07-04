//    Get Input Element
let searchInput  = document.querySelector('#filterInput');

//    ADD EVENT
searchInput.addEventListener('keyup', filterNames);

function filterNames(){
  let searchValue = searchInput.value.toUpperCase();
  
  let li = document.querySelectorAll('.collection-items');

  //    Loop for collection items

  for(let i = 0; i < li.length; i++){
      let a = li[i].getElementsByTagName('a')[0];
      
      //    if match

      if(a.innerHTML.toUpperCase().indexOf(searchValue) >= 0){
        li[i].style.display = '';
      }
      else{
          li[i].style.display = 'none';
      }
  }
}