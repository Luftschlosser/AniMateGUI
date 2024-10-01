export interface Configuration {
  id: string;
  name: string;
  test: Uint8Array;
}

export type Configurations = Record<string, Configuration>;
