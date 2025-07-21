import Layout from "../components/Layout"
export default function Stats() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Statystyki Bezpieczeństwa</h2>
      <ul className="space-y-2 list-disc pl-5">
        <li>Około 80% wycieków danych wiąże się z użyciem słabego lub powtarzanego hasła.</li>
        <li>2FA obniża ryzyko ataku o ponad 90%.</li>
        {/* Dodaj dane statystyczne, wykresy można dodać z zewnętrznych bibliotek */}
      </ul>
    </Layout>
  )
}
