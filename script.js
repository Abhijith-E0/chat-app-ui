const chats = [
{
name:"Sophia Collins",
message:"See you tomorrow!",
time:"2 min",
online:true,
img:"https://i.pravatar.cc/150?img=32"
},

{
name:"Lucas Mitchell",
message:"Let's finish the project.",
time:"12 min",
online:false,
img:"https://i.pravatar.cc/150?img=12"
},

{
name:"Sophia",
message:"Can you call me?",
time:"1 hr",
online:true,
img:"https://i.pravatar.cc/150?img=48"
},

{
name:"Emerson",
message:"Meeting at 5 PM",
time:"Yesterday",
online:false,
img:"https://i.pravatar.cc/150?img=14"
},

{
name:"Olivia",
message:"Thank you 😊",
time:"Yesterday",
online:false,
img:"https://i.pravatar.cc/150?img=24"
},
{
name:"Liam Parker",
message:"Hi brother",
time:"Yesterday",
online:true,
img:"https://i.pravatar.cc/150?img=30"
},
{
name:"Grace Morgan",
message:"Good morning",
time:"Yesterday",
online:true,
img:"https://i.pravatar.cc/150?img=31"
},
{
name:"Daniel Evans",
message:"Hi man where are you ?",
time:"Yesterday",
online:true,
img:"https://i.pravatar.cc/150?img=35"
},
{
name:"Ava Cooper",
message:"Hi there",
time:"Yesterday",
online:true,
img:"https://i.pravatar.cc/150?img=40"
}
];

const messages = [

{
type:"left",
text:"Hello! 👋",
time:"09:10 AM"
},

{
type:"right",
text:"Hi Emma!",
time:"09:11 AM"
},

{
type:"left",
text:"How's your project going?",
time:"09:12 AM"
},

{
type:"right",
text:"Almost finished. Just polishing the UI.",
time:"09:13 AM"
},

{
type:"left",
text:"Looks amazing already!",
time:"09:14 AM"
}

];

const chatList=document.querySelector(".chat-list");

chats.forEach(chat=>{

chatList.innerHTML+=`

<div class="chat-card">

<img src="${chat.img}">

<div class="info">

<h4>${chat.name}</h4>

<p>${chat.message}</p>

</div>

<div class="time">

${chat.time}

</div>

${chat.online?'<div class="online"></div>':''}

</div>

`;

});

const messageBox=document.getElementById("messages");

messages.forEach(msg=>{

messageBox.innerHTML+=`

<div class="message ${msg.type}">

${msg.text}

<span>${msg.time}</span>

</div>

`;

});

messageBox.scrollTop=messageBox.scrollHeight;