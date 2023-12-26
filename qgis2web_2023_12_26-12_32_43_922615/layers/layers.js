var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_pop_5_brazel_1 = new ol.format.GeoJSON();
var features_pop_5_brazel_1 = format_pop_5_brazel_1.readFeatures(json_pop_5_brazel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pop_5_brazel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pop_5_brazel_1.addFeatures(features_pop_5_brazel_1);
var lyr_pop_5_brazel_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pop_5_brazel_1, 
                style: style_pop_5_brazel_1,
                interactive: true,
    title: 'pop_5_brazel<br />\
    <img src="styles/legend/pop_5_brazel_1_0.png" /> 5575000 - 8044200<br />\
    <img src="styles/legend/pop_5_brazel_1_1.png" /> 8044200 - 10513400<br />\
    <img src="styles/legend/pop_5_brazel_1_2.png" /> 10513400 - 13167400<br />\
    <img src="styles/legend/pop_5_brazel_1_3.png" /> 13167400 - 16006200<br />\
    <img src="styles/legend/pop_5_brazel_1_4.png" /> 16006200 - 18845000<br />'
        });
var format_pop_min1_angola_2 = new ol.format.GeoJSON();
var features_pop_min1_angola_2 = format_pop_min1_angola_2.readFeatures(json_pop_min1_angola_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pop_min1_angola_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pop_min1_angola_2.addFeatures(features_pop_min1_angola_2);
var lyr_pop_min1_angola_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pop_min1_angola_2, 
                style: style_pop_min1_angola_2,
                interactive: true,
    title: 'pop_min1_angola<br />\
    <img src="styles/legend/pop_min1_angola_2_0.png" /> 25 - 833<br />\
    <img src="styles/legend/pop_min1_angola_2_1.png" /> 833 - 9417<br />\
    <img src="styles/legend/pop_min1_angola_2_2.png" /> 9417 - 20567<br />\
    <img src="styles/legend/pop_min1_angola_2_3.png" /> 20567 - 60147<br />\
    <img src="styles/legend/pop_min1_angola_2_4.png" /> 60147 - 207932<br />'
        });
var format_pop_rank_cap_3 = new ol.format.GeoJSON();
var features_pop_rank_cap_3 = format_pop_rank_cap_3.readFeatures(json_pop_rank_cap_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pop_rank_cap_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pop_rank_cap_3.addFeatures(features_pop_rank_cap_3);
var lyr_pop_rank_cap_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pop_rank_cap_3, 
                style: style_pop_rank_cap_3,
                interactive: true,
    title: 'pop_rank_cap<br />\
    <img src="styles/legend/pop_rank_cap_3_0.png" /> 13 - 13<br />\
    <img src="styles/legend/pop_rank_cap_3_1.png" /> 13 - 13<br />\
    <img src="styles/legend/pop_rank_cap_3_2.png" /> 13 - 13<br />\
    <img src="styles/legend/pop_rank_cap_3_3.png" /> 13 - 14<br />\
    <img src="styles/legend/pop_rank_cap_3_4.png" /> 14 - 14<br />'
        });
var format_city_of_russia_4 = new ol.format.GeoJSON();
var features_city_of_russia_4 = format_city_of_russia_4.readFeatures(json_city_of_russia_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_city_of_russia_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_city_of_russia_4.addFeatures(features_city_of_russia_4);
var lyr_city_of_russia_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_city_of_russia_4, 
                style: style_city_of_russia_4,
                interactive: true,
                title: '<img src="styles/legend/city_of_russia_4.png" /> city_of_russia'
            });
var format_gov_egypt_5 = new ol.format.GeoJSON();
var features_gov_egypt_5 = format_gov_egypt_5.readFeatures(json_gov_egypt_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gov_egypt_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gov_egypt_5.addFeatures(features_gov_egypt_5);
var lyr_gov_egypt_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gov_egypt_5, 
                style: style_gov_egypt_5,
                interactive: true,
                title: '<img src="styles/legend/gov_egypt_5.png" /> gov_egypt'
            });
var format_pop_cap_6 = new ol.format.GeoJSON();
var features_pop_cap_6 = format_pop_cap_6.readFeatures(json_pop_cap_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pop_cap_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pop_cap_6.addFeatures(features_pop_cap_6);
var lyr_pop_cap_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pop_cap_6, 
                style: style_pop_cap_6,
                interactive: true,
    title: 'pop_cap<br />\
    <img src="styles/legend/pop_cap_6_0.png" /> 1024000 - 1332000<br />\
    <img src="styles/legend/pop_cap_6_1.png" /> 1332000 - 1706600<br />\
    <img src="styles/legend/pop_cap_6_2.png" /> 1706600 - 2835600<br />\
    <img src="styles/legend/pop_cap_6_3.png" /> 2835600 - 5179380<br />\
    <img src="styles/legend/pop_cap_6_4.png" /> 5179380 - 35676000<br />'
        });
