import { IServices, ServiceCard, services } from '@/entities/services';
import React from 'react';
import { CurrencyToggle } from './CurrencyToggle';

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative z-10 -mt-4 py-4 md:-mt-6">
      <CurrencyToggle />

      <div className="mb-16 grid gap-5 px-4 md:mb-20 md:grid-cols-2 md:gap-6 md:px-10 lg:grid-cols-3 lg:px-14">
        {services.map((service: IServices, index: number) => (
          <ServiceCard key={index} Service={service} />
        ))}
      </div>
    </section>
  );
};
