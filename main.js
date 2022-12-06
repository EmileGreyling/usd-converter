document.getElementById('output').style.visibility = 'hidden';
document.querySelector('#randInput').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = 'visible';
    let usd = e.target.value;
    document.querySelector('#randOutput').innerHTML = `R${usd * 17.46}`;
    document.querySelector('#eurOutput').innerHTML = `€${usd * 0.95}`;
    document.querySelector('#cadOutput').innerHTML = `C$${usd * 1.36}`;
    document.querySelector('#audOutput').innerHTML = `A$${usd * 1.49}`;

});