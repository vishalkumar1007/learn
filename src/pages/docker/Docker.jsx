import { useState, useRef, useEffect, useCallback, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Layers, Database, Network, Server, Cloud, ArrowRight, Copy, Check, GitBranch } from "lucide-react";
import { ThemeContext } from "../../App";
import docker_architecture_l1 from "../../assets/svg/docker_architecture_l1.svg";
import docker_architecture_l2 from "../../assets/svg/docker_architecture_l2.svg";
import docker_architecture_l3 from "../../assets/svg/docker_architecture_l3.svg";
import docker_architecture_l4 from "../../assets/svg/docker_architecture_l4.svg";

const diagramMap = {
  registry: docker_architecture_l1,
  engine: docker_architecture_l2,
  containers: docker_architecture_l3,
  networking: docker_architecture_l4,
};

// ─── Theme (light/dark) ──────────────────────────────────────────────────────────
function useTheme() {
  const { isDark } = useContext(ThemeContext);
  return {
    bg: isDark ? "#0a0b0e" : "#f5f4f2",
    surface: isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)",
    surfaceHover: isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)",
    border: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
    borderHover: isDark ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)",
    text: isDark ? "#e8e4e0" : "#2d2a2a",
    muted: isDark ? "#8c827a" : "#6b6560",
    subtle: isDark ? "#6b6560" : "#8a8580",
    sand: isDark ? "#c8b99a" : "#8b7355",
    sandSoft: isDark ? "rgba(200,185,154,0.1)" : "rgba(139,115,85,0.1)",
    sandBorder: isDark ? "rgba(200,185,154,0.2)" : "rgba(139,115,85,0.2)",
    blue: "#3b82f6",
    blueSoft: isDark ? "rgba(59,130,246,0.1)" : "rgba(59,130,246,0.08)",
    purple: "#8b5cf6",
    purpleSoft: isDark ? "rgba(139,92,246,0.1)" : "rgba(139,92,246,0.08)",
    green: "#22c55e",
    greenSoft: isDark ? "rgba(34,197,94,0.08)" : "rgba(34,197,94,0.06)",
    amber: "#f59e0b",
    amberSoft: isDark ? "rgba(245,158,11,0.08)" : "rgba(245,158,11,0.06)",
    diagramBg: isDark ? "#0a0b0e" : "#000000",
    diagramText: isDark ? "#3a3632" : "#a8a29e",
    isDark,
  };
}

// ─── SVG Diagrams ─────────────────────────────────────────────────────────────

const D1_Registry = () => (
  <svg viewBox="0 0 880 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <marker id="d1a" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#3b82f6" />
      </marker>
      <marker id="d1b" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#8b5cf6" />
      </marker>
      <marker id="d1c" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
        <path d="M0,0 L0,6 L8,3 z" fill="#c8b99a" />
      </marker>
    </defs>
    <rect width="880" height="520" fill="#5d5b540b" rx="14" />
    <text x="440" y="38" textAnchor="middle" fill="#c8b99a" fontSize="11" fontFamily="monospace" letterSpacing="3" opacity="0.7">LAYER 1 — CLOUD &amp; REGISTRY</text>

    {/* Internet zone */}
    <rect x="30" y="56" width="820" height="175" rx="10" fill="rgba(59,130,246,0.03)" stroke="rgba(59,130,246,0.12)" strokeWidth="1" strokeDasharray="5 4" />
    <text x="52" y="78" fill="#3b82f6" fontSize="9" fontFamily="monospace" opacity="0.5" letterSpacing="2">INTERNET / CLOUD REGISTRIES</text>

    {/* Docker Hub */}
    <rect x="70" y="92" width="190" height="120" rx="10" fill="rgba(59,130,246,0.07)" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" />
    <text x="165" y="130" textAnchor="middle" fill="#3b82f6" fontSize="26">🐳</text>
    <text x="165" y="154" textAnchor="middle" fill="#e8e4e0" fontSize="13" fontFamily="monospace" fontWeight="600">Docker Hub</text>
    <text x="165" y="170" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">hub.docker.com</text>
    <text x="165" y="185" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">public + private repos</text>
    <rect x="90" y="194" width="55" height="5" rx="2" fill="rgba(59,130,246,0.2)" />
    <rect x="152" y="194" width="35" height="5" rx="2" fill="rgba(59,130,246,0.1)" />

    {/* Private Registry */}
    <rect x="345" y="92" width="190" height="120" rx="10" fill="rgba(139,92,246,0.07)" stroke="rgba(139,92,246,0.22)" strokeWidth="1.5" />
    <text x="440" y="130" textAnchor="middle" fill="#8b5cf6" fontSize="24">🔒</text>
    <text x="440" y="154" textAnchor="middle" fill="#e8e4e0" fontSize="13" fontFamily="monospace" fontWeight="600">Private Registry</text>
    <text x="440" y="170" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">AWS ECR · GCR · ACR</text>
    <text x="440" y="185" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">self-hosted: registry:2</text>
    <rect x="365" y="194" width="45" height="5" rx="2" fill="rgba(139,92,246,0.2)" />
    <rect x="416" y="194" width="60" height="5" rx="2" fill="rgba(139,92,246,0.1)" />

    {/* GitHub GHCR */}
    <rect x="620" y="92" width="190" height="120" rx="10" fill="rgba(200,185,154,0.06)" stroke="rgba(200,185,154,0.18)" strokeWidth="1.5" />
    <text x="715" y="130" textAnchor="middle" fill="#c8b99a" fontSize="24">📦</text>
    <text x="715" y="154" textAnchor="middle" fill="#e8e4e0" fontSize="13" fontFamily="monospace" fontWeight="600">GitHub GHCR</text>
    <text x="715" y="170" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">ghcr.io/owner/image:tag</text>
    <text x="715" y="185" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">CI/CD integrated</text>
    <rect x="640" y="194" width="50" height="5" rx="2" fill="rgba(200,185,154,0.2)" />
    <rect x="696" y="194" width="40" height="5" rx="2" fill="rgba(200,185,154,0.1)" />

    {/* Pull arrows */}
    <line x1="165" y1="280" x2="165" y2="328" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#d1a)" strokeDasharray="5 3" opacity="0.7" />
    <line x1="440" y1="280" x2="440" y2="328" stroke="#8b5cf6" strokeWidth="1.5" markerEnd="url(#d1b)" strokeDasharray="5 3" opacity="0.7" />
    <line x1="715" y1="280" x2="715" y2="328" stroke="#c8b99a" strokeWidth="1.5" markerEnd="url(#d1c)" strokeDasharray="5 3" opacity="0.7" />
    <text x="180" y="310" fill="#3b82f6" fontSize="9" fontFamily="monospace" opacity="0.6">docker pull</text>
    <text x="455" y="310" fill="#8b5cf6" fontSize="9" fontFamily="monospace" opacity="0.6">docker pull</text>
    <text x="730" y="310" fill="#c8b99a" fontSize="9" fontFamily="monospace" opacity="0.6">docker pull</text>

    {/* Local host */}
    <rect x="30" y="336" width="820" height="152" rx="10" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
    <text x="52" y="360" fill="#8c827a" fontSize="9" fontFamily="monospace" letterSpacing="2" opacity="0.7">LOCAL MACHINE — IMAGE CACHE</text>

    {[
      { x: 60, name: "nginx:alpine", size: "22MB", layers: "3 layers", col: "#3b82f6" },
      { x: 240, name: "node:18-alpine", size: "175MB", layers: "12 layers", col: "#8b5cf6" },
      { x: 420, name: "postgres:15", size: "412MB", layers: "9 layers", col: "#c8b99a" },
      { x: 600, name: "myapp:latest", size: "64MB", layers: "7 layers", col: "#22c55e" },
    ].map((img) => (
      <g key={img.name}>
        <rect x={img.x} y={372} width={162} height={96} rx="8"
          fill={`rgba(${img.col === "#3b82f6" ? "59,130,246" : img.col === "#8b5cf6" ? "139,92,246" : img.col === "#c8b99a" ? "200,185,154" : "34,197,94"},0.07)`}
          stroke={`${img.col}30`} strokeWidth="1" />
        <text x={img.x + 81} y={400} textAnchor="middle" fill={img.col} fontSize="11" fontFamily="monospace" fontWeight="600">{img.name}</text>
        <text x={img.x + 81} y={418} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{img.size} · {img.layers}</text>
        <rect x={img.x + 12} y={428} width={138} height={6} rx="3" fill="rgba(255,255,255,0.04)" />
        <rect x={img.x + 12} y={436} width={100} height={6} rx="3" fill="rgba(255,255,255,0.03)" />
        <rect x={img.x + 12} y={444} width={70} height={6} rx="3" fill="rgba(255,255,255,0.02)" />
        <text x={img.x + 81} y={462} textAnchor="middle" fill="#3a3632" fontSize="8" fontFamily="monospace">overlayFS layers</text>
      </g>
    ))}

    <path d="M 440 336 C 440 308 580 295 715 280" stroke="rgba(200,185,154,0.15)" strokeWidth="1" fill="none" strokeDasharray="3 5" />
    <text x="570" y="302" fill="#3a3632" fontSize="9" fontFamily="monospace">docker push</text>
  </svg>
);

