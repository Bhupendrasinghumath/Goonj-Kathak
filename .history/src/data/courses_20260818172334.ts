export type Course = {
  name: string;
  tagline: string;
  description: string;
  level: string;
  duration: string;
  image: string;
  featured?: boolean;
};

export const courses: Course[] = [
{
  name: 'Kathak',
  tagline: 'Our core discipline',
  description:
  'The full traditional syllabus — taal, tatkar footwork, hastak, chakkars, and abhinaya — taught in the guru–shishya tradition, from a beginner\'s first tihai to full stage compositions.',
  level: 'Beginner to advanced',
  duration: '2 classes / week · year-round',
  image: '/73e38787-881d-4026-8fa3-0fb4ced70a26.jpg',
  featured: true
},
{
  name: 'Semi Classical Dance',
  tagline: 'Classical grace, film music',
  description:
  'Kathak vocabulary set to contemporary and film compositions — expressive, lyrical, and stage-ready.',
  level: 'Age 8+',
  duration: '1 class / week',
  image: '/Classical.png'
},
{
  name: 'Folk Dance',
  tagline: 'Rhythms of India',
  description:
  'Garba, Ghoomar, Bhangra and more, taught in short seasonal batches for festivals and school events.',
  level: 'All ages',
  duration: '4–6 week batches',
  image: '/Folk.png'
},
{
  name: 'Wedding Choreography',
  tagline: 'For your big day',
  description:
  'Sangeet sets for couples, families and friends — rehearsed to a schedule that fits around the wedding.',
  level: 'No experience needed',
  duration: 'Custom sessions',
  image: '/Wedding.png'
}];