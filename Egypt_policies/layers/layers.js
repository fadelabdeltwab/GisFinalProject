var wms_layers = [];

var format_EGY_adm2_0 = new ol.format.GeoJSON();
var features_EGY_adm2_0 = format_EGY_adm2_0.readFeatures(json_EGY_adm2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGY_adm2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGY_adm2_0.addFeatures(features_EGY_adm2_0);
var lyr_EGY_adm2_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EGY_adm2_0, 
                style: style_EGY_adm2_0,
                interactive: true,
    title: 'EGY_adm2<br />\
    <img src="styles/legend/EGY_adm2_0_0.png" /> City<br />\
    <img src="styles/legend/EGY_adm2_0_1.png" /> Kism<br />\
    <img src="styles/legend/EGY_adm2_0_2.png" /> Markaz<br />\
    <img src="styles/legend/EGY_adm2_0_3.png" /> Police-administered area<br />\
    <img src="styles/legend/EGY_adm2_0_4.png" /> unorganized<br />\
    <img src="styles/legend/EGY_adm2_0_5.png" /> <br />'
        });

lyr_EGY_adm2_0.setVisible(true);
var layersList = [lyr_EGY_adm2_0];
lyr_EGY_adm2_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_EGY_adm2_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_EGY_adm2_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'inline label', 'NAME_2': 'inline label', 'TYPE_2': 'inline label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_EGY_adm2_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});