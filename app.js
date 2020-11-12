const filterInput = document.querySelector('#filterInput');
console.log(filterInput);

filterInput.addEventListener('keyup', (e) => {
    const searchStr = e.target.value.toLowerCase();
    console.log(searchStr);

    
});