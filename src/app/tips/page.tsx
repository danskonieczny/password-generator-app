import Layout from "../components/Layout"
export default function Tips() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Szybkie wskazówki bezpieczeństwa</h2>
      <ul className="space-y-3 list-disc pl-5">
        <li>Używaj różnych haseł do różnych serwisów.</li>
        <li>Nie udostępniaj swoich haseł.</li>
        {/* Dodaj więcej wskazówek */}
      </ul>
    </Layout>
  )
}
