let previous = '';
let current = 'BLOG';

document.querySelectorAll('.navItem')
        .forEach(function(element) {
          element.onclick = function(event) {
            event.preventDefault();

            let next = event.target.getAttribute('href');
            push(next);
          };
        });


const push = (next) => {
  previous = current;
  current = next;
  changePage();
}

const changePage = () => {
  let className = 'page--active';

  if (previous) {
    let previousPage = document.querySelector('#' + previous);
    previousPage.classList.remove(className);
  }

  let page = document.querySelector('#' + current);
  page.classList.add(className);  
}

