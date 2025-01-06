function FormCategory(): JSX.Element {
  return (
    <form action="">
      <div className="w-full flex flex-col">
        <div className="max-w-sm">
          <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-white">
            Nome Categoria
          </label>
          <input
            type="email"
            id="input-label"
            name=""
            className="py-3 px-4 block w-full ring-primary border focus:border-primary"
            placeholder="you@site.com"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            First name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
      </div>
    </form>
  )
}

export default FormCategory
