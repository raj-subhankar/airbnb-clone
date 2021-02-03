import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return(
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays • 26 august to 30 august • 2 guests</p>
                <h1>Stays nearby</h1>

                <Button
                    variant='outlined'>
                        Cancellation Flexibility
                </Button>

                <Button
                    variant='outlined'>
                        Type of place
                    </Button>
                
                <Button
                    variant='outlined'>
                        Price
                    </Button>

                <Button
                    variant='outlined'>
                        Rooms and beds
                    </Button>

                <Button
                    variant='outlined'>
                        More filters
                    </Button>
            </div>

            <SearchResult
                img="https://a0.muscache.com/im/pictures/23844d6f-0acc-4d69-b627-26a70906ac45.jpg?im_w=1200"
                location="Earth house hosted by Ecolodge"
                title="Ecolodge Lily double Studio"
                description="2 guests · 1 bedroom · 1 bed · 1 bathroom"
                star={4.80}
                price="₹2,920/ night"
                total="₹9,000" />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/579f5726-1f4e-48dd-8512-00cd0775943b.jpg?im_w=1440"
                location="Farm stay in Idukki"
                title="Manoor Farms: mountain stays"
                description="4 guests · 1 bedroom · 1 bed · 1 bathroom"
                star={4.83}
                price="₹2,500/ night"
                total="₹7,500"/>
            
            <SearchResult
                img="https://a0.muscache.com/im/pictures/438725f5-aec2-4b09-afbc-04c97bf223ed.jpg?im_w=1200"
                location="Farm stay hosted by S A"
                title="UK Sea View Stay"
                description="6 guests · 1 bedroom · 2 beds · 1 bathroom"
                star={4.89}
                price="₹1,600/ night"
                total="₹3,200" />

            <SearchResult 
                img="https://a0.muscache.com/im/pictures/9e969efb-0dfa-43b6-baf7-2fe817a6e64d.jpg?im_w=1200"
                location="Tiny house hosted by Vi"
                title="Hill Lodge Mui Ne - The tiny house near beach"
                description="4 guests · 1 bedroom · 1 bed · 1 bathroom"
                star={4.82}
                price="₹2,190/ night"
                total="₹4,200" />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/a464197d-94d9-4d54-8204-56649b76800e.jpg?im_w=1200"
                location="Hut hosted by Manveer"
                title="Palm Tree Garden Hut"
                description="2 guests · 1 bedroom · 1 bed · 1 bathroom"
                star={3.5}
                price="₹2,100/ night"
                total="₹4,200" />

            <SearchResult
                img="https://a0.muscache.com/im/pictures/6c0e09d9-2537-4c2a-9180-4f14e22a1996.jpg?im_w=1200"
                location='Farm stay in Damkhind'
                title='Aamchi Wadi'
                description='3 guests · 1 bedroom · 2 beds · 1 bathroom'
                star={4.95}
                price="₹1,200/ night"
                total="₹6,800" />   
        </div>
    )
}

export default SearchPage