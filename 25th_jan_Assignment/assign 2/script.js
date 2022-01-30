

URL = "https://api2.binance.com/api/v3/ticker/24hr" ;
fetch(URL)
.then((res) => {
    return res.json();
})
.then((data) => {

    for (let i = 0; i < 100 ; i++) {
        var cont = document.getElementById('cont');
        var div = document.createElement('div');
        var div = document.createElement('div');
        var p = document.createElement('p');
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        var p4 = document.createElement('p');
        var p5 = document.createElement('p');
        var p6 = document.createElement('p');
        var p7 = document.createElement('p');
        var p8 = document.createElement('p');
        var p9 = document.createElement('p');
        p.innerText = data[i].symbol;
        p1.innerHTML = "Current Price :-"+data[i].priceChange;
        p2.innerHTML = "Price change :-"+data[i].priceChangePercent;
        p3.innerHTML = "Weighted Average price :- "+data[i].weightedAvgPrice;
        p4.innerHTML = "Prev Close Price :- "+data[i].prevClosePrice;
        p5.innerHTML = "Last Price :- "+data[i].lastPrice;
        p6.innerHTML = "Open Time :- "+data[i].openTime;
        p7.innerHTML = "Close Time :- "+data[i].closeTime;
        p8.innerHTML = "FirstId :- "+data[i].firstId;
        p9.innerHTML = "LastId :- "+data[i].lastId;
        div.appendChild(p);
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        div.appendChild(p5);
        div.appendChild(p6);
        div.appendChild(p7);
        div.appendChild(p8);
        div.appendChild(p9);
        
        cont.appendChild(div);
    }
})


