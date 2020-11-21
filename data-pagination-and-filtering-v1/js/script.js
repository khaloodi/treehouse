/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
// const ul = document.querySelector('ul.student-list');

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
// const showPage = () => {
//     for (let i = 0; i < data.length; i++) {
//         const li = document.createElement('li');
//         li.classList.add('student-item', 'cf');

//         const div1 = document.createElement('div');
//         div1.classList.add('student-details');

//         const img = document.createElement('img');
//         img.classList.add('avatar');
//         img.src = data[i].picture.thumbnail;

//         const h3 = document.createElement('h3');
//         h3.innerText = `${data[i].name.first + ' ' + data[i].name.last}`;

//         const span = document.createElement('span');
//         span.classList.add('email');
//         span.innerText = `${data[i].email}`;

//         const div2 = document.createElement('div');
//         div1.classList.add('joined-details');

//         const span2 = document.createElement('span');
//         span.classList.add('date');
//         span2.innerText = `${data[i].registered.date}`;

//         ul.appendChild(li);
//         li.appendChild(div1);
//         div1.appendChild(img);
//         div1.appendChild(h3);
//         div1.appendChild(span);


//         li.appendChild(div2);
//         div2.appendChild(span2);
//     }

// }

function showPage(list, page) {
    // create two variables which will represent the index for the first and last student on the page
    const firstStudent = list[0];
    const lastStudent = list[list.length - 1];

    // select the element with a class of `student-list` and assign it to a variable
    const ul = document.querySelector('ul.student-list');
    // set the innerHTML property of the variable you just created to an empty string
    ul.innerHTML = '';
    // loop over the length of the `list` parameter
    // inside the loop create a conditional to display the proper students
    // inside the conditional:
    // create the elements needed to display the student information
    // insert the above elements
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage();