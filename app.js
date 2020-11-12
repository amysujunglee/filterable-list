const filterInput = document.querySelector('#filterInput');
const collectionItem = document.querySelectorAll('.collection-item');

filterInput.addEventListener('keyup', (e) => {
    const searchStr = e.target.value.toLowerCase();
    console.log(searchStr);

    const results = collectionItem.contains(searchStr);
    console.log(results);

});

function filterNames() {
    
}