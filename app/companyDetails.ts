
export const companyAddress = "Lennox Mall 3rd Floor, Regus Wing, Block 10, Plot 2&3 Admiralty Way, Lekki Phase 1, Lagos, NIgeria."
export const companyAddressLat = 6.4392131825886585;
export const companyAddressLong = 3.4556269174962355;
export const gMapLink = "https://maps.app.goo.gl/vm2HSmHZFtzDmocNA"
export const partners = [
  {
    name: "tola olaosebikan",
    role: "president",
    experience: ["Genesis Group", "Coca-Cola", "UAC Foods", "Drug Houses Ltd."],
    department: "supply chain & admin",
    avatarUrl: "/avatar/tola.jpg",
    bio: ("Tola Olaosebikan is a seasoned Supply Chain & Project Management expert with over 30 of experience in the Fast-Moving Consumer Goods (FMCG) sector, pecialising, including Assistant Production Supervisor, Administrative and Operations Manager, and Chief Operating Officer, consistently driving productivity and profitability in reputable organizations in food and beverage manufacturing."),
    contact: {
      phones: ["+2348035025917"],
      companyEmail: "",
      emails: ["tola2tee@gmail.com"],
    }
  },
  {
    name: "nwuke chima",
    role: "president",
    experience: ["Apt & Synchs Limited", "Genesis Group", "Fidelity Bank Plc", "UAC Foods"],
    department: "marketing & strategy",
    avatarUrl: "/avatar/chima.jpg",
    bio: ("Nwuke Chima is a seasoned senior executive with 26+ years in Marketing / Sales gained within the Fast-Moving Consumer Goods industry(FMCG) and Banking industries. His career is marked by consistently driving substantial revenue growth through execution of cutting-edge brand turnaround strategies, building and leveraging strong teams, and boosting operational efficiency. "),
    contact: {
      phones: ["+2348033060710"],
      companyEmail: "",
      emails: ["chimameltus@yahoo.com"],
    }
  },
  {
    name: "kingsley igwebuike",
    role: "president",
    experience: ["Kevank LTD", "Conoil Plc", "UACN PLC"],
    department: "technical & technology",
    avatarUrl: "/avatar/kingsley.jpg",
    bio: ("Kingsley Igwebuike has over 34 years experience in engineering and production, with experiences cutting-across Manufacturing, Construction, hospitality, oil and gas sectors. His career started with UACN PLC as a management trainee. His passion for oil and gas experience made him to join Conoil Plc after 14 years experience with UACN PLC. He worked with team of experts consultants, contractors and other specialist to review design of retail stations and tank farm development."),
    contact: {
      phones: ["+2348033224088"],
      companyEmail: "",
      emails: ["kaycey@gmail.com"],
    }
  },
  {
    name: "james iwunze",
    role: "president",
    experience: ["ZITONIA Integrated Ventures Ltd.", "Masters Oil & Gas", "UACN PLC", "Chemiron Pharmaceuticals"],
    department: "route to market & channels",
    avatarUrl: "/avatar/james.jpg",
    bio: ("James Iwunze is a seasoned Commercial Manager with over 28 years of extensive experience spanning product & brand development, sales & distribution, and strategic management within Nigeria’s Fast-Moving Consumer Goods industry(FMCG). he progressed through key positions from Field Sales Manager to Product Group Manager, Sales Manager, Head of Marketing, and ultimately, Head of Sales overseeing NASCO Household Ltd., NASCO Foods, and NASCO Industrial Products."),
    contact: {
      phones: ["+2348033421585"],
      companyEmail: "",
      emails: ["avajjamesi247@gmail.com"],
    }
  }
]
export const companyEmail = "info@vastex.ng"
export const getPartnersPhoneNumbers = () => {
  const allNumber = <string[]>[]
  for (const partner of partners) {
    partner.contact.phones.forEach((number) => {
      allNumber.push(number)
    })
  }
  return allNumber
}
