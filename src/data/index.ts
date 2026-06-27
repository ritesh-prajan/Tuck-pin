import { Service, PricingClass, TrustBadge as TrustBadgeType, Step, Review, FaqItemType } from '../types';
import { CONFIG } from '../config';

export const services: Service[] = [
  {
    id: 'box-fold',
    name: 'Box Fold Pleating',
    price: 600,
    description: 'Classic, sharp folds. Perfect for regular silk and heavy sarees, ensuring an elegant drape on your shoulders.',
    category: 'pleating',
    meta: 'Everyday Wear',
  },
  {
    id: 'hanger-fold',
    name: 'Hanger Fold Pleating',
    price: 700,
    description: 'Creased and stored safely on hangers for near-instant wardrobe draping with minimal wrinkles.',
    category: 'pleating',
    meta: 'Easy Wardrobe',
  },
  {
    id: 'bridal-drape',
    name: 'Bridal Draping & Pleating',
    price: 2000,
    description: 'Double-pinned ultra-crisp custom pleats with priority handling. Courier to us first, returned pristine for your big day.',
    category: 'bridal',
    meta: 'Wedding Priority',
  },
  {
    id: 'bridal-combo',
    name: 'Bridal Sister & Mother Combo',
    price: 2500,
    description: 'Inclusive celebration package for 2 sarees. Perfect for the bridal sister or mother drapes with double-locked heavy silk pleat priority.',
    category: 'bridal',
    meta: '2 Saree Special',
  },
  {
    id: 'designer-drape',
    name: 'Celebrity & Designer Drape',
    price: 3000,
    description: 'Replicate any highly popular modern Bollywood drape or designer tuck style with absolute precision.',
    category: 'celebrity',
    meta: 'Designer Red Carpet',
  },
];

export const pricingClasses: PricingClass[] = [
  {
    tier: 1,
    name: 'Recorded Sessions',
    price: 600,
    details: [
      '6 step-by-step master videos',
      'Watch & learn at your own pace',
      'Lifetime digital replay access',
      'Covers cotton & synthetic drapes',
    ],
  },
  {
    tier: 2,
    name: 'Live Sessions',
    price: 1899,
    offerPrice: 999,
    details: [
      'Online or In-person workshop',
      'Live interaction + Q&A',
      'Interactive real-time correction',
      'Mastering shoulder & hip pleat ratios',
    ],
  },
  {
    tier: 3,
    name: 'Hands-On Practice',
    price: 3000,
    offerPrice: 1499,
    isPopular: true,
    details: [
      'Practice side-by-side with experts',
      'Most preferred & high outcome',
      'Feedback on drape tightening',
      'Special certificate of wrapping',
    ],
  },
];

export const badges: TrustBadgeType[] = [
  { id: '1', icon: 'Scissors', number: '500+', label: 'Sarees Pleated' },
  { id: '2', icon: 'Zap', number: '24 Hours', label: 'Fast Delivery' },
  { id: '3', icon: 'Truck', number: 'Safe Doorstep', label: 'Courier & Dunzo' },
  { id: '4', icon: 'Crown', number: 'Bridal Prep', label: 'Chennai Favorites' },
  { id: '5', icon: 'GraduationCap', number: 'Professional', label: 'Expert Instructors' },
];

export const pleatingSteps: Step[] = [
  {
    number: 1,
    title: 'Drop Off or Schedule Pickup',
    description: 'Bring your saree to our Chennai studio or order a local Dunzo/courier to ship it to our location.',
    type: 'pleating',
  },
  {
    number: 2,
    title: 'Fill the Booking Form',
    description: 'Provide your name, saree fabrics, and your custom waist, pallu and shoulder measurements.',
    type: 'pleating',
  },
  {
    number: 3,
    title: 'Expert Pleating',
    description: 'Our experienced staff iron, fold, and secure your saree with professional pleat-pinning.',
    type: 'pleating',
  },
  {
    number: 4,
    title: 'Quality Check',
    description: 'Every crease and pin is cross-verified against measurements before packaging.',
    type: 'pleating',
  },
  {
    number: 5,
    title: 'Delivered Back to You',
    description: 'Delivered directly back to your doorstep ready to slip on. Wear it under 3 minutes flat!',
    type: 'pleating',
  },
];

