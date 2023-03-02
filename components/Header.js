import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      {/* <div className="w-12 h-12 rounded-full block mx-auto mb-4 bg-gradient-conic from-gradient-3 to-gradient-4" /> */}
      <img src="https://media.licdn.com/dms/image/C5603AQEkqI12VtvEgQ/profile-displayphoto-shrink_100_100/0/1651698395521?e=1683158400&v=beta&t=v7yKTj8d7kx-EWZ9S4Z1oYKGu9WSqIm2dtc1b1vNTnM" alt="Patrick Steil Cloud eCommerce Architect" className="w-24 h-24 rounded-full block mx-auto mb-4" />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
