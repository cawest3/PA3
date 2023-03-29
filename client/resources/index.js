const url = "http://localhost:5286/api/Houndstoothify"
const getSongs = function(){
    fetch(url).then(function(response){
        return response.json
    }).then(function(data){
        makeSongTable(data)
    });
};

// const makeSongTable = (mySongs) => {
//     let table =document.getElementById("songTable");
//     let tbody = document.createElement("tbody")
//     table.appendChild(tbody)

//     mySongs.forEach((song) => {
//         let tr = document.createElement("tr")

//         let td1 = document.createElement("td")
//         td1.innerHTML = song.songId
//         tr.appendChild(td1);

//         let td2 = document.createElement("td")
//         td2.innerHTML = song.title
//         tr.appendChild(td2);

//         let td3 = document.createElement("td")
//         td3.innerHTML = song.artist
//         tr.appendChild(td3);

//         let td4 = document.createElement("td")
//         td4.innerHTML = song.dateAdded
//         tr.appendChild(td4);

//         let td5 = document.createElement("td")
//         td5.innerHTML = song.favorited
//         tr.appendChild(td5);

//         let td6 = document.createElement("td")
//         td6.innerHTML = song.deleted
//         tr.appendChild(td6);

    
//     });
// };

// getSongs();



// let app = document.getElementById("app")
// let songs = JSON.parse(localStorage.getItem('mySongs')) 


// let songs = [
//     {
//             songId: '0' ,
//             title: 'Roar',
//             artist: 'Katy Perry',
//             dateAdded: '2023-01-24',
//             favorited: 'Yes',
//             deleted: 'No'
//     }
// ]

// function handleOnLoad(){
//     createTable()
//     createForm()
//     createFormDelete()
//     createFormFav()
// }


// function addRow(song){
//         let tableBody = document.getElementById('songTableBody')
//         let tr = document.createElement('TR')
//         tableBody.appendChild(tr)
    
//         let td1 = document.createElement('TD')
//         td1.width = 100
//         td1.appendChild(document.createTextNode(`${song.songId}`))
//         tr.appendChild(td1)

//         let td2 = document.createElement('TD')
//         td2.width = 300
//         td2.appendChild(document.createTextNode(`${song.title}`))
//         tr.appendChild(td2)

//         let td3 = document.createElement('TD')
//         td3.width = 300
//         td3.appendChild(document.createTextNode(`${song.artist}`))
//         tr.appendChild(td3)

//         let td4 = document.createElement('TD')
//         td4.width = 300
//         td4.appendChild(document.createTextNode(`${song.dateAdded}`))
//         tr.appendChild(td4)

//         let td5 = document.createElement('TD')
//         td5.width = 100
//         td5.appendChild(document.createTextNode(`${song.favorited}`))
//         tr.appendChild(td5)

//         let td6 = document.createElement('TD')
//         td6.width = 100
//         td6.appendChild(document.createTextNode(`${song.deleted}`))
//         tr.appendChild(td6)

//         songs.unshift(song)
       

//         localStorage.setItem('mySongs', JSON.stringify(songs))
// }

// function createForm(){
//     let form = document.createElement('form')
//     let textInput = document.createElement('input')
//     textInput.type = 'text'
//     textInput.placeholder = 'Enter Song Title'
//     textInput.id = 'newSongTitle'
//     form.appendChild(textInput)

//     let textInput1 = document.createElement('input')
//     textInput1.type = 'text'
//     textInput1.placeholder = 'Enter Song Artist'
//     textInput1.id = 'newSongArtist'
//     form.appendChild(textInput1)

//     let submitButton = document.createElement('button')
//     submitButton.textContent = 'Submit'
//     form.appendChild(submitButton)

//     let songCount = '1'
//     form.addEventListener('submit', function(e){
//         e.preventDefault()
//         let currentDate = new Date().toJSON().slice(0,10) 
//         let song = {
//             songId: songCount ++,
//             title: e.target.elements.newSongTitle.value,
//             artist: e.target.elements.newSongArtist.value,
//             dateAdded: currentDate,
//             favorited: 'No',
//             deleted: 'No'
//         }
        
//         addRow(song)

