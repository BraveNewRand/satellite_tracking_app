const https = require('https');

// Function to fetch satellite data
function fetchSatelliteData() {
    const apiKey = 'YOUR_API_KEY';
    const satelliteId = 'SATELLITE_ID';
    const url = `https://api.n2yo.com/rest/v1/satellite/positions/${satelliteId}/41.702/-76.014/0/2/&apiKey=${apiKey}`;

    https.get(url, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const positions = JSON.parse(data);
            console.log("Satellite Positions:", positions);
        });
    }).on('error', (e) => {
        console.error("Error fetching satellite data: ", e);
    });
}

// Call the function to fetch satellite data
fetchSatelliteData();
