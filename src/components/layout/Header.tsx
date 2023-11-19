import Link from "next/link"

export default function  Header ()  {
  return (
    <>
    <header className=" flex items-center justify-between">
      <Link className=" text-primary font-bold text-2xl" href={''}>PIZZA</Link>
        
        <nav className=" flex items-center gap-8 text-gray-500 font-bold">
        <Link href={''}>Home</Link>
        <Link href={''}>Menu</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
        <Link className=" bg-primary text-white px-8 py-2 rounded-full " href={''}>Login</Link>
        </nav>
    </header>
    </>
  );
}


