import { IServices, ServiceCard, services } from '@/entities/services';
import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
      {services &&
        services.map((service: IServices, index: number) => {
          return <ServiceCard key={index} Service={service} />;
        })}
    </div>
  );
};
