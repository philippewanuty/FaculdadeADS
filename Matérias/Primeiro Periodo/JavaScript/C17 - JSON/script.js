fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((data) => {
    
    fillList(data);
  });

function fillList(x) {
  const listcontainer = document.getElementById('list_container');
  const ul = document.createElement('ul');
  const ul2 = document.createElement('ul');

  const name = document.createElement('h2');
  name.textContent = `Name`;

  const email = document.createElement('h2');
  email.textContent = `E-mail`;

  x.forEach((element) => {
    const li = document.createElement('li');
    li.textContent = element.name;
    ul.appendChild(li);
  });

  x.forEach((element) => {
    const li2 = document.createElement('li');
    li2.textContent = element.email;
    ul2.appendChild(li2);
  });


  listcontainer.appendChild(name);
  listcontainer.appendChild(ul);
  listcontainer.appendChild(email);
  listcontainer.appendChild(ul2);
}
