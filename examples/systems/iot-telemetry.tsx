import React, { useState } from 'react';
import { 
  Cpu, 
  Wifi, 
  Activity, 
  Thermometer, 
  Power, 
  Gauge, 
  AlertTriangle,
  RotateCw,
  Server
} from 'lucide-react';

/**
 * Aesthetic Direction: Industrial Sensor Telemetry (ThingsBoard / Grafana Inspired)
 * Pattern: Real-time Device Fleet Matrix + Sensor Gauges + Quick Action Relays
 * Rules: Tabular numerical meters, status ring pulse, strict 1px grid containment.
 */

export function IOTTelemetryDashboard() {
  const [deviceActive, setDeviceActive] = useState(true);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-200 font-sans p-6">
      {/* Header */}
      <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-base font-semibold tracking-tight text-slate-100">Telemetry Gateway & Edge Nodes</h1>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Broker: mqtt://edge-broker.apex.internal (Latency: 4.2ms)</span>
            </div>
          </div>
        </div>

        <button 
          onClick={() => setDeviceActive(!deviceActive)}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            deviceActive 
              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20' 
              : 'bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20'
          }`}
        >
          <Power className="w-3.5 h-3.5" />
          <span>{deviceActive ? 'Node Relay Online' : 'Relay Disconnected'}</span>
        </button>
      </div>

      {/* Sensor Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Core Temperature */}
        <div className="p-4 rounded-xl bg-[#121824] border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Thermal Core 0</span>
            <Thermometer className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-mono font-semibold text-slate-100 tabular-nums">42.8 °C</div>
          <div className="text-[11px] text-slate-500 mt-1 font-mono">Nominal Range: 35–65 °C</div>
        </div>

        {/* Vibration / Frequency */}
        <div className="p-4 rounded-xl bg-[#121824] border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Axis Vibration</span>
            <Activity className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-mono font-semibold text-slate-100 tabular-nums">0.024 mm/s</div>
          <div className="text-[11px] text-emerald-400/80 mt-1 font-mono">Harmonic Stable</div>
        </div>

        {/* Input Voltage */}
        <div className="p-4 rounded-xl bg-[#121824] border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Grid Ingress Voltage</span>
            <Gauge className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-mono font-semibold text-slate-100 tabular-nums">238.4 V</div>
          <div className="text-[11px] text-slate-500 mt-1 font-mono">±0.4% Drift Detected</div>
        </div>

        {/* Packet Throughput */}
        <div className="p-4 rounded-xl bg-[#121824] border border-white/[0.08]">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>MQTT Ingestion</span>
            <Wifi className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-mono font-semibold text-slate-100 tabular-nums">1,420 msg/s</div>
          <div className="text-[11px] text-slate-500 mt-1 font-mono">Zero queue backlog</div>
        </div>
      </div>

      {/* Connected Edge Fleet Table */}
      <div className="rounded-xl bg-[#121824] border border-white/[0.08] overflow-hidden">
        <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-200">Registered Microcontroller Nodes</span>
          <span className="text-xs font-mono text-slate-500">4 active peripherals</span>
        </div>

        <div className="divide-y divide-white/[0.04] text-xs font-mono">
          {[
            { name: 'ESP32-S3 Industrial Gateway', ip: '192.168.1.102', rssi: '-48 dBm', status: 'Operational', uptime: '42d 18h' },
            { name: 'STM32F4 Valve Actuator', ip: '192.168.1.108', rssi: '-54 dBm', status: 'Operational', uptime: '12d 04h' },
            { name: 'RP2040 Flow Meter Sensor', ip: '192.168.1.114', rssi: '-62 dBm', status: 'Warning', uptime: '01d 11h' },
          ].map((node, idx) => (
            <div key={idx} className="p-3.5 px-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <Server className="w-4 h-4 text-slate-500" />
                <div>
                  <span className="text-slate-200 font-sans font-medium">{node.name}</span>
                  <span className="text-slate-500 text-[11px] block">{node.ip}</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <span className="text-slate-400">{node.rssi}</span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-sans ${node.status === 'Operational' ? 'text-emerald-400 bg-emerald-500/10' : 'text-amber-400 bg-amber-500/10'}`}>
                  {node.status}
                </span>
                <span className="text-slate-500 text-[11px]">{node.uptime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
