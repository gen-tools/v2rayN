export interface Article {
  id: string;
  category: "installation" | "configuration" | "troubleshooting" | "features" | "comparison";
  title: string;
  description: string;
  lastUpdated: string;
  readingTime: string;
  sections: {
    title: string;
    id: string;
    content: string;
    code?: string;
    codeLanguage?: string;
    alertType?: "info" | "warning" | "error" | "success";
    alertContent?: string;
  }[];
  relatedArticleIds: string[];
}

export type ActivePage = 
  | "home"
  | "download"
  | "installation"
  | "configuration"
  | "troubleshooting"
  | "features"
  | "comparison"
  | "faq"
  | "changelog"
  | "blog"
  | "about"
  | string; // For details subpages like installation/windows or troubleshooting/dns-leak
