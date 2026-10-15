type Props = {
  data: object;
};

/** Structured data for search engines. */
export default function JsonLd({ data }: Props) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
