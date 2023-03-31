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
  name: string;
  phoneNumber: string;
  profilePic: Image;
  profilePicUrl: string;
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
  progress: number;
  title: string;
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
  technologies: Technology[];
}

interface Project extends Base {
  title: string;
  _type: 'project';
  image: Image;
  imageUrl: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

interface Social extends Base {
  _type: 'social';
  title: string;
  url: string;
}
