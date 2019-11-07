const socket = io('http://localhost:8443/');
socket.on('message', data =>{
    const lista = document.querySelector('#messages');
    const element = document.createElement('li');

    element.innerHTML = `<p>from: ${data.from}</p><p>to: ${data.to}</p><p>message: ${data.message_body}</p>  `
    lista.appendChild(element);
})