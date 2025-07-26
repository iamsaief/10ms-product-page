// Developer Note: These types are modeled based on the API response structure and the UI wireframe.
// Handled data from API in a safe and predictable way.

/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Medium {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  id: string;
  text: string;
  icon: string;
  color: string;
  list_page_visibility: boolean;
}

export interface Seo {
  defaultMeta: any;
  title?: string;
  description?: string;
  keywords?: string;
  og_image?: string;
}

export interface CtaText {
  name: string;
  value: string;
}

export interface SectionValue {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  text?: string;
  name?: string;
  image?: string;
  icon?: string;
  color?: string;
  slug?: string;
  short_description?: string;
  has_instructor_page?: boolean;
  checklist?: string[];
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  start_at?: string;
  template?: string;
  background?: any;
  cta?: any;
  description_color?: string;
  thumbnail?: string;
  title_color?: string;
  top_left_icon_img?: string;
  answer?: string;
  question?: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: any;
  start_at: string;
  media: Medium[];
  checklist: Checklist[];
  seo: Seo[];
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface ApiResponse {
  code: number;
  data: Data;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}
