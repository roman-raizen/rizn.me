const Highlight = ({children}) => {
  return (
    <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-pink-600 to-indigo-600">
      { children }
    </span>
  )
}

export default Highlight
