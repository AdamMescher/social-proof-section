import anne from '../assets/images/image-anne.jpg';
import colton from '../assets/images/image-colton.jpg';
import irene from '../assets/images/image-irene.jpg';

const headshot = {
  anne,
  colton,
  irene,
};

const testimonials = [
  {
    name: 'Colton Smith',
    review:
      'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
    headshot: headshot.colton,
  },
  {
    name: 'Irene Roberts',
    review:
      'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delievery.',
    headshot: headshot.irene,
  },
  {
    name: 'Anne Wallace',
    review:
      'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
    headshot: headshot.anne,
  },
];

export default testimonials;