const D2_Engine = () => (
  <svg viewBox="0 0 880 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <marker id="d2a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#3b82f6" />
      </marker>
      <marker id="d2b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#22c55e" />
      </marker>
      <marker id="d2c" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#f59e0b" />
      </marker>
    </defs>
    <rect width="880" height="520" fill="#5d5b540b" rx="14" />
    <text x="440" y="38" textAnchor="middle" fill="#c8b99a" fontSize="11" fontFamily="monospace" letterSpacing="3" opacity="0.7">LAYER 2 — DOCKER ENGINE INTERNALS</text>

    {/* CLI */}
    <rect x="30" y="58" width="820" height="68" rx="10" fill="rgba(59,130,246,0.05)" stroke="rgba(59,130,246,0.15)" strokeWidth="1" />
    <text x="52" y="80" fill="#3b82f6" fontSize="9" fontFamily="monospace" letterSpacing="2" opacity="0.6">DOCKER CLI (CLIENT)</text>
    {[
      { cmd: "docker run", x: 60 },
      { cmd: "docker build", x: 190 },
      { cmd: "docker push", x: 325 },
      { cmd: "docker ps", x: 460 },
      { cmd: "docker exec", x: 580 },
      { cmd: "docker logs", x: 702 },
    ].map((c) => (
      <g key={c.cmd}>
        <rect x={c.x} y={88} width={115} height={26} rx="5" fill="rgba(59,130,246,0.1)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <text x={c.x + 57} y={106} textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace">{c.cmd}</text>
      </g>
    ))}

    <line x1="440" y1="126" x2="440" y2="152" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#d2a)" strokeDasharray="4 3" />
    <text x="448" y="143" fill="#6b6560" fontSize="9" fontFamily="monospace">HTTP over /var/run/docker.sock</text>

    {/* dockerd */}
    <rect x="30" y="158" width="820" height="100" rx="10" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.18)" strokeWidth="1.5" />
    <text x="52" y="180" fill="#8b5cf6" fontSize="9" fontFamily="monospace" letterSpacing="2" opacity="0.6">DOCKERD — DOCKER DAEMON</text>
    {[
      { label: "REST API", sub: "HTTP + Unix socket", x: 60, col: "#3b82f6" },
      { label: "Image Manager", sub: "pull, build, tag, push", x: 240, col: "#8b5cf6" },
      { label: "Container Manager", sub: "run, stop, rm, exec", x: 440, col: "#c8b99a" },
      { label: "Volume Manager", sub: "create, mount, prune", x: 640, col: "#22c55e" },
    ].map((b) => (
      <g key={b.label}>
        <rect x={b.x} y={190} width={165} height={52} rx="7"
          fill={`rgba(${b.col === "#3b82f6" ? "59,130,246" : b.col === "#8b5cf6" ? "139,92,246" : b.col === "#c8b99a" ? "200,185,154" : "34,197,94"},0.07)`}
          stroke={`${b.col}28`} strokeWidth="1" />
        <text x={b.x + 82} y={213} textAnchor="middle" fill={b.col} fontSize="11" fontFamily="monospace" fontWeight="600">{b.label}</text>
        <text x={b.x + 82} y={230} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{b.sub}</text>
      </g>
    ))}

    <line x1="440" y1="258" x2="440" y2="282" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#d2b)" strokeDasharray="4 3" />
    <text x="448" y="274" fill="#6b6560" fontSize="9" fontFamily="monospace">gRPC</text>

    {/* containerd */}
    <rect x="30" y="288" width="820" height="80" rx="10" fill="rgba(34,197,94,0.04)" stroke="rgba(34,197,94,0.15)" strokeWidth="1.5" />
    <text x="52" y="310" fill="#22c55e" fontSize="9" fontFamily="monospace" letterSpacing="2" opacity="0.6">CONTAINERD — CONTAINER RUNTIME</text>
    {[
      { label: "Snapshotter", sub: "OverlayFS layers", x: 60 },
      { label: "Image Service", sub: "pull, unpack, store", x: 260 },
      { label: "Task Service", sub: "container lifecycle", x: 460 },
      { label: "Shim (per container)", sub: "process supervision", x: 660 },
    ].map((b) => (
      <g key={b.label}>
        <rect x={b.x} y={320} width={178} height={36} rx="6" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.15)" strokeWidth="1" />
        <text x={b.x + 89} y={336} textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" fontWeight="600">{b.label}</text>
        <text x={b.x + 89} y={350} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{b.sub}</text>
      </g>
    ))}

    <line x1="440" y1="368" x2="440" y2="392" stroke="#f59e0b" strokeWidth="1.5" markerEnd="url(#d2c)" strokeDasharray="4 3" />

    {/* runc + kernel */}
    <rect x="30" y="398" width="820" height="100" rx="10" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.15)" strokeWidth="1.5" />
    <text x="52" y="420" fill="#f59e0b" fontSize="9" fontFamily="monospace" letterSpacing="2" opacity="0.6">RUNC + LINUX KERNEL</text>
    {[
      { label: "runc", sub: "OCI runtime · spawns processes", col: "#f59e0b", x: 60 },
      { label: "namespaces", sub: "PID · net · mnt · IPC · UTS · user", col: "#c8b99a", x: 280 },
      { label: "cgroups", sub: "CPU · memory · I/O limits", col: "#c8b99a", x: 500 },
      { label: "seccomp / AppArmor", sub: "syscall filtering, security", col: "#8b5cf6", x: 690 },
    ].map((b) => (
      <g key={b.label}>
        <rect x={b.x} y={432} width={172} height={50} rx="7"
          fill={`rgba(${b.col === "#f59e0b" ? "245,158,11" : b.col === "#c8b99a" ? "200,185,154" : "139,92,246"},0.07)`}
          stroke={`${b.col}28`} strokeWidth="1" />
        <text x={b.x + 86} y={454} textAnchor="middle" fill={b.col} fontSize="11" fontFamily="monospace" fontWeight="600">{b.label}</text>
        <text x={b.x + 86} y={470} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{b.sub}</text>
      </g>
    ))}
  </svg>
);

