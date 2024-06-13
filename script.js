console.log("Welcome to Spotify");
//initialize the variable
let songindex=0;
let audioElement=new Audio();
let masterplay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songname:"ram aynge.mp3",filepath:"C:/Users/DELL/Desktop/Web Dev - Copy/Spotify/ram.mp3",coverpath:"cover1.jpg"},
    {songname:"song2.mp3",filepath:"C:/Users/DELL/Desktop/Web Dev - Copy/Spotify/song2.mp3",coverpath:"cover2.jpg"},
    {songname:"gulli mata.mp3",filepath:"C:/Users/DELL/Desktop/Web Dev - Copy/Spotify/song3.mp3",coverpath:"cover3.jpg"},
    {songname:"animal.mp3",filepath:"C:/Users/DELL/Desktop/Web Dev - Copy/Spotify/song4.mp3",coverpath:"cover4.jpg"},
    {songname:"Uljha jiya.mp3",filepath:"C:/Users/DELL/Desktop/Web Dev - Copy/Spotify/song5.mp3",coverpath:"cover5.jpg"},
    {songname:"ve haniya.mp3",filepath:"C:/Users/DELL/Desktop/Web Dev - Copy/Spotify/song6.mp3",coverpath:"cover6.jpg"},
    {songname:"unknown.mp3",filepath:"C:/Users/DELL/Desktop/Web Dev - Copy/Spotify/song2.mp3",coverpath:"cover1.jpg"},
    {songname:"Unknown.mp3",filepath:"C:/Users/DELL/Desktop/Web Dev - Copy/Spotify/song3.mp3",coverpath:"cover3.jpg"},
]

songitem.forEach((element,i)=>{
    //  console.log(element,i);
     element.getElementsByTagName("img")[0].src=songs[i].coverpath;
     element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})

// audioElement.play()
 
   //handle pause/play  click
   masterplay.addEventListener('click',()=>{
     if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play')
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
     }
     else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause')
        masterplay.classList.add('fa-circle-play')
        gif.style.opacity=0;
     }
   })
//listen to event
    audioElement.addEventListener('timeupdate',()=>{
       
        //update seekbar
        progress= parseInt((audioElement.currentTime/audioElement.duration)*100);//here we find percentage of time
    
     myprogressbar.value=progress;
    })

    myprogressbar.addEventListener('change',()=>{
        audioElement.currentTime= myprogressbar.value * audioElement.duration /100;//here we change percentage to second of time
    })

     const makeallplays=()=>{
        
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
        })
     }

    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
       element.addEventListener('click',(e)=>{
         makeallplays();
         ///   mastersongname.innerText=songs[songindex].songname;
            songindex=parseInt(e.target.id);
             e.target.classList.remove('fa-circle-play');
             e.target.classList.add('fa-circle-pause');
            
            audioElement.src = songs[songindex].filepath;
            mastersongname.innerText=songs[songindex].songname;
          
             audioElement.currentTime=0;
             audioElement.play();
             gif.style.opacity=1;
             masterplay.classList.remove('fa-circle-play');
             masterplay.classList.add('fa-circle-pause');
       })
    })

    document.getElementById('next').addEventListener('click', () => {
        songindex = (songindex + 1) % songs.length;
       
        audioElement.src = songs[songindex].filepath;
        mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    });

    document.getElementById('previous').addEventListener('click', () => {
        songindex = (songindex - 1 + songs.length) % songs.length;
    
        audioElement.src = songs[songindex].filepath;
        mastersongname.innerText=songs[songindex].songname;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity=1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    });