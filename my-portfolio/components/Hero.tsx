import Link from "next/link";

const Hero = () => (
    <div>
        <h3 className="text-teal-300"> Hi, my name is</h3>
        <h1 className=" font:bold py-4"> Loise Mburu.</h1>
        <p> I Build Things For The Web</p>
        <p>
        I’m a software engineer creating user-centered digital experiences for both Web2 and Web3. 
        My focus is on building accessible, impactful products that leverage the best of modern technology, 
        from traditional web applications to blockchain-integrated platforms.
        </p>
        <Link href="resume" className="">
        <button>
            Check Out My Resume!
        </button>
        
        </Link>
        
    </div>

);
export default Hero;