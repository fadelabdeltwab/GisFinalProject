var wms_layers = [];

var format_ne_10m_populated_places_simple_0 = new ol.format.GeoJSON();
var features_ne_10m_populated_places_simple_0 = format_ne_10m_populated_places_simple_0.readFeatures(json_ne_10m_populated_places_simple_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ne_10m_populated_places_simple_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ne_10m_populated_places_simple_0.addFeatures(features_ne_10m_populated_places_simple_0);
var lyr_ne_10m_populated_places_simple_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ne_10m_populated_places_simple_0, 
                style: style_ne_10m_populated_places_simple_0,
                interactive: true,
                title: '<img src="styles/legend/ne_10m_populated_places_simple_0.png" /> ne_10m_populated_places_simple'
            });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_max_2 = new ol.format.GeoJSON();
var features_max_2 = format_max_2.readFeatures(json_max_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_max_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_max_2.addFeatures(features_max_2);
var lyr_max_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_max_2, 
                style: style_max_2,
                interactive: true,
                title: '<img src="styles/legend/max_2.png" /> max'
            });

lyr_ne_10m_populated_places_simple_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_max_2.setVisible(true);
var layersList = [lyr_ne_10m_populated_places_simple_0,lyr_OpenStreetMap_1,lyr_max_2];
lyr_ne_10m_populated_places_simple_0.set('fieldAliases', {'scalerank': 'scalerank', 'natscale': 'natscale', 'labelrank': 'labelrank', 'featurecla': 'featurecla', 'name': 'name', 'namepar': 'namepar', 'namealt': 'namealt', 'diffascii': 'diffascii', 'nameascii': 'nameascii', 'adm0cap': 'adm0cap', 'capalt': 'capalt', 'capin': 'capin', 'worldcity': 'worldcity', 'megacity': 'megacity', 'sov0name': 'sov0name', 'sov_a3': 'sov_a3', 'adm0name': 'adm0name', 'adm0_a3': 'adm0_a3', 'adm1name': 'adm1name', 'iso_a2': 'iso_a2', 'note': 'note', 'latitude': 'latitude', 'longitude': 'longitude', 'changed': 'changed', 'namediff': 'namediff', 'diffnote': 'diffnote', 'pop_max': 'pop_max', 'pop_min': 'pop_min', 'pop_other': 'pop_other', 'rank_max': 'rank_max', 'rank_min': 'rank_min', 'geonameid': 'geonameid', 'meganame': 'meganame', 'ls_name': 'ls_name', 'ls_match': 'ls_match', 'checkme': 'checkme', 'min_zoom': 'min_zoom', 'ne_id': 'ne_id', });
lyr_max_2.set('fieldAliases', {'scalerank': 'scalerank', 'natscale': 'natscale', 'labelrank': 'labelrank', 'featurecla': 'featurecla', 'name': 'name', 'namepar': 'namepar', 'namealt': 'namealt', 'diffascii': 'diffascii', 'nameascii': 'nameascii', 'adm0cap': 'adm0cap', 'capalt': 'capalt', 'capin': 'capin', 'worldcity': 'worldcity', 'megacity': 'megacity', 'sov0name': 'sov0name', 'sov_a3': 'sov_a3', 'adm0name': 'adm0name', 'adm0_a3': 'adm0_a3', 'adm1name': 'adm1name', 'iso_a2': 'iso_a2', 'note': 'note', 'latitude': 'latitude', 'longitude': 'longitude', 'changed': 'changed', 'namediff': 'namediff', 'diffnote': 'diffnote', 'pop_max': 'pop_max', 'pop_min': 'pop_min', 'pop_other': 'pop_other', 'rank_max': 'rank_max', 'rank_min': 'rank_min', 'geonameid': 'geonameid', 'meganame': 'meganame', 'ls_name': 'ls_name', 'ls_match': 'ls_match', 'checkme': 'checkme', 'min_zoom': 'min_zoom', 'ne_id': 'ne_id', });
lyr_ne_10m_populated_places_simple_0.set('fieldImages', {'scalerank': '', 'natscale': '', 'labelrank': '', 'featurecla': '', 'name': '', 'namepar': '', 'namealt': '', 'diffascii': '', 'nameascii': '', 'adm0cap': '', 'capalt': '', 'capin': '', 'worldcity': '', 'megacity': '', 'sov0name': '', 'sov_a3': '', 'adm0name': '', 'adm0_a3': '', 'adm1name': '', 'iso_a2': '', 'note': '', 'latitude': '', 'longitude': '', 'changed': '', 'namediff': '', 'diffnote': '', 'pop_max': '', 'pop_min': '', 'pop_other': '', 'rank_max': '', 'rank_min': '', 'geonameid': '', 'meganame': '', 'ls_name': '', 'ls_match': '', 'checkme': '', 'min_zoom': '', 'ne_id': '', });
lyr_max_2.set('fieldImages', {'scalerank': '', 'natscale': '', 'labelrank': '', 'featurecla': '', 'name': '', 'namepar': '', 'namealt': '', 'diffascii': '', 'nameascii': '', 'adm0cap': '', 'capalt': '', 'capin': '', 'worldcity': '', 'megacity': '', 'sov0name': '', 'sov_a3': '', 'adm0name': '', 'adm0_a3': '', 'adm1name': '', 'iso_a2': '', 'note': '', 'latitude': '', 'longitude': '', 'changed': '', 'namediff': '', 'diffnote': '', 'pop_max': '', 'pop_min': '', 'pop_other': '', 'rank_max': '', 'rank_min': '', 'geonameid': '', 'meganame': '', 'ls_name': '', 'ls_match': '', 'checkme': '', 'min_zoom': '', 'ne_id': '', });
lyr_ne_10m_populated_places_simple_0.set('fieldLabels', {'scalerank': 'no label', 'natscale': 'no label', 'labelrank': 'no label', 'featurecla': 'no label', 'name': 'no label', 'namepar': 'no label', 'namealt': 'no label', 'diffascii': 'no label', 'nameascii': 'no label', 'adm0cap': 'no label', 'capalt': 'no label', 'capin': 'no label', 'worldcity': 'no label', 'megacity': 'no label', 'sov0name': 'no label', 'sov_a3': 'no label', 'adm0name': 'no label', 'adm0_a3': 'no label', 'adm1name': 'no label', 'iso_a2': 'no label', 'note': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'changed': 'no label', 'namediff': 'no label', 'diffnote': 'no label', 'pop_max': 'no label', 'pop_min': 'no label', 'pop_other': 'no label', 'rank_max': 'no label', 'rank_min': 'no label', 'geonameid': 'no label', 'meganame': 'no label', 'ls_name': 'no label', 'ls_match': 'no label', 'checkme': 'no label', 'min_zoom': 'no label', 'ne_id': 'no label', });
lyr_max_2.set('fieldLabels', {'scalerank': 'no label', 'natscale': 'no label', 'labelrank': 'no label', 'featurecla': 'no label', 'name': 'inline label', 'namepar': 'no label', 'namealt': 'no label', 'diffascii': 'no label', 'nameascii': 'no label', 'adm0cap': 'no label', 'capalt': 'no label', 'capin': 'no label', 'worldcity': 'no label', 'megacity': 'no label', 'sov0name': 'no label', 'sov_a3': 'no label', 'adm0name': 'no label', 'adm0_a3': 'no label', 'adm1name': 'no label', 'iso_a2': 'no label', 'note': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'changed': 'no label', 'namediff': 'no label', 'diffnote': 'no label', 'pop_max': 'inline label', 'pop_min': 'no label', 'pop_other': 'no label', 'rank_max': 'inline label', 'rank_min': 'no label', 'geonameid': 'no label', 'meganame': 'no label', 'ls_name': 'no label', 'ls_match': 'no label', 'checkme': 'no label', 'min_zoom': 'no label', 'ne_id': 'no label', });
lyr_max_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});