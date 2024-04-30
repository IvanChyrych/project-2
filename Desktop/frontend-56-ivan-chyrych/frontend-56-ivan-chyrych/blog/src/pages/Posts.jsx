import React from 'react'
import { CardLarge } from '../components/card-large/index'
import { CardMedium } from '../components/card-medium/index'
import { CardSmall } from '../components/card-small/index'
import { Layout } from '../components/layout/Layout'
// import './styles.scss'

export class Posts extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: [
        {
          id: 0,
          image: 'https://i.ibb.co/sPXzkBb/card-large-img.png',
          text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
          title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
          cardType: 'lg'
        },
        {
          id: 1,
          image: 'https://i.ibb.co/sPXzkBb/card-large-img.png',
          text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
          title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
          cardType: 'md'
        },
        {
          id: 2,
          image: 'https://i.ibb.co/sPXzkBb/card-large-img.png',
          text: 'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.',
          title: 'Astronauts prep for new solar arrays on nearly seven-hour spacewalk',
          cardType: 'sm'
        }
      ]
    }
  }

  renderSmallCards () {
    return (
      this.state.posts.map((post) =>
        <CardSmall
          key={post.id}
          title={post.title}
          text={post.text}
          image={post.image}
        />
      )
    )
  }

  renderMediumCards () {
    return (
      this.state.posts.map((post) =>
        <CardMedium
          key={post.id}
          title={post.title}
          text={post.text}
          image={post.image}
        />
      )
    )
  }

  renderLargeCards () {
    return (
      this.state.posts.map((post) =>
        <CardLarge
          key={post.id}
          title={post.title}
          text={post.text}
          image={post.image}
        />
      )
    )
  }

  render () {
    return (
      <>
        <div className="containerGeneral">
          <div className="smallCardsColumn">{this.renderSmallCards()}</div>
          <div className="mediumCardsColumn">{this.renderMediumCards()}</div>
          <div className="largeCardsColumn">{this.renderLargeCards()}</div>
        </div>
      </>
    )
  }
}

// export function Posts () {
//   const [posts, setPosts] = useState([])
//   useEffect(() => {
//     fetchPosts()
//   }, [])

//   async function fetchPosts () {
//     const response = await fetch('https://studapi.teachmeskills.by/blog/posts/?limit=10')
//     const data = await response.json()
//     setPosts(data.results)
//   }

//   function renderPosts () {
//     if (!posts.length) return <div>Loading...</div>
//     return posts.map(post => <div key={post.id}>{post.title}</div>)
//   }

//   return (
//     <div>{ renderPosts() }</div>
//   )
// }
