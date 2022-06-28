import * as React from 'react'
import SidebarLayout from '../components/SidebarLayout'
import { Header } from 'decentraland-ui/dist/components/Header/Header'

import { Section } from 'decentraland-ui/dist/components/Section/Section'
import SectionCard from '../components/SectionCard'
import { SectionCardProps } from '../components/UserTypeCard/types'

const featured = [
  {
    title: 'World',
    img: 'backWorld.png',
    url: 'decentraland/introduction/',
    bgColor: '#eb495a',
    description: 'General info for players'
  },
  {
    title: 'Market',
    img: 'backMarket.png',
    url: 'market/marketplace/',
    bgColor: '##da4ee0',
    description: 'Learn how to trade exclusive tokens.'
  },
  {
    title: 'Ethereum Essentials',
    img: 'backEth.png',
    url: 'examples/get-a-wallet/',
    bgColor: '#392aa8',
    description: 'Learn how we use the blockchain'
  }
]

export default function IndexPage() {
  return (
    <SidebarLayout>
      <Section className="welcome-container">
        <Header>Decentraland documentation</Header>
        <p>Find help about the various topics in each of these sections</p>
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
