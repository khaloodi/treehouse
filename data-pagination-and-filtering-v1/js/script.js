/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
const ul = document.querySelector('ul.student-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const showPage = () => {
    for (let i = 0; i < data.length; i++) {
        const li = document.createElement('li');
        li.classList.add('student-item', 'cf');
        const div1 = document.createElement('div');
        div1.classList.add('student-details');
        const img = document.createElement('img');
        img.classList.add('avatar');
        img.src = data[i].picture.thumbnail;
        const h3 = document.createElement('h3');
        h3.innerText = `${data[i].name}`;
        const span = document.createElement('span')
        span.classList.add('email')
        span.innerText = `${data[i].registered}`


        html = img + h3 + span;
        div1.innerHTML = html;

        ul.appendChild(li);
        li.appendChild(div1);

    }

}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage();