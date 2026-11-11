type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Image {
  _type: 'image';
  imageUrl: string;
  alt?: string;
  asset: {
    _ref: string;
    _type: 'reference';
  };
}

interface PageInfo extends Base {
  _type: 'pageInfo';
  address: string;
  backgroundInformation: string;
  email: string;
  roleOne: string;
  roleTwo: string;
  heroImage: Image;
  heroImageUrl: string;
  heroHeadline?: string;
  heroLines?: string[];
  name: string;
  profilePic: Image;
  profilePicUrl: string;
  contactIntro?: string;
  resumeUrl?: string;
  seoDescription?: string;
}

interface Technology extends Base {
  _ref: string;
  _type: 'skill';
  image: Image;
  imageUrl: string;
  progress: number;
  title: string;
}

interface Skill extends Base {
  _type: 'skill';
  image: Image;
  imageUrl: string;
  category?: 'gis' | 'frontend' | 'tools';
  title: string;
  displayOrder?: number;
  hidden?: boolean;
}

interface Experience extends Base {
  _type: 'experience';
  company: string;
  companyImage: Image;
  companyImageUrl: string;
  dateStarted: Date;
  dateEnded: Date;
  presentlyEmployed: boolean;
  jobTitle: string;
  points: string[];
  publicPoints?: string[];
  technologies: Technology[];
  displayOrder?: number;
  hidden?: boolean;
}

interface Project extends Base {
  title: string;
  _type: 'project';
  image: Image;
  imageUrl: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  repositoryUrl?: string;
  slug?: { current: string };
  role?: string;
  techLabels?: string[];
  bullets?: string[];
  businessImpact?: string;
  metric?: { value: string; label: string; status: string; context: string };
  gallery?: { url?: string; caption?: string; alt?: string }[];
  category?: string;
  featured?: boolean;
  displayOrder?: number;
  hidden?: boolean;
}

interface Social extends Base {
  _type: 'social';
  title: string;
  url: string;
  displayOrder?: number;
  hidden?: boolean;
}
