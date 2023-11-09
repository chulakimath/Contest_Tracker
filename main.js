
let arrayOfContests;
async function fetchFunction() {
    let kontests = fetch('https://kontests.net/api/v1/all');
    kontests.then(resopnse => resopnse.json()).then((result) => {
        arrayOfContests = result;
        console.log(arrayOfContests);
        divCreate(arrayOfContests);

    })
}


function divCreate(arry){
    let ihtml='';
    for(item in arry){
        // console.log(arry[item]);
        ihtml+=`
        <div class="card">
        <span class="name">Name:<name class="name1">${arry[item].name}</name></span>
        <span class="site">Site:${arry[item].site}</span>
        <span class="status">Status:${arry[item].status}</span>
        <span class="time">Start_time:"${arry[item].start_time}"</span>
        <span class="time">End_time:"${arry[item].end_time}"</span>
        <span class="link"><a href="${arry[item].url}">Visit</a></span>
    </div>
        `
    }
    document.querySelector('.main').innerHTML=ihtml;
    document.querySelector(".link").onclick=(tag)=>{
        tag.target.firstChild.click()
    }
}


fetchFunction();
