const courses = document.getElementById('courses-list');

function loadEventListeners(){
  courses.addEventListener('click', buyCourses);
}

function buyCourses(e){
  if(e.target.classList.contains('add-to-cart')){
    // console.log(e.target.parentElement.parentElement);
    const course = e.target.parentElement.parentElement;
    getCourseInfo(course);
  }
}
function getCourseInfo(course){
  const courseInfo = {
    image: course.querySelector('img').src,
    title: course.querySelector('h4').textContent,
    price: course.querySelector('.price span').textContent,
    id: course.querySelector('a').getAttribute('data-id')
  };
  AddToCart(courseInfo);
}
function AddToCart(course){
  const row = document.createElement('tr');
  row.innerHTML = `
    <tr>
      <td>
        <img src="${course.image}">
      </td>
      <td>${course.title}</td>
      <td>${course.price}</td>
      <td>
        <a href="#" class="button u-full-width">Clear Cart</a>
      </td>
    </tr>
  `;
}


loadEventListeners();