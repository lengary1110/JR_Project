let previous = '';
let current = 'HOME';

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

const changeNavItem = () => {
  let className = 'navItem--active';

  if (previous) {
    var previousNavItem = document.querySelector('[href="'+ previous +'"]');
    previousNavItem.classList.remove(className);
  }

  var navItem = document.querySelector('[href="'+ current +'"]');
  navItem.classList.add(className); 
}

