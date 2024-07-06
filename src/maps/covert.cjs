const fs = require('fs');
const path = require('path');

function convertGeoJSONToJSVectorMap(geojson) {
    const features = geojson.features;
    const paths = {};

    features.forEach((feature, index) => {
        const geometry = feature.geometry;
        const properties = feature.properties;
        const id = properties.id || `path_${index}`;

        // Convert GeoJSON geometry to SVG path data
        let svgPathData = '';

        if (geometry.type === 'Polygon' || geometry.type === 'MultiPolygon') {
            const coordinates = geometry.coordinates;

            if (geometry.type === 'Polygon') {
                coordinates.forEach((polygon) => {
                    svgPathData += 'M ' + polygon.map(point => point.join(' ')).join(' L ') + ' Z ';
                });
            } else if (geometry.type === 'MultiPolygon') {
                coordinates.forEach((multiPolygon) => {
                    multiPolygon.forEach((polygon) => {
                        svgPathData += 'M ' + polygon.map(point => point.join(' ')).join(' L ') + ' Z ';
                    });
                });
            }
        }

        paths[id] = {
            name: properties.name || id,
            path: svgPathData.trim()
        };
    });

    return {
        width: 900,  // You might need to adjust the width
        height: 800, // You might need to adjust the height
        paths: paths
    };
}

// Load the GeoJSON data
const geojsonData = JSON.parse(fs.readFileSync(path.join(__dirname, 'map.geojson'), 'utf8'));

// Convert GeoJSON to JSVectorMap format
const jsvectormapData = convertGeoJSONToJSVectorMap(geojsonData);

// Write the converted data to a JS file
fs.writeFileSync(path.join(__dirname, 'portugal.js'), `jsVectorMap.maps.portugal = ${JSON.stringify(jsvectormapData)};`);

console.log('Conversion completed successfully!');
