import React from 'react'

export default function AgenciesServices() {
  return (
    <>
      <h3>Provided Services</h3>
      <table className="general-table">
        <tr>
          <td className="service">
            <span className="tag tag-wearable-design">Wearable Design</span>
          </td>
          <td>
            3D Modeling skills to produce a wearable under the acceptance criteria of Decentraland's DAO Curators
            Committee. Such us hats, t-shirts and full-body skins.
          </td>
        </tr>
        <tr>
          <td className="service">
            <span className="tag tag-architecture">Architecture</span>
          </td>
          <td>
            3D Modeling and SDK Development skills to create objects and spaces ready to be placed in your Decentraland
            scene. Such as art galeries and parkour courses.
          </td>
        </tr>
        <tr>
          <td className="service">
            <span className="tag tag-event-production">Event Production</span>
          </td>
          <td>
            A company of producers that can help you set up an event in a DCL venue. They can help find a venue for your
            needs, customizing the scene, promoting the event, doing a live-stream and more.
          </td>
        </tr>
        <tr>
          <td className="service">
            <span className="tag tag-consulting">Consulting</span>
          </td>
          <td>
            Studios that will guide you through the whole process, from sketching ideas to launching your campaign to
            your audience.
          </td>
        </tr>
        <tr>
          <td className="service">
            <span className="tag tag-land-rental">Land Rental</span>
          </td>
          <td>Land owners offering a place to locate your experience in Decentraland's Genesis City.</td>
        </tr>
      </table>
    </>
  )
}