const D3_Containers = () => (
  <svg viewBox="0 0 880 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <marker id="d3a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#3b82f6" />
      </marker>
      <marker id="d3b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#22c55e" />
      </marker>
    </defs>
    <rect width="880" height="520" fill="#5d5b540b" rx="14" />
    <text x="440" y="38" textAnchor="middle" fill="#c8b99a" fontSize="11" fontFamily="monospace" letterSpacing="3" opacity="0.7">LAYER 3 — CONTAINERS &amp; FILESYSTEM LAYERS</text>

    {/* Image side */}
    <rect x="30" y="56" width="250" height="360" rx="10" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.16)" strokeWidth="1.5" />
    <text x="155" y="80" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace" opacity="0.8">IMAGE (read-only)</text>
    {[
      { label: "Layer 5: App code", col: "#3b82f6", y: 94 },
      { label: "Layer 4: npm install", col: "#3b82f6", y: 150 },
      { label: "Layer 3: package.json", col: "#3b82f6", y: 206 },
      { label: "Layer 2: node:18-alpine", col: "#8b5cf6", y: 262 },
      { label: "Layer 1: alpine:3.18", col: "#8b5cf6", y: 318 },
      { label: "Layer 0: scratch", col: "#3a3632", y: 374 },
    ].map((l) => (
      <g key={l.y}>
        <rect x={50} y={l.y} width={210} height={44} rx="6"
          fill={`rgba(${l.col === "#3b82f6" ? "59,130,246" : l.col === "#8b5cf6" ? "139,92,246" : "58,54,50"},0.08)`}
          stroke={`${l.col}30`} strokeWidth="1" />
        <text x={155} y={l.y + 18} textAnchor="middle" fill={l.col} fontSize="10" fontFamily="monospace">{l.label}</text>
        <text x={155} y={l.y + 33} textAnchor="middle" fill="#3a3632" fontSize="8" fontFamily="monospace">READ-ONLY</text>
      </g>
    ))}

    <line x1="280" y1="236" x2="326" y2="236" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#d3a)" />
    <text x="302" y="226" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">docker</text>
    <text x="302" y="249" textAnchor="middle" fill="#3b82f6" fontSize="9" fontFamily="monospace">run</text>

    {/* Container side */}
    <rect x="332" y="56" width="262" height="360" rx="10" fill="rgba(34,197,94,0.04)" stroke="rgba(34,197,94,0.16)" strokeWidth="1.5" />
    <text x="463" y="80" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" opacity="0.8">CONTAINER (running)</text>

    <rect x="352" y="94" width="222" height="54" rx="7" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.35)" strokeWidth="1.5" />
    <text x="463" y="117" textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="600">Writable Layer</text>
    <text x="463" y="133" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">logs, temp files, runtime writes</text>
    <text x="463" y="144" textAnchor="middle" fill="#3a3632" fontSize="8" fontFamily="monospace">EPHEMERAL — lost on docker rm</text>

    {[164, 208, 252, 296, 340].map((y, i) => (
      <g key={y}>
        <rect x={352} y={y} width={222} height={36} rx="5" fill="rgba(59,130,246,0.03)" stroke="rgba(59,130,246,0.1)" strokeWidth="1" />
        <text x={463} y={y + 14} textAnchor="middle" fill="#3a3632" fontSize="9" fontFamily="monospace">Layer {5 - i} (shared from image)</text>
        <text x={463} y={y + 26} textAnchor="middle" fill="#2a2724" fontSize="8" fontFamily="monospace">READ-ONLY</text>
      </g>
    ))}

    <rect x="352" y="390" width="222" height="26" rx="5" fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.2)" strokeWidth="1" />
    <text x="463" y="408" textAnchor="middle" fill="#f59e0b" fontSize="10" fontFamily="monospace">PID 1: node server.js</text>

    {/* Storage side */}
    <rect x="622" y="56" width="228" height="360" rx="10" fill="rgba(34,197,94,0.03)" stroke="rgba(34,197,94,0.12)" strokeWidth="1" />
    <text x="736" y="80" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" opacity="0.7">STORAGE</text>

    {[
      { label: "Named Volume", sub: "docker volume create", sub2: "survives docker rm ✓", col: "#22c55e", y: 94, h: 88 },
      { label: "Bind Mount", sub: "-v /host:/container", sub2: "host ↔ container sync", col: "#3b82f6", y: 200, h: 80 },
      { label: "tmpfs Mount", sub: "--tmpfs /tmp", sub2: "in-memory, no disk", col: "#c8b99a", y: 298, h: 76 },
    ].map((v) => (
      <g key={v.label}>
        <rect x={642} y={v.y} width={188} height={v.h} rx="7"
          fill={`rgba(${v.col === "#22c55e" ? "34,197,94" : v.col === "#3b82f6" ? "59,130,246" : "200,185,154"},0.07)`}
          stroke={`${v.col}25`} strokeWidth="1" />
        <text x={736} y={v.y + 22} textAnchor="middle" fill={v.col} fontSize="11" fontFamily="monospace" fontWeight="600">{v.label}</text>
        <text x={736} y={v.y + 38} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{v.sub}</text>
        <text x={736} y={v.y + 52} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{v.sub2}</text>
      </g>
    ))}

    <line x1="594" y1="138" x2="640" y2="138" stroke="#22c55e" strokeWidth="1.5" markerEnd="url(#d3b)" strokeDasharray="3 3" />
    <line x1="594" y1="240" x2="640" y2="240" stroke="#3b82f6" strokeWidth="1.5" markerEnd="url(#d3a)" strokeDasharray="3 3" />

    {/* Port mapping */}
    <rect x="30" y="432" width="580" height="68" rx="8" fill="rgba(139,92,246,0.04)" stroke="rgba(139,92,246,0.12)" strokeWidth="1" />
    <text x="50" y="453" fill="#8b5cf6" fontSize="9" fontFamily="monospace" opacity="0.6">PORT MAPPING — -p hostPort:containerPort</text>
    <text x="110" y="478" textAnchor="middle" fill="#6b6560" fontSize="11" fontFamily="monospace">Host :8080</text>
    <line x1="162" y1="476" x2="215" y2="476" stroke="#8b5cf6" strokeWidth="2" markerEnd="url(#d3a)" />
    <text x="272" y="478" textAnchor="middle" fill="#8b5cf6" fontSize="11" fontFamily="monospace">Container :80</text>
    <text x="186" y="468" textAnchor="middle" fill="#3a3632" fontSize="8" fontFamily="monospace">iptables NAT</text>
    <text x="450" y="470" textAnchor="middle" fill="#6b6560" fontSize="10" fontFamily="monospace">-p 8080:80</text>
    <text x="450" y="487" textAnchor="middle" fill="#3a3632" fontSize="9" fontFamily="monospace">TCP/UDP · all interfaces</text>
  </svg>
);

