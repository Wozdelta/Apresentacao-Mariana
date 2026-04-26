"use client";

import { motion } from "framer-motion";
import { Logo } from "../Logo";
import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip, useMap, MapArc, MapPopup } from "@/components/ui/map";
import { MapPin, Plane } from "lucide-react";
import { useEffect, useState } from "react";

function CitiesContour() {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!isLoaded || !map) return;

    // Atualiza os labels do mapa para Português (se suportado pelo provedor do mapa)
    const style = map.getStyle();
    if (style && style.layers) {
      style.layers.forEach((layer) => {
        if (layer.type === 'symbol' && layer.layout && layer.layout['text-field']) {
          // Substitui o campo de texto para tentar buscar o nome em PT primeiro
          map.setLayoutProperty(layer.id, 'text-field', [
            'coalesce',
            ['get', 'name_pt'],
            ['get', 'name:pt'],
            ['get', 'name_en'],
            ['get', 'name']
          ]);
        }
      });
    }

    // Adiciona Dublin GeoJSON
    if (!map.getSource('dublin')) {
      map.addSource('dublin', { type: 'geojson', data: '/dublin.geojson' });
      map.addLayer({
        id: 'dublin-fill', type: 'fill', source: 'dublin',
        paint: { 'fill-color': '#DA291C', 'fill-opacity': 0.1 }
      });
      map.addLayer({
        id: 'dublin-outline', type: 'line', source: 'dublin',
        paint: { 'line-color': '#DA291C', 'line-width': 2, 'line-dasharray': [2, 2] }
      });
    }

    // Adiciona Araraquara GeoJSON
    if (!map.getSource('araraquara')) {
      map.addSource('araraquara', { type: 'geojson', data: '/araraquara.geojson' });
      map.addLayer({
        id: 'araraquara-fill', type: 'fill', source: 'araraquara',
        paint: { 'fill-color': '#3b82f6', 'fill-opacity': 0.15 } // Azul
      });
      map.addLayer({
        id: 'araraquara-outline', type: 'line', source: 'araraquara',
        paint: { 'line-color': '#3b82f6', 'line-width': 2, 'line-dasharray': [2, 2] }
      });
    }

    // Barreira de arame farpado (Américo Brasiliense)
    if (!map.getSource('barreira')) {
      map.addSource('barreira', {
        type: 'geojson',
        data: {
          type: 'Feature', properties: {},
          geometry: {
            type: 'LineString',
            // Linha reta no ângulo noroeste -> sudeste
            coordinates: [
              [-48.190, -21.670],
              [-48.050, -21.790],
            ]
          }
        }
      });

      // Sombra/fundo do arame para dar volume
      map.addLayer({
        id: 'barreira-line-bg', type: 'line', source: 'barreira',
        paint: { 'line-color': '#3f3f46', 'line-width': 4 }
      });
      // Fio principal metálico
      map.addLayer({
        id: 'barreira-line', type: 'line', source: 'barreira',
        paint: { 'line-color': '#a1a1aa', 'line-width': 2 }
      });

      // Farpas densas (Camada 1)
      map.addLayer({
        id: 'barreira-barbs-1', type: 'symbol', source: 'barreira',
        layout: {
          'symbol-placement': 'line',
          'text-field': 'x',
          'text-size': 18,
          'text-keep-upright': false,
          'text-offset': [0, -0.05]
        },
        paint: {
          'text-color': '#d4d4d8',
          'text-halo-color': '#3f3f46',
          'text-halo-width': 1
        }
      });

      // Farpas densas (Camada 2 invertida)
      map.addLayer({
        id: 'barreira-barbs-2', type: 'symbol', source: 'barreira',
        layout: {
          'symbol-placement': 'line',
          'text-field': 'X',
          'text-size': 14,
          'text-keep-upright': false,
          'text-offset': [0, 0.1]
        },
        paint: {
          'text-color': '#a1a1aa',
          'text-halo-color': '#27272a',
          'text-halo-width': 1
        }
      });
    }

    return () => {
      if (map.getStyle()) {
        try {
          if (map.getLayer('dublin-outline')) map.removeLayer('dublin-outline');
          if (map.getLayer('dublin-fill')) map.removeLayer('dublin-fill');
          if (map.getSource('dublin')) map.removeSource('dublin');

          if (map.getLayer('araraquara-outline')) map.removeLayer('araraquara-outline');
          if (map.getLayer('araraquara-fill')) map.removeLayer('araraquara-fill');
          if (map.getSource('araraquara')) map.removeSource('araraquara');

          if (map.getLayer('barreira-barbs-1')) map.removeLayer('barreira-barbs-1');
          if (map.getLayer('barreira-barbs-2')) map.removeLayer('barreira-barbs-2');
          if (map.getLayer('barreira-line-bg')) map.removeLayer('barreira-line-bg');
          if (map.getLayer('barreira-line')) map.removeLayer('barreira-line');
          if (map.getSource('barreira')) map.removeSource('barreira');
        } catch (e) { }
      }
    };
  }, [map, isLoaded]);

  return null;
}

