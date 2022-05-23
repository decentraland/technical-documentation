import * as React from 'react'
import { useState } from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import GeneralLayout from '@components/GeneralLayout'
import * as queryString from "query-string"
import { InstantSearch } from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'
import ConnectedResultHits from '../ResultHits'
import CustomSearchBox from '../components/CustomSearchBox'

const searchClient = algoliasearch('ZBR370BA1A', '90d39c58d1ec20ab5f315750f7894b8b');


export default function ResultsPage({location}) {

  const { search } = queryString.parse(location.search);
  const [query, setQuery] = useState(search)

  const SearchTitle = ({search}) => {
    return (
      <h2>{search ? `Search results for "${search}"` : "No query was provided"}</h2>
    )
  }

  return (
    <GeneralLayout>
      <InstantSearch searchClient={searchClient} indexName="DCL_DOCS" searchState={{query}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
          <SearchTitle search={query} />
          <CustomSearchBox getQuery={setQuery}/>
        </div>
        {query && <ConnectedResultHits />}
      </InstantSearch>
    </GeneralLayout>
  )
}
