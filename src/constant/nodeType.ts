export interface Node {
  value: string;
  x: number;
  y: number;
  link?: string;
  edges: string[];
  circleSize: number;
  isFolder?: boolean;
  isLeftText?: boolean;
}

export type Nodes = Record<string, Node>;
