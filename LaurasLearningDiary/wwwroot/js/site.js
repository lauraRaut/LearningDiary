
//värivaihdokset create-sivun input-boxeihin

    const box = document.getElementById('Id');

    // 👇️ Change text color on mouseover
    box.addEventListener('mouseover', function handleMouseOver() {
        box.style.backgroundColor = '#e6c7e5';
    });

    // 👇️ Change text color back on mouseout
    box.addEventListener('mouseout', function handleMouseOut() {
        box.style.backgroundColor = '#fadfdb';
    });


const kakku = document.getElementById('Description');

// 👇️ Change text color on mouseover
kakku.addEventListener('mouseover', function handleMouseOver() {
    kakku.style.backgroundColor = '#e6c7e5';
});

// 👇️ Change text color back on mouseout
kakku.addEventListener('mouseout', function handleMouseOut() {
    kakku.style.backgroundColor = '#fadfdb';
});

const Source = document.getElementById('Source');

// 👇️ Change text color on mouseover
Source.addEventListener('mouseover', function handleMouseOver() {
    Source.style.backgroundColor = '#e6c7e5';
});

// 👇️ Change text color back on mouseout
Source.addEventListener('mouseout', function handleMouseOut() {
    Source.style.backgroundColor = '#fadfdb';
});

//confirm-delete metodi
function ConfirmDelete() {
    return confirm("Are you sure you want to delete?");
}