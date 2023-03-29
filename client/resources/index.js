const url = "http://localhost:5286/api/Houndstoothify"
let mySongs = JSON.parse(localStorage.getItem('mySongs'))  

function handleOnLoad(){
    getAllSongs()
    createForm()
}

function handlePost(mySongs,song) //Add new song
{    
    console.log("made it to post")
        let tableBody = document.getElementById('songTableBody')
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)
    
        let td1 = document.createElement('TD')
        td1.width = 100
        td1.appendChild(document.createTextNode(`${song.songId}`))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 300
        td2.appendChild(document.createTextNode(`${song.title}`))
        tr.appendChild(td2)

        let td3 = document.createElement('TD')
        td3.width = 300
        td3.appendChild(document.createTextNode(`${song.artist}`))
        tr.appendChild(td3)

        let td4 = document.createElement('TD')
        td4.width = 300
        td4.appendChild(document.createTextNode(`${song.dateAdded}`))
        tr.appendChild(td4)

        let td5 = document.createElement('TD')
        td5.width = 100
        td5.appendChild(document.createTextNode(`${song.favorited}`))
        tr.appendChild(td5)

        let td6 = document.createElement('TD')
        td6.width = 100
        td6.appendChild(document.createTextNode(`${song.deleted}`))
        tr.appendChild(td6)

        mySongs.unshift(song)
       
}

function handlePut() //In HTML
{
    console.log("made it to put")
    FindID(songId, newSongArtist, newSongTitle)

}

function getAllSongs() //fetches songs
{
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        createSongTable(data)
    })
}

function createSongTable() //creates table and adds data rows
{
    //create table
    
    let table = document.createElement('TABLE')
    table.border = '1'
    table.id = 'songTable'
    let tableBody = document.createElement('TBODY')
    tableBody.id = 'songTableBody'
    table.appendChild(tableBody)

    //create header row
    let tr = document.createElement('TR')
    tableBody.appendChild(tr)
    
    let th1 = document.createElement('TH')
    th1.width = 100
    th1.appendChild(document.createTextNode('Song ID'))
    tr.appendChild(th1)

    let th2 = document.createElement('TH')
    th2.width = 300
    th2.appendChild(document.createTextNode('Title'))
    tr.appendChild(th2)

    let th3 = document.createElement('TH')
    th3.width = 300
    th3.appendChild(document.createTextNode('Artist'))
    tr.appendChild(th3)

    let th4 = document.createElement('TH')
    th4.width = 300
    th4.appendChild(document.createTextNode('Date Added'))
    tr.appendChild(th4)

    let th5 = document.createElement('TH')
    th5.width = 100
    th5.appendChild(document.createTextNode('Favorited'))
    tr.appendChild(th5)

    let th6 = document.createElement('TH')
    th6.width = 100
    th6.appendChild(document.createTextNode('Deleted'))
    tr.appendChild(th6)

    //add data rows
    mySongs.forEach((song) => {
        let tr = document.createElement('TR')
        tableBody.appendChild(tr)
    
        let td1 = document.createElement('TD')
        td1.width = 100
        td1.appendChild(document.createTextNode(`${song.songId}`))
        tr.appendChild(td1)

        let td2 = document.createElement('TD')
        td2.width = 300
        td2.appendChild(document.createTextNode(`${song.title}`))
        tr.appendChild(td2)

        let td3 = document.createElement('TD')
        td3.width = 300
        td3.appendChild(document.createTextNode(`${song.artist}`))
        tr.appendChild(td3)

        let td4 = document.createElement('TD')
        td4.width = 300
        td4.appendChild(document.createTextNode(`${song.dateAdded}`))
        tr.appendChild(td4)

        let td5 = document.createElement('TD')
        let favButton = document.createElement("checkbox")
        favButton.onclick = function() {
            song.favorited = !song.favorited
            localStorage.setItem("mySongs",JSON.stringify(songs))
            createSongTable()
        }
        td5.appendChild(favButton)
        tr.appendChild(td5)

        let td6 = document.createElement('TD')
        let delButton = document.createElement("button")
        delButton.textContent = "Delete"
        delButton.onclick = function() {
            song.deleted = !song.deleted
            localStorage.setItem("mySongs",JSON.stringify(songs))
            createSongTable()
        }
        td6.appendChild(delButton)
        tr.appendChild(td6)
    })

    
    app.appendChild(table)


}

function createForm() //Creates Form for submitting
{
    let form = document.createElement('form')
    let textInput = document.createElement('input')
    textInput.type = 'text'
    textInput.placeholder = 'Enter Song Title'
    textInput.id = 'newSongTitle'
    form.appendChild(textInput)

    let textInput1 = document.createElement('input')
    textInput1.type = 'text'
    textInput1.placeholder = 'Enter Song Artist'
    textInput1.id = 'newSongArtist'
    form.appendChild(textInput1)

    let submitButton = document.createElement('button')
    submitButton.textContent = 'Submit'
    form.appendChild(submitButton)

    let songCount = '1'
    form.addEventListener('submit', function(e){
        e.preventDefault()
        let currentDate = new Date().toJSON().slice(0,10) 
        let song = {
            songId: songCount ++,
            title: e.target.elements.newSongTitle.value,
            artist: e.target.elements.newSongArtist.value,
            dateAdded: currentDate,
            favorited: 'No',
            deleted: 'No'
        }
        
        handlePost(song)

        e.target.elements.newSongTitle = ''
        e.target.elements.newSongArtist = ''
        e.target.elements.newSongFavorite = ''

    })
    

    app.appendChild(form)
}

function SongUpdate(song) // POST Method
{
    console.log("inside post")
    console.log(song)
    fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Constent-Type": "application/json",
        },
        body:JSON.stringify(song),
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}

function SongEdit(songId) //PUT Method
{
    console.log("inside put")
    console.log(temp)
    fetch(`${url}/${songId}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Constent-Type": "application/json",
        },
        body:JSON.stringify(temp,songId),
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })
}

function FindID(songId, newSongArtist, newSongTitle) //Find ID to Edit
{
    console.log("In ID search button")

    console.log()
    console.log()
    console.log()

    let temp = mySongs.find((song) => song.songId == songId)
    console.log(temp)

    temp.title = newSongTitle
    temp.artist = newSongArtist

    console.log(temp)
    EditSong(songId, temp)
}