import { useId } from 'react';
import type { DiagramType } from '../data/projects';

type ArchitectureDiagramProps = {
  type: DiagramType;
  labels?: string[];
  title?: string;
};

const defaultLabels: Record<DiagramType, string[]> = {
  event: ['API', 'RabbitMQ', 'Worker', 'Database'],
  fiscal: ['Fiscal XML', 'Parser', 'Validation', 'ERP'],
  bff: ['BFF', 'Anonymization', 'Client'],
};

export function ArchitectureDiagram({ type, labels, title }: ArchitectureDiagramProps) {
  const markerId = useId().replace(/:/g, '');
  const nodes = labels ?? defaultLabels[type];
  const step = nodes.length > 3 ? 96 : 125;
  const start = nodes.length > 3 ? 52 : 70;

  return (
    <div className="architecture-diagram" aria-label={title ?? `${nodes.join(' to ')} architecture flow`}>
      <svg viewBox="0 0 390 112" aria-hidden="true" focusable="false">
        <defs>
          <marker id={markerId} markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" />
          </marker>
        </defs>
        <g className={`diagram-flow diagram-${type}`}>
          {nodes.map((label, index) => {
            const x = start + index * step;
            const width = label.length > 10 ? 74 : 64;
            return (
              <g key={label}>
                {index < nodes.length - 1 && (
                  <path
                    className="diagram-line"
                    d={`M${x + width / 2 + 8} 56 H${start + (index + 1) * step - width / 2 - 8}`}
                    markerEnd={`url(#${markerId})`}
                  />
                )}
                <rect className="diagram-node" x={x - width / 2} y="34" width={width} height="44" rx="7" />
                <text x={x} y="60" textAnchor="middle">
                  {label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
