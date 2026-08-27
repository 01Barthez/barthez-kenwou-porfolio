import type { ITestimonial } from '../model/testimonial.types';

/** Testimonials safe to show on the public site. */
export function isPublicTestimonial(t: ITestimonial): boolean {
  if (t.isPublished === false) return false;
  if (t.status === 'pending' || t.status === 'rejected') return false;
  return t.isPublished === true || t.status === 'approved' || t.status == null;
}
