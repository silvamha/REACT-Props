import React from "react";
import ReactDOM from "react-dom";

const Card = (props) =>{
return <div>
<h2>{props.name}</h2>
<img
  src={props.img}
  alt="avatar_img"
/>
<p>{props.tel}</p>
<p>{props.email}</p> </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
       <Card name = "Beyonce" 
       img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" 
       tel = "+123 456 789" 
       email = "b@byonce.com" />

       <Card name ="Sweet Daddy" 
       img = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a8b6c784-2e7f-42db-9f80-639737e36155/d9pel32-d3acd41d-12ce-4169-ba6f-1e9aeaa634ad.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E4YjZjNzg0LTJlN2YtNDJkYi05ZjgwLTYzOTczN2UzNjE1NVwvZDlwZWwzMi1kM2FjZDQxZC0xMmNlLTQxNjktYmE2Zi0xZTlhZWFhNjM0YWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QbgwpVprInztGn9DIldi5taGIdTWjGQdFd78ROlnCNY" 
       tel = "+57 123 456 5567" 
       email = "sweet@daddy.com" />

  </div>,
  document.getElementById("root")
);
