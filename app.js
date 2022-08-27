const container = document.querySelector('.container');
const ratingItems = document.querySelectorAll('.rating_item');
const button = document.querySelector('.btn');
const myArr = [...ratingItems];
let amount = '';
const imgUrl = './img/illustration-thank-you.svg';

const popup = document.querySelector('.popup');

myArr.map((item, clickedIndex) => {
  item.addEventListener('click', () => {
    myArr.forEach((otherItem, otherIndex) => {
          if(otherIndex <= clickedIndex) {
            otherItem.className = 'rating_item active';
          } else {
            otherItem.className = 'rating_item';
          }
        });
        amount = clickedIndex + 1
  });
});

function loadPopup() {
  if(amount === '') {
    popup.className = 'popup active'
  }
}

button.addEventListener('click', () => {
  if(amount !== '') {
    container.innerHTML = `
    <div class='submitted'>
      <img src=${imgUrl}>
      <p class='count'>You selected ${amount} out of 5</p>
    </div>
    <div class="text active">
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
    </div>
    `;
    
  }  else {
    loadPopup()
  }
});