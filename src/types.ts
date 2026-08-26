export interface ProjectImage {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export interface ProjectCallToAction {
  before: string;
  linkLabel: string;
  href: string;
  after: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  tagline?: string;
  summary: string;
  overview: string;
  introduction?: string[];
  callToAction?: ProjectCallToAction;
  technologies: string[];
  features: string[];
  cardImages?: ProjectImage[];
  images?: ProjectImage[];
  statusLine?: string;
  caseStudy?: ProjectSection[];
}
