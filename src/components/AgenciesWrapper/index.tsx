import React, { useEffect } from 'react'
import data from './../../configurable-content/partners.yml'
import icons from '/static/icons/icons.json'
import './style.scss'
import formatPaths from 'utils/formatPaths'
import { useVerifiedPartnersData } from '../../hooks/useVerifiedPartnersData'

function Icon({ path }) {
  return <img src={`data:image/svg+xml;utf8,${encodeURIComponent(path)}`} />
}

export default function Agencies() {
  const partners = useVerifiedPartnersData()
  useEffect(() => {
    console.log(partners)
  }, [partners])

  return (
    <div>
      <h3>Verified partners</h3>
      {data &&
        data.map((partner, i) => {
          const image = partner.image.substring(1)
          return (
            <div className="providerContainer" key={i}>
              <div
                className="providerImage"
                style={{
                  background: `url(${formatPaths(image)})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <a href={partner.default_link} target="_blank"></a>
              </div>
              <div className="textContainer">
                <h3 style={{ margin: '0', marginBottom: '0.2rem' }}>
                  <a href={partner.default_link} target="_blank">
                    {partner.name}
                  </a>
                </h3>
                <div className="meta">
                  <div className="tags">
                    {partner.tags.map((tag, i) => {
                      return (
                        <span className={`tag tag-${tag.replace(' ', '-').toLowerCase()}`} key={i}>
                          {tag}
                        </span>
                      )
                    })}
                  </div>
                  <div className="links">
                    {partner.website && (
                      <a href={partner.website} title="website" className="social-icon">
                        <Icon path={icons.website} />
                      </a>
                    )}
                    {partner.email && (
                      <a href={`mailto:${partner.email}`} title="email" className="social-icon">
                        <Icon path={icons.email} />
                      </a>
                    )}
                    {partner.discord && (
                      <a href={partner.discord} title="discord" className="social-icon">
                        <Icon path={icons.discord} />
                      </a>
                    )}
                    {partner.twitter && (
                      <a href={partner.twitter} title="twitter" className="social-icon">
                        <Icon path={icons.twitter} />
                      </a>
                    )}
                    {partner.instagram && (
                      <a href={partner.instagram} title="instagram" className="social-icon">
                        <Icon path={icons.instagram} />
                      </a>
                    )}
                    {partner.linkedin && (
                      <a href={partner.linkedin} title="linkedin" className="social-icon">
                        <Icon path={icons.linkedin} />
                      </a>
                    )}
                    {partner.vimeo && (
                      <a href={partner.vimeo} title="vimeo" className="social-icon">
                        <Icon path={icons.vimeo} />
                      </a>
                    )}
                    {partner.soundcloud && (
                      <a href={partner.soundcloud} title="soundcloud" className="social-icon">
                        <Icon path={icons.soundcloud} />
                      </a>
                    )}
                  </div>
                </div>
                <input type="checkbox" id={`partner-${partner.partnerId}`} className="read-more-state" />
                <p>{partner.description}</p>
                <table>
                  <tr className="region" data-continent={partner.region}>
                    <td>Region</td>
                    <td>{partner.location}</td>
                  </tr>
                  <tr>
                    <td>Team size</td>
                    <td>{partner.team_size}</td>
                  </tr>
                  <tr>
                    <td>Languages</td>
                    <td>
                      {partner.languages &&
                        partner.languages.map((language, i) => {
                          return <span key={i}>{(i ? ', ' : '') + language}</span>
                        })}
                    </td>
                  </tr>
                  <tr>
                    <td>Payment methods</td>
                    <td>
                      {partner.languages &&
                        partner.payments.map((payment, i) => {
                          return <span key={i}>{(i ? ', ' : '') + payment}</span>
                        })}
                    </td>
                  </tr>
                </table>
                <label className="read-more-trigger" for={`partner-${partner.partnerId}`}></label>
              </div>
            </div>
          )
        })}
    </div>
  )
}
