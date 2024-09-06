import ExternalLink from '@/ui/ExternalLink';
import Image from 'next/image';
import Link from 'next/link';

async function getData() {
  return {
    props: {
      posts: [],
    },
  };
}

export default function Home() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-16 px-8">
      <Header />
      <Contact />
      <AboutMe />
    </div>
  );
}

function Header() {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="relative h-12 w-12">
        <Image
          alt="Logo"
          className="rounded-full"
          layout="fill"
          objectFit="contain"
          src="/static/images/logo.jpeg"
        />
        <div className="absolute -bottom-2 -right-2 rounded-full bg-white px-1 py-0.5 text-sm dark:bg-gray-900">
          👽
        </div>
      </div>
      <div className="flex flex-col">
        <h1>Rahul Chakraborty</h1>
        <p className="text-quaternary">Multidisciplinary Designer</p>
      </div>
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-quaternary">About me</p>
      <div className="text-secondary flex flex-col gap-4">
        <h1>I craft fun and beautiful digital products for the internet. I have designed and collaborated on some of the most impactful products of our time. </h1>
        <h1>Currently, I work as a Staff Designer at <a href="https://groww.in" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Groww</a>. Notable past experiences include Google Search & Assistant, Android WearOS, Flipkart and Swiggy.</h1>
      </div>
    </div>
  );
}

function ContactLink({
  href,
  title,
  website,
  email,
}: {
  email?: string;
  href?: string;
  title: string;
  website?: string;
}) {
  return (
    <span className="block items-center gap-4">
      {website && <p className="text-quaternary">{website}</p>}
      {href && (
        <a
          className="text-secondary hover:text-primary transition-opacity duration-150"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {title}{' '}
          <svg
            className=" inline-block h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      )}
      {email && (
        <p className="text-secondary hover:text-primary transition-opacity duration-150">
          {title}
        </p>
      )}
    </span>
  );
}

function Contact() {
  return (
    <div className="flex flex-col gap-4">
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <ContactLink
          href="https://X.com/hckmstrrahul"
          title="hckmstrrahul"
          website="X"
        />
        <ContactLink
          href="https://bento.me/rcb"
          title="rcb"
          website="Bento"
        />
        <ContactLink
          href="https://www.figma.com/@hckmstrrahul"
          title="hckmstrrahul"
          website="Figma"
        />
        <ContactLink
          href="https://linkedin.com/in/hckmstrrahul"
          title="hckmstrrahul"
          website="Linkedin"
        />
        <ContactLink
          email="hi@rahulchakraborty.com"
          title="hi@rahulchakraborty.com"
          website="Email"
        />
        
      </div>
    </div>
  );
}
