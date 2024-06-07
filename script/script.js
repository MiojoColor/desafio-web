addEventListener('DOMContentLoaded', () => {
    let specialties = localStorage.getItem('specialties');
    if (specialties) {
        const element = document.querySelector('.item-list');
        JSON.parse(specialties).forEach((specialty) => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');

            div.classList.add('item');

            h2.textContent = specialty.name;
            p.textContent = specialty.description;
            img.src = specialty.image;

            div.appendChild(h2);
            div.appendChild(p);
            div.appendChild(img);

            element.appendChild(div);
        });
    }
});
