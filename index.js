let newsData = new Map();

function fetchDataFromApi(Reqqest) {
  fetch(Reqqest)
      .then(req => req.json())
      .then(data => buildNewsBlocks(data));
}

function buildNewsBlocks(Data){
    const new_card = document.getElementsByClassName('news-card')[0];
      for (let i=0; i<20; i++){
        newsData.set(i,Data.articles[i]);
        new_card.insertAdjacentHTML('beforeend', CreateNewsCardHTML(Data.articles[i],i))
      }
}

function CreateNewsCardHTML(data,i){
  //new Card
  const sourceName = data.source.name;
  const sourceUrl = data.url;
  const domain = (new URL(sourceUrl))
  //html
  let htmlSnippet = `   
    <div class="new-block"> 
      <div class="new" id="${i}">
        <div class="new-details">
          <div class="upper">
            <img src="${getLogo(data)}" alt="${sourceName}" class="source"> 
            <div class="dropdown " style="float: right;">
              <button id="dropdown-icon"><i class="fa-solid fa-ellipsis-vertical"></i></button> 
              <div class=" dropdown-content">
                <a><i class="fa-solid fa-bookmark"></i>Save for later</a>
                <a><i class="fa-solid fa-share-nodes"></i> Share</a>
                <a herf="${domain}"><i class="fa-solid fa-link-horizontal"></i >Go to ${sourceName}</a>
                <a><i class="fa-solid fa-ban"></i>Hide stories from ${sourceName} </a>
                <a><i class="fa-solid fa-thumbs-up"></i>More stories like this</a>
                <a><i class="fa-solid fa-thumbs-down"></i>Fewer stories like this</a>
              </div>
            </div>
            </div>                
          <a href="${sourceUrl}" target="_blank">
          <p>
            ${data.title}
          </p>
          </a>
          <small>
          ${data.publishedAt.substr(0,10)}
          </small>
        </div>
        <a href="${sourceUrl}"><img src="${data.urlToImage}" alt="tessst" width="300" height="150"></a>
      </div> 
      <a href="${sourceUrl}" target="_blanck">  
      <button class="full-C">
      <img src="https://lh3.googleusercontent.com/JDFOyo903E9WGstK0YhI2ZFOKR3h4qDxBngX5M8XJVBZFKzOBoxLmk3OVlgNw9SOE-HfkNgb=s0-w40-rw" alt="" height="20px" width="20px">
      Full Coverage
      </button> 
      </a>
    </div>
    <hr>`
    return htmlSnippet;
}

function getLogo(data){
  let get_Logo ='https://logo.clearbit.com/';
  let uurl = data.url; 
  let domain = (new URL(uurl));
  domain = domain.hostname.replace('www.','');  
  return get_Logo+domain;        
}

export {fetchDataFromApi, buildNewsBlocks}