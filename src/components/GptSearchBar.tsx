
const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center">
        <form className="bg-black py-2 px-4 rounded-md w-1/2 grid grid-cols-12">
            <input type="text" className="px-3 col-span-9 h-[2.9rem] rounded-md" placeholder="What would you like to watch today>" />
            <button className="px-4 py-2 ml-3 col-span-3 h-[2.9rem] bg-red-700 rounded-md text-white">Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar