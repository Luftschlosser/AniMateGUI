export interface Configuration {
  id: string;
  name: string;
}

export type Configurations = Record<string, Configuration>;
