import React, {useContext, useState } from 'react';

//components
import PaymentModal from '../PaymentModal/Payment.component';

//context
import { MovieContext } from '../../context/movie.context';
const MovieInfo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    const {movie} = useContext(MovieContext);

    const genres = movie.genres?.map(({name}) => name).join(", ");

    const rentMovies =() => {
        setIsOpen(true);
        setPrice(149);
    };
    
    const buyMovies =() => {
        setIsOpen(true);
        setPrice(599);
    };


//optional chaining
    return (
        <>
        <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
            <div className="flex flex-col gap-3 lg:gap-8">
                <div className="flex items-center gap-4 md:px-4">
                    <div className="w-48 h-8">
                        <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="Premeir" className="w-full h-full"
                         />
                    </div>
                    <span className=" bg-bms-700 p-1 text-white text-xs rounded-md">Streaming now</span>
                </div>
                <h1 className="text-white lg:text-5xl font-bold hidden lg:block ">{movie.original_title}</h1>

               <div className="flex flex-col-reverse gap-3 lg:gap-5 lg:flex-col">

               <div className="text-white font-light flex flex-col gap-2 md:px-4">
                    <h4>4k &bull; {movie.original_language}</h4>
                    <h4>{(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 16+ </h4>
                </div>
                <div className="flex items-center gap-5 md:px-4 md:w-screen lg:w-full">
                    <button onClick={rentMovies} className="bg-bms-950 w-full py-3 text-white font-semibold rounded-lg">
                        Rent ₹149
                    </button>

                    <button onClick={buyMovies} className="bg-bms-950 w-full py-3 text-white font-semibold rounded-lg">
                        Buy ₹599
                    </button>

                </div>

               </div>
            </div>
        </>
    )
}

export default MovieInfo ;
 