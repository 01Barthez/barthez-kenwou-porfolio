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
  FormLabel, 
  FormMessage 
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { contactSchema, type ContactFormValues } from '../model/contact.schema';
import { useLanguageStore } from '@/shared/state/useLanguageStore';
import { Button } from '@/shared/ui/button';
import { cn } from '@/shared/lib';

const WHATSAPP_NUMBER = "237655646688";

export const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguageStore();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    setIsSubmitted(true);
    
    const formattedMessage = `*Nouveau message de contact (Portfolio)*\n\n*Nom:* ${values.name}\n*Email:* ${values.email}\n*Sujet:* ${values.subject}\n\n*Message:*\n${values.message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedMessage)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSubmitted(false);
      form.reset();
    }, 1500);
  };

  return (
    <div className="relative">
      {isSubmitted && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-2xl border border-primary/20"
        >
          <HiOutlineCheckCircle className="h-6 w-6 animate-pulse" />
          <p className="font-bold text-sm">
            {language === 'fr' ? 'Redirection vers WhatsApp...' : 'Redirecting to WhatsApp...'}
          </p>
        </motion.div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider font-bold opacity-70">
                    {t('contact.form.name')}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John Doe" 
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all rounded-lg"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-[10px]" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider font-bold opacity-70">
                    {t('contact.form.email')}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="john@example.com" 
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-all rounded-lg"
                      {...field} 
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
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider font-bold opacity-70">
                  {t('contact.form.subject')}
                </FormLabel>
                <FormControl>
                  <Input 
                    placeholder={language === 'fr' ? 'Sujet de votre message' : 'Subject of your message'} 
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-all rounded-lg"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider font-bold opacity-70">
                  {t('contact.form.message')}
                </FormLabel>
                <FormControl>
                  <Textarea 
                    rows={6}
                    placeholder={language === 'fr' ? 'Décrivez votre projet...' : 'Describe your project...'} 
                    className="bg-background/50 border-border/50 focus:border-primary/50 transition-all rounded-lg min-h-[150px] resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage className="text-[10px]" />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={isSubmitted}
            className="w-full group rounded-lg h-10 text-sm font-bold tracking-wide cursor-pointer flex items-center justify-center bg-primary text-primary-foreground border border-primary/20 hover:bg-primary/90 transition-all disabled:cursor-not-allowed disabled:bg-primary/50 disabled:border-primary/10"
          >
            <HiOutlinePaperAirplane className={cn(
              "mr-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1",
              isSubmitted && "animate-ping"
            )} />
            {t('contact.form.send')}
          </Button>
        </form>
      </Form>
    </div>
  );
};