export const classesSteps: Step[] = [
  {
    number: 1,
    title: 'Choose Your Tier',
    description: 'Select between recorded vlogs, live digital webinars, or private hands-on studio practices.',
    type: 'classes',
  },
  {
    number: 2,
    title: 'Fill the Class Form',
    description: 'We will secure your date slot and provide custom links or studio directions over WhatsApp.',
    type: 'classes',
  },
  {
    number: 3,
    title: 'Learn & Drape',
    description: 'Learn step-setting, pinning angles, and saree weight distribution from certified experts.',
    type: 'classes',
  },
];

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Deepa Ramanathan',
    stars: 5,
    text: 'Tuck & Pin completely transformed my wedding morning! The box fold pleating was so pristine; it stayed tightly locked in place through both muhurtham and non-stop photography. Absolute lifesaver!',
    date: 'June 2026',
  },
  {
    id: 'r2',
    name: 'Swetha Chandran',
    stars: 5,
    text: 'Mastered the saree drape in just 30 minutes! The Level 3 hands-on session is incredible. Having an expert correct my pin grips made all the difference.',
    date: 'May 2026',
  },
  {
    id: 'r3',
    name: 'Meenakshi Iyer',
    stars: 5,
    text: 'As an elderly woman, handling heavy pure silks alone has become tricky. The Dunzo courier pickup and hanger-folded delivery returned my sarees ready to wear instantly. So convenient.',
    date: 'April 2026',
  },
  {
    id: 'r4',
    name: 'Kavitha S.',
    stars: 5,
    text: 'Super efficient service! Opted for the 5-hour urgent delivery for a last-minute office event. Got back beautifully pleated silk georgette before the conference started.',
    date: 'March 2026',
  },
];

export const faqs: FaqItemType[] = [
  {
    question: 'How long does pleating take?',
    answer: `Standard turnaround is less than 24 hours (1 day) for up to 2 sarees. More than 2 sarees takes approximately half a day per item. We also offer active urgent service dispatch within 5 hours for an additional ₹${CONFIG.urgentPrice}.`,
  },
  {
    question: 'Can I drop off my saree?',
    answer: `Absolutely! You can drop off your sarees at our Chennai studio near coordinates ${CONFIG.locationCoords}, or send them over via courier/Dunzo.`,
  },
  {
    question: 'Do you handle delicate silk sarees?',
    answer: 'Yes. Kanjivaram silk, heavy brocades, delicate organza, and chiffons are our specialty. We treat every saree with premium careful ironing and safety-lock pin guards to prevent tear or fabric stress.',
  },
  {
    question: 'How do I track my order?',
    answer: `Once we receive your saree, our team sends instant confirmation alerts over WhatsApp. You can message us anytime at ${CONFIG.whatsappDisplay} for real-time status updates.`,
  },
  {
    question: 'What if my saree gets damaged?',
    answer: 'We maintain zero-damage records over 500+ pleated items. Our technicians use state-of-the-art temperature-controlled styling plates and rounded-tip needle pins that glide around silk fibres without snagging.',
  },
];

export interface FaqSection {
  title: string;
  icon: string;
  faqs: { question: string; answer: string }[];
}

