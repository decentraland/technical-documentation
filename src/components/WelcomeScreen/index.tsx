import React from 'react'
import './types'
import './style.scss'
import { Header } from 'decentraland-ui/dist/components/Header/Header'
import { Section } from 'decentraland-ui/dist/components/Section/Section'
import { SectionCardProps } from '../SectionCard/types'
import UserTypeCard from '../UserTypeCard'
import Tags from '../Tags'

const info = [
  {
    img: 'user.png',
    url: 'user',
    bgColor: '#FF2D55',
    title: 'User',
    description: 'A description'
  },
  {
    img: 'contributor.png',
    url: 'creator',
    bgColor: '#4947CD',
    title: 'Creator',
    description: 'A description'
  },
  {
    img: 'creator.png',
    url: 'contributor',
    bgColor: '#EE834A',
    title: 'Contributor',
    description: 'A description'
  }
]

const tags = [
  {
    name: "creating a wallet",
    category: "user",
    slug: "/user"
  },
  {
    name: "builder 101",
    category: "creator",
    slug: "/creator"
  }
]

export default function WelcomeScreen() {
  return (
    <Section>
      <Header>Documentation</Header>
      <p>Help build the Metaverse</p>
      <Header>Profiles</Header>
      <p>
        We divided the content of our documentation in different profiles,
        choose the appropiate one for your needs
      </p>
      <div className="section-cards-container">
        {info.map((item: SectionCardProps, i: number) => {
          return (
            <UserTypeCard
              key={i}
              img={item.img}
              url={item.url}
              bgColor={item.bgColor}
              title={item.title}
              description={item.description}
            />
          )
        })}
      </div>
      <Header>Popular tags/topics</Header>
      <div className="tag-wrapper">
        {tags && tags.map(item => {
          return (
            <Tags name={item.name} slug={item.slug} category={item.category} />
          )
        })}
      </div>
    </Section>
  )
}
