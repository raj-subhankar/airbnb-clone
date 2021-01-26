import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './Home.css'

function Home() {
    return(
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card 
                    src="https://a0.muscache.com/im/pictures/a0316ecb-e49b-4b3a-b6b6-c2876b820e8c.jpg?im_w=720"
                    title='Entire Homes'
                    description='Comfortable private places, with room for friends or family.'/>

                <Card 
                    src="https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=720"
                    title='Online Experiences'
                    description='Unique activities we can do together, led by a world of hosts.'/>

                <Card 
                    src="https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=720"
                    title='Unique stays'
                    description='Spaces that are more than just a place to sleep'/>
            </div>

            <div className='home__section'>
                <Card 
                    src="https://a0.muscache.com/im/pictures/54567abe-28fd-4f4e-9622-a9d1c6ed840f.jpg?im_w=1200"
                    title="Whispering Waters - Mountain Farm Cottage 2"
                    description="Room in nature lodge hosted by Alexis" 
                    price='₹3,559/ night'/>

                <Card 
                    src="https://a0.muscache.com/im/pictures/9aaf8b2f-b276-4aca-9476-17e4b3681e01.jpg?im_w=1200"
                    title='MannoorFarms: mountain stays'
                    description='Farm stay hosted by Ria'
                    price='₹2,009/ night'/>

                <Card 
                    src="https://a0.muscache.com/im/pictures/42f654c5-f9ac-44b0-8445-dc6488ee3cfe.jpg?im_w=1200"
                    title='Kurinji Estate-1930s Thanjavur Style Heritage Home'
                    description='Private room in bungalow hosted by Rahul'
                    price='₹5,401/ night'/>
            </div>
        </div>
    )
}

export default Home