import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { contactFormSchema, ContactType } from '@/schema/contact.schema';

import ContactInfo from './ContactInfo';
// import FormInput from './FormInput';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

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
        <main>
            <div className="flex gap-5 max-md:flex-col">
                <section className="relative flex-col w-[56%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col px-14 py-16 mx-auto w-full bg-[#8fd3d3] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <h1 className=" px-14 pt-3 pb-9 max-w-full text-[40px] font-extrabold font-['Baloo 2'] text-center text-white bg-red-400 rounded-[25px] w-[440px] h-[80px] max-md:px-5">
                            GỬI TIN NHẮN
                        </h1>
                        <p className="mt-9 mr-3 text-2xl font-medium text-[#158283] max-md:mr-2.5 max-md:max-w-full">
                            Vui lòng điền thông tin vào ô bên dưới, MOON sẽ liên
                            lạc lại bạn trong thời gian sớm nhất
                        </p>
                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="mt-11 max-md:mt-10 max-md:max-w-full"
                            >
                                <div className="flex gap-60 max-md:flex-col">
                                    <FormField
                                        control={form.control}
                                        name="name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Fullname</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="NguyenVanA"
                                                        {...field}
                                                        style={{
                                                            width: '210%',
                                                            backgroundColor:
                                                                'white',
                                                            borderRadius:
                                                                '25px',
                                                            borderColor:
                                                                '#35A6A8',
                                                        }}
                                                    />
                                                </FormControl>
                                                {/* <FormDescription>
                          Điền đầy đủ họ và tên vào ô trên
                        </FormDescription> */}
                                                <FormMessage
                                                    style={{
                                                        color: 'red',
                                                        fontSize: '14px',
                                                        textAlign: 'left',
                                                    }}
                                                />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phoneNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>
                                                    PhoneNumber
                                                </FormLabel>
                                                <FormControl>
                                                    <Input
                                                        placeholder="028439489384"
                                                        {...field}
                                                        style={{
                                                            width: '210%',
                                                            backgroundColor:
                                                                'white',
                                                            borderRadius:
                                                                '25px',
                                                            borderColor:
                                                                '#35A6A8',
                                                        }}
                                                    />
                                                </FormControl>
                                                {/* <FormDescription>
                          Vui lòng điền số điện thoại quý khách ở trên
                        </FormDescription> */}
                                                <FormMessage
                                                    style={{
                                                        color: 'red',
                                                        fontSize: '14px',
                                                        textAlign: 'left',
                                                    }}
                                                />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input
                                                    style={{
                                                        backgroundColor:
                                                            'white',
                                                        borderRadius: '25px',
                                                        borderColor: '#35A6A8',
                                                    }}
                                                    placeholder="28/8, đường 25, phường Long Thạnh Mỹ, Thành phố Thủ Đức, Ho Chi Minh City, Vietnam"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage
                                                style={{
                                                    color: 'red',
                                                    fontSize: '14px',
                                                    textAlign: 'left',
                                                }}
                                            />
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
                                                    placeholder="tiemgiatnhamoon@gmail.com"
                                                    {...field}
                                                    style={{
                                                        backgroundColor:
                                                            'white',
                                                        borderRadius: '25px',
                                                        borderColor: '#35A6A8',
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage
                                                style={{
                                                    color: 'red',
                                                    fontSize: '14px',
                                                    textAlign: 'left',
                                                }}
                                            />
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
                                                <Input
                                                    placeholder="Vui lòng điền ý kiến phản hồi"
                                                    {...field}
                                                    style={{
                                                        backgroundColor:
                                                            'white',
                                                        borderRadius: '25px',
                                                        borderColor: '#35A6A8',
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage
                                                style={{
                                                    color: 'red',
                                                    fontSize: '14px',
                                                    textAlign: 'left',
                                                }}
                                            />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="self-center px-16 py-7 mt-9 max-w-full text-2xl font-extrabold text-center text-white whitespace-nowrap bg-red-400 rounded-3xl w-[216px] max-md:px-5 hover:bg-[#f76153]"
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
    );
};

export default ContactForm;
