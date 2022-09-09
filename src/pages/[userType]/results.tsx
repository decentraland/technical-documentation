import * as React from 'react'
import { useState } from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import * as queryString from 'query-string'
import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import ConnectedResultHits from '../../components/ResultHits'
import './style.scss'
import SidebarLayout from '../../components/SidebarLayout'
import CustomSearchBox from '../../components/CustomSearchBox'

const searchClient = algoliasearch('ZBR370BA1A', '90d39c58d1ec20ab5f315750f7894b8b')

export default function ResultsPage({ location }) {
  const { search } = queryString.parse(location.search)
  const [query, setQuery] = useState(search)

  const SearchTitle = ({ search }) => {
    return <h2>{search ? `Search results for "${search}"` : 'No query was provided'}</h2>
  }

  const customSearch = <CustomSearchBox getQuery={setQuery} />

  return (
    <InstantSearch searchClient={searchClient} indexName="DCL_DOCS" searchState={{ query }}>
      <SidebarLayout customSearch={customSearch}>
        <div className="category-results-header">
          <SearchTitle search={query} />
          {query && <ConnectedResultHits />}
        </div>
      </SidebarLayout>
    </InstantSearch>
  )
}
