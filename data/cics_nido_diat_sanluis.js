


var MarkerOptionsCIC = {
    radius: 6,
    fillColor: "#000",
    color: "#000",
    weight: 0.7,
    opacity: 1,
    fillOpacity: 0.8
  };
  
  
  function styleCIC(feature) {
   
    var color = '#015CB4' ;
    return {
        radius: 6,
        weight: 2,
        opacity: 0.9,
        fillColor: color,
        color: "#EDF1F6FF",
        dashArray: '0',
        fillOpacity: 0.9,
    };
    // return {  
      //     icon: 'circle',
      //     iconShape: 'marker',
      //     borderColor: '#015CB4',
      //     textColor: '#015CB4',
      //     backgroundColor: '#FEFEFFFF',
      //     innerIconStyle: 'font-size:9px;padding-top:1px;'
      // };
  }
  
  
  // funcion popous 
  function onEachFeature(feature, layer) {
      if (feature.properties && feature.properties.popupContent) {
          layer.bindPopup(feature.properties.popupContent);
      }
    }
    //
    function CIC_pop(feature, layer) {
      var popupContent =
      //    "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />" +
     "<div style='background-color: #015CB4; color: #fff; padding: 10px; border-radius: 5px;' align='left'>" +
          "<b> Nombre : </b>" + feature.properties.name + " " + feature.properties.barrio + "<br>" +
          "<b> Barrio : </b>" + feature.properties.barrio + "<br>" +
          "<b> Domicilio : </b>" + feature.properties.domicilio + "<br>" +
          "<b> Correo electrónico : </b>" + feature.properties.correo 
        //   "<b> Cantidad de puestos : </b>" + feature.properties.puestos + "<br>" +
        //   "<b> Zona : </b>" + feature.properties.zona + "<br>"     +
    
          " <br>"
        
      "</div>"
        layer.bindPopup(popupContent);
    }
    function eventOpenPopup(e) {
      var layer = e.layer;
      layer.closePopup();
      layer.openPopup();
    }
    


var cics = {
"type": "FeatureCollection",
"name": "cics_nido_diat_sanluis",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
    { "type": "Feature", "properties": { "fid": 1, "name": "CIC", "barrio": "VILLA ASUNCION", "correo": "cicvillaasuncion21@gmail.com", "domicilio": "Calle Perpetuo Socorro y Virgen del Rosario" }, "geometry": { "type": "Point", "coordinates": [ -65.4473115, -24.7966033, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 2, "name": "CIC", "barrio": "BARRIO CONSTITUCION", "correo": "cicconstitucion@gmail.com", "domicilio": "Calle Juan Manuel Estrada y Pasaje s/n" }, "geometry": { "type": "Point", "coordinates": [ -65.3748175, -24.798489, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 3, "name": "CIC", "barrio": "BARRIO LIMACHE", "correo": "cicluisguillermosevilla@gmail.com", "domicilio": "Ruta 21 Gaucho Mendez esq. Demetrio Herrera" }, "geometry": { "type": "Point", "coordinates": [ -65.4301629, -24.855437, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 4, "name": "CIC", "barrio": "BARRIO SANTA CECILIA", "correo": "cicsantacecilia@gmail.com", "domicilio": "Calle Martin Fierro y Juan Darienzo" }, "geometry": { "type": "Point", "coordinates": [ -65.3980292, -24.8307155, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 5, "name": "CIC", "barrio": "BARRIO SOLIDARIDAD", "correo": "cicsolidaridadcarlosxamena@gmail.com", "domicilio": "Av. Fortin Juan Manuel Cedolini" }, "geometry": { "type": "Point", "coordinates": [ -65.3910329, -24.8412903, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 6, "name": "CIC", "barrio": "BARRIO UNION", "correo": "cicunionsalta@gmail.com", "domicilio": "Av. Armada Argentina y Jose M. Mirau" }, "geometry": { "type": "Point", "coordinates": [ -65.3937634823655, -24.722632955031649, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 7, "name": "DELEGACION SAN LUIS", "barrio": "BARRIO VALLE HERMOSO - SAN LUIS", "correo": "delegacionsanluis278@gmail.com", "domicilio": "Cerro San Bernardo esq Cerro Arracar" }, "geometry": { "type": "Point", "coordinates": [ -65.517792640859611, -24.847548689452893, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 8, "name": "NIDO", "barrio": "NIDO BICENTENARIO", "correo": "cicbicentenario@gmail.com", "domicilio": "Los Alpes esq. Veteranos de Malvinas" }, "geometry": { "type": "Point", "coordinates": [ -65.4533853, -24.7835076, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 9, "name": "NIDO", "barrio": "NIDO GAUCHITO GIL", "correo": "cicgauchitogil@gmail.com", "domicilio": "Av. Discépolo y Fortin de Las Juntas" }, "geometry": { "type": "Point", "coordinates": [ -65.3866201, -24.8402184, 0.0 ] } },
    { "type": "Feature", "properties": { "fid": 10, "name": "DIAT", "barrio": "BARRIO SAN BENITO", "correo": "cicsanbenitomunicipalidad@gmail.com", "domicilio": "Av. Discépolo y Mors" }, "geometry": { "type": "Point", "coordinates": [ -65.391335321260144, -24.83369668308249, 0.0 ] } }
    ]
    }
    

