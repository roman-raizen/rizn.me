const Blobs = ({children, className }) => {
  return (
    <div className="relative">
      <div className={`absolute animate-blob w-4/5 aspect-square top-0 -left-4 bg-purple-200 rounded-full mix-blend-multiply blur-lg filter ${className}`}></div>
      <div className={`absolute animate-blob w-4/5 aspect-square top-0 -right-4 bg-yellow-200 rounded-full mix-blend-multiply blur-lg filter animation-delay-4000 ${className}`}></div>
      <div className={`absolute animate-xc-blob w-4/5 aspect-square left-1/2 -translate-x-1/2 -bottom-4 bg-pink-200 rounded-full mix-blend-multiply blur-lg filter animation-delay-8000 ${className}`}></div>

      <div className="relative">
        {children}
      </div>
    </div>
  )
}

export default Blobs