export const detailedFaqs: FaqSection[] = [
  {
    title: 'Ordering & Booking',
    icon: 'package',
    faqs: [
      {
        question: 'Do I need to book in advance or can I walk in?',
        answer: 'While we do accept walk-ins during early morning slots, we highly recommend booking in advance through our online platform to guarantee your slot. This enables our experts to prepare alignment guards and maintain a safe, prompt turnaround.'
      },
      {
        question: "Can I book for someone else (e.g. my mother's saree)?",
        answer: "Absolutely! You can provide their details, waists, and pallu lengths in our Booking Form. We will prepare the pre-pleated drape specifically tailored to their measurements."
      },
      {
        question: 'How do I know my booking was confirmed?',
        answer: 'Once you submit your booking form on our website, our team will process the details and send a manual confirmation message directly to your WhatsApp with your pickup or drop-off slot.'
      },
      {
        question: 'Can I cancel or reschedule my order?',
        answer: 'Yes, you can cancel or reschedule up to 12 hours before your scheduled drop-off slot. Simply message us on WhatsApp with your name and order details, and we will update it immediately without any penalty.'
      },
      {
        question: 'What if I made a mistake in my measurements?',
        answer: `Do not worry! If you notice any error in the submitted sizes, just ping us on WhatsApp at ${CONFIG.whatsappDisplay}. Since our experts review each order and fabric compatibility before final iron-fittings, we can easily update the dimensions.`
      }
    ]
  },
  {
    title: 'Measurements',
    icon: 'ruler',
    faqs: [
      {
        question: "What if I don't know how to take my measurements?",
        answer: "We provide step-by-step master diagrams right in our contact and booking pages. All you need is a simple tailor's tape. If you are still unsure, you can choose 'Courier' or 'Drop off' and we can help measure a pre-fitted saree size you send along as a model sample."
      },
      {
        question: 'Can I send the same measurements for multiple sarees?',
        answer: 'Yes, if they are for the same person. However, different fabrics (like stiff pure silks vs lightweight chiffons) drape slightly differently. Our masters adapt the pleat thickness to match the fabric weight using those same core numbers.'
      },
      {
        question: 'Do measurements change for different saree types?',
        answer: 'Your body measurements (like hip size and height) remain constant, but our master tuckers adapt the fold depth. Highly stiff fabrics require slightly wider box pleats, while flowy crepes get compact, cascading pleats.'
      },
      {
        question: "What if I'm between sizes?",
        answer: 'We highly recommend selecting the larger size option or adding a custom note. Saree drapes are highly versatile, and a slightly generous pleat length is always easier to adjust during drapes.'
      }
    ]
  },
  {
    title: 'Saree Types & Handling',
    icon: 'scissors',
    faqs: [
      {
        question: 'Do you pleat chiffon and georgette sarees?',
        answer: 'Yes! We specialize in lightweight silks, organzas, tissue, chiffons, and georgettes. We employ specific styling plates and temperature-controlled irons to keep delicate fabrics pristine with durable crisp folds.'
      },
      {
        question: 'Can you handle very heavy Kanjivaram silks?',
        answer: 'Absolutely. Kanjivaram pure silks and heavy brocades are our main expertise. We utilize specialized rounded-tip needle pins that glide gently between weaving fibers without pulling threads or causing damage.'
      },
      {
        question: 'What about sarees with heavy zari borders?',
        answer: 'Heavy zari embellishment requires specific box-fold alignments. Our technicians fold the border strategically so that the gorgeous zari pattern lies flat and visible, preventing unwanted bunching at your shoulder drape.'
      },
      {
        question: 'Do you pleat pre-stitched or readymade sarees too?',
        answer: "Our service is focused on standard sarees. We pre-pleat, iron, and double-lock them with safety pins so you can slip them on in under 3 minutes, but without permanently cutting or tailoring your precious fabric."
      },
      {
        question: "Can I send a saree that's already been worn and washed?",
        answer: 'Yes, you can. We ask that the saree be clean and free of excessive wrinkles. We perform an initial steam press before pleating to make sure the folds lock in safely.'
      }
    ]
  },
  {
    title: 'Delivery & Pickup',
    icon: 'truck',
    faqs: [
      {
        question: 'What courier services do you use?',
        answer: 'For deliveries within Chennai, we primarily use Dunzo, Porter, or local courier services. For orders outside Chennai or within Tamil Nadu, we ship using safe ST Courier or Professional Courier.'
      },
      {
        question: 'Is there a minimum order for home pickup?',
        answer: 'There is no minimum order! You can schedule a pickup even for a single saree. Delivery charges are calculated dynamically based on your distance from our Chennai studio location.'
      },
      {
        question: 'Can I track my saree during transit?',
        answer: 'Yes. For Dunzo and Porter drop-offs, we share the live tracking link over WhatsApp the moment our runner starts. For traditional couriers, we provide tracking consignment numbers instantly.'
      },
      {
        question: 'What if my saree gets lost in courier?',
        answer: 'We take extreme care in coordinating with trusted delivery runners. While transit is third-party, we pack every saree in waterproof, sealed security wrappers to ensure maximum safety during the journey.'
      },
      {
        question: 'Do you deliver outside Chennai?',
        answer: 'Yes! We offer delivery across all districts of Tamil Nadu and neighboring states. You can courier your sarees to our Chennai studio, and we will package and return them via reliable postal/courier partners.'
      }
    ]
  },
  {
    title: 'Pricing & Payment',
    icon: 'credit-card',
    faqs: [
      {
        question: 'Are there bulk discounts for more than 5 sarees?',
        answer: 'Yes, we offer special rates for bulk orders of 5 or more sarees! Please contact us over WhatsApp before booking so we can calculate a tailored discount code for your celebration.'
      },
      {
        question: 'When exactly do I pay — before or after?',
        answer: 'No advance is required. You pay only when the pre-pleated, finished sarees are back in your physical hands. We collect payments at the moment of delivery.'
      },
      {
        question: 'Do you accept credit/debit cards?',
        answer: 'For doorstep deliveries and studio walk-ins, we prefer GPay, PhonePe, Paytm UPI, or cash. We do not support card terminals directly at our styling studio currently.'
      },
      {
        question: "Is there a refund if I'm not satisfied?",
        answer: 'We strive for 100% satisfaction and take ultimate pride in our zero-damage, perfect drape records. If you experience any fitting issues, we offer free adjustments within 48 hours to make it perfect.'
      }
    ]
  },
  {
    title: 'Classes Specific',
    icon: 'graduation-cap',
    faqs: [
      {
        question: 'Do I need any prior experience for the hands-on class?',
        answer: 'Absolutely not! Our academy courses are designed for total beginners. We guide you from basic pleating angles, fabric handling, and pinning secrets to advanced drapes step-by-step.'
      },
      {
        question: 'How long is each class session?',
        answer: 'Our Live Interactive and Hands-On Sessions run for approximately 90 minutes to 2 hours, offering plenty of time for personal styling questions, practice, and real-time posture corrections.'
      },
      {
        question: 'Can I attend the live class from outside Chennai?',
        answer: 'Yes! Our Tier 2 interactive webinars are fully online and hosted via Zoom, letting you learn and practice live from the comfort of your home anywhere globally.'
      },
      {
        question: 'Will I receive any materials or kit for the hands-on class?',
        answer: 'Yes. Our Tier 3 hands-on session includes a helpful draping kit featuring premium safety pins, alignment markers, step cards, and professional certificates of styling.'
      },
      {
        question: 'Is the recorded session available in Tamil?',
        answer: 'Yes, our recorded master videologues are fully available with bilingual instruction tracks in both Tamil and English to ensure simple and direct learning.'
      }
    ]
  },
  {
    title: 'Bridal & Special',
    icon: 'heart',
    faqs: [
      {
        question: 'How far in advance should I book for bridal draping?',
        answer: 'We highly recommend booking your wedding slots at least 2 to 4 weeks in advance. Wedding season calendars fill up quickly, and advance slots guarantee immediate courier processing.'
      },
      {
        question: 'Can you replicate a specific celebrity drape I saw online?',
        answer: 'Yes, that is our specialty! You can share screenshots of any popular celebrity drape or modern designer look on WhatsApp, and our expert masters will pre-pleat the saree to replicate it perfectly.'
      },
      {
        question: 'Do you provide saree pins and accessories with bridal service?',
        answer: 'Yes. Every bridal saree drape we return includes premium rust-proof steel pins, alignment locking guards, and premium garment boxes, so you don’t have to worry about buying extras.'
      },
      {
        question: 'Can you drape for multiple bridesmaids / family members?',
        answer: 'Yes, we specialize in complete family combinations! Our curated "Bridal Sister & Mother Combo" packages cover multiple sarees with priority styling for the entire bridal party.'
      }
    ]
  }
];
