import React from "react";
import { FaUniversity } from "react-icons/fa";

const GRADIENT = {
  from: "#F5BD4D",
  to: "#F89222",
  bg: "bg-gradient-to-r from-[#F5BD4D] to-[#F89222]",
  text: "text-[#F5BD4D] hover:text-[#F89222]",
  ring: "ring-[#F5BD4D]/30",
  borderHover: "hover:border-[#F89222]/50",
};

const EducationTimelineItem = ({
  year,
  title,
  subtitle,
  description = "",
  isLast = false,
  icon: CustomIcon = null,
}) => {
  const Icon = CustomIcon || FaUniversity;

  return (
    <div className="relative pl-10 pb-12 last:pb-0 group">
      {/* Vertical connecting line */}
      {!isLast && (
        <div className="absolute left-[18px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-[#F5BD4D]/40 to-[#F89222]/20" />
      )}

      {/* Circle + Icon */}
      <div
        className={`
        absolute left-0 top-1.5 flex h-10 w-10 items-center justify-center 
        rounded-full ${GRADIENT.bg} text-white 
        ring-8 ring-base-100/80 transition-transform group-hover:scale-110
      `}
      >
        <Icon className="h-5 w-5 drop-shadow-md" />
      </div>

      {/* Card */}
      <div
        className={`
        rounded-2xl border border-base-300/40 bg-base-200/50 
        p-6 shadow-md backdrop-blur-sm
        transition-all duration-300
        group-hover:${GRADIENT.borderHover}
        group-hover:shadow-[0_8px_30px_-6px_rgba(248,146,34,0.25)]
        group-hover:-translate-y-1
      `}
      >
        {/* Year badge */}
        <div
          className={`
          mb-4 inline-flex items-center rounded-full 
          ${GRADIENT.bg} px-4 py-1.5 text-sm font-semibold text-white 
          shadow-sm
        `}
        >
          {year}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-base-content group-hover:bg-gradient-to-r group-hover:from-[#F5BD4D] group-hover:to-[#F89222] group-hover:bg-clip-text group-hover:text-transparent transition-all">
          {title}
        </h3>

        {/* Subtitle */}
        <p className="mb-4 text-lg font-medium text-[#F89222]/90">{subtitle}</p>

        {/* Description */}
        {description && (
          <p className="text-base-content/80 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
};

/**
 * Full Timeline
 */
export default function TimelineDaisy({ items = [] }) {
  if (!items?.length) {
    return (
      <div className="alert alert-info max-w-2xl mx-auto">
        No education entries added yet
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl py-10">
      <div className="relative space-y-1">
        {items.map((item, index) => (
          <EducationTimelineItem
            key={`${item.title}-${item.year}`}
            year={item.year}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            isLast={index === items.length - 1}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