var format_rank_canada_7 = new ol.format.GeoJSON();
var features_rank_canada_7 = format_rank_canada_7.readFeatures(json_rank_canada_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rank_canada_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rank_canada_7.addFeatures(features_rank_canada_7);
var lyr_rank_canada_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rank_canada_7, 
                style: style_rank_canada_7,
                interactive: true,
    title: 'rank_canada<br />\
    <img src="styles/legend/rank_canada_7_0.png" /> 11 - 11<br />\
    <img src="styles/legend/rank_canada_7_1.png" /> 11 - 12<br />\
    <img src="styles/legend/rank_canada_7_2.png" /> 12 - 12<br />\
    <img src="styles/legend/rank_canada_7_3.png" /> 12 - 12<br />\
    <img src="styles/legend/rank_canada_7_4.png" /> 12 - 13<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_pop_5_brazel_1.setVisible(true);lyr_pop_min1_angola_2.setVisible(true);lyr_pop_rank_cap_3.setVisible(true);lyr_city_of_russia_4.setVisible(true);lyr_gov_egypt_5.setVisible(true);lyr_pop_cap_6.setVisible(true);lyr_rank_canada_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_pop_5_brazel_1,lyr_pop_min1_angola_2,lyr_pop_rank_cap_3,lyr_city_of_russia_4,lyr_gov_egypt_5,lyr_pop_cap_6,lyr_rank_canada_7];
lyr_pop_5_brazel_1.set('fieldAliases', {'name': 'name', 'adm0name': 'adm0name', 'pop_max': 'pop_max', });
lyr_pop_min1_angola_2.set('fieldAliases', {'name': 'name', 'adm0name': 'adm0name', 'pop_max': 'pop_max', });
lyr_pop_rank_cap_3.set('fieldAliases', {'name': 'name', 'adm0name': 'adm0name', 'pop_max': 'pop_max', 'rank_max': 'rank_max', });
lyr_city_of_russia_4.set('fieldAliases', {'name': 'name', });
lyr_gov_egypt_5.set('fieldAliases', {'name': 'name', 'sov0name': 'sov0name', });
lyr_pop_cap_6.set('fieldAliases', {'name': 'name', 'adm0cap': 'adm0cap', 'pop_max': 'pop_max', });
lyr_rank_canada_7.set('fieldAliases', {'name': 'name', 'rank_max': 'rank_max', });
lyr_pop_5_brazel_1.set('fieldImages', {'name': '', 'adm0name': '', 'pop_max': '', });
lyr_pop_min1_angola_2.set('fieldImages', {'name': '', 'adm0name': '', 'pop_max': '', });
lyr_pop_rank_cap_3.set('fieldImages', {'name': '', 'adm0name': '', 'pop_max': '', 'rank_max': '', });
lyr_city_of_russia_4.set('fieldImages', {'name': '', });
lyr_gov_egypt_5.set('fieldImages', {'name': '', 'sov0name': '', });
lyr_pop_cap_6.set('fieldImages', {'name': '', 'adm0cap': '', 'pop_max': '', });
lyr_rank_canada_7.set('fieldImages', {'name': '', 'rank_max': '', });
lyr_pop_5_brazel_1.set('fieldLabels', {'name': 'inline label', 'adm0name': 'inline label', 'pop_max': 'inline label', });
lyr_pop_min1_angola_2.set('fieldLabels', {'name': 'inline label', 'adm0name': 'inline label', 'pop_max': 'inline label', });
lyr_pop_rank_cap_3.set('fieldLabels', {'name': 'inline label', 'adm0name': 'inline label', 'pop_max': 'inline label', 'rank_max': 'inline label', });
lyr_city_of_russia_4.set('fieldLabels', {'name': 'inline label', });
lyr_gov_egypt_5.set('fieldLabels', {'name': 'inline label', 'sov0name': 'inline label', });
lyr_pop_cap_6.set('fieldLabels', {'name': 'inline label', 'adm0cap': 'inline label', 'pop_max': 'inline label', });
lyr_rank_canada_7.set('fieldLabels', {'name': 'inline label', 'rank_max': 'inline label', });
lyr_rank_canada_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});