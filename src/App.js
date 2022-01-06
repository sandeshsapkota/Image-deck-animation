import SearchBar from "./components/SearchBar";
import {useState} from "react";
import "./sass/app.scss"


function App() {

    const [data, handleDataState] = useState();


    const url = 'https://restcountries.eu/rest/v2/all\n'


    async function fetchData() {
        let res = await fetch(url)
        res = await res.json()
        return res
    }

    fetchData().then(res => handleDataState({data: res}))

    function handleSearch(item) {
        // console.log(item)
    }

    return (
        <div>
            <div className="header py-3.5">
                <div className="container">
                    <h2 className={'text-2xl font-bold uppercase'}>Header</h2>
                </div>
            </div>
            <main className={'header-footer-height-deduct'}>
                <SearchBar {...data} handleSearch={handleSearch} placeholder={'Search by name'}/>
            </main>
            <div className="footer py-3.5">
                <div className="container">
                    <h2 className={'text-2xl font-bold  uppercase'}>Footer</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
