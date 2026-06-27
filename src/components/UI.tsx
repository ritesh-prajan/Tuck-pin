/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import * as Lucide from 'lucide-react';
import { motion } from 'motion/react';
import { Service, PricingClass, Step, Review, TrustBadge as TrustBadgeType, FaqItemType } from '../types';
import { ZariGlint, useZariGlint, ZariGlintButton } from './ZariGlint';

/**
 * High-fidelity vector rendition of the Tuck & Pin Monogram Logo
 * Based on the serif TP stem + elegant cascading pleat curves.
 */
export function LogoMonogram({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <img
      src="https://i.ibb.co/PzgKfvZ0/Chat-GPT-Image-Jun-22-2026-11-16-54-AM.png"
      alt="Tuck & Pin Logo"
      referrerPolicy="no-referrer"
      className={`${className} object-contain transition-transform duration-300 hover:scale-105`}
    />
  );
}

/**
 * Horizontal Full Lockup Logo (Monogram + Text)
 */
export function LogoLockup({ showTagline = true }: { showTagline?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <LogoMonogram className="w-10 h-10 select-none" />
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold tracking-wide text-brand-plum leading-none">
          TUCK & PIN
        </span>
        {showTagline && (
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-brand-rose leading-none mt-1">
            Saree Pleating
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * Reusable SectionTitle Component
 * Plum heading with an elegant rose pink underline bar
 */
export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col items-center text-center px-4 mb-8">
      <h2 className="font-serif text-3xl font-semibold text-brand-plum tracking-wide">
        {title}
      </h2>
      <div className="w-16 h-[3px] bg-brand-rose mt-3 rounded-full" />
      {subtitle && (
        <p className="font-sans text-sm text-neutral-mid mt-3 max-w-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/**
 * Custom CTAButton Component
 * Supports primary (plum fill) and secondary (outline) variants
 */
export function CTAButton({
  label,
  onClick,
  variant = 'primary',
  fullWidth = false,
  icon,
  disabled = false,
  className = '',
}: {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'danger';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
}) {
  const { isGlinting, triggerGlint, handleAnimationEnd } = useZariGlint();

  const handleClick = () => {
    if (disabled) return;
    triggerGlint();
    onClick();
  };

  const baseClasses =
    'relative overflow-hidden inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-300 py-3.5 px-6 rounded-full cursor-pointer select-none border shadow-xs active:scale-[0.98] outline-none disabled:opacity-50 disabled:cursor-not-allowed';

  let variantClasses = '';
  if (variant === 'primary') {
    variantClasses = 'bg-brand-plum text-white border-brand-plum hover:bg-[#521337] hover:border-[#521337]';
  } else if (variant === 'secondary') {
    variantClasses = 'bg-transparent text-brand-plum border-brand-plum hover:bg-brand-blush/30';
  } else if (variant === 'accent') {
    variantClasses = 'bg-brand-rose text-white border-brand-rose hover:bg-[#af4e77] hover:border-[#af4e77]';
  } else {
    variantClasses = 'bg-white text-neutral-dark border-neutral-350 hover:bg-neutral-50';
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <ZariGlint
        isActive={isGlinting}
        onAnimationEnd={handleAnimationEnd}
        variant="full"
      />
      {icon && <span className="mr-2 relative z-10">{icon}</span>}
      <span className="relative z-10">{label}</span>
    </button>
  );
}

/**
 * Reusable ServiceCard Component
 * Displays service details with clean spacing and subtle shadows
 */
export function ServiceCard({
  service,
  onBook,
  actionLabel = 'Book This Service',
}: {
  service: Service;
  onBook: (serviceId: string) => void;
  actionLabel?: string;
}) {
  // Select icon based on service properties
  let iconNode = <Lucide.Scissors className="h-6 w-6 text-brand-plum" />;
  if (service.category === 'bridal') {
    iconNode = <Lucide.Crown className="h-6 w-6 text-brand-rose" />;
  } else if (service.category === 'celebrity') {
    iconNode = <Lucide.Sparkles className="h-6 w-6 text-brand-rose" />;
  } else if (service.id.includes('hanger')) {
    iconNode = <Lucide.Shirt className="h-6 w-6 text-brand-plum" />;
  } else if (service.id.includes('box')) {
    iconNode = <Lucide.FolderHeart className="h-6 w-6 text-brand-plum" />;
  }

  return (
    <div
      id={`service-card-${service.id}`}
      className="bg-white rounded-[32px] p-6 border border-[#F2D6E4] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between h-full min-w-[260px]"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="bg-brand-blush/40 p-3 rounded-xl inline-block">
            {iconNode}
          </div>
          <div className="text-right">
            <span className="font-serif text-2xl font-bold text-brand-plum">
              ₹{service.price}
            </span>
            {service.meta && (
              <p className="text-[10px] text-brand-rose uppercase tracking-wider font-semibold">
                {service.meta}
              </p>
            )}
          </div>
        </div>

        <h3 className="font-serif text-xl font-bold text-neutral-dark mb-2">
          {service.name}
        </h3>
        <p className="font-sans text-xs text-neutral-mid leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      <ZariGlintButton
        variant="full"
        className="relative overflow-hidden inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-300 py-3.5 px-6 rounded-full cursor-pointer select-none border shadow-xs active:scale-[0.98] outline-none bg-brand-plum text-white border-brand-plum hover:bg-[#521337] hover:border-[#521337] w-full"
        onClick={() => onBook(service.id)}
      >
        <span className="relative z-10">{actionLabel}</span>
      </ZariGlintButton>
    </div>
  );
}

/**
 * Reusable PricingCard Component (Used in Classes Page)
 * Displays tier name, price, offer price badge, features list, and CTA
 */
export function PricingCard({
  pricingClass,
  onEnquire,
}: {
  pricingClass: PricingClass;
  onEnquire: () => void;
}) {
  const isBestValue = pricingClass.isPopular;

  return (
    <div
      id={`pricing-card-tier-${pricingClass.tier}`}
      className={`bg-white rounded-[32px] p-6 border relative transition-all duration-300 flex flex-col justify-between h-full ${
        isBestValue
          ? 'border-brand-plum shadow-md scale-[1.01] ring-2 ring-brand-plum/5'
          : 'border-[#F2D6E4] shadow-xs hover:shadow-md'
      }`}
    >
      <div>
        {/* Ribbon badges in a responsive container to avoid overlapping on mobile */}
        {(isBestValue || pricingClass.offerPrice) && (
          <div className="flex flex-wrap gap-1.5 -mt-3 mb-4 z-10">
            {isBestValue && (
              <span className="bg-brand-plum text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-xs">
                Most Popular
              </span>
            )}
            {pricingClass.offerPrice && (
              <span className="bg-brand-rose text-white text-[9px] uppercase font-bold tracking-widest px-3 py-1 rounded-full shadow-xs">
                Launching Offer
              </span>
            )}
          </div>
        )}

        <div className="flex justify-between items-start mb-4 pt-1">
          <div>
            <span className="text-xs uppercase font-semibold text-brand-rose tracking-wider">
              Tier {pricingClass.tier}
            </span>
            <h3 className="font-serif text-2xl font-bold text-neutral-dark mt-0.5">
              {pricingClass.name}
            </h3>
          </div>
        </div>

        <div className="flex items-baseline gap-2 mb-6 bg-brand-blush/25 p-3 rounded-xl border border-brand-blush/30">
          {pricingClass.offerPrice ? (
            <>
              <span className="font-serif text-3xl font-extrabold text-brand-plum">
                ₹{pricingClass.offerPrice}
              </span>
              <span className="text-xs text-neutral-mid line-through">
                ₹{pricingClass.price}
              </span>
            </>
          ) : (
            <span className="font-serif text-3xl font-extrabold text-brand-plum">
              ₹{pricingClass.price}
            </span>
          )}
          <span className="text-neutral-mid text-xs font-medium ml-1">/ seat</span>
        </div>

        <ul className="space-y-3 mb-8">
          {pricingClass.details.map((detail, index) => (
            <li key={index} className="flex items-start text-xs text-neutral-mid leading-snug">
              <Lucide.Check className="h-4 w-4 text-brand-plum shrink-0 mr-2 mt-0.5" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>

      <ZariGlintButton
        variant={isBestValue ? 'full' : 'line'}
        className={`relative overflow-hidden inline-flex items-center justify-center font-sans font-medium text-sm transition-all duration-300 py-3.5 px-6 rounded-full cursor-pointer select-none border shadow-xs active:scale-[0.98] outline-none w-full ${
          isBestValue
            ? 'bg-brand-plum text-white border-brand-plum hover:bg-[#521337] hover:border-[#521337]'
            : 'bg-transparent text-brand-plum border-brand-plum hover:bg-brand-blush/30'
        }`}
        onClick={onEnquire}
      >
        <span className="mr-2 relative z-10">
          <Lucide.MessageSquareShare className="h-4 w-4" />
        </span>
        <span className="relative z-10">Enquire Now</span>
      </ZariGlintButton>
    </div>
  );
}

/**
 * Reusable TrustBadge Component
 * Displays custom numbers and labels for beautiful micro-credibility highlights
 */
export function TrustBadge({ badge }: { badge: TrustBadgeType }) {
  const getLucideIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scissors':
        return <Lucide.Scissors className="h-5 w-5 text-brand-plum" />;
      case 'Zap':
        return <Lucide.Zap className="h-5 w-5 text-brand-plum" />;
      case 'Truck':
        return <Lucide.Truck className="h-5 w-5 text-brand-plum" />;
      case 'Crown':
        return <Lucide.Crown className="h-5 w-5 text-brand-plum" />;
      case 'GraduationCap':
        return <Lucide.GraduationCap className="h-5 w-5 text-brand-plum" />;
      default:
        return <Lucide.HelpCircle className="h-5 w-5 text-brand-plum" />;
    }
  };

  return (
    <div className="flex items-center gap-3.5 bg-white border border-[#F2D6E4] py-3.5 px-5 rounded-[20px] min-w-[210px] shrink-0 shadow-xs">
      <div className="bg-brand-blush/40 p-2.5 rounded-xl flex items-center justify-center shrink-0">
        {getLucideIcon(badge.icon)}
      </div>
      <div className="flex flex-col">
        <span className="font-serif text-lg font-bold text-brand-plum leading-tight">
          {badge.number}
        </span>
        <span className="font-sans text-xs text-[#6B6B6B] font-medium leading-none mt-1">
          {badge.label}
        </span>
      </div>
    </div>
  );
}

/**
 * Reusable StepCard Component for "How It Works"
 */
export function StepCard({ step }: { step: Step }) {
  return (
    <div className="flex gap-4 items-start bg-white p-5 rounded-[32px] border border-[#F2D6E4] shadow-xs hover:border-brand-rose/20 transition-all duration-300">
      <div className="flex items-center justify-center w-9 h-9 bg-brand-plum text-white font-serif rounded-full shrink-0 font-bold text-sm shadow-sm">
        {step.number}
      </div>
      <div>
        <h4 className="font-serif text-lg font-bold text-brand-plum mb-1.5 leading-tight">
          {step.title}
        </h4>
        <p className="font-sans text-[13px] text-neutral-mid leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

/**
 * Reusable ReviewCard Component
 */
export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-[32px] p-5 border border-[#F2D6E4] shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-serif text-base font-bold text-brand-plum">
            {review.name}
          </h4>
          {review.date && (
            <span className="text-[10px] text-neutral-mid font-medium">
              {review.date}
            </span>
          )}
        </div>

        <div className="flex gap-0.5 text-brand-rose mb-3.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Lucide.Star
              key={i}
              className={`h-4.5 w-4.5 ${
                i < review.stars ? 'fill-brand-rose' : 'text-neutral-200'
              }`}
            />
          ))}
        </div>

        <p className="font-sans text-xs text-[#4A4A4A] leading-relaxed italic">
          "{review.text}"
        </p>
      </div>

      {review.videoThumbnail && (
        <div className="mt-4 relative group rounded-xl overflow-hidden aspect-video border border-brand-blush/30">
          <img
            src={review.videoThumbnail}
            alt="Customer review video thumbnail"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-plum/10 group-hover:bg-brand-plum/20 transition-colors flex items-center justify-center">
            <div className="bg-white/90 p-2.5 rounded-full shadow-md text-brand-plum hover:scale-110 transition-transform">
              <Lucide.Play className="h-4 w-4 fill-brand-plum" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Reusable FAQItem Accordion Component
 */
export function FAQItem({ item }: { item: FaqItemType }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-blush/30 last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-1 flex justify-between items-center text-left focus:outline-none focus:text-brand-plum transition-colors group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-base font-semibold text-neutral-dark group-hover:text-brand-plum transition-colors pr-4">
          {item.question}
        </span>
        <div className="p-1 rounded-lg bg-brand-blush/30 text-brand-plum shrink-0">
          {isOpen ? (
            <Lucide.ChevronUp className="h-4.5 w-4.5" />
          ) : (
            <Lucide.ChevronDown className="h-4.5 w-4.5" />
          )}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="font-sans text-xs text-neutral-mid leading-relaxed pb-4 px-1">
          {item.answer}
        </p>
      </motion.div>
    </div>
  );
}
