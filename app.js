const searchInputBox =document.getElementById('input-box');
const dataShowBox = document.getElementById('data-show-box');
const errorMsg = document.getElementById('error-msg');
const spinner = document.getElementById('spinner');
const searchBtn =async() =>{
    errorMsg.innerText='';
    dataShowBox.innerHTML='';
    spinner.classList.remove('d-none');
    const res = await fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=Danny%20Welbeck
    https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchplayers.php?t={TeamName}&p=${searchInputBox.value}`);
    const data = await res.json();
    searchInputBox.value='';
    showPlayers(data.player);
}

const showPlayers =(players) =>{
    // console.log(players);
    spinner.classList.add('d-none');
    if(players == null){
        errorMsg.innerText='No Match Found!';
    }
    else{
        players.forEach(player =>{
            // console.log(player);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML=`
                <div class="card h-100">
                    <img class="img-fluid" src="${player.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text" > Birth-Location: ${player.strBirthLocation} </p>
                        <p class="card-text" > Weight: ${player.strWeight} </p>
                    </div>
                </div>
            `;
            dataShowBox.appendChild(div);
        });
    }
}