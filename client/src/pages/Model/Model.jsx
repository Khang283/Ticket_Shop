// import React, { useEffect, useRef } from 'react';
// import Map from '@arcgis/core/Map';
// import SceneView from '@arcgis/core/views/SceneView';
// import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
// import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
// import Graphic from '@arcgis/core/Graphic';
// import esriRequest from '@arcgis/core/request';
// import Polygon from '@arcgis/core/geometry/Polygon';
// import Point from '@arcgis/core/geometry/Point';

// const Model = () => {
//   useEffect(() => {
//     const loadModules = async () => {
//       const [
//         Map,
//         SceneView,
//         GeoJSONLayer,
//         GraphicsLayer,
//         Graphic,
//         esriRequest,
//       ] = await Promise.all([
//         import('esri/Map'),
//         import('esri/views/SceneView'),
//         import('esri/layers/GeoJSONLayer'),
//         import('esri/layers/GraphicsLayer'),
//         import('esri/Graphic'),
//         import('esri/request'),
//       ]);

//       const createGraphic = (data) => {
//         return new Graphic({
//           geometry: data,
//           symbol: data.symbol,
//           attributes: data,
//           popupTemplate: data.popupTemplate,
//         });
//       };

//       const json_options = {
//         query: { f: 'json' },
//         responseType: 'json',
//       };

//       // Request JSON
//       const addGraphicsLayer = async (url) => {
//         const response = await esriRequest(url, json_options);
//         const graphicsLayer = new GraphicsLayer();
//         response.data.forEach((data) => {
//           graphicsLayer.add(createGraphic(data));
//         });
//         map.add(graphicsLayer);
//       };

//       const map = new Map({ basemap: 'topo-vector' });
//       const view = new SceneView({
//         container: 'viewDiv',
//         map: map,
//       });

//       // GeoJSON Layers
//       const createGeoJSONLayer = (url, renderer) => {
//         return new GeoJSONLayer({
//           url,
//           renderer,
//         });
//       };

//       const geoJsonLayers = [
//         {
//           url: './DataGeo/TangMot/3d/walls/left.geojson',
//           renderer: {
//             type: 'simple',
//             symbol: {
//               type: 'polygon-3d',
//               symbolLayers: [
//                 {
//                   type: 'extrude',
//                   size: 11.1,
//                   material: { color: [209, 190, 168] },
//                 },
//               ],
//             },
//           },
//         },
//         // Add other layers in similar fashion
//       ];

//       geoJsonLayers.forEach(({ url, renderer }) => {
//         const layer = createGeoJSONLayer(url, renderer);
//         map.add(layer);
//       });

//       // Add JSON layers
//       const jsonUrls = [
//         './base.json',
//         './DataGeo/TangMot/3d/roof.json',
//         './DataGeo/TangMot/3d/plump/plump_1.json',
//         // Add other URLs in similar fashion
//       ];

//       jsonUrls.forEach(addGraphicsLayer);

//     };

//     loadModules();
//   }, []);

//   return (
//     <div id="viewDiv" style={{ height: '100vh', width: '100vw' }}></div>
//   );
// };

// export default Model;

const Model = () => {
  return (
    <div>hel</div>
  )
}

export default Model;