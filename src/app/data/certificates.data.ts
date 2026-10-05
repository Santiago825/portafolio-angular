import { CertificateImage, ComplementaryGroup } from '../models/portfolio.models';

export const CERTIFICATE_IMAGES: readonly CertificateImage[] = [
  {
    src: 'images/certs/cert-1.jpg',
    alt: 'Certificate of Introduction to C# with .NET 3.1 Course, 2026',
    width: 1400,
    height: 1050,
  },
  {
    src: 'images/certs/cert-2.jpg',
    alt: 'Certificate of .NET API Course, 2026',
    width: 1400,
    height: 1050,
  },
  {
    src: 'images/certs/cert-3.jpg',
    alt: 'Certificate of Cursor Course, 2026',
    width: 1400,
    height: 1050,
  },
  {
    src: 'images/certs/cert-4.jpg',
    alt: 'Certificate of Introduction to Testing with JavaScript Course, 2026',
    width: 1400,
    height: 1050,
  },
  {
    src: 'images/certs/cert-5.jpg',
    alt: 'Certificate of Software Testing Fundamentals Course, 2026',
    width: 1400,
    height: 1050,
  },
  {
    src: 'images/certs/cert-6.webp',
    alt: 'Certificate of participation in the poster exhibition at the 6th International Engineering Congress, 2019',
    width: 1400,
    height: 1050,
  },
  {
    src: 'images/certs/cert-7.webp',
    alt: 'Misión TIC 2022 diploma: Fundamentals of Python Programming',
    width: 1400,
    height: 977,
  },
  {
    src: 'images/certs/cert-8.webp',
    alt: 'Misión TIC 2022 diploma: programming skills with an emphasis on Web Development',
    width: 1400,
    height: 977,
  },
  {
    src: 'images/certs/cert-9.webp',
    alt: 'Misión TIC 2022 diploma: Basic Programming in Java',
    width: 1400,
    height: 977,
  },
  {
    src: 'images/certs/cert-10.webp',
    alt: 'Misión TIC 2022 diploma: Software Development',
    width: 1400,
    height: 977,
  },
  {
    src: 'images/certs/cert-11.webp',
    alt: 'SCRUMstudy Scrum Fundamentals Certified (SFC) certificate',
    width: 1400,
    height: 1081,
  },
];

export const COMPLEMENTARY: readonly ComplementaryGroup[] = [
  {
    year: 2022,
    items: [
      {
        title: 'Scrum Fundamentals Certified (SFC), SCRUMstudy',
        place: 'Bogotá',
        url: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=963317',
      },
      {
        title: 'Diploma in programming skills with an emphasis on Web Development, Misión TIC',
        place: 'Bogotá',
        url: 'https://certificadomisionticutp.com/apiv1/public/docs/4A/_1012453280-.pdf',
      },
      {
        title: 'Diploma in Fundamentals of Programming in Java, Misión TIC',
        place: 'Bogotá',
        url: 'https://certificadomisionticutp.com/apiv1/public/docs/2/_1012453280-.pdf',
      },
      {
        title: 'Diploma in Fundamentals of Python Programming, Misión TIC',
        place: 'Bogotá',
        url: 'https://certificadomisionticutp.com/apiv1/public/docs/1/_1012453280-.pdf',
      },
    ],
  },
  {
    year: 2019,
    items: [
      {
        title: 'Seedbed institution meeting: second place for a mobile app for physical/mental recovery',
        place: 'Bogotá',
        url: 'https://drive.google.com/file/d/1MQz1D5DFpTX0wo7tIBZRJmFXTn0KW8sP/view?usp=share_link',
      },
      {
        title: 'Article in Ingenium (engineering faculty magazine): mobile app for physical/mental recovery',
        place: 'Bogotá',
        url: 'http://revistas.usbbog.edu.co/index.php/Ingenium/article/view/4943',
      },
      {
        title: 'Poster exhibition at the 6th International Engineering Congress',
        place: 'Bogotá',
        url: 'https://drive.google.com/file/d/1dG_NnIep5UmANYjyOkrOxY_WmPsv99Gd/view?usp=share_link',
      },
    ],
  },
];
