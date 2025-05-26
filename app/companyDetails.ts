
export const companyAddress = "Lennox Mall 3rd Floor, Regus Wing, Block 10, Plot 2&3 Admiralty Way, Lekki Phase 1, Lagos, NIgeria."
export const companyAddressLat = 6.4392131825886585;
export const companyAddressLong = 3.4556269174962355;
export const gMapLink = "https://maps.app.goo.gl/vm2HSmHZFtzDmocNA"
export const partners = [
  {
    name: "tola olaosebikan",
    role: "president",
    department: "supply chain & admin",
    avatarUrl: "/placeholder.svg?width=200&height=200",
    bio: "",
    contact: {
      phones: ["+2348035025917"],
      companyEmail: "",
      emails: ["tola2tee@gmail.com"],
    }
  },
  {
    name: "nwuke chima",
    role: "president",
    department: "marketing & strategy",
    avatarUrl: "/placeholder.svg?width=200&height=200",
    bio: "",
    contact: {
      phones: ["+2348033060710"],
      companyEmail: "",
      emails: ["chimameltus@yahoo.com"],
    }
  },
  {
    name: "kingsley igwebuike",
    role: "president",
    department: "technical & technology",
    avatarUrl: "/placeholder.svg?width=200&height=200",
    bio: "",
    contact: {
      phones: ["+2348033224088"],
      companyEmail: "",
      emails: ["kaycey@gmail.com"],
    }
  },
  {
    name: "james iwunze",
    role: "president",
    department: "route to market & channels",
    avatarUrl: "/placeholder.svg?width=200&height=200",
    bio: "",
    contact: {
      phones: ["+2348033421585"],
      companyEmail: "",
      emails: ["avajjamesi247@gmail.com"],
    }
  }
]
export const companyEmail = "info@vastex.com"
export const getPartnersPhoneNumbers = () => {
  const allNumber = <string[]>[]
  for (const partner of partners) {
    partner.contact.phones.forEach((number) => {
      allNumber.push(number)
    })
  }
  return allNumber
}
