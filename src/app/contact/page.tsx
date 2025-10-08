import ContactForm from "@/components/ContactForm";

export default async function ContactPage(
  props: { searchParams: Promise<{ tour?: string }> }
) {
  const { tour } = await props.searchParams; // Next 15: await the promise
  return <ContactForm defaultTourSlug={tour ?? ""} />;
}
