import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { HiOutlinePaperAirplane, HiOutlineCheckCircle } from 'react-icons/hi2';
import { motion } from 'framer-motion';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/ui/form';
import { contactSchema, type ContactFormValues } from '../model/contact.schema';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/lib';
import { FloatingFillField } from './FloatingFillField.ui';

const WHATSAPP_NUMBER = '237655646688';

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitted(true);

    // Persist for the owner admin inbox (local CMS → future API)
    void import('@/features/admin-cms').then(({ useAdminCmsStore }) => {
      useAdminCmsStore.getState().addContactResponse({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
        status: 'new',
      });
    });

    const formattedMessage = `*Nouveau message de contact (Portfolio)*\n\n*Nom:* ${values.name}\n*Email:* ${values.email}\n*Sujet:* ${values.subject}\n\n*Message:*\n${values.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      form.reset();
    }, 1500);
  };

  return (
    <div className="relative flex h-full flex-col">
      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-sm border border-primary/20 bg-primary px-6 py-4 text-primary-foreground shadow-sm"
        >
          <HiOutlineCheckCircle className="h-4 w-4 animate-pulse" />
          <p className="text-sm font-bold">
            {language === 'fr' ? 'Redirection vers WhatsApp...' : 'Redirecting to WhatsApp...'}
          </p>
        </motion.div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex h-full flex-col gap-4"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <FloatingFillField
                      label={t('contact.form.name')}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      invalid={Boolean(fieldState.error)}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <FloatingFillField
                      label={t('contact.form.email')}
                      type="email"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      name={field.name}
                      invalid={Boolean(fieldState.error)}
                      ref={field.ref}
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <FloatingFillField
                    label={t('contact.form.subject')}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    invalid={Boolean(fieldState.error)}
                    ref={field.ref}
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field, fieldState }) => (
              <FormItem className="flex min-h-0 flex-1 flex-col">
                <FormControl>
                  <FloatingFillField
                    label={t('contact.form.message')}
                    multiline
                    rows={5}
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    name={field.name}
                    invalid={Boolean(fieldState.error)}
                    ref={field.ref}
                    className="flex-1"
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitted}
            className="mt-auto flex h-9 w-full cursor-pointer items-center justify-center rounded-sm border border-primary/20 bg-primary text-sm font-bold tracking-wide text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:border-primary/10 disabled:bg-primary/50"
          >
            {t('contact.form.send')}
            <HiOutlinePaperAirplane
              className={cn(
                'mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1',
                isSubmitted && 'animate-ping',
              )}
            />
          </Button>
        </form>
      </Form>
    </div>
  );
};
