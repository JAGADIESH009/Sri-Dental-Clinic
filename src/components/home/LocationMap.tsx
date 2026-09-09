"use client";

import React from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl/maplibre';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const CLINIC_COORDS = {
  lat: 12.9715987,
  lng: 77.5945627
};

// Raster tile style using OpenStreetMap — guaranteed to render roads, labels, and detail
const RASTER_STYLE: maplibregl.StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: [
        'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      ],
      tileSize: 256,
      attribution: '© OpenStreetMap contributors',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'osm-tiles',
      type: 'raster',
      source: 'osm',
      minzoom: 0,
      maxzoom: 19,
    },
  ],
};

export default function LocationMap() {

  return (
    <div className="relative w-full h-full rounded-xl overflow-hidden group/map">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: CLINIC_COORDS.lng,
          latitude: CLINIC_COORDS.lat,
          zoom: 14.2, // Slightly zoomed out to show more locality context and roads
          pitch: 0,
          bearing: 0
        }}
        mapStyle={RASTER_STYLE}
        interactive={true}
        dragPan={true}
        scrollZoom={false}
      >
        
        {/* Custom Controls styled via CSS override */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
          <style dangerouslySetInnerHTML={{__html: `
            .maplibregl-ctrl-group {
              border-radius: 12px !important;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05) !important;
              border: 1px solid rgba(0,0,0,0.05) !important;
              background-color: #F8F5EF !important;
              overflow: hidden;
            }
            .maplibregl-ctrl-group button {
              width: 36px !important;
              height: 36px !important;
            }
            .maplibregl-ctrl-icon {
              filter: opacity(0.6) !important;
            }
          `}} />
          <NavigationControl showCompass={false} />
        </div>

        {/* Custom Premium Teardrop Marker */}
        <Marker 
          longitude={CLINIC_COORDS.lng} 
          latitude={CLINIC_COORDS.lat} 
          anchor="bottom"
        >
          <div className="relative group/pin cursor-pointer flex flex-col items-center drop-shadow-md">
            {/* Inner Brand Circle */}
            <div className="w-14 h-14 bg-white rounded-full ring-2 ring-[#0a192f] flex items-center justify-center p-2 z-10 relative shadow-sm overflow-hidden transition-transform duration-300">
               <img 
                 src="/logo.png" 
                 alt="Sri Dental Clinic" 
                 className="w-10 h-10 object-contain"
               />
            </div>
            {/* Teardrop Tail */}
            <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-[#0a192f] -mt-[6px] z-0" />
            
            {/* Ground Shadow */}
            <div className="w-6 h-2 bg-black/20 rounded-[100%] blur-[2px] mt-1" />
          </div>
        </Marker>

      </Map>
    </div>
  );
}
