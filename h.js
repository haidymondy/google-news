

const searchWrapper=document.querySelector('.search-input');
const inputBox=searchWrapper.querySelector('input');
const suggBox=searchWrapper.querySelector(".autocom-box");
const icon=searchWrapper.querySelector(".search-icon");

let linkTag=searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup=(e)=>
{
    let userData=e.target.value;
    let emptyArray=[];
    if(userData)
    {
        icon.onxlick=()=>
        {
            webLink="http://www.google.com/search?q="+userData;
            linkTag.setAttribute("href",webLink);
            console.log(webLink);
            linkTag.click();
        }
        
        emptyArray=suggestions.filter((data)=>
        {
        return data.toLowerCase().startsWith(userData.toLowerCase());
        });

       emptyArray=emptyArray.map((data)=>
       {
         return data='<li>'+ data+'</li>' ;
       });

        searchWrapper.clickList.add("active");
        showSuggestions(emptyArray);
        let allList=suggBox.querySelectorAll("li");

        for(let i=0;i<allList.length;i++)
        {
            allList[i].setAttribute("onxlick","select(this)");

        }

    }else
    {
       searchWrapper .clickList.remove("active");
    }

}

function select(element)
{
    let selectData=element.textContent;
    inputBox.value=selectData;
    icon.onxlick=()=>
    {
        webLink="http://www.google.com/search?q=" +selectData;
        linkTag.setAttribute("href",webLink);
        linkTag.click();
    }
searchWrapper.classList.remove("active");

}

function showSuggestions (List)
{
   let listData;
   if(!List.length)
   {
    userValue=inputBox.value;
    listData='<li>'+userValue+'</li>';
   }else
   {
     listData=List.join('');
   }
   suggBox.innerHTML=listData;

}

let suggestions=
[
    "github",
    "google",
    "youtube",
    "food",
    "local",

];



////////////////////////////////api/////////////////////////////////////


const container=document.querySelector('.container');
const cnn=document.querySelector('.cnn');
const newslink=document.querySelector('.news-link');
const photo=document.querySelector('.photo');
const time=document.querySelector('.time');

function retrieve(e)
{
    newslink.innerHTML=''
    e.preventDefault()
   const apikey='1f990feff1de4c89a3ac933055ba6602'
   let topic= container.value;
   let url='https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}'
   
fetch(url).then((res)=>
{
    return res.json()
}).then((data)=>{

   console.log(data)
   data.articles.forEach(article => {
    let li= document.createElement('li');
    let a= document.createElement('a');
    a.setAttribute('href',article.url);
    a.setAttribute('target','_blank')
    a.textContent=article.title;
    li.appendChild(a);
    newslink.appendChild(li);
   })

})
console.log(topic)

}
