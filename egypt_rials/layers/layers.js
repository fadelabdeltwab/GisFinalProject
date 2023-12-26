var wms_layers = [];

var format_EGY_roads_0 = new ol.format.GeoJSON();
var features_EGY_roads_0 = format_EGY_roads_0.readFeatures(json_EGY_roads_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGY_roads_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGY_roads_0.addFeatures(features_EGY_roads_0);
var lyr_EGY_roads_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EGY_roads_0, 
                style: style_EGY_roads_0,
                interactive: true,
                title: '<img src="styles/legend/EGY_roads_0.png" /> EGY_roads'
            });
var format_egypt_1 = new ol.format.GeoJSON();
var features_egypt_1 = format_egypt_1.readFeatures(json_egypt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_egypt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_egypt_1.addFeatures(features_egypt_1);
var lyr_egypt_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_egypt_1, 
                style: style_egypt_1,
                interactive: true,
                title: '<img src="styles/legend/egypt_1.png" /> egypt'
            });
var format_EGY_rails_2 = new ol.format.GeoJSON();
var features_EGY_rails_2 = format_EGY_rails_2.readFeatures(json_EGY_rails_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EGY_rails_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EGY_rails_2.addFeatures(features_EGY_rails_2);
var lyr_EGY_rails_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EGY_rails_2, 
                style: style_EGY_rails_2,
                interactive: true,
                title: '<img src="styles/legend/EGY_rails_2.png" /> EGY_rails'
            });

lyr_EGY_roads_0.setVisible(true);lyr_egypt_1.setVisible(true);lyr_EGY_rails_2.setVisible(true);
var layersList = [lyr_EGY_roads_0,lyr_egypt_1,lyr_EGY_rails_2];
lyr_EGY_roads_0.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_egypt_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_EGY_rails_2.set('fieldAliases', {'FID_rail_d': 'FID_rail_d', 'F_CODE_DES': 'F_CODE_DES', 'EXS_DESCRI': 'EXS_DESCRI', 'FCO_DESCRI': 'FCO_DESCRI', 'FID_countr': 'FID_countr', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_EGY_roads_0.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_egypt_1.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'ID_2': '', 'NAME_2': '', 'TYPE_2': '', 'ENGTYPE_2': '', 'NL_NAME_2': '', 'VARNAME_2': '', });
lyr_EGY_rails_2.set('fieldImages', {'FID_rail_d': '', 'F_CODE_DES': '', 'EXS_DESCRI': '', 'FCO_DESCRI': '', 'FID_countr': '', 'ISO': '', 'ISOCOUNTRY': '', });
lyr_EGY_roads_0.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_egypt_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'inline label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_EGY_rails_2.set('fieldLabels', {'FID_rail_d': 'inline label', 'F_CODE_DES': 'inline label', 'EXS_DESCRI': 'no label', 'FCO_DESCRI': 'no label', 'FID_countr': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_EGY_rails_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});