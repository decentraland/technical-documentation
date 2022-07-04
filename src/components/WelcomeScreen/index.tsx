import React from 'react'
import './types'
import './style.scss'
import { Header } from 'decentraland-ui/dist/components/Header/Header'
import { Section } from 'decentraland-ui/dist/components/Section/Section'
import { SectionCardProps } from '../SectionCard/types'
import UserTypeCard from '../UserTypeCard'
import Tags from '../Tags'
import categories from '../../mocks/categories.json'
import Search from '../Search'

const tags = [
  {
    name: 'creating a wallet',
    category: 'user',
    slug: '/user'
  },
  {
    name: 'builder 101',
    category: 'creator',
    slug: '/creator'
  }
]

export default function WelcomeScreen() {
  return (
    <Section>
      <Header size="huge">Decentraland Documentation</Header>
      <p className="welcome-subheader">
        The first-ever virtual world owned by its users
      </p>
      <div className="welcome-searchbar">
        <Search />
      </div>
      <p className="welcome-description">
        This site is maintained by the Decentraland Foundation. <br />
        The content in this site is divided into sections for different user
        profiles. Choose a section that matches your needs.
      </p>
      <div className="section-cards-container">
        {categories.data.map((item: SectionCardProps, i: number) => {
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
        {tags &&
          tags.map((item, i) => {
            return (
              <Tags
                key={i}
                name={item.name}
                slug={item.slug}
                category={item.category}
              />
            )
          })}
      </div>
    </Section>
  )
}
