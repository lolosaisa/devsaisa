import Link from 'next/link';

const Navbar = () => (
  <nav className="flex justify-between items-center py-4 px-8">
    <h1 className="text-green font-bold text-lg">B</h1>
    <div className="flex space-x-6 text-lightest-slate font-mono text-sm ">
      <Link href="#about" className='hover:text-teal-200 font-extralight'>1. About</Link>
      <Link href="#experience" className='hover:text-teal-200'>2. Experience</Link>
      <Link href="#projects" className='hover:text-teal-200'>3. Work</Link>
      <Link href="#contact" className='hover:text-teal-200'>4 Contact</Link>
      <Link href="/resume" className='hover:text-teal-200'>
        <button className="border border-green text-green px-4 py-1 rounded hover:text-teal-300">
          Resume
        </button>
      </Link>
    </div>
  </nav>
);

export default Navbar;
