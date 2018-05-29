// var
const tweetList = document.getElementById('tweet-list');


// event listeners
function eventListeners(){
  document.getElementById('form').addEventListener('submit', newTweet);
  tweetList.addEventListener('click', removeTweet);
  document.addEventListener('DOMContentLoaded', localStorageOnLoad);
}


// functions
function newTweet(e){
  e.preventDefault();
  // read textarea val
  const tweet = document.getElementById('tweet').value;
  // create remove btn
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-tweet';
  removeBtn.textContent = 'X';
  // create element 
  const li = document.createElement('li');
  li.textContent = tweet;
  // add removeBtn to each tweet generated
  li.appendChild(removeBtn);
  // add to list
  tweetList.appendChild(li);
  // add tweets to local storage
  addToLocalStorage(tweet);
}
function removeTweet(e){
  if(e.target.classList.contains('remove-tweet')){
    e.target.parentElement.remove();
  }
  // console.log(e.target.parentElement.textContent);
  removeFromLocalStorage(e.target.parentElement.textContent);
}
function addToLocalStorage(tweet){
  let tweets = getFromLocalStorage();
  // console.log(tweets);
  tweets.push(tweet);
  // convert tweet array into string
  localStorage.setItem('tweets', JSON.stringify(tweets));
}
function getFromLocalStorage(){
  let tweets;
  // const tweetsLS = localStorage.getItem('tweets');
  if(localStorage.getItem('tweets') === null) tweets = [];
  else tweets = JSON.parse(localStorage.getItem('tweets'));
  return tweets;
}
function localStorageOnLoad(){
  let tweets = getFromLocalStorage();
  tweets.forEach(tweet=>{
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-tweet';
    removeBtn.textContent = 'X';
    // create element 
    const li = document.createElement('li');
    li.textContent = tweet;
    // add removeBtn to each tweet generated
    li.appendChild(removeBtn);
    // add to list
    tweetList.appendChild(li);
  });
}
function removeFromLocalStorage(tweet){
  let tweets = getFromLocalStorage();
  const tweetDelete = tweet.substring(0, tweet.length-1);
  tweets.forEach((tweetLS,index)=>{
    if(tweetDelete === tweetLS) tweets.splice(index,1);
  });
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

eventListeners();