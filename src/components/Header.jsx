function Header() {
  return (
    <header className='flex flex-col sticky top-0 bg-otfMaroon text-white items-center p-2 z-10 font-main'>
    <h1 className="text-4xl pt-2">OFF THE FRAME</h1>
    
      <ul className='flex gap-5 items-center'>
      <a className="hover:bg-otfImageGrey rounded m-2 py-1 px-2 text-xl" href="/">Home</a>
      <a className="hover:bg-otfImageGrey rounded m-2 py-1 px-2 text-xl" href="/theCourt">Meet the Characters</a>
        
        <a className="hover:bg-otfImageGrey rounded m-2 py-1 px-2 text-xl" href="#">Contact</a>

      </ul>
 
  </header>
  )
}

export default Header