let persons = [
    {
        name: 'Tanya Sinclair <span>UX Engineer</span>',
        text : `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
        picture: 'images/image-tanya.jpg'
    },
    {
        name: 'John Tarkpor <span>Junior Front-end Developer</span>',
        text : `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
        picture: 'images/image-john.jpg'
    }
]

let paragraph = document.querySelector('.person-info p')
let personInfo = document.querySelector('.person-info h3')
let personImg = document.querySelector('.picture')
let preBtn = document.querySelector('.pre-btn')
let nextBtn = document.querySelector('.next-btn')

let currentPerson = 0
paragraph.innerHTML = persons[currentPerson].text
personInfo.innerHTML = persons[currentPerson].name
personImg.src = persons[currentPerson].picture

nextBtn.addEventListener('click',e=>{
    changePerson('next')
})

preBtn.addEventListener('click',e=>{
    changePerson('pre')
})

function changePerson(btn){
    if(btn == 'next'){
        console.log('next')
        if(currentPerson == persons.length - 1){
            currentPerson = 0
        }else{
            currentPerson+=1
        }
    }else{
        console.log('pre')
        if(currentPerson == 0){
            currentPerson = persons.length - 1
        }else{
            currentPerson-= 1
        }
    }
    paragraph.innerHTML = persons[currentPerson].text
    personInfo.innerHTML = persons[currentPerson].name
    personImg.src = persons[currentPerson].picture
}