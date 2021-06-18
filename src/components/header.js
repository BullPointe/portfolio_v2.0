import React from "react"

const Header = () => {
  return (
    //   <nav className="flex items-center justify-between flex-nowrap bg-blue-200 p-6">
    <div class="grid grid-cols-5 gap-4">
        <ul class="px-4 flex mt-4 col-start-3 col-span-5">
            <li class="flex-1 mr-2">
                <a class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="#">Active Item</a>
            </li>
            <li class="flex-1 mr-2">
                <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Nav Item</a>
            </li>
           
        </ul>
    </div>

  )
}

export default Header
