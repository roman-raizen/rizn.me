const Blobs = ({children, width = "w-4/5"}) => {
  return (
    <div className="relative">
      <div className={`absolute animate-blob ${width} aspect-square top-0 -left-4 bg-purple-200 rounded-full mix-blend-multiply blur-lg filter`}></div>
      <div className={`absolute animate-blob ${width} aspect-square top-0 -right-4 bg-yellow-200 rounded-full mix-blend-multiply blur-lg filter animation-delay-4000`}></div>
      <div className={`absolute animate-xc-blob ${width} aspect-square left-1/2 -translate-x-1/2 -bottom-4 bg-pink-200 rounded-full mix-blend-multiply blur-lg filter animation-delay-8000`}></div>

      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default Blobs
