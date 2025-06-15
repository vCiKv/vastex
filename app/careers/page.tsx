import PageHeader from "@/components/page-header";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function CareersPage() {
  return (
    <Section className="container px-4 md:px-6 min-h-[70vh]">
      <PageHeader
        pageTitle="Careers"
        imageUrl="/imgs/careers-hero"
        breadcrumb={["careers"]}
      />
      <div className="inline-block rounded-xl bg-blue-100 px-3 py-1 text-sm text-primary">Help Us</div>
      <h2>Ready to Make an Impact?</h2>
      <p className="pb-4">
        {"We're"} always looking for talented individuals to join our team. If you {"don't"} see a position that fits your skills, send us your resume anyway!
      </p>
      <Button size="lg" disabled>
        Apply Now
        <CheckCircle className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-sm text-destructive font-light">No Open Positions Currently</p>
    </Section>
  )
}