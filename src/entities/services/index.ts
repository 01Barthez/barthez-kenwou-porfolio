export type { IServices } from './model/service.types';
export { services } from './api/mock/services.mocks';
export { servicesApi } from './api/service.api';
export { ServiceSchema } from './model/service.schema';
export type { ServiceInput } from './model/service.schema';
export { useServiceCurrencyStore } from './model/useServiceCurrencyStore';
export { formatServicePrice, eurToXaf, EUR_TO_XAF } from './lib/currency';
export { AnimatedServicePrice } from './ui/AnimatedServicePrice';

// UI compoments
export { ServiceCard } from './ui/Servicecard.ui';
export { ServiceCard2 } from './ui/ServiceCard2.ui';
