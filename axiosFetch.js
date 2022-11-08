const fetchData = async () => {
        setLoading(true)
        axios({
            method: 'get',
            url: 'https://fakestoreapi.com/products',

        })
            .then(resp => {
                setData(resp.data)
                setFilter(resp.data)
                console.log(filter)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => setLoading(false))
    }


    useEffect(() => {
        fetchData()
    }, [])



 {data.map((product) => (

                        <div key={product.id} className='card' >
                            <ul className='bg-slate-200 text-slate-500 my-2 rounded '>
                                <li className='card-item flex flex-col items-center justify-center text-center font-medium '>
                                    <img src={product.image} alt="products" className='w-32 h-44 m-2' />
                                    <h1 className='pt-1'> {product.title}</h1>
                                    <p className='pt-1'>Category : {product.category}</p>
                                    <p className='pt-1'>Price : {product.price}$</p>
                                    <p className='pt-1'>Rating : {product.rating.rate}</p>
                                    <div className='flex justify-center items-center p-2 '>

                                        <button type="button" class="text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Buy</button>
                                        <button type="button" class="text-black bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add</button>
                                    </div>
                                </li>
                            </ul>
