var wms_layers = [];

var format_EGY_adm1_0 = new ol.format.GeoJSON();
var features_EGY_adm1_0 = format_EGY_adm1_0.readFeatures(json_EGY_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGY_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGY_adm1_0.addFeatures(features_EGY_adm1_0);
var lyr_EGY_adm1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EGY_adm1_0, 
                style: style_EGY_adm1_0,
                interactive: true,
    title: 'EGY_adm1<br />\
    <img src="styles/legend/EGY_adm1_0_0.png" /> 1<br />\
    <img src="styles/legend/EGY_adm1_0_1.png" /> 2<br />\
    <img src="styles/legend/EGY_adm1_0_2.png" /> 3<br />\
    <img src="styles/legend/EGY_adm1_0_3.png" /> 4<br />\
    <img src="styles/legend/EGY_adm1_0_4.png" /> 5<br />\
    <img src="styles/legend/EGY_adm1_0_5.png" /> 6<br />\
    <img src="styles/legend/EGY_adm1_0_6.png" /> 7<br />\
    <img src="styles/legend/EGY_adm1_0_7.png" /> 8<br />\
    <img src="styles/legend/EGY_adm1_0_8.png" /> 9<br />\
    <img src="styles/legend/EGY_adm1_0_9.png" /> 10<br />\
    <img src="styles/legend/EGY_adm1_0_10.png" /> 11<br />\
    <img src="styles/legend/EGY_adm1_0_11.png" /> 12<br />\
    <img src="styles/legend/EGY_adm1_0_12.png" /> 13<br />\
    <img src="styles/legend/EGY_adm1_0_13.png" /> 14<br />\
    <img src="styles/legend/EGY_adm1_0_14.png" /> 15<br />\
    <img src="styles/legend/EGY_adm1_0_15.png" /> 16<br />\
    <img src="styles/legend/EGY_adm1_0_16.png" /> 17<br />\
    <img src="styles/legend/EGY_adm1_0_17.png" /> 18<br />\
    <img src="styles/legend/EGY_adm1_0_18.png" /> 19<br />\
    <img src="styles/legend/EGY_adm1_0_19.png" /> 20<br />\
    <img src="styles/legend/EGY_adm1_0_20.png" /> 21<br />\
    <img src="styles/legend/EGY_adm1_0_21.png" /> 22<br />\
    <img src="styles/legend/EGY_adm1_0_22.png" /> 23<br />\
    <img src="styles/legend/EGY_adm1_0_23.png" /> 24<br />\
    <img src="styles/legend/EGY_adm1_0_24.png" /> 25<br />\
    <img src="styles/legend/EGY_adm1_0_25.png" /> 26<br />\
    <img src="styles/legend/EGY_adm1_0_26.png" /> 27<br />\
    <img src="styles/legend/EGY_adm1_0_27.png" /> <br />'
        });

lyr_EGY_adm1_0.setVisible(true);
var layersList = [lyr_EGY_adm1_0];
lyr_EGY_adm1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_EGY_adm1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_EGY_adm1_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'inline label', 'NAME_1': 'inline label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'header label', });
lyr_EGY_adm1_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});