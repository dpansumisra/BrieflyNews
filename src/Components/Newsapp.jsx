import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {

    const [search, setSearch] = useState("india");
    const [newsData, setnewsData] = useState(null);

    const handleInput = (e) => {
        // console.log(e.target.value);
        setSearch(e.target.value)
    }


    useEffect(() => {
        getData()
    }, [])

    const userInput = (e) => {
        setSearch(e.target.value);
    }


    const API_KEY = "4f29851bd60e4bda87848a269680c267";


    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=2024-10-09&to=2024-10-09&sortBy=popularity&apiKey=${API_KEY}`)
        const jsonData = await response.json();
        // console.log(jsonData.articles);
        setnewsData(jsonData.articles)
    }

    return (
        <div>
            <nav>
                <div>
                    <h1 className='heading'>Briefly</h1>
                </div>
                <div className="Searchbar">
                    <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}> Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Update With TrendyNews</p>
            </div>
            <div className='categorybtn'>
                <button onClick={userInput} value="Sports">Sports</button>
                <button onClick={userInput} value="Politics">Politics</button>
                <button onClick={userInput} value="Entertainment">Entertainment</button>
                <button onClick={userInput} value="Health">Health</button>
                <button onClick={userInput} value="Education">Education</button>
                <button onClick={userInput} value="Fitness">Fitness</button>
            </div>
            <div>

                {newsData ? <Card data={newsData} /> : null}
            </div>
        </div>
    )
}

export default Newsapp
