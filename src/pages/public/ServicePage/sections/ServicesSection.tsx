import { IServices, ServiceCard, services } from '@/entities/services';
import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <section className='bg-background relative z-1 py-4'>
      <div className="px-4 md:px-10 lg:px-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services &&
          services.map((service: IServices, index: number) => {
            return <ServiceCard key={index} Service={service} />;
          })}
      </div>
    </section>
  );
};
