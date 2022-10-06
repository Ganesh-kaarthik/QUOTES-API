let maindiv = document.getElementById("main-container");


//using function to fetch data from api
        let QuoteData=async ()=>{
            try{
                const data = await fetch("https://api.gameofthronesquotes.xyz/v1/random/30");
                //convert the data into json format
                const quotes = await data.json();
                quotes.forEach((quote) => {
                    DisplayQuotes(quote);
                });
            } catch(error){
                console.log(`error`)
            }
        }
        
        QuoteData();
        
        const DisplayQuotes=(quote) =>{
            maindiv.innerHTML +=`
            <div class="card" id="carda">
              <div class="card-header">
                Quote
              </div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <p>${quote.sentence}</p>
                    <footer class="blockquote-footer">BY <cite title="Source Title">${quote.character.name}</cite></footer>
                </blockquote>
              </div>
            </div>
            `
        }