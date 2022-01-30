fetch("https://api2.binance.com/api/v3/ticker/24hr")
    .then(res => {
        res.json().then(
            data => {
                console.table(data);
                if (data.length > 0) {
                    var ptr = "";
                    data.forEach((e) => {
                        ptr += "<tr>";
                        ptr += "<td>" + e.symbol + "</td>";
                        ptr += "<td>" + e.priceChange + "</td>";
                        ptr += "<td>" + e.priceChangePercent + "</td>";
                        ptr += "<td>" + e.weightedAvgPrice + "</td>";
                        ptr += "<td>" + e.prevClosePrice + "</td>";
                        ptr += "<td>" + e.prevClosePrice + "</td>";
                        ptr += "<td>" + e.lastPrice + "</td>";
                        ptr += "<td>" + e.lastQty + "</td>";
                        ptr += "<td>" + e.bidQty + "</td>";
                        ptr += "<td>" + e.askPrice + "</td>";
                        ptr += "<td>" + e.askQty + "</td>";
                        ptr += "<td>" + e.openPrice + "</td>";
                        ptr += "<td>" + e.highPrice + "</td>";
                        ptr += "<td>" + e.lowPrice + "</td>";
                        ptr += "<td>" + e.quoteVolume + "</td>";
                        ptr += "<td>" + e.openTime + "</td>";
                        ptr += "<td>" + e.closeTime + "</td>";
                        ptr += "<td>" + e.firstId + "</td>";
                        ptr += "<td>" + e.lastId + "</td>";

                    });
                    document.getElementById("data").innerHTML = ptr;
                }
            }
        )
    })