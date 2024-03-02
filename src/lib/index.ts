export interface ProcessScheme {
  id: string; // Unique identifier for the scheme
  name: string; // Name of the scheme
  description?: string; // Optional description of the scheme
  components: ProcessComponent[]; // Array of components in the scheme
  createdAt: Date; // Date when the scheme was created
  lastModified: Date; // Date when the scheme was last modified
}

export interface ProcessComponent {
  id: string; // Unique identifier for the component
  name: string; // Name of the component
  type: ProcessComponentType; // Type of the component (e.g., reactor, pump, valve)
  parameters: ProcessComponentParameter[]; // Parameters/configurations of the component
}

export interface ProcessComponentParameter {
  name: string; // Name of the parameter
  value: number | string | boolean; // Value of the parameter (could be numeric, string, or boolean)
}

export enum ProcessComponentType {
  REACTOR = "Reactor",
  PUMP = "Pump",
  VALVE = "Valve",
  // Add more types as needed
}
