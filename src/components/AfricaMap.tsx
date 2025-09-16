import { memo, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

// Lightweight Africa-only TopoJSON URL
const africaTopoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json';

export const AfricaMap = memo(function AfricaMap() {
  // Colors and styles for more attractive map
  const fillGradient = 'url(#africaGradient)';
  const strokeColor = 'rgba(255,255,255,0.2)';

  const defs = useMemo(() => (
    <defs>
      <linearGradient id="africaGradient" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#157A6E" />
        <stop offset="100%" stopColor="#D4A373" />
      </linearGradient>
    </defs>
  ), []);

  return (
    <section className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="card p-6 order-2 md:order-1">
          <h2 className="h2">Interactive Africa Map</h2>
          <p className="p mt-3">Hover to highlight regions. Smooth zoom and pan give donors a sense of connection across the continent.</p>
          <ul className="mt-4 space-y-2 text-slate-200">
            <li>• Smooth hover highlights</li>
            <li>• Subtle gradient land styling</li>
            <li>• Zoom & pan for exploration</li>
          </ul>
        </div>
        <div className="card p-3 order-1 md:order-2">
          <ComposableMap projectionConfig={{ scale: 430 }} projection="geoMercator" style={{ width: '100%', height: '480px' }}>
            {defs}
            <ZoomableGroup center={[20, 0]} zoom={1.2} minZoom={1} maxZoom={4}>
              <Geographies geography={africaTopoUrl}>
                {({ geographies }) =>
                  geographies
                    .filter((g) => {
                      const [xMin, yMin, xMax, yMax] = g.bbox || [0,0,0,0];
                      // Quick filter to focus roughly on Africa bounds
                      return xMax >= -25 && xMin <= 60 && yMax >= -40 && yMin <= 40;
                    })
                    .map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        style={{
                          default: { fill: fillGradient, stroke: strokeColor, strokeWidth: 0.5, outline: 'none' },
                          hover: { fill: '#FBBF24', stroke: '#fff', strokeWidth: 0.8, outline: 'none' },
                          pressed: { fill: '#0EA5E9', outline: 'none' },
                        }}
                      />
                    ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
});


