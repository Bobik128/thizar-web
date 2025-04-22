// URL adresa serveru
const serverURL = "https://api.mcsrvstat.us/3/147.185.221.17:58782";

// Asynchronní funkce pro získání dat ze serveru
async function fetchData() {
    try {
        // Provést HTTP GET požadavek na danou URL
        const response = await fetch(serverURL);

        // Pokud je odpověď úspěšná (kód 200), získat data jako JSON
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            // Pokud došlo k chybě, vyvolat výjimku
            throw new Error('Nepodařilo se získat data');
        }
    } catch (error) {
        // Zachytit a zpracovat chybu
        console.error('Chyba při získávání dat:', error);
        return null;
    }
}

// Funkce pro zpracování dat a vložení IP adresy do HTML
async function process() {
    try {
        // Získat data ze serveru
        const serverData = await fetchData();
        confirm
        // Zkontrolovat, zda byla vrácena nějaká data
        if (serverData) {
            document.querySelector('.server-running').innerHTML = serverData['online'] ? 'Online' : 'Offline';
            document.querySelector('.server-online').innerHTML = serverData.players['online'];
            document.querySelector('.server-max').innerHTML = serverData.players['max'];
            document.querySelector('.server-version').innerHTML = serverData.version;
            if (serverData.players["list"] != null) {
                const playerNames = serverData.players.list.map(player => player.name);
                const namesString = playerNames.join(', ');

                document.querySelector('.playersOnlinePopup').innerHTML = namesString;

            } else {
                document.querySelector('.playersOnlinePopup').innerHTML = "";
            }
        } else {
            console.log('Nepodařilo se získat IP adresu ze serveru.');
        }
    } catch (error) {
        console.error('Chyba při zpracování dat:', error);
    }
}

// Spuštění funkce pro zpracování dat a vložení IP adresy do HTML
process()
setInterval(process, 12000);