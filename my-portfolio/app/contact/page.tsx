"use client"
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRef } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs
      .sendForm(
        'service_eygdqji',
        'template_zoowl48',
        formRef.current,
        '2oK6P3lxEp-E2HUee'
      )
      .then(
        (result) => {
          console.log(result.text)
          alert('Message sent successfully!')
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send message.')
        }
      )
  }
  return (
    <div className="h-[80vh]">
      <Header/>
      <div className="mt-30 w-[80%] mx-auto mb-12">
        <h2 className="title text-5xl mb-10 tracking-widest"> Contact</h2>
        <form ref={formRef} onSubmit={sendEmail}>
        <div className="w-[90%] mx-auto font-sans">
          <div className="flex w-full mb-6">
            <div className="w-1/2">
              <p className="mb-1">First Name</p>
              <Input className="bg-white border-gray-300 w-full" placeholder="First Name..."/>
            </div>
            <div className="ml-10 w-1/2">
              <p className="mb-1">Last Name</p>
              <Input className="bg-white border-gray-300" name="first_name" placeholder="Last Name..."/>
            </div>
          </div>
            <div className="mb-6">
              <p className="mb-1">Email Adress</p>
              <Input className="bg-white border-gray-300"  name="user_email" placeholder="Email Address..."/>
            </div>
            <div>
              <p className="mb-1">Message</p>
              <Textarea className="bg-white border-gray-300 min-h-[150px]" name="message" placeholder="Message..."/>
            </div>
            <Button className="bg-[#03005D] text-white w-full mt-12 cursor-pointer" type="submit">Send  Message</Button>
          </div>
        </form>
        
      </div>
        <div className="flex justify-center
         mb-12">
          <Link href="/contact">
            <Image 
            src="/contact/github.svg"
            alt="説明文"
            width={40}
            height={40}
            ></Image>
          </Link>
          <Link href="/contact">
            <Image 
            src="/contact/linkedin.svg"
            alt="説明文"
            width={40}
            height={40}
            className="ml-20"
            ></Image>
          </Link>
        </div>
      <Footer/>
    </div>
  );
}