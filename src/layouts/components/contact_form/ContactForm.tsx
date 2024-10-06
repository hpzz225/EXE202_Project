
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { contactFormSchema 
    , ContactType
} from "@/schema/contact.schema"

import ContactInfo from './ContactInfo';
// import FormInput from './FormInput';

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const ContactForm = () => {
    const form = useForm({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            phoneNumber: '',
            address: '',
            email: '',
            feedback: '',
        },
    });

    async function onSubmit(values: ContactType) {
        console.log(values);
    }
  return (
    <main className="mt-10 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <section className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col px-14 py-16 mx-auto w-full bg-teal-500 rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <h1 className="self-center px-14 pt-3 pb-9 max-w-full text-4xl font-extrabold text-center text-white bg-red-400 rounded-3xl w-[353px] max-md:px-5">
              GỬI TIN NHẮN
            </h1>
            <p className="mt-9 mr-3 text-2xl font-medium text-cyan-700 max-md:mr-2.5 max-md:max-w-full">
              Vui lòng điền thông tin vào ô bên dưới, MOON sẽ liên lạc lại bạn trong thời gian sớm nhất
            </p>
            <Form {...form} >
              <form onSubmit={form.handleSubmit(onSubmit)} className="mt-11 max-md:mt-10 max-md:max-w-full">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fullname</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="NguyenVanA" {...field}
                          style={{ backgroundColor: 'white' }}   
                        />
                      </FormControl>
                      <FormDescription>
                        Điền đầy đủ họ và tên vào ô trên 
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                    <FormLabel>phoneNumber</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="028439489384" {...field}
                          style={{ backgroundColor: 'white' }}
                          />
                      </FormControl>
                      <FormDescription>
                        Vui lòng điền số điện thoại quý khách ở trên
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input 
                          style={{ backgroundColor: 'white' }}
                          placeholder="28/8, đường 25, phường Long Thạnh Mỹ, Thành phố Thủ Đức, Ho Chi Minh City, Vietnam" {...field} />
                      </FormControl>
                      <FormDescription>
                        
                      </FormDescription>
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
                        <Input placeholder="tiemgiatnhamoon@gmail.com" {...field} style={{ backgroundColor: 'white' }} />
                      </FormControl>
                      <FormDescription>
                        Điền đầy đủ họ tên vào ô trên 
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="feedback"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedbacks</FormLabel>
                      <FormControl>
                        <Input placeholder="Vui lòng điền ý kiến phản hồi" {...field} style={{ backgroundColor: 'white' }} />
                      </FormControl>
                      <FormDescription>
                        Điền đầy đủ họ tên vào ô trên 
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                type="submit"
                className="self-center px-16 py-7 mt-9 max-w-full text-2xl font-extrabold text-center text-white whitespace-nowrap bg-red-400 rounded-3xl w-[216px] max-md:px-5"
                >
                  GỬI
                </Button>
              </form>
            </Form>
          </div>
        </section>
        <ContactInfo />
      </div>
    </main>
  )
}

export default ContactForm
