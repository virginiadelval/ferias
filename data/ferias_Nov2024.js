var MarkerOptions = {
    radius: 6,
    fillColor: "#000",
    color: "#000",
    weight: 0.7,
    opacity: 1,
    fillOpacity: 0.8
  };
  
  
  function styleFerias(feature) {
   
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
    function feria_pop(feature, layer) {
      var popupContent =
      //    "<hr class='hrx' style='color: #ef7d26;' align='left' noshade='noshade' size='2' width='100%' />" +
     "<div style='background-color: #015CB4; color: #fff; padding: 10px; border-radius: 5px;' align='left'>" +
          "<b>Nombre : </b>" + feature.properties.Name +  "</b>"+ "<br>" +
          "<b> Dias : </b>" + feature.properties.dias + "<br>" +
          "<b> Horarios : </b>" + feature.properties.horarios + "<br>" +
          "<b> Tipo : </b>" + feature.properties.tipo + "<br>" +
          "<b> Cantidad de puestos : </b>" + feature.properties.puestos + "<br>" +
          "<b> Zona : </b>" + feature.properties.zona + "<br>"     +
    
          " <br>"
        
      "</div>"
   
    
  
  
      layer.bindPopup(popupContent);
    }
    function eventOpenPopup(e) {
      var layer = e.layer;
      layer.closePopup();
      layer.openPopup();
    }
    
var ferias = {
"type": "FeatureCollection",
"name": "ferias_Nov2024",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "Name": "Feria Ceferino", "descriptio": "Se encuentra los días Sábados de 10 a 21 Hs", "layer": "Copia de Ferias Barriales — Macrocentro", "dias": "Sabado", "puestos": 30.0, "tipo": "Reventa, Usados", "zona": "Macrocentro", "horarios": "10:00 a 21:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4099866, -24.8118511, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Plaza Alvarado", "descriptio": "Se  realiza 1 vez al Mes", "layer": "Copia de Ferias Barriales — Macrocentro", "dias": "Sabado", "puestos": 80.0, "tipo": "Reventa", "zona": "Macrocentro", "horarios": "09:00 a 19:00" }, "geometry": { "type": "Point", "coordinates": [ -65.428855579483994, -24.789602424664594, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Holística", "descriptio": "Se realiza 1 vez al mes", "layer": "Copia de Ferias Barriales — Macrocentro", "dias": "Sabado", "puestos": 80.0, "tipo": "Holistica, manufacturas", "zona": "Macrocentro", "horarios": "14:00 a 00:00" }, "geometry": { "type": "Point", "coordinates": [ -65.42783779069147, -24.788884280268327, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Huaico Mirasoles", "descriptio": "Se encuentra todos los Sábados de 14 a 19 y eventualmente los 2 primeros domingos del mes en el horario 14 a 19", "layer": "Copia de Ferias Barriales — Norte", "dias": "Sabados y dos primeros Domingo", "puestos": 200.0, "tipo": "Reventa, Usados", "zona": "Norte", "horarios": "14:00 a 19:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4165731, -24.7226818, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Miguel Ortiz", "descriptio": "Se encuentra los días Domingos de 09 a 15 Hs", "layer": "Copia de Ferias Barriales — Norte", "dias": "Domingos", "puestos": 250.0, "tipo": "Reventa, Usados", "zona": "Norte", "horarios": "09:00 a 15:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4045423, -24.7542896, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Ciudad del Milagro", "descriptio": "Se encuentra los días Viernes de 16 a 20 y Sábados y Domingos de  9 a 15", "layer": "Copia de Ferias Barriales — Norte", "dias": "Viernes, Sabados y Domingo", "puestos": 30.0, "tipo": "Reventa", "zona": "Norte", "horarios": "16:00 a 20:00 Viernes. Sab y Dom 09:00 a 15:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4056799, -24.7202171, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Buñueleros", "descriptio": "Se ubica los días Domingos 10 a 20 Hs", "layer": "Copia de Ferias Barriales — Norte", "dias": "Sabados y Domingos", "puestos": 8.0, "tipo": "Gastronomía", "zona": "Norte", "horarios": "10:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4086764, -24.7110904, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Cuchi Leguizamon", "descriptio": "Se encuentra los días Domingo de 9 a 20Hs", "layer": "Copia de Ferias Barriales — Oeste", "dias": "Domingo", "puestos": 180.0, "tipo": "Reventa, Usados", "zona": "Oeste", "horarios": "09:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4584545, -24.7871742, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Palermo", "descriptio": "Se encuentra los días Domingo de 9 a 20 Hs", "layer": "Copia de Ferias Barriales — Oeste", "dias": "Domingos", "puestos": 180.0, "tipo": "Reventa, Usados", "zona": "Oeste", "horarios": "09:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4600276, -24.7881058, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Costa Azul ", "descriptio": "Se encuentra los días Viernes de 15 a 20 Hs  ", "layer": "Copia de Ferias Barriales — Oeste", "dias": "Viernes", "puestos": 30.0, "tipo": "Reventa, Usados", "zona": "Oeste", "horarios": "15:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4511062, -24.7904127, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Juan XXlll", "descriptio": "Se encuentra los días Sábados de 14 a 20 Hs ", "layer": "Copia de Ferias Barriales — Oeste", "dias": "Sabados", "puestos": 1500.0, "tipo": "Reventa, Usados", "zona": "Oeste", "horarios": "14:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4413725, -24.7928071, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Solidaridad", "descriptio": "Descripción: Se encuentra los días Lunes y Viernes de 10 a 22<br>nombre: <br>descripción:", "layer": "Copia de Ferias Barriales — Sudeste", "dias": "Lunes y Viernes", "puestos": 4500.0, "tipo": "Reventa, Usados", "zona": "Sudeste", "horarios": "10:00 a 22:00" }, "geometry": { "type": "Point", "coordinates": [ -65.3966761, -24.8428497, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria San Francisco Solano", "descriptio": "Descripción: Se encuentra los días Martes y Jueves de 8 a 22<br>nombre: <br>descripción:", "layer": "Copia de Ferias Barriales — Sudeste", "dias": "Martes y Jueves", "puestos": 250.0, "tipo": "Reventa, Usados", "zona": "Sudeste", "horarios": "08:00 a 22:00" }, "geometry": { "type": "Point", "coordinates": [ -65.3951035, -24.828436, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Gauchito Gil", "descriptio": "Descripción: Se encuentra los días Miércoles de 14 a 22<br>nombre: <br>descripción:", "layer": "Copia de Ferias Barriales — Sudeste", "dias": "Miercoles", "puestos": 250.0, "tipo": "Reventa, Usados", "zona": "Sudeste", "horarios": "14:00 a 22:00" }, "geometry": { "type": "Point", "coordinates": [ -65.3869319, -24.8400139, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Santa Cecilia ", "descriptio": "Descripción: Se encuentra los días Sábados de 9 a 20 hs<br>nombre: <br>descripción:", "layer": "Copia de Ferias Barriales — Sudeste", "dias": "Sabado", "puestos": 250.0, "tipo": "Reventa, Usados", "zona": "Sudeste", "horarios": "09:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4034607, -24.8297432, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Sitta", "descriptio": "Descripción: Se encuentra los días Lunes y Viernes de 10 a 22 <br>nombre: <br>descripción:", "layer": "Copia de Ferias Barriales — Sudeste", "dias": "Lunes y Viernes", "puestos": 250.0, "tipo": "Reventa, Usados", "zona": "Sudeste", "horarios": "10:00 a 22:00" }, "geometry": { "type": "Point", "coordinates": [ -65.3961606, -24.8389962, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria \"LA PAZ\"", "descriptio": "Descripción: <br>nombre: Feria \"LA PAZ\"<br>descripción: Se ubica los días Sábados de 15 a 20", "layer": "Copia de Ferias Barriales — Sudeste", "dias": "Jueves", "puestos": 150.0, "tipo": "Reventa, Usados", "zona": "Sudeste", "horarios": "10:00 a 21:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4072691, -24.8403764, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria San Luis", "descriptio": "Se encuentra los días Domingos de 14 a 20 Hs", "layer": "Copia de Ferias Barriales — Sur", "dias": "Domingos", "puestos": 180.0, "tipo": "Reventa", "zona": "Sur", "horarios": "14:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.5131465, -24.8476559, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Villa Esmeralda", "descriptio": "Se encuentra los días Sábados de 10 a 20 hs", "layer": "Copia de Ferias Barriales — Sur", "dias": "Sabados", "puestos": 30.0, "tipo": "Reventa", "zona": "Sur", "horarios": "10:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4880836, -24.8443475, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Limache", "descriptio": "Se encuentra los días Domingos de 10 a 16:30", "layer": "Copia de Ferias Barriales — Sur", "dias": "Domingos", "puestos": 80.0, "tipo": "Reventa", "zona": "Sur", "horarios": "10:00 a 16:30" }, "geometry": { "type": "Point", "coordinates": [ -65.4323573, -24.857717, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Santa Ana 1 ", "descriptio": "Se encuentra los días Sábados de 15 a 20 Hs", "layer": "Copia de Ferias Barriales — Sur", "dias": "Sabado", "puestos": 30.0, "tipo": "Reventa", "zona": "Sur", "horarios": "15:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4710263, -24.8630205, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Economía Popular", "descriptio": "Se ubica los días Viernes y Sábado.\nSábados de por medio compartidos con la salteñita (Verificar cronograma) \n08:30 a 20:30", "layer": "Copia de Ferias Barriales — Zona Centro", "dias": "Viernes intercalado y Sabados", "puestos": 127.0, "tipo": "Reventa", "zona": "Centro", "horarios": "09:00 a 21:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4031159, -24.7938996, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "La Salteñita", "descriptio": "Se ubica los días Sábados y Domingos.\nSábados de por medio compartidos con  Economía popular (Verificar cronograma)\n08:30 a 20:30 Hs", "layer": "Copia de Ferias Barriales — Zona Centro", "dias": "Sabados intercalado y Domingo", "puestos": 80.0, "tipo": "Manufactura, Artesanías, valor agregado", "zona": "Centro", "horarios": "08:30 a 20:30" }, "geometry": { "type": "Point", "coordinates": [ -65.403073, -24.7939581, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "A.d.e.m.u.s", "descriptio": "Se ubica los días Sábados de 11 a 22 Hs", "layer": "Copia de Ferias Barriales — Zona Centro", "dias": "Sabado", "puestos": 20.0, "tipo": "Reventa", "zona": "Centro", "horarios": "11:00 a 22:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4051866, -24.794075, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Balcarce (Artesanal)", "descriptio": "Se encuentra los días Domingos de 09 a 21 Hs", "layer": "Copia de Ferias Barriales — Zona Centro", "dias": "Domingo", "puestos": 20.0, "tipo": "Artesanal", "zona": "Centro", "horarios": "09:00 a 21:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4111678, -24.7777916, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Paseo Güemes (Artesanal) ", "descriptio": "Se encuentra los días Sábado y Domingos de 9 a 21 Hs", "layer": "Copia de Ferias Barriales — Zona Centro", "dias": "Sabados y Domingos", "puestos": 200.0, "tipo": "Artesanal", "zona": "Centro", "horarios": "09:00 a 21:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4116208, -24.7826756, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Paseo de los Poetas \"Artesanal\"", "descriptio": "Se encuentra los días Sábados y Domingos de 9 a 21hs", "layer": "Copia de Ferias Barriales — Zona Centro", "dias": "Sabados", "puestos": 45.0, "tipo": "Artesanal", "zona": "Centro", "horarios": "09:00 a 21:00" }, "geometry": { "type": "Point", "coordinates": [ -65.4190207, -24.7916855, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Feria Los Gauchos", "descriptio": "Se encuentra los días Sábados de 10 a 20 Hs ", "layer": "Copia de Ferias Barriales — Zona Este", "dias": "Primer Sabado del mes", "puestos": 30.0, "tipo": "Reventa", "zona": "Este", "horarios": "10:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.3744798, -24.7978475, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Trueque Constitucion", "descriptio": "Se encuentra los días Sábados de 15 a 19Hs", "layer": "Copia de Ferias Barriales — Zona Este", "dias": "Sabado", "puestos": 30.0, "tipo": "Trueque", "zona": "Este", "horarios": "15:00 a 19:00" }, "geometry": { "type": "Point", "coordinates": [ -65.3746965, -24.7984385, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Gurruchaga", "descriptio": null, "layer": null, "dias": "Domingos una vez al mes", "puestos": 30.0, "tipo": "Reventa", "zona": "Macrocentro", "horarios": "10:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.42462999343708, -24.795814920980249, 0.0 ] } },
{ "type": "Feature", "properties": { "Name": "Juan Pablo II", "descriptio": null, "layer": null, "dias": "Sabados y Domingos", "puestos": 150.0, "tipo": "Reventa", "zona": "Norte", "horarios": "14:00 a 20:00" }, "geometry": { "type": "Point", "coordinates": [ -65.398488382251017, -24.723278641477812, 0.0 ] } }
]
}
