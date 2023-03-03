import Link from 'next/link';
import Image from 'next/image';

export default function Header({ name }) {
  
  return (
    <header className="pt-20 pb-12">
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      <a target="_blank" rel="noreferrer" href="mailto:patrick@infranet.com">
        <picture>
          <img src="https://media.licdn.com/dms/image/C5603AQEkqI12VtvEgQ/profile-displayphoto-shrink_100_100/0/1651698395521?e=1683158400&v=beta&t=v7yKTj8d7kx-EWZ9S4Z1oYKGu9WSqIm2dtc1b1vNTnM" alt="Patrick Steil Cloud eCommerce Architect" className="w-24 h-24 rounded-full block mx-auto mb-4" />
        </picture>
      </a>
      {/* <Image
            src="https://media.licdn.com/dms/image/C5603AQEkqI12VtvEgQ/profile-displayphoto-shrink_100_100/0/1651698395521?e=1683158400&v=beta&t=v7yKTj8d7kx-EWZ9S4Z1oYKGu9WSqIm2dtc1b1vNTnM"
            alt="Patrick Steil Cloud eCommerce Architect"
            class="w-24 h-24 rounded-full block mx-auto mb-4"
            width="100"
            height="100"
      /> */}
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a target="_blank" rel="noreferrer" href="mailto:patrick@infranet.com">{name}</a>
        </Link>
        {/* <Link target="_blank" rel="noreferrer" href="mailto:patrick@infranet.com">
          <a >{name}</a>
        </Link> */}
      </p>
    </header>
  );
}
