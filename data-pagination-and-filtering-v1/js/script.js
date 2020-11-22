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
    const startIndex = page * 9 - 9;
    const endIndex = page * 9;

    // select the element with a class of `student-list` and assign it to a variable
    const studentList = document.querySelector('ul.student-list');
    // set the innerHTML property of the variable you just created to an empty string
    studentList.innerHTML = '';
    // loop over the length of the `list` parameter
    for (let i = 0; i < list.length; i++) {
        // inside the loop create a conditional to display the proper students
        if (i >= startIndex && i < endIndex) {
            // inside the conditional:
            // create the elements needed to display the student information
            const li = document.createElement('li');
            li.classList.add('student-item', 'cf');

            const div1 = document.createElement('div');
            div1.classList.add('student-details');

            const img = document.createElement('img');
            img.classList.add('avatar');
            img.src = data[i].picture.large;

            const h3 = document.createElement('h3');
            h3.innerText = `${data[i].name.first + ' ' + data[i].name.last}`;

            const span = document.createElement('span');
            span.classList.add('email');
            span.innerText = `${data[i].email}`;

            const div2 = document.createElement('div');
            div1.classList.add('joined-details');

            const span2 = document.createElement('span');
            span.classList.add('date');
            span2.innerText = `${data[i].registered.date}`;

            // insert the above elements
            studentList.appendChild(li);
            li.appendChild(div1);
            div1.appendChild(img);
            div1.appendChild(h3);
            div1.appendChild(span);

            li.appendChild(div2);
            div2.appendChild(span2);
        }
    }

}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
    // create a variable to calculate the number of pages needed
    const numOfPages = Math.ceil(list.length / 9);
    // select the element with a class of `link-list` and assign it to a variable
    const linkList = document.querySelector('ul.link-list');
    // set the innerHTML property of the variable you just created to an empty string
    linkList.innerHTML = '';
    // loop over the number of pages needed
    for (let i = 1; i <= numOfPages; i++) {
        // create the elements needed to display the pagination button
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.type = 'button';
        button.innerText = `${i}`;
        // insert the above elements
        linkList.appendChild(li);
        li.appendChild(button);
    }
    // give the first pagination button a class of "active"
    console.log(linkList.firstElementChild)
    linkList.firstElementChild.firstElementChild.className = 'active';
    // create an event listener on the `link-list` element
    linkList.addEventListener('click', (e) => {
        // if the click target is a button:
        if (e.target.tagName === 'BUTTON') {
            // remove the "active" class from the previous button
            document.querySelector('button.active').classList.remove('active');
            // add the active class to the clicked button
            e.target.classList.add('active');
            // call the showPage function passing the `list` parameter and page to display as arguments
            showPage(list, e.target.innerText);
        }
    })

}

// Call functions
showPage(data, 1);
addPagination(data);