import React, {FormEvent, useRef } from 'react'


interface Props {
    onSearch: (query: string) => void
}



const MoviesSearchForm = (props: Props) => {


    const searchInput = useRef<HTMLInputElement>(null)

    const searchForMovie = () => {
        let searchString = searchInput.current?.value
        if (searchString) props.onSearch(searchString)

    }

    // Handle submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchForMovie()
    }




    return (

        <form onSubmit={handleSubmit}>
             <input autoFocus type="text" ref={searchInput} className="search"/>
        </form>
    )
}

export default MoviesSearchForm
