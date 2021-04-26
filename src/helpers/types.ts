import { CURRENCY, LANGUAGES, STATUS } from "./enums";

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

export type TProject = {
  type: string;
  id: string;
  attributes: {
    name: string;
    identifier: string;
    customer_id: string;
    source_language: LANGUAGES;
    source_content: string;
    file_name: string;
    target_languages: LANGUAGES[];
    workflow: string;
    agent: string;
    price: {
      amount: number;
      amount_euro: number;
      total: number;
      total_euro: number;
      currency: CURRENCY;
    };
    payment: any;
    status: STATUS;
    folder_id: any;
    folder_name: any;
    callback_url: any;
    customer: any;
    progress: {
      percent: number;
      completed_tasks: number;
    };
    preferred_deadline: any;
    target_zip_timestamp: any;
    target_zip_path: any;
    created_at: Date;
    updated_at: Date;
  };
  relationships: any[];
};
