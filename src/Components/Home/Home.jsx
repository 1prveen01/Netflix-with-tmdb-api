import React, { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import { FaPlay } from "react-icons/fa6";


const apiKey = "7cbeeb5079fd7291930fd93063ad80df"
const url = "https://api.themoviedb.org/3/"
const imgUrl = "https://image.tmdb.org/t/p/w500"
const upcoming = "upcoming"
const nowPlaying = "now_playing"
const topRated = "top_rated"
const popular = "popular"




const Card = ( {img} ) => (

    <img className='card' src={img} alt="cover" />

)

const Row = ({title , arr = [{
    img:" https://wallpapercave.com/wp/wp4770371.jpg"
}]}) => (

    <div className='row'>
        <h2>{title}</h2>

        <div>
            {
                arr.map((item,index) => (
                    < Card key={index} img = {`${imgUrl}${item.poster_path}`}/>
                ))
            }
        </div>
        
    </div>
)




const Home = () => {

    const [upcomingMovies,setupcomingMovies] = useState([])
    const [popularMovies,setpopularMovies] = useState([])
    const [topRatedMovies,settopRatedMovies] = useState([])
    const [nowPlayingMovies,setnowPlayingMovies] = useState([])
    const [genre, setgenre] =  useState([])

    useEffect(()=>{

        const fetchupcomimg = async()=>{
            const {data: {results}} = await axios.get(`${url}movie/${upcoming}?api_key=${apiKey}`)
            setupcomingMovies(results)    
        };


        const fetchnowPlaying = async () => {
            const {data:{results}} = await axios.get(`${url}movie/${nowPlaying}?api_key=${apiKey}`)
            setnowPlayingMovies(results)
        }

        const fetchtopRated = async () => {
            const {data:{results}} = await axios.get(`${url}movie/${topRated}?api_key=${apiKey}`)
            settopRatedMovies(results)
        }

        const fetchpopular = async () => {
            const {data: {results}} = await axios.get(`${url}movie/${popular}?api_key=${apiKey}`)
            setpopularMovies(results)
        }

        const getGenre = async () => {
            const {data:{genres}} = await axios.get(`${url}genre/movie/list?api_key=${apiKey}`)
            setgenre(genres)
        }

        fetchnowPlaying();
        fetchpopular();
        fetchtopRated();
        fetchupcomimg();
        getGenre();

        

    },[])
//${imgUrl}${item.poster_path}


  return (
    <section className='home'>
        <div className='banner' style={{
            backgroundImage:popularMovies[0]?`url(${`${imgUrl}${popularMovies[0].poster_path}`})`:"rgba(8, 8, 8, 0.979)" }}>
            {
                popularMovies[0] &&
                (
                    <h1>{popularMovies[0].original_title}</h1>
                )
            }
            {
                popularMovies[0] &&
                (
                    <p>{popularMovies[0].overview}</p>
                )
            }

            <div>
                <button>Play <FaPlay /></button>
                <button><FaPlus /> List</button>
            </div>
            </div>

        <Row title = {"Now Playing"} arr = {nowPlayingMovies} />
        <Row title={"Upcoming"} arr={upcomingMovies} />
        <Row title= {"Popular"} arr={popularMovies} />
        <Row title = {"Top Rated"} arr = {topRatedMovies} />
        <div className="genreBox">
            {genre.map((item)=>(
                
                <Link key = {item.id} to={`/genre/${item.id}`}>{item.name}</Link>
            ))}
        </div>
        



    </section>
  )
}

export default Home