import { getPartnersPhoneNumbers } from "@/app/companyDetails";
import { Phone } from "lucide-react";

function CompanyNumber(props: { phoneNumber: string }) {
  return (
    <li className="flex items-center space-x-2">
      <Phone className="h-5 w-5 text-primary" />
      <span className="text-gray-400 w-4/5">
        <a href={"tel:" + props.phoneNumber} target="_blank">
          {props.phoneNumber}
        </a>
      </span>
    </li>
  )
}
export function CompanyNumbers(props: { noStyle?: boolean }) {
  const phoneNumbers = getPartnersPhoneNumbers()
  if (props.noStyle) {
    return (
      <>
        {phoneNumbers.map(phoneNumber => <span key={phoneNumber}> {phoneNumber}</span>)}
      </>
    )
  }
  return (
    <>
      {phoneNumbers.map(phoneNumber => <CompanyNumber key={phoneNumber} phoneNumber={phoneNumber} />)}
    </>
  )
}