//         e.target.elements.newSongTitle = ''
//         e.target.elements.newSongArtist = ''
//         e.target.elements.newSongFavorite = ''

//     })
    

//     app.appendChild(form)
// }

// function createTable(){
//     //create table
    
//     let table = document.createElement('TABLE')
//     table.border = '1'
//     table.id = 'songTable'
//     let tableBody = document.createElement('TBODY')
//     tableBody.id = 'songTableBody'
//     table.appendChild(tableBody)

//     //create header row
//     let tr = document.createElement('TR')
//     tableBody.appendChild(tr)
    
//     let th1 = document.createElement('TH')
//     th1.width = 100
//     th1.appendChild(document.createTextNode('Song ID'))
//     tr.appendChild(th1)

//     let th2 = document.createElement('TH')
//     th2.width = 300
//     th2.appendChild(document.createTextNode('Title'))
//     tr.appendChild(th2)

//     let th3 = document.createElement('TH')
//     th3.width = 300
//     th3.appendChild(document.createTextNode('Artist'))
//     tr.appendChild(th3)

//     let th4 = document.createElement('TH')
//     th4.width = 300
//     th4.appendChild(document.createTextNode('Date Added'))
//     tr.appendChild(th4)

//     let th5 = document.createElement('TH')
//     th5.width = 100
//     th5.appendChild(document.createTextNode('Favorited'))
//     tr.appendChild(th5)

//     let th6 = document.createElement('TH')
//     th6.width = 100
//     th6.appendChild(document.createTextNode('Deleted'))
//     tr.appendChild(th6)

//     //add data rows
//     songs.forEach((song) => {
//         let tr = document.createElement('TR')
//         tableBody.appendChild(tr)
    
//         let td1 = document.createElement('TD')
//         td1.width = 100
//         td1.appendChild(document.createTextNode(`${song.songId}`))
//         tr.appendChild(td1)

//         let td2 = document.createElement('TD')
//         td2.width = 300
//         td2.appendChild(document.createTextNode(`${song.title}`))
//         tr.appendChild(td2)

//         let td3 = document.createElement('TD')
//         td3.width = 300
//         td3.appendChild(document.createTextNode(`${song.artist}`))
//         tr.appendChild(td3)

//         let td4 = document.createElement('TD')
//         td4.width = 300
//         td4.appendChild(document.createTextNode(`${song.dateAdded}`))
//         tr.appendChild(td4)

//         let td5 = document.createElement('TD')
//         td5.width = 100
//         td5.appendChild(document.createTextNode(`${song.favorited}`))
//         tr.appendChild(td5)

//         let td6 = document.createElement('TD')
//         td6.width = 100
//         td6.appendChild(document.createTextNode(`${song.deleted}`))
//         tr.appendChild(td6)
//     })

    
//     app.appendChild(table)

// }

// function createFormDelete(song){
//     let form = document.createElement('form')
//     let textInput = document.createElement('input')
//     textInput.type = 'text'
//     textInput.placeholder = 'Enter Existing Song Title'
//     textInput.id = 'newSongTitle'
//     form.appendChild(textInput)

//     let editButton = document.createElement('button')
//     editButton.textContent = 'Delete'
//     form.appendChild(editButton)

//     form.addEventListener('submit', function(e){
//         e.preventDefault()
//         document.getElementById('find').innerHTML = songs.find(song.title)
//         console.log(song.title)
//     })

//     app.appendChild(form)
// }

// function createFormFav(){
//     let form = document.createElement('form')
//     let textInput = document.createElement('input')
//     textInput.type = 'text'
//     textInput.placeholder = 'Enter Existing Song Title'
//     textInput.id = 'newSongTitle'
//     form.appendChild(textInput)

//     let favButton = document.createElement('button')
//     favButton.textContent = 'Favorite'
//     form.appendChild(favButton)

    

//     app.appendChild(form)
// }

// getSongs();




// function getSongs()
// {
//     const allSongsApiUrl = "https://localhost:5286/Houndstoothify"
// }

// let deleteBtn = document.createElement("button");
// tr.appendChild(deleteBtn);
// deleteBtn.innerHTML = "Delete";
// deleteBtn.addEventListener("click", () => {
//     deleteSong
// })