function InteractiveCityMarker({ longitude, latitude, label, colorClass }: { longitude: number; latitude: number; label: string; colorClass: string }) {
  const { map } = useMap();
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <MapMarker
      longitude={longitude}
      latitude={latitude}
      onClick={() => {
        if (!map) return;

        if (!isZoomed) {
          map.flyTo({
            center: [longitude, latitude],
            zoom: 12,
            duration: 2500,
            essential: true
          });
          setIsZoomed(true);
        } else {
          // Reverte o zoom para mostrar o mapa inteiro (as duas cidades)
          map.fitBounds([
            [-48.1766, -21.7946], // Araraquara
            [-6.2603, 53.3498]    // Dublin
          ], { padding: 80, duration: 2500, essential: true });
          setIsZoomed(false);
        }
      }}
    >
      <MarkerContent>
        <div className={`drop-shadow-md relative -top-4 ${colorClass}`}>
          <MapPin size={40} strokeWidth={2} fill="currentColor" />
        </div>
      </MarkerContent>
      <MarkerTooltip className="bg-white text-zinc-800 shadow-lg px-3 py-1.5 rounded-md font-medium text-xs border border-zinc-200">
        {label}
      </MarkerTooltip>
    </MapMarker>
  );
}

export function LogoSlide() {
  const [hoveredArc, setHoveredArc] = useState<{ lng: number, lat: number } | null>(null);
  const [hoveredAmerico, setHoveredAmerico] = useState<{ lng: number, lat: number } | null>(null);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="h-full w-full relative overflow-hidden bg-white flex flex-col md:flex-row">
      {/* Left Content Half */}
      <div className="w-full md:w-[45%] flex flex-col p-8 md:p-16 h-full justify-between z-10 border-r border-zinc-100">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Logo color="red" />
        </motion.div>

        <div className="flex flex-col gap-6 mt-12 flex-grow justify-center max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="font-display text-7xl md:text-8xl text-borcelle-dark mb-6 tracking-tight leading-none">Meu objetivo</h2>
            <p className="text-xl text-zinc-500 leading-relaxed font-medium mb-10">
              Morar na Irlanda, com um planejamento financeiro e profissional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <p className="text-borcelle-red font-bold text-xl leading-snug mb-6">
              A escolha de Dublin não foi por acaso — é um centro de oportunidades na Europa. É a porta de entrada para grandes objetivos profissionais.
            </p>
            <div className="h-px bg-zinc-200 w-full mb-6"></div>

          </motion.div>
        </div>

        <motion.p
          className="text-sm font-medium tracking-widest text-zinc-400 mt-auto hidden md:block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          OBJETIVO IRLANDA
        </motion.p>
      </div>

      {/* Right Grid Half */}
      <motion.div
        className="w-full md:w-[55%] h-full flex flex-col p-8 md:p-12 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
      >
        {/* Top Full Width Example - Map of Dublin */}
        <motion.div variants={itemVariants} className="flex-1 border-2 border-dashed border-zinc-200 relative overflow-hidden bg-white rounded-md">
          <Map center={[-6.2603, 53.3498]} zoom={10}>
            <CitiesContour />

            {/* Curved Airplane Route */}
            <MapArc
              data={[
                { id: 'flight', from: [-48.1766, -21.7946], to: [-6.2603, 53.3498] }
              ]}
              curvature={0.25}
              paint={{
                "line-color": "#DA291C",
                "line-width": 2,
                "line-dasharray": [3, 3]
              }}
              hoverPaint={{
                "line-color": "#ff4d4d",
                "line-width": 4
              }}
              onHover={(e) => {
                if (e) {
                  // Evita mostrar o popup quando estiver muito perto dos pinos (para não sobrepor)
                  const distAraraquara = Math.hypot(e.longitude - (-48.1766), e.latitude - (-21.7946));
                  const distDublin = Math.hypot(e.longitude - (-6.2603), e.latitude - 53.3498);

                  if (distAraraquara < 8 || distDublin < 8) {
                    setHoveredArc(null);
                    return;
                  }

                  setHoveredArc({ lng: e.longitude, lat: e.latitude });
                } else {
                  setHoveredArc(null);
                }
              }}
            />

            {hoveredArc && (
              <MapPopup longitude={hoveredArc.lng} latitude={hoveredArc.lat} closeButton={false} closeOnClick={false} className="!p-0 !border-0 shadow-2xl rounded-lg overflow-hidden bg-white/95 backdrop-blur-md min-w-[180px]">
                <div className="bg-borcelle-dark text-white p-2 text-center">
                  <p className="font-display tracking-widest uppercase text-[10px] text-zinc-300">Tempo de Voo</p>
                </div>
                <div className="p-3">
                  <ul className="space-y-2 text-[11px] text-zinc-600 font-medium">
                    <li className="flex items-center justify-between gap-3">
                      <span>LATAM</span>
                      <span className="font-bold text-zinc-800">14h 30m</span>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span>TAP</span>
                      <span className="font-bold text-zinc-800">13h 45m</span>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span>Air France</span>
                      <span className="font-bold text-zinc-800">15h 10m</span>
                    </li>
                    <li className="flex items-center justify-between gap-3">
                      <span>KLM</span>
                      <span className="font-bold text-zinc-800">14h 55m</span>
                    </li>
                  </ul>
                </div>
              </MapPopup>
            )}

            {/* Popup da Barreira (Américo) */}
            {hoveredAmerico && (
              <MapPopup longitude={hoveredAmerico.lng} latitude={hoveredAmerico.lat} closeButton={false} closeOnClick={false} className="pointer-events-none !p-0 !border-0 shadow-2xl rounded-lg overflow-hidden bg-zinc-900 min-w-[200px]">
                <div className="bg-red-600 text-white p-2 text-center flex items-center justify-center gap-2">
                  <span className="text-lg">⚠️</span>
                  <p className="font-display tracking-widest uppercase text-[11px] font-bold">Área Restrita</p>
                </div>
                <div className="p-3 bg-zinc-900 text-center">
                  <p className="text-zinc-300 font-medium text-xs leading-relaxed uppercase">
                    Américo Brasiliense <br />
                    <span className="text-red-500 font-bold">NÃO FAZ PARTE DO PLANETA</span>
                  </p>
                </div>
              </MapPopup>
            )}

            {/* Marker Américo Brasiliense */}
            <MapMarker longitude={-48.1028} latitude={-21.7236}>
              <MarkerContent>
                <div
                  className="text-zinc-500 drop-shadow-md relative -top-4 cursor-not-allowed opacity-50 transition-opacity hover:opacity-100"
                  onMouseEnter={() => setHoveredAmerico({ lng: -48.1028, lat: -21.7236 })}
                  onMouseLeave={() => setHoveredAmerico(null)}
                >
                  <MapPin size={30} strokeWidth={2} fill="currentColor" />
                </div>
              </MarkerContent>
            </MapMarker>

            {/* Marker Dublin */}
            <InteractiveCityMarker
              longitude={-6.2603}
              latitude={53.3498}
              label="Dublin, Irlanda"
              colorClass="text-borcelle-red"
            />

            {/* Marker Araraquara */}
            <InteractiveCityMarker
              longitude={-48.1766}
              latitude={-21.7946}
              label="Araraquara, SP"
              colorClass="text-blue-500"
            />
          </Map>
        </motion.div>

        {/* Bottom Split Examples */}
        <div className="flex-1 flex gap-8">
          <motion.div variants={itemVariants} className="flex-1 rounded-md overflow-hidden relative group shadow-sm">
            <img src="/airport_travel.png" alt="Airport Terminal" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white font-medium tracking-wide">Início da Jornada</p>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="flex-1 rounded-md overflow-hidden relative group shadow-sm">
            <img src="/dublin_street.png" alt="Dublin City" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white font-medium tracking-wide">Destino: Dublin</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
