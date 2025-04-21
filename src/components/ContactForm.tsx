
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
  email: z.string().email({
    message: "Введите корректный email адрес",
  }),
  subject: z.string().min(3, {
    message: "Тема должна содержать минимум 3 символа",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать минимум 10 символов",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Имитация отправки на сервер
    setTimeout(() => {
      console.log("Отправлено на почту jsu314504@gmail.com:", values);
      
      // В реальном приложении здесь был бы fetch или axios запрос к API
      
      toast({
        title: "Заявка отправлена",
        description: "Мы свяжемся с вами в ближайшее время",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <Card className="w-full mb-6">
      <CardHeader>
        <CardTitle>Отправить заявку</CardTitle>
        <CardDescription>
          Заполните форму, и мы свяжемся с вами в ближайшее время
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имя</FormLabel>
                    <FormControl>
                      <Input placeholder="Ваше имя" {...field} />
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
                      <Input placeholder="ваш@email.com" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Тема</FormLabel>
                  <FormControl>
                    <Input placeholder="Тема вашего сообщения" {...field} />
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
                  <FormLabel>Сообщение</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Опишите подробно ваш вопрос или предложение" 
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Расскажите нам, чем мы можем вам помочь
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
                <>Отправка...</>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Отправить заявку
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