const D4_Networking = () => (
  <svg viewBox="0 0 880 520" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
    <defs>
      <marker id="d4a" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#3b82f6" />
      </marker>
      <marker id="d4b" markerWidth="7" markerHeight="7" refX="5" refY="3" orient="auto">
        <path d="M0,0 L0,6 L7,3 z" fill="#22c55e" />
      </marker>
    </defs>
    <rect width="880" height="520" fill="#5d5b540b" rx="14" />
    <text x="440" y="38" textAnchor="middle" fill="#c8b99a" fontSize="11" fontFamily="monospace" letterSpacing="3" opacity="0.7">LAYER 4 — DOCKER NETWORKING</text>

    {/* Bridge (default) */}
    <rect x="30" y="56" width="390" height="220" rx="10" fill="rgba(59,130,246,0.04)" stroke="rgba(59,130,246,0.18)" strokeWidth="1.5" />
    <text x="225" y="78" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace" opacity="0.8">DEFAULT BRIDGE — docker0</text>
    <text x="225" y="94" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">172.17.0.0/16 · container-to-container by IP only · no DNS</text>

    <rect x="140" y="228" width="170" height="26" rx="6" fill="rgba(59,130,246,0.12)" stroke="rgba(59,130,246,0.3)" strokeWidth="1" />
    <text x="225" y="246" textAnchor="middle" fill="#3b82f6" fontSize="10" fontFamily="monospace">docker0 virtual bridge</text>

    {[
      { name: "web", ip: "172.17.0.2", x: 50 },
      { name: "api", ip: "172.17.0.3", x: 200 },
      { name: "db", ip: "172.17.0.4", x: 340 },
    ].map((c) => (
      <g key={c.name}>
        <rect x={c.x} y={108} width={90} height={90} rx="8" fill="rgba(59,130,246,0.07)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
        <text x={c.x + 45} y={136} textAnchor="middle" fill="#3b82f6" fontSize="13" fontFamily="monospace" fontWeight="700">{c.name}</text>
        <text x={c.x + 45} y={154} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{c.ip}</text>
        <text x={c.x + 45} y={170} textAnchor="middle" fill="#3a3632" fontSize="8" fontFamily="monospace">eth0 veth pair</text>
        <text x={c.x + 45} y={190} textAnchor="middle" fill="#2a2724" fontSize="8" fontFamily="monospace">no DNS name</text>
        <line x1={c.x + 45} y1={198} x2={225} y2={228} stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
      </g>
    ))}

    {/* User-defined bridge */}
    <rect x="460" y="56" width="390" height="220" rx="10" fill="rgba(34,197,94,0.04)" stroke="rgba(34,197,94,0.18)" strokeWidth="1.5" />
    <text x="655" y="78" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace" opacity="0.8">USER-DEFINED BRIDGE (recommended)</text>
    <text x="655" y="94" textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">DNS built-in · containers reach each other by NAME</text>

    <rect x="572" y="228" width="166" height="26" rx="6" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.3)" strokeWidth="1" />
    <text x="655" y="246" textAnchor="middle" fill="#22c55e" fontSize="10" fontFamily="monospace">app-net bridge + DNS</text>

    {[
      { name: "frontend", port: "3000", x: 475 },
      { name: "backend", port: "8080", x: 607 },
      { name: "postgres", port: "5432", x: 746 },
    ].map((c) => (
      <g key={c.name}>
        <rect x={c.x} y={108} width={100} height={90} rx="8" fill="rgba(34,197,94,0.07)" stroke="rgba(34,197,94,0.2)" strokeWidth="1" />
        <text x={c.x + 50} y={136} textAnchor="middle" fill="#22c55e" fontSize="11" fontFamily="monospace" fontWeight="700">{c.name}</text>
        <text x={c.x + 50} y={154} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">:{c.port}</text>
        <text x={c.x + 50} y={172} textAnchor="middle" fill="#3a3632" fontSize="8" fontFamily="monospace">reachable</text>
        <text x={c.x + 50} y={184} textAnchor="middle" fill="#22c55e" fontSize="8" fontFamily="monospace">by name ✓</text>
        <line x1={c.x + 50} y1={198} x2={655} y2={228} stroke="rgba(34,197,94,0.2)" strokeWidth="1" />
      </g>
    ))}

    {/* Other types */}
    {[
      { label: "HOST", sub: "--network host", sub2: "shares host NIC directly", col: "#f59e0b", x: 30 },
      { label: "NONE", sub: "--network none", sub2: "fully isolated, no networking", col: "#c8b99a", x: 224 },
      { label: "OVERLAY", sub: "Docker Swarm / K8s", sub2: "multi-host VXLAN tunnel", col: "#8b5cf6", x: 418 },
      { label: "MACVLAN", sub: "assigns real MAC address", sub2: "appears as physical device", col: "#3b82f6", x: 648 },
    ].map((n) => (
      <g key={n.label}>
        <rect x={n.x} y={298} width={180} height={82} rx="10"
          fill={`rgba(${n.col === "#f59e0b" ? "245,158,11" : n.col === "#c8b99a" ? "200,185,154" : n.col === "#8b5cf6" ? "139,92,246" : "59,130,246"},0.04)`}
          stroke={`${n.col}20`} strokeWidth="1" />
        <text x={n.x + 90} y={322} textAnchor="middle" fill={n.col} fontSize="11" fontFamily="monospace" fontWeight="600">{n.label}</text>
        <text x={n.x + 90} y={340} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{n.sub}</text>
        <text x={n.x + 90} y={356} textAnchor="middle" fill="#6b6560" fontSize="9" fontFamily="monospace">{n.sub2}</text>
      </g>
    ))}

    {/* Compose flow */}
    <rect x="30" y="400" width="820" height="100" rx="10" fill="rgba(200,185,154,0.04)" stroke="rgba(200,185,154,0.1)" strokeWidth="1" strokeDasharray="4 4" />
    <text x="52" y="422" fill="#c8b99a" fontSize="9" fontFamily="monospace" opacity="0.6" letterSpacing="2">DOCKER COMPOSE FLOW</text>

    {[
      { step: "docker-compose.yml", col: "#c8b99a", x: 45 },
      { step: "creates network", col: "#22c55e", x: 220 },
      { step: "starts services", col: "#3b82f6", x: 388 },
      { step: "injects DNS", col: "#8b5cf6", x: 554 },
      { step: "talk by name", col: "#22c55e", x: 710 },
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y={432} width={155} height={52} rx="6"
          fill={`rgba(${s.col === "#c8b99a" ? "200,185,154" : s.col === "#22c55e" ? "34,197,94" : s.col === "#3b82f6" ? "59,130,246" : "139,92,246"},0.07)`}
          stroke={`${s.col}22`} strokeWidth="1" />
        <text x={s.x + 77} y={455} textAnchor="middle" fill={s.col} fontSize="10" fontFamily="monospace" fontWeight="600">{s.step}</text>
        <text x={s.x + 77} y={472} textAnchor="middle" fill="#3a3632" fontSize="8" fontFamily="monospace">step {i + 1}</text>
        {i < 4 && <line x1={s.x + 155} y1={458} x2={s.x + 168} y2={458} stroke={`${s.col}50`} strokeWidth="1.5" markerEnd="url(#d4a)" />}
      </g>
    ))}
  </svg>
);

