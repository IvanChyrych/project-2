import React from 'react'
import { CardSmall } from '../card-small/index'
import { Layout } from '../layout/Layout'
import { Title } from '../title/Title'

export const SearchResult = () => {
  const posts = [
    {
      id: 0,
      image: 'https://i.ibb.co/sPXzkBb/card-large-img.png',
      text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays',
      title: 'Astronauts prep for new solar array',
      cardType: 'lg'
    },
    {
      id: 1,
      image: 'https://i.ibb.co/sPXzkBb/card-large-img.png',
      text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
      title: 'Astronauts prep for new solar arrk',
      cardType: 'md'
    },
    {
      id: 2,
      image: 'https://i.ibb.co/sPXzkBb/card-large-img.png',
      text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
      title: 'Astronauts prep for new solar arrays ',
      cardType: 'sm'
    }
  ]

  return (

    <Layout>
      <div className="d-flex flex-column">
        <Title title='Search results' />
        <div className="d-flex flex-column">
          {posts.map(post =>
            <CardSmall key={post.id} text={post.text} image={post.image} title={post.title}/>)}
        </div>
        </div>
    </Layout>
  )
}
