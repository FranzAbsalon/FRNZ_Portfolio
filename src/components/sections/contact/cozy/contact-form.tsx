'use client';

import { useAction } from 'next-safe-action/hooks';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

import { TurnstileModal } from '@/components/sections/contact/_components/turnstile-modal';
import { LoaderCircleIcon } from 'lucide-react';
import { contactSubmit } from '@/app/actions';

import { FormError } from '@/components/sections/contact/_components/form-error';
import { FormSuccess } from '@/components/sections/contact/_components/form-success';

import {
  ContactForm as ContactFormType,
  ContactFormSchema
} from '@/lib/validators';
import { useState } from 'react';

import { contact } from '@/components/sections/contact/config';
import { toast } from 'sonner';

export default function ContactForm() {
  const form = useForm<ContactFormType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const { execute, result, status } = useAction(contactSubmit);
  const [isOpen, setIsOpen] = useState(false);

  // todo: probably refactor this, setIsOpen is not clean
  // values: ContactFormType
  async function onSubmit(values: ContactFormType) {
    if (process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === 'true') {
      setIsOpen(true);
    } else {
      const mailto =
        `mailto:${encodeURIComponent(contact.email)}` +
        `?subject=${encodeURIComponent('Contact Form Submission')}` +
        `&body=${encodeURIComponent(
          `Name: ${values.name}\nMessage: ${values.message}`
        )}`;
      window.location.href = mailto;
    }
  }

  async function onVerify(token?: string) {
    setIsOpen(false);
    if (!token) {
      toast.error(
        'Captcha validation failed. Please ensure the captcha is completed.',
        {
          position: 'bottom-center'
        }
      );
      return;
    }
    execute({ ...form.getValues(), token });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ex. John Francis Absalon"
                    disabled={status === 'executing'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="ex. jfabsalon@example.com"
                    disabled={status === 'executing'}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    disabled={status === 'executing'}
                    placeholder={
                      'Hello!\n\nThis is John Francis Absal. Just wanted to say hi!'
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormError message={result.serverError} />
          <FormSuccess message={result.data?.success} />

          <Button
            disabled={status === 'executing'}
            type="submit"
            className={'w-full'}
          >
            {status === 'executing' && (
              <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Submit
          </Button>
        </form>
      </Form>
      <TurnstileModal open={isOpen} callback={onVerify} />
    </div>
  );
}
