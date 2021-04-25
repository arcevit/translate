
export type TFolder = {
  type: string;
  id: string;
  attributes: {
    name: string;
    total_projects: number;
    created_at: Date;
    updated_at: Date;
  };
  relationships: any[];
};
