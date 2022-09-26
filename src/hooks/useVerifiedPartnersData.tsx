import { useState, useEffect } from 'react'
import fetch from 'node-fetch'
import { VerifiedPartner, VerifiedPartnerResponse } from 'src/interfaces/VerifiedPartner'

const VERIFIED_PARTNERS_URL = 'https://admin.dclstudios.org/items/profile'

export const useVerifiedPartnersData = () => {
  const [verifiedPartners, setVerifiedPartners] = useState<VerifiedPartner[] | null>(null)
  
  const getPartners = async () => {
    const response: VerifiedPartnerResponse = await (await fetch(VERIFIED_PARTNERS_URL)).json()
    setVerifiedPartners(response.data)
  }

  useEffect(() => {
    getPartners()
  }, [])
  
  return verifiedPartners
}
