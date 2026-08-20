export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

const awardImages = [
  
  '1000286248.jpg',
  'ga1.jpg',
  'ga2.jpg',
  'ga3.jpg',
  'ga4.jpg',
  '1000286164.jpg',
  '1000286240.jpg',
];

const academyImages = [
  '1000286167.jpg',
  '1000286170.jpg',
  '1000286173.jpg',
  '1000286176.jpg',
  '1000286181.jpg',
  '1000286185.jpg',
  '1000286188.jpg',
  '1000286191.jpg',
  '1000286196.jpg',
  '1000286199.jpg',
  '1000286202.jpg',
  '1000286205.jpg',
  '1000286208.jpg',
  '1000286211.jpg',
  '1000286216.jpg',
  '1000286218.jpg',
  '1000286220.jpg',
  '1000286222.jpg',
  '1000286223.jpg',
  '1000286224.jpg',
  '1000286225.jpg',
  '1000286226.jpg',
  '1000286227.jpg',
  '1000286228.jpg',
  '1000286229.jpg',
  '1000286230.jpg',
  '1000286241.jpg',
  '1000286242.jpg',
  '1000286243.jpg',
  '1000286245.jpg',
  '1000286246.jpg',
  '1000286247.jpg',
  '1000286249.jpg',
  '1000286253.jpg',
  '1000286254.jpg',
  '1000286255.jpg',
  '1000286256.jpg',
  '1000286257.jpg',
  '1000286258.jpg',
  '1000286266.jpg',
  '1000286274.jpg',
  '1000286277.jpg',
  '1000286280.jpg',
];

export const awardItems: GalleryItem[] = awardImages.map((image) => ({
  src: `/images/award/${image}`,
  alt: 'Goonj Kathak Academy award ceremony',
  caption: 'Award ceremony · Indore',
}));

export const academyItems: GalleryItem[] = academyImages.map((image) => ({
  src: `/images/academy/${image}`,
  alt: 'Students learning dance at Goonj Kathak Academy',
  caption: 'Academy dance class',
}));