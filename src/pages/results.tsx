import * as React from 'react'
import { useState } from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import GeneralLayout from '@components/GeneralLayout'
import * as queryString from "query-string";
import { InstantSearch, Hits, SearchBox, Snippet} from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import { Link } from 'gatsby'

const searchClient = algoliasearch('ZBR370BA1A', '90d39c58d1ec20ab5f315750f7894b8b');


export default function ResultsPage({location}) {

  const { search } = queryString.parse(location.search);
  const [query, setQuery] = useState(search)

  const Hit = ({ hit }) => {
    console.log(hit, 123)
    return (
      <div className="hit-result-container">
        <Link to={hit.frontmatter.slug}>
          <h4>The title</h4>
          <Snippet attribute="html" hit={hit} />
        </Link>
      </div>
    )}

  const SearchTitle = () => {
    return (
      <h2>{search ? `Search results for "${search}"` : "No query was provided"}</h2>
    )
  }

  return (
    <GeneralLayout>
      <SearchTitle />
      <InstantSearch searchClient={searchClient} indexName="DCL_DOCS" searchState={{query}}>
        <SearchBox onChange={(e) => setQuery(e.target.value)}/>
        {query && <Hits hitComponent={Hit} />}
      </InstantSearch>
    </GeneralLayout>
  )
}
