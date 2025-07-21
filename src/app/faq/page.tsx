import Layout from "../components/Layout"
export default function FAQ() {
  const faqs = [
    { q: "Jak działa generator haseł?", a: "Hasła generowane są lokalnie, nigdy nie opuszczają Twojego urządzenia." },
    { q: "Czy hasła są bezpieczne?", a: "Tak, każda kombinacja jest unikalna i tworzona zgodnie z najnowszymi standardami bezpieczeństwa." }
    // ...dodaj dalsze pytania
  ]
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">FAQ Generatora Haseł</h2>
      <ul className="space-y-4">
        {faqs.map(({q, a}, i) =>
          <li key={i} className="bg-gray-50 p-4 rounded-xl shadow">
            <strong>{q}</strong>
            <div className="text-gray-700">{a}</div>
          </li>
        )}
      </ul>
    </Layout>
  )
}