// ─── Pan / Zoom Viewer ────────────────────────────────────────────────────────

// Add this to your global CSS or index.html <style> tag
/*
  html, body {
    overscroll-behavior: none;
    -webkit-overflow-scrolling: auto;
  }
*/

function DiagramViewer({ children, theme }) {
  const [pos, setPos] = useState({ x: 0, y: 0, scale: 1 });
  const [dragging, setDragging] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef();

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(('ontouchstart' in window) || (navigator.maxTouchPoints > 0));
    };
    checkTouch();
  }, []);

  // Use refs for all gesture tracking to avoid stale closures
  const posRef = useRef({ x: 0, y: 0, scale: 1 });
  const startRef = useRef(null);
  const ltRef = useRef(null);
  const ldRef = useRef(null);

  // Keep posRef in sync with pos state
  const updatePos = useCallback((updater) => {
    setPos(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      posRef.current = next;
      return next;
    });
  }, []);

  // ── Wheel zoom ──────────────────────────────────────────────────────────
  const onWheel = useCallback((e) => {
    e.preventDefault();
    const rect = containerRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    const f = e.deltaY > 0 ? 0.9 : 1.1;
    updatePos(p => {
      const newScale = Math.min(Math.max(p.scale * f, 0.25), 5);
      const ratio = newScale / p.scale;
      return { scale: newScale, x: mx - ratio * (mx - p.x), y: my - ratio * (my - p.y) };
    });
  }, [updatePos]);

  // ── Touch handlers ──────────────────────────────────────────────────────
  const handleTouchStart = useCallback((e) => {
    e.preventDefault(); // stops scroll, context menu, tap highlight, callout
    e.stopPropagation();

    if (e.touches.length === 1) {
      const p = posRef.current;
      ltRef.current = {
        x: e.touches[0].clientX - p.x,
        y: e.touches[0].clientY - p.y,
      };
      ldRef.current = null;
    } else if (e.touches.length === 2) {
      ltRef.current = null;
      ldRef.current = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  }, []); // no deps — reads posRef directly, no stale closure

  const handleTouchMove = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.touches.length === 1 && ltRef.current) {
      const x = e.touches[0].clientX - ltRef.current.x;
      const y = e.touches[0].clientY - ltRef.current.y;
      updatePos(p => ({ ...p, x, y }));
    } else if (e.touches.length === 2 && ldRef.current !== null) {
      const d = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const mid = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const mx = mid.x - rect.left;
        const my = mid.y - rect.top;
        updatePos(p => {
          const f = d / ldRef.current;
          const newScale = Math.min(Math.max(p.scale * f, 0.25), 5);
          const ratio = newScale / p.scale;
          return { scale: newScale, x: mx - ratio * (mx - p.x), y: my - ratio * (my - p.y) };
        });
      }
      ldRef.current = d;
    }
  }, [updatePos]);

  const handleTouchEnd = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.touches.length === 0) {
      ltRef.current = null;
      ldRef.current = null;
    } else if (e.touches.length === 1) {
      // One finger lifted from a pinch — switch back to drag mode
      ldRef.current = null;
      const p = posRef.current;
      ltRef.current = {
        x: e.touches[0].clientX - p.x,
        y: e.touches[0].clientY - p.y,
      };
    }
  }, []);

  // ── Register all listeners as non-passive ───────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const opts = { passive: false };
    el.addEventListener("wheel", onWheel, opts);
    el.addEventListener("touchstart", handleTouchStart, opts);
    el.addEventListener("touchmove", handleTouchMove, opts);
    el.addEventListener("touchend", handleTouchEnd, opts);
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchmove", handleTouchMove);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onWheel, handleTouchStart, handleTouchMove, handleTouchEnd]);

  // ── Mouse drag ──────────────────────────────────────────────────────────
  const onDown = useCallback((e) => {
    setDragging(true);
    startRef.current = { x: e.clientX - posRef.current.x, y: e.clientY - posRef.current.y };
  }, []);
  const onMove = useCallback((e) => {
    if (!startRef.current) return;
    const start = startRef.current;
    updatePos(p => ({ ...p, x: e.clientX - start.x, y: e.clientY - start.y }));
  }, [updatePos]);
  const onUp = useCallback(() => {
    setDragging(false);
    startRef.current = null;
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        ref={containerRef}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        tabIndex={-1}
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          cursor: isTouchDevice ? "default" : (dragging ? "grabbing" : "grab"),
          userSelect: "none",
          touchAction: "none",
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
          WebkitTapHighlightColor: "transparent",
          background: theme.isDark ? "#171717" : "#171717",
          border: `1px solid ${theme.border}`,
          borderRadius: "12px",
          outline: "none",
        }}
      >
        <div style={{
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${pos.scale})`,
          transformOrigin: "0 0",
          transition: dragging ? "none" : "transform 0.05s",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // Also block callout/selection on the inner content
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
          pointerEvents: "none",  // SVG children don't need pointer events for pan/zoom
        }}>
          {children}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "12px", right: "12px", display: "flex", gap: "4px", zIndex: 10 }}>
        {[
          { label: "−", onClick: () => updatePos(p => ({ ...p, scale: Math.max(p.scale * 0.8, 0.25) })) },
          { label: `${Math.round(pos.scale * 100)}%`, onClick: () => updatePos({ x: 0, y: 0, scale: 1 }) },
          { label: "+", onClick: () => updatePos(p => ({ ...p, scale: Math.min(p.scale * 1.25, 5) })) },
        ].map(b => (
          <button key={b.label} onClick={b.onClick} style={{
            background: theme.isDark ? "#171717" : "#171717",
            border: `1px solid ${theme.border}`,
            color: theme.muted,
            borderRadius: "6px",
            padding: "4px 10px",
            fontSize: "11px",
            fontFamily: "var(--font-mono, monospace)",
            cursor: "pointer",
            minWidth: "36px",
            backdropFilter: "blur(8px)",
          }}>{b.label}</button>
        ))}
      </div>

      <div style={{ position: "absolute", bottom: "14px", left: "14px", color: theme.diagramText, fontSize: "10px", fontFamily: "monospace" }}>
        scroll · drag · pinch
      </div>
    </div>
  );
}


// ─── Data ─────────────────────────────────────────────────────────────────────
const SAND = "#c8b99a"; // Will be replaced dynamically

const sections = [
  {
    id: "registry", num: "01", icon: Cloud, title: "Cloud & Registry",
    subtitle: "Where images are stored and distributed",
    color: SAND, Diagram: D1_Registry,
    what: "A Docker registry stores and distributes Docker images. Docker Hub is the default public registry. Private registries (ECR, GCR, ACR) are used for proprietary images. Every image is identified by name:tag, and underneath that is an immutable SHA256 digest.",
    analogy: "A registry is like GitHub — but for packaged app environments instead of code. docker pull is git clone. docker push is git push.",
    terms: [
      { k: "Image Tag", v: "nginx:1.25-alpine — name:version. :latest if omitted." },
      { k: "Digest", v: "sha256:abc… — immutable content hash. Tags can move; digests never change." },
      { k: "Repository", v: "All versions of one image (e.g. all nginx tags in one repo)." },
      { k: "docker pull", v: "Download image layers from registry to local cache." },
      { k: "docker push", v: "Upload local tagged image to registry." },
      { k: "docker login", v: "Authenticate before pulling/pushing private images." },
    ],
    commands: [
      { cmd: "docker pull nginx:alpine", desc: "Pull from Docker Hub" },
      { cmd: "docker pull ghcr.io/org/app:v2", desc: "Pull from GitHub GHCR" },
      { cmd: "docker images", desc: "List all local cached images" },
      { cmd: "docker image inspect nginx", desc: "Full metadata, layers, config" },
      { cmd: "docker history nginx:alpine", desc: "Show each layer and its size" },
      { cmd: "docker rmi nginx:alpine", desc: "Delete image from local cache" },
      { cmd: "docker tag app:latest myrepo/app:v1", desc: "Tag before pushing" },
      { cmd: "docker push myrepo/app:v1", desc: "Upload to registry" },
      { cmd: "docker login ghcr.io", desc: "Auth to private registry" },
      { cmd: "docker search nginx", desc: "Search Docker Hub from CLI" },
    ],
    flow: [
      "Developer writes Dockerfile describing the environment",
      "CI/CD runs: docker build -t org/app:v1 .",
      "Each Dockerfile instruction creates one immutable layer",
      "docker push org/app:v1 uploads layers to registry",
      "On a server: docker pull org/app:v1 downloads those layers",
      "docker run org/app:v1 starts a container from the cached image",
    ],
  },
  {
    id: "engine", num: "02", icon: Server, title: "Docker Engine",
    subtitle: "The daemon, runtime stack, and kernel integration",
    color: SAND, Diagram: D2_Engine,
    what: "Docker Engine is a client-server system. The CLI (docker) sends commands via HTTP to dockerd over a Unix socket. dockerd delegates container management to containerd, which uses runc — an OCI-compliant low-level runtime — to actually create isolated processes using Linux kernel namespaces and cgroups.",
    analogy: "dockerd is the manager taking orders. containerd is the site supervisor. runc is the worker who physically builds the isolation using Linux kernel tools (namespaces, cgroups).",
    terms: [
      { k: "dockerd", v: "The background daemon. Manages full container/image/network/volume lifecycle." },
      { k: "Docker CLI", v: "Client tool. Translates commands to HTTP requests sent to dockerd." },
      { k: "Unix Socket", v: "/var/run/docker.sock — local IPC channel between CLI and daemon." },
      { k: "containerd", v: "Industry-standard runtime. Pulls images, manages snapshots and container lifecycle." },
      { k: "runc", v: "OCI runtime that calls Linux clone() + unshare() to create isolated processes." },
      { k: "cgroups v2", v: "Kernel feature enforcing per-container CPU, memory, and I/O limits." },
      { k: "namespaces", v: "Isolate PID tree, network stack, filesystem mounts, users per container." },
    ],
    commands: [
      { cmd: "systemctl status docker", desc: "Check if dockerd is running" },
      { cmd: "docker system info", desc: "Runtime, OS, storage driver, cgroup version" },
      { cmd: "docker system df", desc: "Disk usage: images, containers, volumes" },
      { cmd: "docker system prune -a", desc: "Remove all stopped containers + unused images" },
      { cmd: "docker build -t app:1.0 .", desc: "Build from Dockerfile in current dir" },
      { cmd: "docker build --no-cache -t app .", desc: "Build ignoring layer cache" },
      { cmd: "docker build --target prod -t app .", desc: "Multi-stage: build to specific stage" },
      { cmd: "docker events", desc: "Stream real-time daemon events" },
      { cmd: "docker context ls", desc: "List Docker contexts (local/remote daemons)" },
    ],
    flow: [
      "docker run nginx → CLI serializes request to JSON",
      "HTTP POST /containers/create sent to /var/run/docker.sock",
      "dockerd checks local image cache; if missing calls containerd to pull",
      "containerd downloads layers, unpacks via OverlayFS snapshotter",
      "dockerd creates container config: namespaces, cgroups, mounts, env vars",
      "containerd launches shim process per container (survives dockerd restart)",
      "Shim calls runc which calls Linux clone() with namespace flags",
      "PID 1 (CMD/ENTRYPOINT) starts inside fully isolated environment",
    ],
  },
  {
    id: "containers", num: "03", icon: Box, title: "Containers & Filesystem",
    subtitle: "Isolated processes sharing the host kernel via layered filesystems",
    color: SAND, Diagram: D3_Containers,
    what: "A container is an isolated Linux process. It shares the host kernel but has its own PID namespace, network namespace, and a union-mounted filesystem. The filesystem is composed of read-only image layers (shared across all containers from the same image) plus one ephemeral writable layer per container. When the container is removed, the writable layer is deleted — use volumes to persist data.",
    analogy: "An image is a class definition. A container is an instance — created from it, living in memory, with its own temporary state. Multiple containers share the same image layers without duplicating disk space.",
    terms: [
      { k: "OverlayFS", v: "Linux union filesystem stacking read-only image layers under a writable container layer." },
      { k: "Writable Layer", v: "Thin layer unique to each container. Deleted on docker rm. Never store important data here." },
      { k: "Named Volume", v: "docker volume create — stored at /var/lib/docker/volumes. Survives docker rm." },
      { k: "Bind Mount", v: "-v /host/path:/container/path — host directory directly visible inside container." },
      { k: "tmpfs Mount", v: "--tmpfs /tmp — in-memory filesystem. Fast, but lost on container stop." },
      { k: "CMD vs ENTRYPOINT", v: "CMD sets default command (overridable). ENTRYPOINT sets fixed executable." },
    ],
    commands: [
      { cmd: "docker run -d -p 8080:80 --name web nginx", desc: "Background, port map, named" },
      { cmd: "docker run -it ubuntu bash", desc: "Interactive shell" },
      { cmd: "docker run --rm alpine echo hi", desc: "Auto-remove on exit" },
      { cmd: "docker run -e NODE_ENV=prod app", desc: "Set environment variable" },
      { cmd: "docker run --memory=512m --cpus=1 app", desc: "Resource limits" },
      { cmd: "docker exec -it web sh", desc: "Shell into running container" },
      { cmd: "docker logs -f web", desc: "Follow live stdout/stderr" },
      { cmd: "docker inspect web", desc: "Full JSON: IP, mounts, env, state" },
      { cmd: "docker stats", desc: "Live CPU/memory/net/disk per container" },
      { cmd: "docker cp web:/etc/nginx/nginx.conf .", desc: "Copy file out of container" },
      { cmd: "docker run -v mydata:/data app", desc: "Mount named volume" },
      { cmd: "docker run -v $(pwd):/app app", desc: "Bind-mount current directory" },
    ],
    flow: [
      "docker run nginx — daemon checks local image cache",
      "OverlayFS: read-only image layers mounted + fresh writable layer added on top",
      "New network namespace created; veth pair links container to docker0 bridge",
      "cgroups applied: memory, CPU, block I/O limits enforced in kernel",
      "Mounts processed: volumes, bind mounts, tmpfs attached",
      "PID 1 (ENTRYPOINT or CMD) started inside isolated process tree",
      "docker stop → SIGTERM to PID 1 → grace period → SIGKILL after timeout",
      "docker rm → writable layer deleted from /var/lib/docker/overlay2",
    ],
  },
  {
    id: "networking", num: "04", icon: Network, title: "Networks & Compose",
    subtitle: "Container discovery, DNS resolution, and multi-service orchestration",
    color: SAND, Diagram: D4_Networking,
    what: "Docker creates virtual networks for container communication. The default bridge connects containers by IP but has no DNS. User-defined networks add automatic DNS — containers discover each other by container name. Docker Compose declares all services, networks, and volumes in a single YAML file and wires everything together automatically.",
    analogy: "A user-defined network is a private office LAN. Every container is a computer with a hostname (its service name). Port publishing (-p) opens a specific firewall port for outside traffic to reach it.",
    terms: [
      { k: "Bridge (default)", v: "docker0 switch. Containers get 172.17.x.x IPs. No DNS — IP communication only." },
      { k: "User-defined bridge", v: "docker network create — adds DNS so containers reach each other by name." },
      { k: "Host network", v: "--network host: container uses host's NIC directly. No isolation, max performance." },
      { k: "None network", v: "--network none: completely isolated, no networking whatsoever." },
      { k: "Overlay network", v: "Multi-host networking for Swarm/Kubernetes via VXLAN tunnels." },
      { k: "depends_on", v: "Compose starts services in dependency order. Use healthcheck for readiness." },
    ],
    commands: [
      { cmd: "docker network create app-net", desc: "Create user-defined bridge with DNS" },
      { cmd: "docker network ls", desc: "List all networks" },
      { cmd: "docker network inspect app-net", desc: "Subnet, gateway, connected containers" },
      { cmd: "docker run --network app-net --name db postgres", desc: "Join named network" },
      { cmd: "docker network connect app-net container1", desc: "Add running container to network" },
      { cmd: "docker network disconnect app-net container1", desc: "Remove from network" },
      { cmd: "docker compose up -d", desc: "Start all services in background" },
      { cmd: "docker compose down", desc: "Stop and remove containers + network" },
      { cmd: "docker compose down -v", desc: "Also remove named volumes" },
      { cmd: "docker compose logs -f backend", desc: "Follow logs for one service" },
      { cmd: "docker compose ps", desc: "List services and their status" },
      { cmd: "docker compose exec backend sh", desc: "Shell into a compose service" },
    ],
    flow: [
      "docker network create app-net — virtual bridge + embedded DNS server created",
      "Container 'db' starts: --network app-net — IP assigned, DNS record 'db' registered",
      "Container 'api' starts on same network — can resolve 'db' to its IP automatically",
      "docker compose up reads docker-compose.yml",
      "Compose creates one shared network: projectname_default",
      "Each service gets a DNS entry matching its service name key in the YAML",
      "backend can connect to 'postgres:5432' — no hardcoded IPs needed",
      "docker compose down removes containers + network but preserves named volumes",
    ],
    compose: `version: "3.9"

services:
  frontend:
    build: ./frontend
    ports:
      - "3000:3000"
    environment:
      - API_URL=http://backend:8080
    depends_on:
      - backend
    networks:
      - app-net

  backend:
    build: ./backend
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_NAME=appdb
    depends_on:
      - postgres
    networks:
      - app-net

  postgres:
    image: postgres:15-alpine
    volumes:
      - pgdata:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=appdb
      - POSTGRES_PASSWORD=secret
    networks:
      - app-net
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      retries: 5

volumes:
  pgdata:

networks:
  app-net:
    driver: bridge`,
  },
];

// ─── UI ───────────────────────────────────────────────────────────────────────

function CopyBtn({ text, theme }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard?.writeText(text).catch(() => {}); setCopied(true); setTimeout(() => setCopied(false), 2000); }}
      style={{
        background: "none", border: "none", cursor: "pointer",
        color: copied ? theme.green : theme.subtle,
        padding: "2px 6px", borderRadius: "4px",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "color 0.2s", flexShrink: 0,
      }}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
    </button>
  );
}

function Section({ s, theme, activeSection }) {
  const [tab, setTab] = useState("concept");
  const Icon = s.icon;
  const tabs = [
    { id: "concept", label: "CONCEPT" },
    { id: "commands", label: "COMMANDS" },
    { id: "flow", label: "FLOW" },
    ...(s.compose ? [{ id: "compose", label: "COMPOSE" }] : []),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      style={{ marginBottom: "4.5rem" }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
        <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-mono, monospace)", color: theme.subtle, letterSpacing: "0.1em" }}>
          LAYER {s.num}
        </span>
        <Icon size={18} style={{ color: theme.sand }} />
        <div>
          <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)", fontWeight: 700, color: theme.sand, margin: 0, letterSpacing: "-0.01em" }}>{s.title}</h2>
          <p style={{ fontSize: "0.8rem", color: theme.muted, margin: "3px 0 0" }}>{s.subtitle}</p>
        </div>
      </div>

      <s.Diagram />

      {/* Diagram — full width */}
      <div style={{
        width: "100%",
        height: "clamp(320px, 44vw, 520px)",
        borderRadius: "12px",
        border: `1px solid ${theme.border}`,
        overflow: "hidden",
        background: theme.diagramBg,
        marginBottom: "1.25rem",
        position: "relative",
        marginTop: "1.25rem",
      }}>
        <DiagramViewer theme={theme}>
          <div style={{ width: "100%", maxWidth: "880px", padding: "0 8px" }}>
            <img src={diagramMap[s.id]} alt={`Docker Architecture - ${s.title}`} />
          </div>
        </DiagramViewer>
      </div>

      {/* Tabbed content */}
      <div style={{
        borderRadius: "12px",
        border: `1px solid ${theme.border}`,
        overflow: "hidden",
        background: theme.surface,
      }}>
        <div style={{ display: "flex", background: theme.isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)", borderBottom: `1px solid ${theme.border}` }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.625rem 1rem",
              background: "none", border: "none",
              borderBottom: tab === t.id ? `2px solid ${theme.sand}` : "2px solid transparent",
              color: tab === t.id ? theme.sand : theme.subtle,
              fontSize: "0.7rem",
              fontFamily: "var(--font-mono, monospace)",
              letterSpacing: "0.08em",
              cursor: "pointer",
              transition: "color 0.15s",
              fontWeight: tab === t.id ? 600 : 400,
            }}>{t.label}</button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={tab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ padding: "1.25rem" }}
          >
            {tab === "concept" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p style={{ fontSize: "0.875rem", color: theme.text, lineHeight: 1.75, maxWidth: "680px", margin: 0 }}>{s.what}</p>
                <div style={{
                  padding: "0.625rem 0.875rem",
                  background: theme.sandSoft,
                  border: `1px solid ${theme.sandBorder}`,
                  borderRadius: "8px",
                  fontSize: "0.8rem", color: theme.sand, fontStyle: "italic", lineHeight: 1.65,
                }}>💡 {s.analogy}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "0.5rem" }}>
                  {s.terms.map(t => (
                    <div key={t.k} style={{
                      padding: "0.625rem 0.75rem",
                      borderRadius: "8px",
                      border: `1px solid ${theme.border}`,
                      background: theme.isDark ? "rgba(255,255,255,0.015)" : "rgba(0,0,0,0.015)",
                    }}>
                      <div style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono, monospace)", color: theme.sand, marginBottom: "0.25rem", fontWeight: 600 }}>{t.k}</div>
                      <div style={{ fontSize: "0.75rem", color: theme.muted, lineHeight: 1.5 }}>{t.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "commands" && (
              <div style={{ borderRadius: "8px", border: `1px solid ${theme.border}`, overflow: "hidden" }}>
                {s.commands.map((c, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    gap: "0.75rem", padding: "0.5rem 0.875rem",
                    borderTop: i === 0 ? "none" : `1px solid ${theme.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}`,
                    background: i % 2 === 0 ? "transparent" : theme.isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)",
                  }}>
                    <code style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono, monospace)", color: theme.green, flex: 1 }}>{c.cmd}</code>
                    <span style={{ fontSize: "0.7rem", color: theme.subtle, flexShrink: 0 }}>{c.desc}</span>
                    <CopyBtn text={c.cmd} theme={theme} />
                  </div>
                ))}
              </div>
            )}

            {tab === "flow" && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {s.flow.map((step, i) => (
                  <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                      <div style={{
                        width: "22px", height: "22px", borderRadius: "50%",
                        background: theme.isDark ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.02)", border: `1px solid ${theme.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "9px", fontFamily: "var(--font-mono, monospace)", color: theme.subtle, fontWeight: 600,
                      }}>{i + 1}</div>
                      {i < s.flow.length - 1 && <div style={{ width: "1px", height: "22px", background: theme.isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", margin: "2px 0" }} />}
                    </div>
                    <div style={{
                      fontSize: "0.75rem", fontFamily: "var(--font-mono, monospace)",
                      color: theme.text, lineHeight: 1.7,
                      paddingBottom: i < s.flow.length - 1 ? "0.5rem" : 0,
                    }}>{step}</div>
                  </div>
                ))}
              </div>
            )}

            {tab === "compose" && s.compose && (
              <div style={{ position: "relative" }}>
                <pre style={{
                  margin: 0, padding: "0.875rem 1rem",
                  background: theme.isDark ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.05)",
                  borderRadius: "8px",
                  border: `1px solid ${theme.border}`,
                  fontSize: "0.72rem", fontFamily: "var(--font-mono, monospace)",
                  color: theme.green, overflowX: "auto", lineHeight: 1.7,
                }}>{s.compose}</pre>
                <div style={{ position: "absolute", top: "10px", right: "10px" }}>
                  <CopyBtn text={s.compose} theme={theme} />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function Docker() {
  const theme = useTheme();
  const [activeSection, setActiveSection] = useState("registry");
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  
  return (
    <div style={{ minHeight: "100vh", paddingBottom: "4rem" , paddingTop: "4rem" }}>
      {/* Header — exact original style */}
      <header style={{
        padding: "6rem 1.5rem 3rem",
        textAlign: "center",
        borderBottom: `1px solid ${theme.border}`,
      }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 0.875rem", borderRadius: "9999px",
            background: theme.sandSoft, border: `1px solid ${theme.sandBorder}`,
            color: theme.sand, fontSize: "0.75rem", letterSpacing: "0.05em", marginBottom: "1rem",
          }}>
            <Box size={14} />
            COMPLETE REFERENCE GUIDE
          </span>

          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: theme.text, marginBottom: "0.75rem" }}>
            Docker Architecture
          </h1>

          <p style={{ color: theme.muted, fontSize: "1rem", maxWidth: "500px", margin: "0 auto 1.5rem" }}>
            From cloud to container. Four layers, every concept, zero gaps.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.5rem" }}>
            {sections.map(s => {
              const Icon = s.icon;
              const isActive = activeSection === s.id;
              return (
                <a key={s.id} href={`#${s.id}`} style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  padding: "0.35rem 0.875rem", borderRadius: "9999px",
                  background: isActive ? theme.sandSoft : theme.isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)", 
                  border: `1px solid ${isActive ? theme.sandBorder : theme.isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                  color: isActive ? theme.sand : theme.muted, fontSize: "0.7rem", fontFamily: "var(--font-mono, monospace)",
                  textDecoration: "none", letterSpacing: "0.05em",
                }}>
                  <Icon size={11} style={{ color: isActive ? theme.sand : theme.sand }} />
                  {s.num} {s.title}
                </a>
              );
            })}
          </div>
        </motion.div>
      </header>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        {sections.map(s => (
          <div key={s.id} id={s.id}>
            <Section s={s} theme={theme} activeSection={activeSection} />
          </div>
        ))}

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.4 }}
          style={{ borderRadius: "12px", border: `1px solid ${theme.border}`, overflow: "hidden", background: theme.surface }}
        >
          <div style={{ padding: "0.75rem 1rem", background: theme.isDark ? "rgba(200,185,154,0.06)" : "rgba(139,115,85,0.06)", borderBottom: `1px solid ${theme.border}` }}>
            <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono, monospace)", color: theme.sand, letterSpacing: "0.08em" }}>
              QUICK REFERENCE
            </span>
          </div>
          {[
            { concept: "Image", what: "Read-only filesystem snapshot (layers)", cmd: "docker pull / docker build", note: "Persists until docker rmi" },
            { concept: "Container", what: "Running isolated process from image", cmd: "docker run / docker start", note: "Writable layer lost on docker rm" },
            { concept: "Volume", what: "Persistent storage outside container FS", cmd: "docker volume create / -v", note: "Survives container deletion" },
            { concept: "Network", what: "Virtual network + DNS for containers", cmd: "docker network create", note: "Persists until docker network rm" },
            { concept: "Compose", what: "Multi-container app as YAML definition", cmd: "docker compose up / down", note: "Declared in docker-compose.yml" },
          ].map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "100px 1fr 1fr 1fr",
              gap: "1px", padding: "0.625rem 1rem",
              borderTop: i === 0 ? "none" : `1px solid ${theme.isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}`,
              background: i % 2 === 0 ? "transparent" : theme.isDark ? "rgba(255,255,255,0.01)" : "rgba(0,0,0,0.01)",
            }}>
              <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono, monospace)", color: theme.sand, fontWeight: 600 }}>{row.concept}</span>
              <span style={{ fontSize: "0.7rem", color: theme.muted }}>{row.what}</span>
              <code style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono, monospace)", color: theme.green }}>{row.cmd}</code>
              <span style={{ fontSize: "0.7rem", color: theme.subtle }}>{row.note}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}