export type ProjectTag = 'HW' | 'SW' | 'ML';

export interface ProjectImage {
  placeholderLabel: string;
  aspectRatio: string;
  src?: string;
  videoSrc?: string;
  objectPosition?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  reflection: string;
  tags: ProjectTag[];
  technologies: string[];
  github: string;
  demo?: string;
  image: ProjectImage;
}

export interface Publication {
  title: string;
  venue: string;
  authors: string;
  link?: string;
}

export interface ExperienceEntry {
  id: string;
  organization: string;
  role: string;
  dateRange: string;
  location: string;
  reflection: string;
  publication?: Publication;
}

export interface Education {
  institution: string;
  degree: string;
  awards: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface Profile {
  name: string;
  bio: string;
  education: Education;
  contact: ContactInfo;
}
