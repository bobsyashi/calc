let numbers = [];

document.getElementById('button1').addEventListener('click', function(){
    numbers.push(parseInt(this.getAttribute('data-value')));
    sendMessage('Button 1');
})


document.getElementById('button2').addEventListener('click' , function() {
    numbers.push(parseInt(this.getAttribute('data-value')));
    sendMessage('Button 2');
}) 

//document.getElementById('addition').addEventListener('click', function() {
    
//})

document.getElementById('submit').addEventListener('click', function() {
    const answer = numbers[0] + numbers[1];
    document.getElementById('result').innerText = `Answer is ${answer}`;
})


function sendMessage(message) {
    fetch('http://localhost:3000/button-click', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({message: message})
    })
    .then(response => response.json)
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
}
