const el = document.querySelector('.article_box');
const formEl = document.forms.form;
const click = document.querySelector('.click');
formEl.addEventListener('submit', (ev) => {
  ev.preventDefault();
  const data = new FormData(formEl);
  console.log(data);
  const b = async () => {
    try {
      const { data: valid } = await axios.post('/test1', data);
      console.log('sended!');
      console.log(valid);
      const html = valid.map((value) => {
        return `<div class="box off"><h2>${value.title}</h2><h3> username : ${value.author.username}</h3>${value.content}<h4>${value.review.review}</h4></div>`;
      }).join();
      el.innerHTML = html;
    } catch (err) {
      console.log('error with sending');
    }
  };
  b();
});
// click.addEventListener('click', (ev) => {
//   ev.preventDefault();
//   const box = document.querySelectorAll('div.box');
//   if (box.classList.contains('off')) {
//     box.classList.toggle('off', false);
//     box.classList.toggle('on', true);
//   } else {
//     box.classList.toggle('on', false);
//     box.classList.toggle('off', true);
//   }
// });
