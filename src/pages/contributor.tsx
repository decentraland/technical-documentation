import * as React from 'react'
import SidebarLayout from '../components/SidebarLayout'
import { Header } from 'decentraland-ui/dist/components/Header/Header'

import { Section } from 'decentraland-ui/dist/components/Section/Section'
import SectionCard from './../components/SectionCard'
import { SectionCardProps } from '../components/UserTypeCard/types'

const featured = [
  {
    title: 'The metaverse runtime',
    img: 'image-api.svg',
    url: 'sdk/diagrams/metaverse-runtime',
    bgColor: '#AC18C9',
    description: 'Explore the platform foundations'
  },
  {
    title: 'Technical documentation',
    img: 'image-ship.svg',
    url: 'sdk/documentation/about',
    bgColor: '#00ADA5',
    description: 'Find out how we document'
  }
]

export default function IndexPage() {
  return (
    <SidebarLayout>
      <Section className="welcome-container">
        <Header>Build the Metaverse</Header>
        <p>This is a regular page</p>
        <div className="section-cards-container">
          {featured.map((item: SectionCardProps, i: number) => {
            return (
              <SectionCard
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
      </Section>
    </SidebarLayout>
  )
}
