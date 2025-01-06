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
            className="py-3 px-4 block w-full ring-primary border focus:border-primary outline-none"
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
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500">
            Your name
          </label>
          <input
            type="text"
            id="success"
            className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg outline-none focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
            placeholder="Success input"
          />
          <p className="mt-2 text-sm text-green-600 dark:text-green-500">
            <span className="font-medium">Well done!</span> Some success message.
          </p>
        </div>
      </div>
    </form>
  )
}

export default FormCategory
