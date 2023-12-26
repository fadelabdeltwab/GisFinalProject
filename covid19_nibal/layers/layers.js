var wms_layers = [];

var format_district_0 = new ol.format.GeoJSON();
var features_district_0 = format_district_0.readFeatures(json_district_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_district_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_district_0.addFeatures(features_district_0);
var lyr_district_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_district_0, 
                style: style_district_0,
                interactive: true,
    title: 'district<br />\
    <img src="styles/legend/district_0_0.png" /> 0 - 1000<br />\
    <img src="styles/legend/district_0_1.png" /> 1000 - 2000<br />\
    <img src="styles/legend/district_0_2.png" /> 2000 - 5000<br />\
    <img src="styles/legend/district_0_3.png" /> 5000 - 10000<br />\
    <img src="styles/legend/district_0_4.png" /> 10000 - 25000<br />\
    <img src="styles/legend/district_0_5.png" /> 25000 - 200000<br />'
        });

lyr_district_0.setVisible(true);
var layersList = [lyr_district_0];
lyr_district_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DISTRICT': 'DISTRICT', 'Province': 'Province', 'covid': 'covid', 'Covid19dat': 'Covid19dat', });
lyr_district_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'DISTRICT': 'TextEdit', 'Province': 'TextEdit', 'covid': 'TextEdit', 'Covid19dat': 'TextEdit', });
lyr_district_0.set('fieldLabels', {'OBJECTID': 'no label', 'DISTRICT': 'inline label', 'Province': 'no label', 'covid': 'no label', 'Covid19dat': 'inline label', });
lyr_district_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});